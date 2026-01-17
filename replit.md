# Lakecity Design - Web Design & Development Studio

## Overview

Lakecity Design is a web design and development studio website built with React, TypeScript, and Vite. The site serves as a marketing and lead generation platform for a web design agency based in Udaipur, Rajasthan, India. It specializes in business websites, e-commerce stores, landing pages, and UI/UX design. The website features a light cream glassmorphism theme with coral accents, fixed-price service packages, Instagram-based communication, and comprehensive SEO optimization for Google Ads.

## Recent Updates (January 2026)
- **Multi-page structure**: Separated into Home (branding) and Packages (pricing/portfolio) pages
- **Instagram-only contact**: Removed WhatsApp and phone numbers, Instagram is the sole communication channel
- **Simplified homepage**: Focus on branding, stats, about section, and CTAs to explore services
- **Dedicated Packages page**: All pricing, comparison tables, and portfolio galleries in one place
- **Updated navigation**: Services link now goes to /packages route

## Performance & Stability Improvements (January 2026)
- Fixed CSS @import order (must precede @tailwind directives)
- Added lazy loading (loading="lazy") to all 40 design mockup images
- Replaced heavy Framer Motion animation variants with lightweight CSS transitions
- Converted motion.section and motion.div wrappers to regular HTML elements
- Simplified hover effects using CSS (hover:scale-[1.02], hover:-translate-y-1, transition-transform duration-300)
- Removed complex scroll-based animations causing performance overhead
- Fixed scroll offset calculation warning by using window-based scroll
- Added overflow-x-hidden to prevent horizontal scroll issues
- Removed unused animation variant declarations
- Kept essential Framer Motion only for hero parallax and lightbox animations

## User Preferences

- Preferred communication style: Simple, everyday language
- No names or phone numbers displayed (Instagram only)
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
- **Routing**: React Router DOM (multi-page)
- **State Management**: React hooks for local state

### Design System
- **Typography**: Syne (display) and Inter (body) from Google Fonts
- **Color Scheme**: Light cream background with coral/salmon primary (15 85% 55%)
- **Animation Library**: CSS transitions for hover effects, minimal Framer Motion for hero only
- **Component Variants**: Multiple button styles (hero, heroOutline, default)

### Page Structure

#### Homepage (/)
1. Navbar (fixed, scroll-aware with extra-large logo h-20/h-28)
2. Hero (fixed parallax, "Digital Experiences" with scale/fade on scroll)
3. Stats Section (4 key metrics)
4. Services Overview (6 cards without pricing)
5. Features (4 value propositions)
6. About (stats, tags, company info)
7. Contact CTA (Instagram-based)
8. Footer

#### Packages Page (/packages)
1. Navbar
2. All Services with Pricing (6 packages)
3. Web Design Gallery (15 designs with lightbox)
4. Website Comparison Table
5. E-Commerce Gallery (5 designs with lightbox)
6. E-Commerce Comparison Table
7. Social Media Gallery (20 designs with lightbox)
8. Social Media Comparison Table
9. Features
10. CTA Section
11. Footer

### Services Offered
- Business Websites (₹25k onwards)
- E-Commerce Stores (₹40k onwards)
- Landing Pages (₹15k onwards)
- UI/UX Design (₹20k onwards)
- Social Media Management (₹15k onwards)
- SEO Optimization (₹10k onwards)

### Contact Information
- Instagram: @lakecity.designs
- Location: Udaipur, Rajasthan, India

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
- Instagram (@lakecity.designs)
- Razorpay/UPI (payment badges)
- Google Analytics 4 (placeholder ready)
- Google Ads (placeholder ready)
