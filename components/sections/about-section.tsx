'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your business growth, not just pretty designs.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: "Your goals become our goals. We're partners, not vendors.",
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Premium quality in every project, from code to customer service.',
  },
  {
    icon: Heart,
    title: 'Reliability',
    description: "We don't disappear after launch. Long-term partnerships built on trust.",
  },
]

export function AboutSection() {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Digital Excellence for Ambitious Brands
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based in Udaipur, serving clients across India. We partner with established businesses to build digital experiences that drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lakecity Design was founded with a simple mission: to help established businesses thrive in the digital age. We noticed that many agencies focus on trendy startups, leaving mid-to-large companies without the reliable, scalable solutions they need.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, we&apos;re proud to serve businesses across India, from Udaipur to Mumbai, Delhi to Bangalore. Our clients trust us because we deliver on our promises, write maintainable code, and don&apos;t disappear after launch.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re not just another agency. We&apos;re your digital partner for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8 border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
