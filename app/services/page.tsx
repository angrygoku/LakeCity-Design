import type { Metadata } from 'next'
import { Services } from '@/components/sections/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-service digital partner for web design, e-commerce, and social media management.',
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <Services />
    </div>
  )
}
