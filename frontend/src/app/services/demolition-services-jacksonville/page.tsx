import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Hammer,
  Shield,
  Clock,
  Truck,
  FileCheck,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Demolition Services Jacksonville FL | Professional Demo | 904 Dumpster',
  description:
    'Professional demolition services in Jacksonville FL. Shed, deck, pool, and interior demolition. Permits handled. Debris removal included. Call (904) 240-5598.',
  keywords: [
    'demolition services jacksonville fl',
    'shed demolition jacksonville',
    'deck demolition jacksonville',
    'pool demolition jacksonville',
    'interior demolition jacksonville',
  ],
}

const DEMO_SERVICES = [
  {
    title: 'Shed & Outbuilding Demo',
    description: 'Complete removal of sheds, barns, and outbuildings including foundation.',
    price: 'From $500',
  },
  {
    title: 'Deck & Patio Removal',
    description: 'Wood and composite deck teardown with post removal.',
    price: 'From $400',
  },
  {
    title: 'Pool Demolition',
    description: 'Above-ground and in-ground pool removal with backfill.',
    price: 'From $2,500',
  },
  {
    title: 'Interior Demolition',
    description: 'Selective interior demo for remodeling projects.',
    price: 'From $300',
  },
  {
    title: 'Fence Removal',
    description: 'Wood, vinyl, and chain-link fence teardown.',
    price: 'From $200',
  },
  {
    title: 'Concrete Removal',
    description: 'Driveway, patio, and sidewalk demolition.',
    price: 'From $400',
  },
]

export default function DemolitionServicesPage() {
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
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Demolition Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Demolition Services in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professional demolition for sheds, decks, pools, and more. We handle permits,
              do the demo, and haul away all debris. One call does it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Shield className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="font-bold">Licensed & Insured</div>
            </div>
            <div>
              <FileCheck className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="font-bold">Permits Handled</div>
            </div>
            <div>
              <Truck className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="font-bold">Debris Removal Included</div>
            </div>
            <div>
              <Clock className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="font-bold">Fast Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Our Demolition Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What We Demolish
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From small sheds to swimming pools, we handle demolition projects of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMO_SERVICES.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all"
              >
                <Hammer className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <div className="text-primary font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Estimate', desc: 'We assess the project and provide a detailed quote.' },
              { step: '2', title: 'Permits', desc: 'We pull any required permits from the city.' },
              { step: '3', title: 'Demolition', desc: 'Our crew completes the demo safely and efficiently.' },
              { step: '4', title: 'Cleanup', desc: 'All debris is removed and the site is left clean.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Free on-site estimate',
              'Permit acquisition (when required)',
              'Professional demolition crew',
              'All necessary equipment',
              'Complete debris removal',
              'Site cleanup and sweeping',
              'Disposal at proper facilities',
              'Liability insurance coverage',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Start Your Demolition Project?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for a free estimate. We&apos;ll handle everything from permits to cleanup.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
