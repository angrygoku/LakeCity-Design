'use client'

import { motion } from 'framer-motion'
import { FileText, Sparkles, Rocket, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: '5-Minute Brief',
    description: 'Fill out a simple form. Tell us about your project, goals, and timeline.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Get Proposal in 24h',
    description: 'We review your brief and send a detailed proposal with scope, timeline, and pricing.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'We Build & Deliver',
    description: 'Our team works on your project. Weekly updates. No surprises. Complete delivery.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'You Launch & Grow',
    description: 'Receive complete project files, documentation, and ownership. Launch and grow.',
    color: 'from-amber-500 to-orange-600',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Abstract background - responsive orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-amber-100/20 blur-[50px] sm:blur-[70px] md:blur-[100px]" />
        <div className="absolute top-0 left-0 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-blue-100/15 blur-[40px] sm:blur-[60px] md:blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="steps-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-slate-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#steps-grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[100vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 text-slate-900">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Simple process. Clear steps. No back-and-forth. Just results.
          </p>
        </motion.div>

        {/* Steps - single column on mobile, preserve card shape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0" />
                )}

                <div className="relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 min-w-0 min-h-0 overflow-hidden">
                  {/* Number Badge - preserve circle shape */}
                  <div className="absolute -top-4 left-5 sm:left-6 md:left-8">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-bold text-base sm:text-lg shadow-lg flex-shrink-0`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon - preserve rounded shape */}
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-6 mt-2 sm:mt-4 flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
