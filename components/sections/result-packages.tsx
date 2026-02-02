'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const packages = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹50,000',
    timeline: '4-6 weeks',
    outcome: 'Professional website that converts visitors into leads',
    features: [
      '5 custom-designed pages',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Google Analytics',
      '1 month post-launch support',
      'Performance optimized (95+ Lighthouse)',
    ],
    popular: false,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '₹1,50,000',
    timeline: '6-8 weeks',
    outcome: 'High-converting website that drives measurable business growth',
    features: [
      '10 custom-designed pages',
      'CMS integration',
      'Advanced SEO optimization',
      'Custom functionality',
      'Third-party integrations',
      '3 months post-launch support',
      'Performance optimized (95+ Lighthouse)',
      'Content strategy consultation',
    ],
    popular: true,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    price: '₹2,00,000',
    timeline: '8-12 weeks',
    outcome: 'Complete online store that generates sales from day one',
    features: [
      'Custom Shopify Plus store',
      'Payment gateway integration',
      'Inventory management',
      'Product catalog setup',
      'Checkout optimization',
      '3 months post-launch support',
      'Marketing automation setup',
      'Analytics & reporting',
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-600',
  },
]

export function ResultPackages() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden">
      {/* Abstract background - responsive so shapes don't flatten */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[min(400px,50vw)] rounded-full bg-slate-100/40 blur-[60px] sm:blur-[90px] md:blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="pkg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pkg-grad)" />
          <path d="M0 300 Q 400 200 800 300 T 1600 300" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" opacity="0.5" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[100vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 text-slate-900 break-words">
            Fixed Scope. Fixed Price.{' '}
            <span className="text-accent">Fixed Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-0">
            No surprises. No scope creep. Just complete project delivery, exactly as promised.
          </p>
        </motion.div>

        {/* Packages Grid - single column on mobile, preserve card shape */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 min-w-0 ${
                pkg.popular ? 'border-accent shadow-xl shadow-accent/10' : 'border-slate-200'
              } overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-amber-600 text-white text-center py-2 text-xs sm:text-sm font-semibold rounded-t-2xl">
                  Most Popular
                </div>
              )}

              <div className={`p-5 sm:p-6 md:p-8 flex flex-col flex-1 min-h-0 ${pkg.popular ? 'pt-12 sm:pt-14 md:pt-16' : 'pt-5 sm:pt-6 md:pt-8'}`}>
                {/* Package Header */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-slate-900">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{pkg.timeline}</span>
                  </div>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {pkg.outcome}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full rounded-full ${
                    pkg.popular
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  onClick={() => {
                    const ctaSection = document.getElementById('cta')
                    if (ctaSection) {
                      ctaSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Gradient accent */}
              <div className={`h-1 bg-gradient-to-r ${pkg.gradient}`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-14 md:mt-16"
        >
          <p className="text-slate-600 text-sm sm:text-base mb-4">
            Need something custom? Enterprise projects? Multiple projects?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => {
              const ctaSection = document.getElementById('cta')
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get Custom Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
