'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProjectScreenshotProps {
  src?: string
  alt: string
  title: string
  category: string
  className?: string
}

export function ProjectScreenshot({ src, alt, title, category, className }: ProjectScreenshotProps) {
  const [error, setError] = useState(false)

  // Generate gradient based on category if image fails
  const getGradient = () => {
    switch (category) {
      case 'Websites':
        return 'from-blue-500 via-indigo-600 to-purple-700'
      case 'E-Commerce':
        return 'from-emerald-500 via-teal-600 to-cyan-700'
      case 'Social Media':
        return 'from-pink-500 via-rose-600 to-orange-700'
      default:
        return 'from-slate-400 via-slate-500 to-slate-600'
    }
  }

  if (!src || error) {
    return (
      <div
        className={cn(
          'relative w-full h-full bg-gradient-to-br',
          getGradient(),
          'flex items-center justify-center overflow-hidden',
          className
        )}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center p-8">
          <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-white font-display font-bold text-lg mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      </div>
    )
  }

  const isSvg = src.endsWith('.svg')
  
  // Use regular img tag for SVGs
  if (isSvg) {
    return (
      <div className={cn('relative w-full h-full overflow-hidden bg-white', className)}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain p-4"
          onError={() => setError(true)}
        />
      </div>
    )
  }
  
  // Use Next.js Image for non-SVG images
  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
