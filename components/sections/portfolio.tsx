'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectImage } from '@/components/ui/project-image'

const projects = [
  {
    id: 'luxury-real-estate',
    title: 'Luxury Real Estate Platform with Virtual Tours',
    category: 'Websites',
    industry: 'Real Estate',
    outcome: 'Premium platform with virtual tours and advanced filtering',
    image: '/images/projects/luxury-real-estate.svg',
    slug: 'luxury-real-estate',
    featured: true,
  },
  {
    id: 'healthcare-clinic',
    title: 'Healthcare Clinic Management System',
    category: 'Websites',
    industry: 'Healthcare',
    outcome: 'Comprehensive clinic management with patient portal',
    image: '/images/projects/healthcare-clinic.svg',
    slug: 'healthcare-clinic',
    featured: true,
  },
  {
    id: 'd2c-ecommerce',
    title: 'D2C E-Commerce Platform Migration',
    category: 'E-Commerce',
    industry: 'Retail',
    outcome: 'High-performance Shopify Plus store with AI recommendations',
    image: '/images/projects/d2c-ecommerce.svg',
    slug: 'd2c-ecommerce',
    featured: true,
  },
  {
    id: 'b2b-corporate',
    title: 'B2B Corporate Website with Lead Generation',
    category: 'Websites',
    industry: 'B2B Technology',
    outcome: 'Content-rich website with advanced SEO and lead generation',
    image: '/images/projects/b2b-corporate.svg',
    slug: 'b2b-corporate',
    featured: false,
  },
  {
    id: 'restaurant-social',
    title: 'Restaurant Social Media Strategy',
    category: 'Social Media',
    industry: 'Food & Beverage',
    outcome: 'Comprehensive social media strategy and community building',
    image: '/images/projects/restaurant-social.svg',
    slug: 'restaurant-social',
    featured: false,
  },
  {
    id: 'manufacturing-rebrand',
    title: 'Manufacturing Company Complete Rebrand',
    category: 'Websites',
    industry: 'Manufacturing',
    outcome: 'Complete brand transformation with modern digital presence',
    image: '/images/projects/manufacturing-rebrand.svg',
    slug: 'manufacturing-rebrand',
    featured: false,
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Websites', 'E-Commerce', 'Social Media']
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full max-w-md grid-cols-4">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-sm">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured && index === 0 && activeCategory === 'All'
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                <Link href={`/work/${project.slug}`}>
                  <div className={`bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isFeatured ? 'md:flex md:flex-row' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${isFeatured ? 'md:w-1/2 md:aspect-auto' : 'aspect-[16/10]'}`}>
                      <ProjectImage
                        title={project.title}
                        category={project.category}
                        image={project.image}
                        className="group-hover:scale-105 transition-transform duration-500 h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {isFeatured && (
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`p-8 ${isFeatured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {project.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-accent font-semibold mb-4">{project.outcome}</p>
                      <Button variant="ghost" className="group-hover:text-accent p-0">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href="/work">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
