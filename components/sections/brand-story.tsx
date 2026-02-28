'use client'

import { motion } from 'framer-motion'
import { Compass, ShieldCheck, BarChart3 } from 'lucide-react'
import { ProofBadge } from '@/components/services/proof-badge'

const storyChapters = [
  {
    step: '01',
    title: 'We Start With Business Clarity',
    description:
      'Every project begins with goals, constraints, and measurable success criteria. We avoid decorative work that does not move pipeline, revenue, or retention.',
    proof: 'Discovery briefs + KPI baselines shared before design starts',
    icon: Compass,
  },
  {
    step: '02',
    title: 'We Build With Delivery Discipline',
    description:
      'Our process uses fixed milestones, weekly reviews, and transparent scope decisions. This keeps launches predictable and helps teams avoid timeline drift.',
    proof: 'Milestone tracking with on-time delivery reporting every sprint',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'We Prove Outcomes, Not Just Outputs',
    description:
      'After launch, we compare before-vs-after performance windows and report attribution carefully. We separate measured impact from assumptions.',
    proof: 'Source-linked reporting with confidence labels (Measured / Client-reported)',
    icon: BarChart3,
  },
]

export function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            A Project Completion Team That Values Evidence Over Hype
          </h2>
          <p className="text-muted-foreground text-lg">
            This story section is intentionally built as a three-stage animation: strategy first, delivery second, measurable impact third.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-accent/10 via-accent to-accent/10 origin-top"
          />

          <div className="space-y-6 md:space-y-10">
            {storyChapters.map((chapter, index) => {
              const Icon = chapter.icon
              const isRight = index % 2 === 1
              return (
                <motion.article
                  key={chapter.step}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className={`relative md:w-[48%] ${isRight ? 'md:ml-auto' : ''}`}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                    className="rounded-2xl border border-border bg-slate-50 p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-xs tracking-wider text-muted-foreground">STEP {chapter.step}</span>
                      </div>
                      <ProofBadge confidence="Measured" />
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3">{chapter.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{chapter.description}</p>

                    <div className="rounded-lg bg-white border border-border p-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Why this is fair</p>
                      <p className="text-sm">{chapter.proof}</p>
                    </div>
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
