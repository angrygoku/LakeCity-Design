'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import {
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Zap,
  Shield,
  Search,
  Palette,
  Code,
  Rocket,
  Users,
  TrendingUp,
} from 'lucide-react'

const capabilities = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom websites built with modern frameworks, optimized for performance and conversion.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and analytics.',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless UX.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'App Store Optimization'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Data-driven dashboards and analytics to make informed business decisions.',
    features: ['Real-Time Analytics', 'Custom Dashboards', 'Data Visualization', 'Report Generation'],
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your website, reduce bounce rates, and improve user experience.',
    features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'CDN Integration'],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security, SSL certificates, and compliance with industry standards.',
    features: ['SSL Certificates', 'GDPR Compliance', 'Security Audits', 'Backup Systems'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Increase visibility, drive organic traffic, and grow your online presence.',
    features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Performance Tracking'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Complete brand identity packages including logos, guidelines, and visual assets.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Asset Creation'],
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your unique business needs and workflows.',
    features: ['Custom APIs', 'Database Design', 'System Integration', 'Scalable Architecture'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Rocket,
    title: 'Launch & Deployment',
    description: 'Seamless deployment, hosting setup, and ongoing maintenance support.',
    features: ['Cloud Hosting', 'Domain Setup', 'SSL Configuration', 'Ongoing Support'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'User Experience Design',
    description: 'Intuitive interfaces that users love, backed by research and best practices.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Conversion Optimization',
    description: 'Data-driven strategies to convert visitors into customers and grow revenue.',
    features: ['A/B Testing', 'Conversion Funnels', 'Heatmaps', 'User Behavior Analysis'],
    color: 'from-amber-500 to-orange-600',
  },
]

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="capabilities" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements - responsive size so shapes stay round */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-accent/5 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[100vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent break-words">
              What We Build
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-0"
          >
            Comprehensive digital solutions tailored to your business needs. From concept to launch,
            we deliver excellence at every step.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid - single column on mobile, preserve card shape */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            const isHovered = hoveredIndex === index

            return (
              <CapabilityCard
                key={capability.title}
                capability={capability}
                index={index}
                Icon={Icon}
                isHovered={isHovered}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

interface CapabilityCardProps {
  capability: (typeof capabilities)[0]
  index: number
  Icon: React.ComponentType<{ className?: string }>
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

function CapabilityCard({
  capability,
  index,
  Icon,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: CapabilityCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    onHoverEnd()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onHoverStart}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden' as const,
      }}
      className="group relative min-w-0"
    >
      <motion.div
        className="relative h-full min-h-[200px] sm:min-h-0 bg-card rounded-2xl border border-border p-5 sm:p-6 md:p-8 overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Icon - preserve rounded shape on mobile */}
        <motion.div
          className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg flex-shrink-0`}
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors"
            layout
          >
            {capability.title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {capability.description}
          </motion.p>

          {/* Features */}
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {capability.features.map((feature, idx) => (
              <motion.li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ x: -10, opacity: 0 }}
                animate={
                  isHovered
                    ? { x: 0, opacity: 1 }
                    : { x: 0, opacity: 0.7 }
                }
                transition={{ delay: idx * 0.05, duration: 0.2 }}
              >
                <motion.div
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.color}`}
                  animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ willChange: 'transform' }}
        />
      </motion.div>
    </motion.div>
  )
}
