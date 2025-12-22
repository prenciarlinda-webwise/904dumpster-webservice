import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact 904 Dumpster for a free dumpster rental quote in Jacksonville FL. Call (904) 240-5598. Same-day delivery available.',
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
              Ready to rent a dumpster? Have questions about our service? We are here to help.
              Get in touch today for a free quote.
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
            {/* Contact Form */}
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Get a Free Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Request Your Dumpster
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we will get back to you within 1 hour during business
                hours. Need it faster? Call us directly at{' '}
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold">
                  {BUSINESS.phone}
                </a>
                .
              </p>

              <form className="space-y-6" action="/api/contact" method="POST">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(904) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-secondary mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="123 Main St, Jacksonville, FL"
                    />
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-sm font-semibold text-secondary mb-2">
                      Dumpster Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Not sure yet</option>
                      <option value="10">10 Yard Dumpster</option>
                      <option value="15">15 Yard Dumpster</option>
                      <option value="20">20 Yard Dumpster</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-secondary mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="home-cleanout">Home Cleanout</option>
                    <option value="renovation">Renovation/Remodel</option>
                    <option value="roofing">Roofing Project</option>
                    <option value="construction">Construction</option>
                    <option value="demolition">Demolition</option>
                    <option value="yard-waste">Yard Waste/Landscaping</option>
                    <option value="estate-cleanout">Estate Cleanout</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project, preferred delivery date, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
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
