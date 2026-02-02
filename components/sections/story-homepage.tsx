'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Rocket, CheckCircle2, TrendingUp, Users, ArrowRight } from 'lucide-react'
import { StoryChapter } from './story-chapter'
import { Button } from '@/components/ui/button'

const storyChapters = [
  {
    id: 'story-vision',
    number: '01',
    title: 'You Have a Vision',
    subtitle: 'An idea that could transform your business',
    description:
      'Every great project starts with a vision. You see the potential, the opportunity, the impact it could have. But turning that vision into reality? That\'s where we come in.',
    gradient: 'from-slate-950 via-amber-950/50 to-slate-950',
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <Lightbulb className="w-10 h-10 text-amber-400" />
      </div>
    ),
  },
  {
    id: 'story-plan',
    number: '02',
    title: 'We Create the Plan',
    subtitle: 'Every detail mapped out. Nothing left to chance.',
    description:
      'We dive deep into your vision, understanding every nuance, every requirement, every constraint. Then we craft a comprehensive plan—timeline, milestones, deliverables, success metrics. You see exactly how we\'ll get from here to there.',
    gradient: 'from-slate-950 via-blue-950/50 to-slate-950',
    reverse: true,
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <Target className="w-10 h-10 text-blue-400" />
      </div>
    ),
  },
  {
    id: 'story-execute',
    number: '03',
    title: 'We Execute Flawlessly',
    subtitle: 'Expert team. Weekly updates. Zero surprises.',
    description:
      'Our team of specialists works in perfect sync. Design, development, strategy—all moving together toward one goal: your completed project. You get weekly updates, see progress in real-time, and always know exactly where we stand.',
    gradient: 'from-slate-950 via-purple-950/50 to-slate-950',
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <Rocket className="w-10 h-10 text-purple-400" />
      </div>
    ),
  },
  {
    id: 'story-deliver',
    number: '04',
    title: 'Project Delivered',
    subtitle: 'On time. On budget. Exceeding expectations.',
    description:
      'The moment arrives. Your project is complete, tested, polished, and ready. But we don\'t just hand it over and disappear. We ensure everything works perfectly, provide documentation, and give you full ownership.',
    gradient: 'from-slate-950 via-emerald-950/50 to-slate-950',
    reverse: true,
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
      </div>
    ),
  },
  {
    id: 'story-grow',
    number: '05',
    title: 'You Grow',
    subtitle: 'Your business scales. Revenue increases. Goals achieved.',
    description:
      'With your completed project live, the results start flowing. More customers. Higher revenue. Better efficiency. Your vision wasn\'t just realized—it\'s driving real business growth.',
    gradient: 'from-slate-950 via-rose-950/50 to-slate-950',
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <TrendingUp className="w-10 h-10 text-rose-400" />
      </div>
    ),
  },
  {
    id: 'story-partner',
    number: '06',
    title: 'We Stay',
    subtitle: 'Long-term partnership. Ongoing support. Future projects.',
    description:
      'Project completion doesn\'t mean goodbye. We provide ongoing support, quick fixes, optimizations, and are ready for your next project. We become your trusted digital partner for the long haul.',
    gradient: 'from-slate-950 via-violet-950/50 to-slate-950',
    reverse: true,
    icon: (
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <Users className="w-10 h-10 text-violet-400" />
      </div>
    ),
  },
]

export function StoryHomepage() {
  return (
    <>
      {storyChapters.map((chapter, index) => (
        <StoryChapter key={chapter.id} {...chapter}>
          {/* Visual elements for each chapter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${
                index % 2 === 0
                  ? 'from-amber-500/20 to-purple-500/20'
                  : 'from-blue-500/20 to-emerald-500/20'
              }`}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            {/* Content placeholder - can be replaced with actual visuals */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/40">
                <div className="text-6xl mb-4">{chapter.number}</div>
                <div className="text-sm uppercase tracking-wider">{chapter.title}</div>
              </div>
            </div>
          </motion.div>
        </StoryChapter>
      ))}

      {/* Final CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 lg:px-12 max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white"
          >
            Ready to Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12"
          >
            Let's turn your vision into reality. Complete project delivery, on time, every time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="rounded-full px-10 text-lg h-14 bg-accent hover:bg-accent/90 text-white"
              onClick={() => {
                const ctaSection = document.getElementById('cta')
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
