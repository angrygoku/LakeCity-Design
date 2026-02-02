import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/about-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lakecity Design - a digital agency based in Udaipur, serving clients across India.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  )
}
