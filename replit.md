# Lakecity Designs - Creative Studio Website

## Overview

Lakecity Designs is a creative design studio website built with React, TypeScript, and Vite. The site serves as a marketing and lead generation platform for a design agency based in Udaipur, India that specializes in wedding stationery, investor pitch decks, and event printables. The website features a dark sophisticated theme with coral accents, fixed-price service packages, and conversion-focused elements like WhatsApp integration and testimonial rotators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack React Query for server state, React hooks for local state

### Design System
- **Typography**: Syne (display font) and Inter (body font) from Google Fonts
- **Color Scheme**: Dark background (HSL 240 6% 7%) with electric coral primary (HSL 12 90% 62%)
- **Custom CSS Variables**: Gradients, shadows, and transitions defined in index.css
- **Component Variants**: Button variants include hero, heroOutline, outline, ghost, and default styles

### Page Structure
The single-page application follows a section-based layout:
1. Navbar (fixed, with scroll-aware styling)
2. Hero (value proposition with dual CTAs)
3. Testimonials (auto-rotating social proof strip)
4. HowItWorks (3-step process graphic)
5. Services (fixed-price packages with SEO micro-copy)
6. Work (capabilities showcase)
7. About (company story)
8. Contact (WhatsApp-integrated form)
9. Footer (trust badges and quick links)

### SEO Implementation
- React Helmet Async for meta tag management
- Semantic HTML structure
- SEO micro-copy embedded in service packages
- Canonical URL and Open Graph tags configured

### Path Aliases
The project uses `@/*` alias pointing to `./src/*` for clean imports.

## External Dependencies

### UI Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, accordion, tabs, etc.)
- **shadcn/ui**: Pre-built component layer on top of Radix
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Utility class handling

### Form & Data
- **React Hook Form**: Form state management with @hookform/resolvers
- **Zod**: Schema validation (via resolvers)
- **TanStack React Query**: Async state management

### Utilities
- **date-fns**: Date formatting
- **embla-carousel-react**: Carousel functionality
- **input-otp**: OTP input component
- **react-day-picker**: Calendar/date picker
- **vaul**: Drawer component
- **sonner**: Toast notifications
- **next-themes**: Theme management (used for sonner integration)

### Third-Party Services (Planned/Mentioned)
- **WhatsApp Business**: Primary contact method (wa.me links)
- **Calendly**: Booking integration (mentioned in requirements)
- **Razorpay/UPI**: Payment processing (trust badges in footer)
- **Google Analytics 4**: Click tracking (mentioned in requirements)

### Development Tools
- **Lovable Tagger**: Component tagging for Lovable.dev integration
- **ESLint**: Linting with TypeScript and React plugins
- **PostCSS/Autoprefixer**: CSS processing