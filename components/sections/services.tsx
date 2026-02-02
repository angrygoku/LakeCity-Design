'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Share2, ArrowRight } from 'lucide-react'
import { services } from '@/lib/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
            Everything you need to build and grow your digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe
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
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

                  {/* Deliverables */}
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                    {service.deliverables.length > 4 && (
                      <li className="text-sm text-accent font-medium">
                        +{service.deliverables.length - 4} more
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:text-accent">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
