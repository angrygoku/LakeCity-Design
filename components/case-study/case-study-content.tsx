import { ArrowLeft, Calendar, Users, CheckCircle2, Tag, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface CaseStudy {
  title: string
  industry: string
  description: string
  overview: string
  features: string[]
  approach?: string[]
  technologies?: string[]
  highlights: string[]
  metrics?: {
    label: string
    value: string
    description: string
  }[]
  image?: string
  featured?: boolean
  duration?: string
  teamSize?: string
  projectType?: string
}

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <article className="pb-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/work">
            <Button variant="ghost" className="mb-8 text-white hover:text-accent border-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-sm text-slate-300 uppercase tracking-wide px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                {caseStudy.industry}
              </span>
              {caseStudy.featured && (
                <span className="text-sm text-accent font-semibold px-4 py-2 bg-accent/20 rounded-full">
                  Featured Project
                </span>
              )}
              {caseStudy.projectType && (
                <span className="text-sm text-slate-300 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  {caseStudy.projectType}
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">{caseStudy.description}</p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-slate-400">
              {caseStudy.duration && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{caseStudy.duration}</span>
                </div>
              )}
              {caseStudy.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{caseStudy.teamSize}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {caseStudy.image && (
        <section className="relative -mt-32 mb-16 z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                {caseStudy.image.endsWith('.svg') ? (
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">{caseStudy.overview}</p>
            </div>
          </section>

          {/* Features */}
          {caseStudy.features && caseStudy.features.length > 0 && (
            <section className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Approach */}
          {caseStudy.approach && caseStudy.approach.length > 0 && (
            <section className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-6">Our Approach</h2>
              <ul className="space-y-3">
                {caseStudy.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technologies */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <section className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Highlights */}
          {caseStudy.highlights && caseStudy.highlights.length > 0 && (
            <section className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-6">Project Highlights</h2>
              <ul className="space-y-4">
                {caseStudy.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <section className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-8">Key Metrics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
