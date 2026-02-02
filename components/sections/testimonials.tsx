'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const approachSteps = [
  {
    id: 1,
    title: 'Discovery & Research',
    description:
      'We start by understanding your business goals, target audience, and market positioning. Through comprehensive research and analysis, we identify opportunities and challenges.',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description:
      'We develop a strategic roadmap tailored to your needs. This includes defining project scope, timelines, and success metrics to ensure alignment with your objectives.',
    icon: '📋',
  },
  {
    id: 3,
    title: 'Design & Development',
    description:
      'Our team creates beautiful, functional solutions using the latest technologies. We focus on user experience, performance, and scalability to deliver exceptional results.',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Testing & Optimization',
    description:
      'We rigorously test across devices and browsers, optimize performance, and refine based on feedback. Quality assurance ensures a flawless user experience.',
    icon: '✅',
  },
  {
    id: 5,
    title: 'Launch & Support',
    description:
      'We handle seamless deployment and provide ongoing support. Our team ensures smooth transitions and is available to help you maximize your digital presence.',
    icon: '🚀',
  },
  {
    id: 6,
    title: 'Growth & Iteration',
    description:
      'We monitor performance, analyze data, and continuously optimize. Our iterative approach ensures your digital solution evolves with your business needs.',
    icon: '📈',
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
