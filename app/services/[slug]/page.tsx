import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/constants'
import { ServiceDetail } from '@/components/services/service-detail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-24">
      <ServiceDetail service={service} />
    </div>
  )
}
