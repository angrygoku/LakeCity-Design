'use client'

import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  CheckCircle2, 
  TrendingUp,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const journeyStories = [
  {
    id: 'vision',
    icon: Lightbulb,
    title: 'You Have a Vision',
    description: 'A project idea that could transform your business, but it feels overwhelming.',
    color: 'from-amber-500 to-orange-600',
    size: 'large',
    position: { row: 1, col: 1, span: 2 },
    shape: 'rounded-3xl',
  },
  {
    id: 'planning',
    icon: Target,
    title: 'We Create the Plan',
    description: 'Every detail mapped out. Timeline, milestones, deliverables—nothing left to chance.',
    color: 'from-blue-500 to-indigo-600',
    size: 'medium',
    position: { row: 1, col: 3, span: 1 },
    shape: 'rounded-2xl',
  },
  {
    id: 'execution',
    icon: Rocket,
    title: 'We Execute Flawlessly',
    description: 'Expert team working in sync. Weekly updates. No surprises. Just progress.',
    color: 'from-purple-500 to-pink-600',
    size: 'large',
    position: { row: 2, col: 2, span: 2 },
    shape: 'rounded-3xl',
  },
  {
    id: 'delivery',
    icon: CheckCircle2,
    title: 'Project Delivered',
    description: 'On time. On budget. Exceeding expectations. Ready to launch.',
    color: 'from-emerald-500 to-teal-600',
    size: 'small',
    position: { row: 2, col: 1, span: 1 },
    shape: 'rounded-xl',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'You Grow',
    description: 'Your business scales. Revenue increases. Goals achieved.',
    color: 'from-rose-500 to-red-600',
    size: 'medium',
    position: { row: 3, col: 1, span: 1 },
    shape: 'rounded-2xl',
  },
  {
    id: 'support',
    icon: Shield,
    title: 'We Support You',
    description: 'Ongoing maintenance. Quick fixes. Continuous optimization. We stay.',
    color: 'from-cyan-500 to-blue-600',
    size: 'small',
    position: { row: 3, col: 2, span: 1 },
    shape: 'rounded-xl',
  },
  {
    id: 'partnership',
    icon: Users,
    title: 'Long-term Partnership',
    description: 'We become your trusted digital partner. Future projects. Ongoing success.',
    color: 'from-violet-500 to-purple-600',
    size: 'large',
    position: { row: 3, col: 3, span: 2 },
    shape: 'rounded-3xl',
  },
]

const sizeClasses: Record<'small' | 'medium' | 'large', string> = {
  small: 'h-48',
  medium: 'h-64',
  large: 'h-80 md:h-96',
}

export function UserJourney() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">
              The Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            From Vision to Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project follows a clear path. We handle the complexity. You see the results.
          </p>
        </motion.div>

        {/* Journey Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {journeyStories.map((story, index) => {
            const Icon = story.icon
            const colSpan = story.position.span === 2 ? 'md:col-span-2' : ''
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                className={`${sizeClasses[story.size as keyof typeof sizeClasses]} ${story.shape} ${colSpan} relative group cursor-pointer overflow-hidden`}
                role="article"
                aria-label={`${story.title}: ${story.description}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-95 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                        {story.title}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed">
                        {story.description}
                      </p>
                    </div>

                    {/* Arrow indicator for flow */}
                    {index < journeyStories.length - 1 && (
                      <motion.div
                        className="mt-6 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <span className="text-sm font-medium">Next step</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ willChange: 'transform' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to start your project journey?
          </p>
          <motion.a
            href="#cta"
            className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-4 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Begin
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
