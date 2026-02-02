import { NextResponse } from 'next/server'
import { z } from 'zod'

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

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()

    // Sanitize all string inputs
    const sanitizedBody = {
      ...body,
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      company: sanitizeInput(body.company || ''),
      message: body.message ? sanitizeInput(body.message) : undefined,
    }

    // Validate with Zod
    const validatedData = contactSchema.parse(sanitizedBody)

    // Log submission (in production, send to email service or database)
    console.log('Contact form submission:', {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In production, integrate with:
    // - Resend/SendGrid for emails
    // - Database for storing submissions
    // - Slack/Discord for team notifications
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'contact@lakecitydesign.com',
      to: 'hello@lakecitydesign.com',
      subject: `New Contact Form: ${validatedData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ''}
      `,
    })
    */

    return NextResponse.json(
      { message: 'Thank you! We\'ll get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    // Log error (use proper error tracking in production)
    console.error('Contact form error:', error)

    // Don't expose internal errors to client
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
