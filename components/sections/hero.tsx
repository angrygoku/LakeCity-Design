'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const handleViewCapabilities = () => {
    const capabilitiesSection = document.getElementById('capabilities')
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGetQuote = () => {
    const ctaSection = document.getElementById('cta')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Project Completion{' '}
              <span className="text-gradient-accent">Agency</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We take your project from vision to reality. Complete delivery, on time, every time. Based in Udaipur, serving clients across India.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button
                size="lg"
                className="rounded-full px-8 text-base"
                onClick={handleViewCapabilities}
              >
                What We Build
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base"
                onClick={handleGetQuote}
              >
                Get a Quote
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete project delivery • From concept to launch
            </p>
          </motion.div>

          {/* Right: Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative mx-auto w-full max-w-[600px]">
                <div className="aspect-[16/10] relative rounded-lg overflow-hidden shadow-2xl border-8 border-slate-900 bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src="/images/hero-devices.svg"
                    alt="Website mockup"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              {/* Floating Phone Mockup */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 md:w-64"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl backdrop-blur-sm mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-semibold text-sm mb-1">Mobile First</div>
                      <div className="text-slate-400 text-xs">Responsive Design</div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
