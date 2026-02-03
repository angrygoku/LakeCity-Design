import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="Lakecity Design"
                width={180}
                height={56}
                className="h-14 md:h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digital excellence for ambitious brands. Based in Udaipur, serving clients across India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-design" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/e-commerce" className="text-slate-400 hover:text-white transition-colors text-sm">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#capabilities" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Capabilities
                </a>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.links.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.links.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Lakecity Design. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Udaipur, Rajasthan, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
