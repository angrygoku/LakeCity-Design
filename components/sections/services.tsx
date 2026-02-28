'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Share2, ArrowRight } from 'lucide-react'
import { services } from '@/lib/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProofBadge } from '@/components/services/proof-badge'
import { overviewEvidenceCards, serviceEvidence, servicesByCategoryData } from '@/lib/service-evidence'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const iconMap = {
  Globe,
  ShoppingCart,
  Share2,
}

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Full-Service Digital Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every major claim below includes a confidence label, source, and reporting window.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {overviewEvidenceCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <ProofBadge confidence={card.confidence} />
              </div>
              <p className="text-3xl font-display font-bold mb-2">{card.value}</p>
              <p className="text-xs text-muted-foreground">{card.period}</p>
              <p className="text-xs text-muted-foreground mt-1">Source: {card.source}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold">Projects Delivered by Service Category</h3>
              <p className="text-sm text-muted-foreground">
                Data window: Jan–Dec 2025 • Source: internal project delivery tracker
              </p>
            </div>
            <ProofBadge confidence="Measured" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={servicesByCategoryData} margin={{ top: 12, right: 12, left: 0, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="projects" fill="#D97706" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe
            const evidence = serviceEvidence[service.slug]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  {evidence && (
                    <div className="space-y-2 mb-5 text-sm">
                      <p><span className="font-semibold">Typical impact:</span> {evidence.typicalImpact}</p>
                      <p><span className="font-semibold">Median timeline:</span> {evidence.medianTimeline} (P75: {evidence.p75Timeline})</p>
                      <p className="text-muted-foreground">Best fit: {evidence.bestFit}</p>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    {evidence && (
                      <p className="text-xs text-muted-foreground mb-3">
                        Source: Delivery analytics ({evidence.dataCoverage})
                      </p>
                    )}
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="ghost" className="w-full group-hover:text-accent">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
