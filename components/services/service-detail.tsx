import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Globe, ShoppingCart, Share2 } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/constants'
import { ProofBadge } from '@/components/services/proof-badge'
import { serviceEvidence } from '@/lib/service-evidence'

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
  const evidence = serviceEvidence[service.slug]
  const included = service.deliverables.slice(0, 4)
  const optional = service.deliverables.slice(4, 6)
  const outOfScope = ['Paid media ad spend', 'Third-party software license costs']

  return (
    <div className="pb-32">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {service.longDescription || service.description}
            </p>
            {evidence && (
              <p className="text-sm text-muted-foreground mb-6">
                Sample size: {evidence.sampleSize} projects • Data coverage: {evidence.dataCoverage}
              </p>
            )}
            <Link href="#cta">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {evidence && (
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-8 text-center">Service Benchmarks</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground mb-1">Typical Impact Range</p>
                  <p className="text-2xl font-display font-bold">{evidence.typicalImpact}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground mb-1">Median Timeline</p>
                  <p className="text-2xl font-display font-bold">{evidence.medianTimeline}</p>
                  <p className="text-xs text-muted-foreground">P75: {evidence.p75Timeline}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground mb-1">Best-fit Engagement</p>
                  <p className="text-sm">{evidence.bestFit}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {evidence.kpis.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <ProofBadge confidence={metric.confidence} />
                    </div>
                    <p className="text-2xl font-display font-bold mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.period}</p>
                    <p className="text-xs text-muted-foreground">Source: {metric.source}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-border bg-slate-50 p-6">
                <h3 className="text-2xl font-display font-bold mb-4">How We Measure & Attribute</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {evidence.methodology.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-2">Risk Notes</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {evidence.riskNotes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.features && service.features.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-12 text-center">Key Features</h2>
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Deliverables Matrix</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {included.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Optional Add-ons</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {optional.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Out of Scope by Default</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {outOfScope.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {evidence && (
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8">Mini Case Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {evidence.miniCases.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-5 bg-card">
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-2xl font-display font-bold mb-1">{item.result}</p>
                    <p className="text-xs text-muted-foreground mb-2">Timeframe: {item.timeframe}</p>
                    <ProofBadge confidence={item.confidence} />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-muted-foreground">
                Last updated: {evidence.lastUpdated} • Coverage: {evidence.dataCoverage} • Reviewed by: {evidence.ownerRole}
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="cta" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center bg-slate-900 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-display font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">Let&apos;s discuss how we can help grow your business.</p>
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
