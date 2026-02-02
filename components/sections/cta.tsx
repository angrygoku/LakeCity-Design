'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { siteConfig } from '@/lib/constants'

export function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[100vw]">
        <div className="max-w-4xl mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4">
              Start Your Project
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-0">
              Ready to elevate your digital presence? Let's discuss your goals and create something exceptional together.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              We respond within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-slate-800"
          >
            <a
              href={`tel:${siteConfig.links.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.links.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
