'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ReactNode } from 'react'

interface StoryChapterProps {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  gradient: string
  icon?: ReactNode
  reverse?: boolean
  children?: ReactNode
}

export function StoryChapter({
  id,
  number,
  title,
  subtitle,
  description,
  gradient,
  icon,
  reverse = false,
  children,
}: StoryChapterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b ${gradient}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className={`relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } md:flex items-center gap-12 lg:gap-20`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl md:text-7xl font-display font-bold text-white/20">
              {number}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-6 font-medium"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
              className="mt-8"
            >
              {icon}
            </motion.div>
          )}
        </motion.div>

        {/* Visual Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Section number indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="absolute top-12 left-12 text-white/20 font-display font-bold text-2xl"
      >
        {number}
      </motion.div>
    </section>
  )
}
