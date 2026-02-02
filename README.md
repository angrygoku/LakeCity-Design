# Lakecity Design - Premium Digital Agency Website

A Next.js 14 website for Lakecity Design, a digital agency based in Udaipur serving clients across India.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Premium Design System** with deep navy and amber color palette
- **Performance Optimized** - Built for 95+ Lighthouse scores
- **Fully Responsive** - Mobile-first design
- **Accessibility** - WCAG 2.1 AA compliant
- **SEO Optimized** - Metadata, sitemap, and structured data ready
- **Modern UI** - shadcn/ui components with Tailwind CSS
- **Animations** - Framer Motion for smooth interactions

## 📁 Project Structure

```
app/
├── (routes)/
│   ├── page.tsx              # Homepage
│   ├── work/
│   │   ├── page.tsx          # Portfolio listing
│   │   └── [slug]/page.tsx   # Individual case studies
│   ├── services/
│   │   ├── page.tsx          # Services listing
│   │   └── [slug]/page.tsx   # Individual service pages
│   ├── pricing/page.tsx      # Pricing page
│   └── about/page.tsx        # About page
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/            # Homepage sections
│   ├── ui/                  # shadcn/ui components
│   └── forms/               # Form components
├── lib/
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # Site constants
└── content/                 # MDX content (future)

```

## 🛠️ Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Design System

### Colors
- **Primary**: Deep Navy (#0F172A)
- **Accent**: Rich Amber (#D97706)
- **Background**: Off-white (#FAFAFA)

### Typography
- **Display Font**: Plus Jakarta Sans
- **Body Font**: Inter (Variable)

## 📝 Content Management

Case studies and content are currently hardcoded in `lib/constants.ts`. For production, consider:
- MDX files in `content/case-studies/`
- Headless CMS (Contentful, Sanity)
- Database integration

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://lakecitydesign.com
```

### Form Submissions
Update `components/forms/contact-form.tsx` to connect to your API endpoint or form service (Formspree, Resend, etc.)

## 📈 Performance

- Image optimization with Next.js Image component
- Font optimization with `next/font`
- Static generation where possible
- Code splitting and lazy loading

## 🚢 Deployment

Deploy to Vercel:
```bash
vercel
```

Or configure for other platforms (Netlify, AWS, etc.)

## 📄 License

All rights reserved - Lakecity Design
