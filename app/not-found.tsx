import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="rounded-full">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <a href="#capabilities">
            <Button variant="outline" size="lg" className="rounded-full">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View Capabilities
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
