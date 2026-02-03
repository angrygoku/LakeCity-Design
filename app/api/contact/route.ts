import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'contact@lakecitydesign.com'
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Lakecity Design <onboarding@resend.dev>'

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
    return true
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return false
  }

  record.count++
  return true
}

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  company: z.string().min(2, 'Company name is required').max(200),
  budget: z.enum(['under-50k', '50k-1l', '1l-3l', '3l-plus'], {
    errorMap: () => ({ message: 'Please select a valid budget range' }),
  }),
  projectType: z.enum(
    ['web-design', 'e-commerce', 'social-media', 'ui-ux', 'landing-page', 'other'],
    {
      errorMap: () => ({ message: 'Please select a valid project type' }),
    }
  ),
  message: z.string().max(2000).optional(),
})

// Enhanced sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/expression\(/gi, '')
    .trim()
    .slice(0, 2000) // Max length protection
}

// Escape for safe use in HTML email body (never expose raw user input)
function escapeHtml(text: string): string {
  if (typeof text !== 'string') return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const MAX_BODY_BYTES = 10 * 1024 // 10KB

// Only allow POST; reject other methods to avoid info disclosure
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function POST(request: Request) {
  try {
    // Require JSON content type to avoid injection
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid request. Use application/json.' },
        { status: 415 }
      )
    }

    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = (forwarded ? forwarded.split(',')[0].trim() : 'unknown') || 'unknown'

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Enforce body size limit
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: 'Request too large.' },
        { status: 413 }
      )
    }

    // Parse and validate request body
    const rawBody = await request.text()
    if (rawBody.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: 'Request too large.' },
        { status: 413 }
      )
    }
    let body: unknown
    try {
      body = JSON.parse(rawBody)
    } catch {
      return NextResponse.json(
        { error: 'Invalid form data.' },
        { status: 400 }
      )
    }
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { error: 'Invalid form data.' },
        { status: 400 }
      )
    }

    const b = body as Record<string, unknown>
    // Sanitize all string inputs
    const sanitizedBody = {
      ...b,
      name: sanitizeInput(typeof b.name === 'string' ? b.name : ''),
      email: sanitizeInput(typeof b.email === 'string' ? b.email : ''),
      company: sanitizeInput(typeof b.company === 'string' ? b.company : ''),
      message: typeof b.message === 'string' ? sanitizeInput(b.message) : undefined,
    }

    // Validate with Zod
    const validatedData = contactSchema.parse(sanitizedBody)

    // Send email to contact@lakecitydesign.com (only if API key is set; never expose key or failure to client)
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey && typeof apiKey === 'string' && apiKey.length > 0) {
      try {
        const resend = new Resend(apiKey)
        const budgetLabel = validatedData.budget.replace(/-/g, '–')
        const projectLabel = validatedData.projectType.replace(/-/g, ' ')
        const htmlMessage = validatedData.message
          ? `<p><strong>Message:</strong></p><p>${escapeHtml(validatedData.message)}</p>`
          : ''
        await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: CONTACT_EMAIL,
          replyTo: validatedData.email,
          subject: `[Lakecity] New enquiry: ${projectLabel} – ${validatedData.company}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(validatedData.company)}</p>
            <p><strong>Budget:</strong> ${escapeHtml(budgetLabel)}</p>
            <p><strong>Project type:</strong> ${escapeHtml(projectLabel)}</p>
            ${htmlMessage}
            <p><em>Submitted from IP: ${escapeHtml(ip)} at ${new Date().toISOString()}</em></p>
          `,
        })
      } catch (emailError) {
        // Log server-side only; never expose to client
        console.error('Contact email send failed:', emailError instanceof Error ? emailError.message : 'Unknown error')
        // Still return success so we don't reveal that email is configured
      }
    }

    return NextResponse.json(
      { message: 'Thank you! We\'ll get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    // Handle validation errors - do not expose field details to client (security)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your entries and try again.' },
        { status: 400 }
      )
    }

    // Log error server-side only (never expose to client)
    console.error('Contact form error:', error instanceof Error ? error.message : 'Unknown error')

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// Clean up rate limit map periodically (in production, use Redis TTL)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip)
      }
    }
  }, 60 * 1000) // Clean every minute
}
