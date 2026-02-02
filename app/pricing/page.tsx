import type { Metadata } from 'next'
import { PricingSection } from '@/components/sections/pricing-section'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for web design, e-commerce, and social media management services.',
}

export default function PricingPage() {
  return (
    <div className="pt-24">
      <PricingSection />
    </div>
  )
}
