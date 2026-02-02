'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPackages } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Transparent Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear pricing with no hidden fees. Custom solutions available for enterprise clients.
          </p>
        </motion.div>

        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
          </TabsList>

          <TabsContent value="websites">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPackages.websites.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl p-8 border-2 ${
                    pkg.popular
                      ? 'border-accent shadow-xl scale-105'
                      : 'border-border hover:border-accent/50'
                  } transition-all`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-display font-bold">{pkg.price}</span>
                    {typeof pkg.pages === 'number' && (
                      <span className="text-muted-foreground ml-2">
                        ({pkg.pages} pages)
                      </span>
                    )}
                  </div>
                  {pkg.timeline && (
                    <p className="text-sm text-muted-foreground mb-4">Timeline: {pkg.timeline}</p>
                  )}
                  {pkg.bestFor && (
                    <p className="text-xs text-muted-foreground mb-6 italic">Best for: {pkg.bestFor}</p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#cta" className="block">
                    <Button
                      variant={pkg.popular ? 'default' : 'outline'}
                      className="w-full rounded-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ecommerce">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPackages.ecommerce.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl p-8 border-2 ${
                    pkg.popular
                      ? 'border-accent shadow-xl scale-105'
                      : 'border-border hover:border-accent/50'
                  } transition-all`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#cta" className="block">
                    <Button
                      variant={pkg.popular ? 'default' : 'outline'}
                      className="w-full rounded-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPackages.socialMedia.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl p-8 border-2 ${
                    pkg.popular
                      ? 'border-accent shadow-xl scale-105'
                      : 'border-border hover:border-accent/50'
                  } transition-all`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#cta" className="block">
                    <Button
                      variant={pkg.popular ? 'default' : 'outline'}
                      className="w-full rounded-full"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
