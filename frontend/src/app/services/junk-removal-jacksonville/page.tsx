import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Clock,
  Users,
  Sparkles,
  Recycle,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Junk Removal Jacksonville FL | Full-Service Hauling | 904 Dumpster',
  description:
    'Professional junk removal in Jacksonville FL. We do all the heavy lifting. Same-day service available. Furniture, appliances, yard waste & more. Call (904) 240-5598.',
  keywords: [
    'junk removal jacksonville fl',
    'junk hauling jacksonville',
    'furniture removal jacksonville',
    'appliance removal jacksonville',
    'trash removal service jacksonville',
  ],
}

const WHAT_WE_TAKE = [
  'Furniture & Mattresses',
  'Appliances',
  'Electronics (TVs, computers)',
  'Yard Waste & Debris',
  'Construction Debris',
  'Hot Tubs & Spas',
  'Exercise Equipment',
  'Office Furniture',
  'Garage & Attic Junk',
  'Shed Contents',
  'Estate Cleanout Items',
  'General Household Junk',
]

const PROCESS_STEPS = [
  {
    step: '1',
    title: 'Call or Book Online',
    description: 'Tell us what you need removed. We\'ll give you a free estimate over the phone.',
  },
  {
    step: '2',
    title: 'We Show Up',
    description: 'Our team arrives on time with the truck and equipment to handle your junk.',
  },
  {
    step: '3',
    title: 'Point & It\'s Gone',
    description: 'Just point to what you want removed. We do all the heavy lifting and loading.',
  },
  {
    step: '4',
    title: 'We Clean Up',
    description: 'We sweep up and leave your space clean. You pay only after the job is done.',
  },
]

export default function JunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white">Services</Link>
                <span>/</span>
                <span className="text-white">Junk Removal</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Junk Removal in{' '}
                <span className="text-primary">Jacksonville, FL</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Don&apos;t want to lift a finger? Our full-service junk removal team does all the work.
                Just point to what you want gone, and we&apos;ll make it disappear.
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
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Junk Removal?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>We do ALL the heavy lifting</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>We clean up after ourselves</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Recycle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>Eco-friendly disposal & recycling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junk Removal vs Dumpster */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Junk Removal vs. Dumpster Rental</h2>
            <p className="text-white/80">
              Don&apos;t want to load it yourself? Junk removal is perfect when you need us to do all the work.
              Prefer DIY? Check out our{' '}
              <Link href="/services" className="text-white underline font-semibold">
                dumpster rental options
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              How Junk Removal Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Getting rid of your junk has never been easier. Here&apos;s how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Take */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Items We Remove
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What We Take
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              If you can lift it (or not!), we can haul it. Here&apos;s just some of what we remove:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WHAT_WE_TAKE.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Don&apos;t see your item? Call us – we probably take it!</p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-3xl p-8 lg:p-12 text-center">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Pay Only for What We Take
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Our pricing is based on how much space your junk takes in our truck.
              We&apos;ll give you an exact price before we start – no surprises.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-black text-white mb-2">1/4</div>
                <div className="text-white/60">Truck Load</div>
                <div className="text-primary font-bold mt-2">Starting at $150</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-black text-white mb-2">1/2</div>
                <div className="text-white/60">Truck Load</div>
                <div className="text-primary font-bold mt-2">Starting at $275</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-black text-white mb-2">Full</div>
                <div className="text-white/60">Truck Load</div>
                <div className="text-primary font-bold mt-2">Starting at $450</div>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Get Rid of Your Junk?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for same-day junk removal in Jacksonville, FL.
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
