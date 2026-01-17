# Lakecity Design - Web Design & Development Studio

## Overview

Lakecity Design is a web design and development studio website built with React, TypeScript, and Vite. The site serves as a marketing and lead generation platform for a web design agency based in Udaipur, Rajasthan, India. It specializes in business websites, e-commerce stores, landing pages, and UI/UX design. The website features a dark sophisticated theme with coral accents, fixed-price service packages, WhatsApp-based lead capture, and comprehensive SEO optimization for Google Ads.

## Recent Updates
- Ultra-dark theme with electric teal accent (pure black background)
- Extended scroll experience (1400vh) with no overlapping sections
- Maximalist design with info boxes, stat cards, and feature sections
- Stats section after hero with icons
- Dedicated pricing cards between design galleries
- Feature highlights and value propositions throughout
- 40 design mockups across Web, E-Commerce, and Social Media sections
- Large typography and premium visual presentation

## User Preferences

- Preferred communication style: Simple, everyday language
- No names on contact information (just phone numbers)
- Focus on web design and development services
- Fixed-price "onwards" pricing strategy

## SEO & Google Ads Setup

### SEO Features Implemented
- Comprehensive meta tags (title, description, keywords)
- Open Graph and Twitter Card tags for social sharing
- Geo tags for local SEO (Udaipur, Rajasthan)
- Structured Data (JSON-LD) for:
  - ProfessionalService (local business)
  - FAQPage (rich results)
  - Organization
  - Service offerings with pricing
- sitemap.xml and robots.txt configured
- Semantic HTML structure
- Mobile-first responsive design

### Google Ads Ready
- Placeholder code in index.html for Google Ads conversion tracking
- Placeholder for Google Analytics 4
- Clear CTAs optimized for conversions
- Landing page follows Google Ads best practices:
  - Fast loading (Vite-optimized)
  - Clear value proposition above the fold
  - Prominent contact buttons
  - Trust signals (testimonials, badges)

### To Activate Google Ads Tracking
1. Get your Google Ads Conversion ID from Google Ads
2. Uncomment the tracking code in index.html
3. Replace `AW-YOUR_CONVERSION_ID` with your actual ID
4. For GA4, replace `G-XXXXXXXXXX` with your GA4 Measurement ID

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design tokens
- **Component Library**: shadcn/ui components on Radix UI
- **Routing**: React Router DOM
- **State Management**: React hooks for local state

### Design System
- **Typography**: Syne (display) and Inter (body) from Google Fonts
- **Color Scheme**: Dark background with sage green primary (#158 40% 52%)
- **Animation Library**: Framer Motion for smooth scroll animations
- **Component Variants**: Multiple button styles (hero, heroOutline, default)

### Page Structure (Single Page Experience)
1. Navbar (fixed, scroll-aware with extra-large logo h-16/h-20)
2. Hero (fixed parallax, "Digital Experiences" with blur/scale on scroll)
3. Web Design Layer (10 designs with sticky scroll animation)
4. E-Commerce Layer (10 designs with sticky scroll animation)
5. Social Media Layer (20 designs with sticky scroll animation)
6. Services (6 packages with pricing)
7. About (stats, value propositions, USPs)
8. Contact (WhatsApp-focused CTA)
9. Footer
10. Lightbox (Apple-style side-to-center animation)

### Services Offered
- Business Websites (₹25k onwards)
- E-Commerce Stores (₹40k onwards)
- Landing Pages (₹15k onwards)
- UI/UX Design (₹20k onwards)
- Social Media Management (₹15k onwards)
- SEO Optimization (₹10k onwards)

### Contact Information
- Phone 1: +91-9675624255
- Phone 2: +91-8875584397
- WhatsApp integration for all contact forms

### Path Aliases
`@/*` points to `./src/*`

## External Dependencies

### UI Libraries
- Radix UI, shadcn/ui, Lucide React
- class-variance-authority, clsx, tailwind-merge

### Form & Validation
- React Hook Form, Zod

### Utilities
- date-fns, embla-carousel-react, sonner

### Third-Party Services
- WhatsApp Business (wa.me links)
- Razorpay/UPI (payment badges)
- Google Analytics 4 (placeholder ready)
- Google Ads (placeholder ready)
