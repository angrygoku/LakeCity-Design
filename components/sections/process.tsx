'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'
import { Search, Target, Code, Rocket, CheckCircle2 } from 'lucide-react'

const icons = [Search, Target, Code, Rocket]

export function Process() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border-4 border-background">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-6xl font-display font-bold text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Details */}
                  {step.details && step.details.length > 0 && (
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
