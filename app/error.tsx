'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Something went wrong
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} size="lg" className="rounded-full">
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" className="rounded-full">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
