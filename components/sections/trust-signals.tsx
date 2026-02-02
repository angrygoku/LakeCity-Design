'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { stats } from '@/lib/constants'

export function TrustSignals() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              <AnimatedCounter value={stats.yearsExperience} />+
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              <AnimatedCounter value={stats.projectsDelivered} />+
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Projects Delivered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              <AnimatedCounter value={stats.clientRetention} />%
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Client Retention</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {stats.supportHours}
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Support</p>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by leading businesses across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Professional client logo placeholders */}
            {[
              'Luxury Estates',
              'HealthCare Plus',
              'ArtisanCraft',
              'TechCorp Solutions',
              'The Spice Route',
              'Precision Manufacturing',
            ].map((client, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center text-slate-500 text-xs font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                {client}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Rated 4.9/5 on Google • Featured in Industry Publications
          </p>
        </motion.div>
      </div>
    </section>
  )
}
