import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Globe, ShoppingCart, Share2 } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/constants'

const iconMap = {
  Globe,
  ShoppingCart,
  Share2,
}

interface ServiceDetailProps {
  service: (typeof services)[0]
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {service.longDescription || service.description}
            </p>
            <Link href="#cta">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {service.features && service.features.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-12 text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-accent/50 transition-colors bg-card"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              What&apos;s Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-accent/50 transition-colors bg-card"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center bg-slate-900 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let&apos;s discuss how we can help grow your business.
            </p>
            <Link href="/#cta">
              <Button size="lg" className="bg-accent hover:bg-accent/90 rounded-full">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
