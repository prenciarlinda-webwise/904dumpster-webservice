import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Clock,
  Shield,
  DollarSign,
  HardHat,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpsters for Construction Projects Jacksonville FL | 904 Dumpster',
  description:
    'Construction dumpster rental in Jacksonville FL. Heavy-duty roll-off containers for job sites, renovations, and new builds. Same-day delivery available.',
  keywords: [
    'construction dumpster rental jacksonville',
    'job site dumpster rental',
    'contractor dumpster jacksonville fl',
    'renovation dumpster rental',
    'construction debris removal',
    'building project dumpster',
  ],
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-construction-projects',
  },
  openGraph: {
    title: 'Dumpsters for Construction Projects Jacksonville FL | 904 Dumpster',
    description:
      'Construction dumpster rental in Jacksonville FL. Heavy-duty roll-off containers for job sites.',
    type: 'website',
    url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-construction-projects',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
  },
}

const features = [
  'Heavy-duty containers rated for construction debris',
  'High weight limits for dense materials',
  'On-time delivery to meet project schedules',
  'Flexible rental periods for project timelines',
  'Volume discounts for contractors',
  'Multiple dumpsters available for large sites',
  'Same-day and next-day delivery',
  'Extended rental options available',
]

const idealFor = [
  'New Home Construction',
  'Commercial Build-Outs',
  'Home Renovations',
  'Demolition Projects',
  'Framing Debris',
  'Flooring Removal',
  'Drywall Projects',
  'Site Cleanup',
]

const relatedServices = [
  {
    title: 'Construction Dumpster Rental',
    href: '/construction-dumpster-rental',
    description: 'Full details on our construction services',
  },
  {
    title: '20 Yard Dumpster',
    href: '/20-yard-dumpster-rental',
    description: 'Our largest size for big projects',
  },
  {
    title: 'Demolition Services',
    href: '/demolition-services-jacksonville',
    description: 'Professional demolition with debris removal',
  },
]

export default function DumpstersForConstructionProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Dumpsters for Construction Projects</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpsters for Construction Projects in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Heavy-duty roll-off dumpsters designed for construction sites and renovation projects.
              We understand job site logistics and provide reliable, on-time service that keeps your
              project on schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/construction-dumpster-rental"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Construction Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <HardHat className="w-5 h-5" />
              <span>Contractor Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Flexible Rentals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Up to 4 Tons</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Built for Contractors
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why Contractors Choose 904 Dumpster
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We know that on a construction site, time is money. Our dumpsters are delivered on
                schedule, our weight limits handle heavy construction debris, and our flexible
                rental periods work with your project timeline.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-6">Ideal For:</h3>
              <div className="grid grid-cols-2 gap-4">
                {idealFor.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Same-Day</div>
                <div className="text-gray-500 text-sm">Delivery Available</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Flexible</div>
                <div className="text-gray-500 text-sm">Rental Periods</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Volume</div>
                <div className="text-gray-500 text-sm">Discounts Available</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Fully</div>
                <div className="text-gray-500 text-sm">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Available Sizes
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Choose Your Dumpster Size
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From small renovations to large construction sites, we have the right size for your
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((dumpster) => (
              <Link
                key={dumpster.size}
                href={dumpster.href}
                className={`group rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all ${
                  dumpster.size === '20'
                    ? 'bg-primary text-white ring-4 ring-primary/20'
                    : 'bg-white'
                }`}
              >
                {dumpster.size === '20' && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Best for Large Projects
                  </span>
                )}
                <div
                  className={`text-4xl font-black mb-2 ${
                    dumpster.size === '20' ? 'text-white' : 'text-primary'
                  }`}
                >
                  {dumpster.size}{' '}
                  <span className={`text-xl ${dumpster.size === '20' ? 'text-white/70' : 'text-gray-400'}`}>
                    yard
                  </span>
                </div>
                <h3
                  className={`font-bold mb-2 ${dumpster.size === '20' ? 'text-white' : 'text-secondary'}`}
                >
                  {dumpster.name}
                </h3>
                <p className={`text-sm mb-4 ${dumpster.size === '20' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.dimensions}
                </p>
                <span
                  className={`inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all ${
                    dumpster.size === '20' ? 'text-white' : 'text-primary'
                  }`}
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Related Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready for Your Construction Project?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book your dumpster online now. Same-day delivery available throughout Jacksonville.
            Volume discounts for contractors.
          </p>
          <a
            href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            Book Online Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              'Dumpsters for Construction Projects',
              'Construction dumpster rental in Jacksonville FL. Heavy-duty roll-off containers for job sites, renovations, and new builds.',
              true
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Dumpster Rental', url: 'https://www.904dumpster.com' },
              {
                name: 'Dumpsters for Construction Projects',
                url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-construction-projects',
              },
            ])
          ),
        }}
      />
    </div>
  )
}
