'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProjectImageProps {
  title: string
  category: string
  image?: string
  className?: string
}

export function ProjectImage({ title, category, image, className }: ProjectImageProps) {
  const [error, setError] = useState(false)

  // Generate gradient based on category
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

  // If image is provided and no error, use it
  if (image && !error) {
    const isSvg = image.endsWith('.svg')
    
    // Use regular img tag for SVGs (Next.js Image doesn't handle SVGs well)
    if (isSvg) {
      return (
        <div className={cn('relative w-full h-full overflow-hidden bg-white', className)}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-4"
            onError={() => {
              console.error('Image failed to load:', image)
              setError(true)
            }}
          />
        </div>
      )
    }
    
    // Use Next.js Image for non-SVG images
    return (
      <div className={cn('relative w-full h-full overflow-hidden bg-white', className)}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={() => {
            console.error('Image failed to load:', image)
            setError(true)
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )
  }

  // Fallback to gradient placeholder
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

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  )
}
