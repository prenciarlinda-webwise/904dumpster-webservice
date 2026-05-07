import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Home, MapPin, FileText, BookOpen } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Page Not Found - 904 Dumpster',
  description:
    'The page you were looking for could not be found. Browse our dumpster rental services, pricing, and service areas in Jacksonville, FL.',
  robots: {
    index: false,
    follow: true,
  },
}

const helpfulLinks = [
  {
    href: '/',
    icon: Home,
    title: 'Homepage',
    description: 'Dumpster rental in Jacksonville, FL with same-day delivery.',
  },
  {
    href: '/dumpster-rental-pricing-jacksonville',
    icon: FileText,
    title: 'Pricing',
    description: 'See pricing for 10, 15, and 20 yard roll-off dumpsters.',
  },
  {
    href: '/locations',
    icon: MapPin,
    title: 'Service Areas',
    description: 'All 11 Northeast Florida locations we deliver to.',
  },
  {
    href: '/blog',
    icon: BookOpen,
    title: 'Resources',
    description: 'Guides on sizing, permits, weight limits, and project planning.',
  },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We couldn&apos;t find that page
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The link may have moved, or the URL may be mistyped. Try one of the resources below,
            or call us directly and we&apos;ll point you the right way.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 text-center">
          <p className="text-gray-700 mb-3">Need help right now? Call us:</p>
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phone}
          </a>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Try one of these instead
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {helpfulLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group block bg-white border border-gray-200 hover:border-primary rounded-lg p-6 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      {link.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular dumpster sizes</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/10-yard-dumpster-rental"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-800"
            >
              10 Yard Dumpster Rental
            </Link>
            <Link
              href="/15-yard-dumpster-rental"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-800"
            >
              15 Yard Dumpster Rental
            </Link>
            <Link
              href="/20-yard-dumpster-rental"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-800"
            >
              20 Yard Dumpster Rental
            </Link>
            <Link
              href="/dumpster-size-guide"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-800"
            >
              Dumpster Size Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
