'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The website they built for us is clean, fast, and converts. Design is exactly what we wanted—modern but not flashy. Project was delivered on the dot.',
    author: 'Nirbhay',
    company: 'Website & Design',
    result: 'On-time delivery',
  },
  {
    quote:
      'Lakecity\'s design sense is top-notch. They understood our brand from day one and the final deliverables exceeded our expectations. Highly recommend for design work.',
    author: 'Manasvi',
    company: 'Design & Branding',
    result: 'Exceeded expectations',
  },
  {
    quote:
      'We had a tight deadline. They didn’t just meet it—they delivered a polished product. The site runs smooth and our clients love it. Solid project delivery.',
    author: 'Ashish',
    company: 'Website & Project Delivery',
    result: 'Ahead of deadline',
  },
  {
    quote:
      'From concept to launch, everything was professional. The design is beautiful and the website performs really well. Would work with them again.',
    author: 'Lokesh',
    company: 'Website & Design',
    result: 'End-to-end delivery',
  },
  {
    quote:
      'Clear communication, great designs, and they actually delivered what they promised. Our new site has helped us get more leads. Very happy with the project.',
    author: 'Jack',
    company: 'Website & Project Delivery',
    result: 'More leads',
  },
  {
    quote:
      'They took our rough ideas and turned them into a stunning website. The design is elegant and the whole project was completed without any hassle. Thank you, Lakecity.',
    author: 'Avni',
    company: 'Design & Website',
    result: 'Smooth delivery',
  },
]

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Abstract background - responsive orbs so shapes stay round */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-amber-100/25 blur-[50px] sm:blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-slate-200/20 blur-[40px] sm:blur-[60px] md:blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="proof-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="currentColor" className="text-slate-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proof-dots)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Testimonial Strip - preserve rounded shape and padding on mobile */}
          <div className="relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg min-h-0 overflow-hidden">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-accent/20 mb-4 sm:mb-6 flex-shrink-0" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-900 mb-4 sm:mb-6 leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-slate-600 text-sm">{testimonials[currentIndex].company}</p>
                </div>
                <div className="px-4 py-2 bg-emerald-50 rounded-full">
                  <p className="text-emerald-700 font-semibold text-sm">
                    {testimonials[currentIndex].result}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
