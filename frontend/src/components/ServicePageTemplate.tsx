import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Clock,
  Shield,
  DollarSign,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'

interface ServicePageTemplateProps {
  title: string
  description: string
  heroImage?: string
  features: string[]
  idealFor: string[]
  pricing?: {
    startingAt: string
    includes: string[]
  }
  faqs?: {
    question: string
    answer: string
  }[]
  relatedServices?: {
    title: string
    href: string
    description: string
  }[]
  showDumpsterSizes?: boolean
  ctaText?: string
}

export function ServicePageTemplate({
  title,
  description,
  heroImage,
  features,
  idealFor,
  pricing,
  faqs,
  relatedServices,
  showDumpsterSizes = true,
  ctaText = 'Get a Free Quote',
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              className="object-cover opacity-20"
            />
          </div>
        )}
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
              <span className="text-white">{title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {title} in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">{description}</p>
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
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews - Compact */}
      {/* Features & Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Features & Benefits
              </h2>
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
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
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

      {/* Pricing Section */}
      {pricing && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-3xl p-8 lg:p-12 text-center">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Starting at {pricing.startingAt}
              </h2>
              <p className="text-white/60 mb-8">All-inclusive pricing. No surprises.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {pricing.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get Your Quote: {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Dumpster Sizes */}
      {showDumpsterSizes && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Available Sizes
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Choose Your Dumpster Size
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {DUMPSTER_SIZES.map((dumpster) => (
                <Link
                  key={dumpster.size}
                  href={dumpster.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl font-black text-primary mb-2">
                    {dumpster.size} <span className="text-xl text-gray-400">yard</span>
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{dumpster.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{dumpster.dimensions}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
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
                  className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all"
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
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for a free quote. Same-day delivery available.
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
