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
  Home,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpsters for Roofing Projects Jacksonville FL - 904 Dumpster',
  description:
    'Rent a dumpster for your roofing project in Jacksonville FL. 15-yard dumpsters are perfect for shingle removal. Same-day delivery, transparent pricing.',
  keywords: [
    'roofing dumpster rental jacksonville',
    'dumpster for roof replacement',
    'shingle removal dumpster',
    'roofing debris dumpster',
    'roof tear off dumpster',
    'roofing project dumpster jacksonville fl',
  ],
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-roofing-projects',
  },
  openGraph: {
    title: 'Dumpsters for Roofing Projects Jacksonville FL - 904 Dumpster',
    description:
      'Rent a dumpster for your roofing project in Jacksonville FL. 15-yard dumpsters are perfect for shingle removal.',
    type: 'website',
    url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-roofing-projects',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
  },
}

const features = [
  'Perfect size for single-family roof replacements',
  'Handles heavy shingle loads with proper weight limits',
  'Same-day delivery to meet project timelines',
  'Flexible rental periods for weather delays',
  'Driveway-safe delivery with protection boards',
  'Easy loading height for roofing debris',
  'Licensed and insured service',
  'Transparent pricing with no hidden fees',
]

const idealFor = [
  'Shingle Roof Replacement',
  'Tile Roof Removal',
  'Storm Damage Cleanup',
  'Flat Roof Tear-Off',
  'Metal Roof Projects',
  'Gutter Replacement',
  'Roof Deck Repairs',
  'Multi-Layer Tear-Off',
]

const relatedServices = [
  {
    title: '15 Yard Dumpster',
    href: '/15-yard-dumpster-rental',
    description: 'Most popular size for roofing projects',
  },
  {
    title: '20 Yard Dumpster',
    href: '/20-yard-dumpster-rental',
    description: 'For larger commercial roofing jobs',
  },
  {
    title: 'Construction Dumpster',
    href: '/construction-dumpster-rental',
    description: 'Heavy-duty containers for job sites',
  },
]

export default function DumpstersForRoofingProjectsPage() {
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
              <span className="text-white">Dumpsters for Roofing Projects</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpsters for Roofing Projects in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              The right dumpster makes your roofing project easier. Our 15-yard dumpsters are the
              most popular choice for residential roof replacements, handling shingles, underlayment,
              and debris with ease. Same-day delivery available.
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
                href="/15-yard-dumpster-rental"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                15 Yard Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Size */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              <span>15 Yard Recommended</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5-Day Rental</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>2 Tons Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why 15 Yard for Roofing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Best Size for Roofing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why 15-Yard Dumpsters Are Perfect for Roofing
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                For most residential roofing projects in Jacksonville, our 15-yard dumpster is the
                ideal choice. It holds approximately 15-20 squares of roofing shingles while
                maintaining a manageable footprint in your driveway.
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
                <div className="font-bold text-secondary">5-Day</div>
                <div className="text-gray-500 text-sm">Rental Period</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">No Hidden</div>
                <div className="text-gray-500 text-sm">Fees Ever</div>
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
              While we recommend 15-yard for most roofing jobs, we have sizes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((dumpster) => (
              <Link
                key={dumpster.size}
                href={dumpster.href}
                className={`group rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all ${
                  dumpster.size === '15'
                    ? 'bg-primary text-white ring-4 ring-primary/20'
                    : 'bg-white'
                }`}
              >
                {dumpster.size === '15' && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Recommended for Roofing
                  </span>
                )}
                <div
                  className={`text-4xl font-black mb-2 ${
                    dumpster.size === '15' ? 'text-white' : 'text-primary'
                  }`}
                >
                  {dumpster.size}{' '}
                  <span className={`text-xl ${dumpster.size === '15' ? 'text-white/70' : 'text-gray-400'}`}>
                    yard
                  </span>
                </div>
                <h3
                  className={`font-bold mb-2 ${dumpster.size === '15' ? 'text-white' : 'text-secondary'}`}
                >
                  {dumpster.name}
                </h3>
                <p className={`text-sm mb-4 ${dumpster.size === '15' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.dimensions}
                </p>
                <span
                  className={`inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all ${
                    dumpster.size === '15' ? 'text-white' : 'text-primary'
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
            Ready for Your Roofing Project?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book your dumpster online now. Same-day delivery available throughout Jacksonville.
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
              'Dumpsters for Roofing Projects',
              'Dumpster rental for roofing projects in Jacksonville FL. 15-yard dumpsters perfect for shingle removal and roof replacements.',
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
                name: 'Dumpsters for Roofing Projects',
                url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-roofing-projects',
              },
            ])
          ),
        }}
      />
    </div>
  )
}
