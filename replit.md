# Lakecity Design - Web Design & Development Studio

## Overview

Lakecity Design is a web design and development studio website built with React, TypeScript, and Vite. The site serves as a marketing and lead generation platform for a web design agency based in Udaipur, Rajasthan, India. It specializes in business websites, e-commerce stores, landing pages, and UI/UX design. The website features a dark sophisticated theme with coral accents, fixed-price service packages, WhatsApp-based lead capture, and comprehensive SEO optimization for Google Ads.

## Recent Updates
- Light cream theme with warm coral accent color
- Glassmorphism design with frosted glass cards and boxes
- Static background images (geometric shapes and waves) - simplified from animated
- All buttons and footer rounded with pill shapes
- Square image grid layout (aspect-square)
- Reduced spacing between sections for tighter layout
- Service comparison tables for Website, E-Commerce, and Social Media packages
- Bigger logo (h-20 md:h-28)
- 40 design mockups across Web, E-Commerce, and Social Media sections
- Mobile-friendly pricing tables converted to card layout
- Improved mobile typography and spacing throughout

## Performance & Stability Improvements (January 2026)
- Fixed CSS @import order (must precede @tailwind directives)
- Added lazy loading (loading="lazy") to all 40 design mockup images
- Replaced heavy Framer Motion animation variants with lightweight CSS transitions
- Converted motion.section and motion.div wrappers to regular HTML elements
- Simplified hover effects using CSS (hover:scale-[1.02], hover:-translate-y-1, transition-transform duration-300)
- Removed complex scroll-based animations causing performance overhead
- Fixed scroll offset calculation warning by using window-based scroll
- Added overflow-x-hidden to prevent horizontal scroll issues
- Removed unused animation variant declarations (sectionVariants, fadeUpVariant, etc.)
- Kept essential Framer Motion only for hero parallax and lightbox animations

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
- **Color Scheme**: Light cream background with coral/salmon primary (15 85% 55%)
- **Animation Library**: CSS transitions for hover effects, minimal Framer Motion for hero only
- **Component Variants**: Multiple button styles (hero, heroOutline, default)

### Page Structure (Single Page Experience)
1. Navbar (fixed, scroll-aware with extra-large logo h-20/h-28)
2. Hero (fixed parallax, "Digital Experiences" with scale/fade on scroll)
3. Stats Section (4 key metrics with hover effects)
4. Web Design Gallery (10 designs with lazy loading)
5. E-Commerce Gallery (10 designs with lazy loading)
6. Social Media Gallery (20 designs with lazy loading)
7. Services (6 packages with pricing)
8. Package Comparison Tables (Website, E-Commerce, Social Media)
9. About (stats, value propositions, USPs)
10. Contact (WhatsApp-focused CTA)
11. Footer
12. Lightbox (Apple-style side-to-center animation)

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
