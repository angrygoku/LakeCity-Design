'use client'

import { motion } from 'framer-motion'

interface AbstractBackgroundProps {
  variant?: 'hero' | 'section' | 'dark'
  className?: string
}

export function AbstractBackground({ variant = 'section', className = '' }: AbstractBackgroundProps) {
  if (variant === 'hero') {
    return null // Hero has its own inline background
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Soft blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-200/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-slate-300/20 blur-[80px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Abstract circles */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10%" cy="20%" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-600" />
        <circle cx="90%" cy="80%" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-600" />
        <circle cx="50%" cy="50%" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-500" />
      </svg>
    </div>
  )
}
