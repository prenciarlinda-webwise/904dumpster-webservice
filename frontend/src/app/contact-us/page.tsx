import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact 904 Dumpster for a free dumpster rental quote in Jacksonville FL. Call (904) 240-5598. Same-day delivery available.',
  keywords: [],
  alternates: {
    canonical: 'https://www.904dumpster.com/contact-us',
  },
}

export default function ContactPage() {
  const contactSchema = generateContactPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Contact Us', url: 'https://www.904dumpster.com/contact-us' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Contact <span className="text-primary">904 Dumpster</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Ready to rent a dumpster? Book online instantly or give us a call. Same-day delivery available when you book before noon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center text-white">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-6 h-6" />
              <span className="text-xl font-bold">{BUSINESS.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-6 h-6" />
              <span className="text-xl font-bold">{BUSINESS.email}</span>
            </a>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-bold">Mon-Sun 8AM-7PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Book Online Section */}
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Ready to Book?
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Schedule Your Dumpster Online
              </h2>
              <p className="text-gray-600 mb-8">
                Book your dumpster rental instantly through our online scheduling system. Choose your size, select your delivery date, and you are all set. Same-day delivery available when you book before noon.
              </p>

              {/* Booking CTA Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Book Online Now</h3>
                <p className="text-white/80 mb-6">
                  Select your dumpster size and schedule delivery in minutes. No phone calls needed.
                </p>
                <a
                  href="https://app.icans.ai/customer-portal/904dumpster/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 w-full"
                >
                  Book Your Dumpster Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Size Options */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-secondary mb-4">Available Dumpster Sizes</h3>
                <div className="space-y-3">
                  <Link
                    href="/10-yard-dumpster-rental"
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="font-bold text-secondary">10 Yard Dumpster</span>
                      <span className="text-gray-500 text-sm block">Perfect for small cleanouts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">$299</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link
                    href="/15-yard-dumpster-rental"
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="font-bold text-secondary">15 Yard Dumpster</span>
                      <span className="text-gray-500 text-sm block">Great for roofing & remodels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">$349</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link
                    href="/20-yard-dumpster-rental"
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="font-bold text-secondary">20 Yard Dumpster</span>
                      <span className="text-gray-500 text-sm block">Ideal for large renovations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">$399</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  Not sure which size? <Link href="/dumpster-size-guide" className="text-primary font-semibold hover:underline">View our size guide</Link>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">Phone</div>
                      <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        className="text-primary text-lg font-bold hover:underline"
                      >
                        {BUSINESS.phone}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Call or text anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">Email</div>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-primary text-lg font-bold hover:underline"
                      >
                        {BUSINESS.email}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We respond within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">Service Area</div>
                      <p className="text-gray-600">{BUSINESS.address}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Serving Jacksonville & Northeast Florida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">Business Hours</div>
                      <p className="text-gray-600">{BUSINESS.hours.weekday}</p>
                      <p className="text-gray-600">{BUSINESS.hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-secondary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose 904 Dumpster?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Same-day delivery available throughout Jacksonville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Transparent, all-inclusive pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Local, family-owned business you can trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Flexible rental periods to fit your project timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Professional, courteous service every time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
            Proudly Serving Northeast Florida
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            We deliver dumpsters throughout Jacksonville and surrounding communities including:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Jacksonville',
              'Jacksonville Beach',
              'Atlantic Beach',
              'Neptune Beach',
              'Ponte Vedra Beach',
              'St. Augustine',
              'Orange Park',
              'Middleburg',
              'Fleming Island',
              'Green Cove Springs',
              'Nocatee',
              'World Golf Village',
            ].map((area) => (
              <div
                key={area}
                className="bg-white rounded-full px-6 py-3 shadow-sm text-gray-700"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
