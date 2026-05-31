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
  localContent?: string
  localContentTitle?: string
  quickAnswer?: string
  bodyContent?: string
  bodyContentTitle?: string
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
  localContent,
  localContentTitle,
  quickAnswer,
  bodyContent,
  bodyContentTitle,
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
              <Link href="/" className="hover:text-white">Dumpster Rental Jacksonville</Link>
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
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/dumpster-size-guide"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Check Size Guidelines
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer (AEO + voice/Speakable target). Renders only when authored. */}
      {quickAnswer && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div id="answer-intro" className="bg-primary/5 border-l-4 border-primary p-6 lg:p-8 rounded-r-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Quick Answer</p>
              <div className="text-base lg:text-lg text-gray-700 leading-relaxed space-y-4">
                {quickAnswer.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Body Content - rich, brand- and keyword-dense prose. Renders directly after Quick Answer for top-of-page content depth. */}
      {bodyContent && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            {bodyContentTitle && (
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-8 text-center">
                {bodyContentTitle}
              </h2>
            )}
            <div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5 [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-secondary [&_h3]:mt-10 [&_h3]:mb-4 [&_a]:text-primary [&_a]:font-semibold [&_a:hover]:underline [&_strong]:text-secondary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2"
              dangerouslySetInnerHTML={{ __html: bodyContent }}
            />
          </div>
        </section>
      )}

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
              <p className="text-xl font-bold text-secondary mb-6">Ideal For</p>
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

      {/* Local Map + Jacksonville Signal. Renders BEFORE pricing so the location-anchored H2 sits above "Starting at". */}
      {localContent && (
        <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Jacksonville Headquarters
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                {localContentTitle || `${title} Service Area in Jacksonville, FL`}
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
              <div
                className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: localContent }}
              />

              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[320px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.974670483613!2d-81.54286112412986!3d30.294782706665742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db642a87e4a74b%3A0x1adfa8130de0c999!2s904%20Dumpster%20-%20Dumpster%20Rental%20Jacksonville!5e0!3m2!1sen!2s!4v1778233886677!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0 w-full h-full min-h-[320px]"
                    title={`904 Dumpster ${title} - Jacksonville FL`}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                  <div className="font-bold text-secondary mb-1">904 Dumpster</div>
                  <div>2797 Anniston Rd</div>
                  <div>Jacksonville, FL 32246</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
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

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section id="faq-section" className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
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
              <p className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Related Services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all"
                >
                  <p className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </p>
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

      {/* Internal Links - Service Areas */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pricing & Size Links */}
            <div>
              <p className="font-bold text-secondary mb-4">Pricing & Sizes</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/dumpster-rental-pricing-jacksonville" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental pricing in Jacksonville
                  </Link>
                </li>
                <li>
                  <Link href="/10-yard-dumpster-rental" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    10-yard dumpster rental Jacksonville
                  </Link>
                </li>
                <li>
                  <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    15-yard dumpster rental Jacksonville
                  </Link>
                </li>
                <li>
                  <Link href="/20-yard-dumpster-rental" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    20-yard dumpster rental Jacksonville
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Areas */}
            <div>
              <p className="font-bold text-secondary mb-4">Popular Service Areas</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in St. Augustine, FL
                  </Link>
                </li>
                <li>
                  <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in Orange Park, FL
                  </Link>
                </li>
                <li>
                  <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in Ponte Vedra Beach, FL
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    View all service areas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Get Started?
          </p>
          <p className="text-white/80 text-xl mb-10">
            Book online now for fast, easy scheduling. Same-day delivery available.
          </p>
          <a
            href="https://app.icans.ai/customer-portal/904dumpster/book/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            Book Online Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  )
}
