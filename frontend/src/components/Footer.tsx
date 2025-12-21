import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  BUSINESS,
  FOOTER_SERVICES,
  FOOTER_LOCATIONS,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
} from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      {/* Top CTA Bar */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Need a Dumpster?
              </h3>
              <p className="text-white/60">
                Get a free quote today - no obligation.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="group bg-primary hover:bg-white text-white hover:text-secondary font-bold px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg shadow-primary/25 hover:shadow-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/904-dumpsters-logo.png"
                alt="904 Dumpster"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 mb-8 leading-relaxed">
              Professional dumpster rental services in Jacksonville, FL and surrounding areas.
              Same-day delivery available for residential and commercial projects.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Phone</div>
                  <div className="font-semibold">{BUSINESS.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Email</div>
                  <div className="font-semibold">{BUSINESS.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">Hours</div>
                  <div className="font-semibold">{BUSINESS.hours.weekday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">Services</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {FOOTER_LOCATIONS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">Company</h3>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Location Badge */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{BUSINESS.address}</div>
                  <div className="text-sm text-white/50 mt-1">Serving all of Northeast Florida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              Built by{' '}
              <a
                href="https://www.websiteandseoagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
              >
                WebWise - Website And SEO Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
