# Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Create `.env.local` with:
```env
NEXT_PUBLIC_SITE_URL=https://lakecitydesign.com
```

### 2. Update Content
- [ ] Replace placeholder images in `/public/images/`
- [ ] Update contact information in `lib/constants.ts`
- [ ] Add real case studies and testimonials
- [ ] Update client logos in Trust Signals section
- [ ] Add actual phone number and email

### 3. Configure Form Submission
Update `app/api/contact/route.ts` to integrate with:
- Resend (recommended)
- SendGrid
- Nodemailer with SMTP
- Formspree (no backend needed)

Example with Resend:
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@lakecitydesign.com',
  to: 'hello@lakecitydesign.com',
  subject: `New Contact: ${validatedData.projectType}`,
  html: `<p>Name: ${validatedData.name}</p>...`
})
```

### 4. Analytics Setup
Add Google Analytics 4 or Plausible:
```tsx
// app/layout.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 5. SEO Verification
- [ ] Update `app/sitemap.ts` with actual domain
- [ ] Update `app/robots.ts` with actual domain
- [ ] Add Google Search Console verification
- [ ] Add Open Graph images (1200x630) for each page
- [ ] Test structured data with Google Rich Results Test

### 6. Performance Optimization
- [ ] Run `npm run build` and check for errors
- [ ] Test Lighthouse scores (target: 95+)
- [ ] Optimize images (WebP/AVIF format)
- [ ] Enable compression on hosting platform
- [ ] Set up CDN if needed

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Self-Hosted
1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 for process management
4. Set up reverse proxy (Nginx)

## Post-Deployment

1. Test all pages and forms
2. Verify SSL certificate
3. Set up monitoring (Sentry, LogRocket)
4. Configure backups
5. Set up domain email forwarding
