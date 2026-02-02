import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'
import { StickyCTA } from '@/components/sections/sticky-cta'
import { generateOrganizationSchema, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/structured-data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lakecity Design | Project Completion Agency',
    template: '%s | Lakecity Design',
  },
  description: 'Project completion agency taking your vision to reality. Complete project delivery, on time, every time. Based in Udaipur, serving clients across India.',
  keywords: ['web design', 'e-commerce', 'social media management', 'UI/UX design', 'digital agency', 'Udaipur', 'India'],
  authors: [{ name: 'Lakecity Design' }],
  creator: 'Lakecity Design',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lakecitydesign.com',
    siteName: 'Lakecity Design',
    title: 'Lakecity Design | Digital Excellence for Ambitious Brands',
    description: 'Premium web design, e-commerce solutions, and social media management for established businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakecity Design | Digital Excellence for Ambitious Brands',
    description: 'Premium web design, e-commerce solutions, and social media management for established businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const serviceSchema = generateServiceSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA />
        <Toaster />
      </body>
    </html>
  )
}
