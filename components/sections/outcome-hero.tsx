'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

export function OutcomeHero() {
  const handleGetStarted = () => {
    const ctaSection = document.getElementById('cta')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-20 sm:pt-24">
      {/* Scalable SVG background - preserves aspect ratio, no flattening */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bg.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center scale-100"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        {/* Soft gradient orbs - responsive size so shapes stay round on mobile */}
        <div className="absolute top-0 left-1/4 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-amber-200/30 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-slate-300/25 blur-[50px] sm:blur-[70px] md:blur-[90px] lg:blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-amber-100/20 blur-[40px] sm:blur-[60px] md:blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[100vw]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-6 sm:mb-8"
          >
            <span>Project Completion Agency</span>
            <span>•</span>
            <span>Udaipur, India</span>
          </motion.div>

          {/* Main Headline - Outcome-focused */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold leading-[1.08] mb-4 sm:mb-6 text-slate-900 break-words"
          >
            Websites & Apps That{' '}
            <span className="bg-gradient-to-r from-accent via-amber-600 to-accent bg-clip-text text-transparent">
              Drive Revenue
            </span>
            <br />
            <span className="text-slate-600">Delivered in 4-6 Weeks</span>
          </motion.h1>

          {/* Subheadline - Specific and clear */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-0"
          >
            Complete project delivery. Fixed scope. Fixed timeline. No surprises. 
            <span className="font-semibold text-slate-900"> Your project, done.</span>
          </motion.p>

          {/* Dual CTAs - Mobile-first */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-12 sm:h-14 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 w-full sm:w-auto"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-12 sm:h-14 border-2 w-full sm:w-auto"
              onClick={() => window.open(`https://wa.me/${siteConfig.links.phone.replace(/\D/g, '')}`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Trust indicators - stack/wrap cleanly on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>On-time delivery guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Fixed scope & pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Complete project ownership</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-400 text-xs uppercase tracking-wider"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  )
}
