import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
}

export function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  sizes,
}: ImagePlaceholderProps) {
  // Create a blur placeholder
  const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'

  if (fill) {
    return (
      <div className={cn('relative overflow-hidden bg-slate-200', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onError={(e) => {
            // Fallback to a gradient placeholder
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.className = cn(
                target.parentElement.className,
                'bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center'
              )
              target.parentElement.innerHTML = `
                <div class="text-slate-400 text-sm">${alt}</div>
              `
            }
          }}
        />
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden bg-slate-200', className)}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className="object-cover w-full h-full"
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          if (target.parentElement) {
            target.parentElement.className = cn(
              target.parentElement.className,
              'bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center min-h-[200px]'
            )
            target.parentElement.innerHTML = `
              <div class="text-slate-400 text-sm">${alt}</div>
            `
          }
        }}
      />
    </div>
  )
}
