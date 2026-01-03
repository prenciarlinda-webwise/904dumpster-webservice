import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, MapPin, ArrowRight, CheckCircle2, Truck, Clock, Shield } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Areas | Dumpster Rental Jacksonville & Northeast Florida',
  description: 'Professional dumpster rental serving Jacksonville, St. Augustine, Orange Park, Ponte Vedra Beach and all of Northeast Florida. Same-day delivery available.',
  keywords: [
    'dumpster rental service areas jacksonville',
    'northeast florida dumpster rental',
    'dumpster delivery locations',
    'where we deliver dumpsters',
  ],
  openGraph: {
    title: 'Service Areas | 904 Dumpster',
    description: 'Professional dumpster rental serving Jacksonville and all of Northeast Florida.',
    type: 'website',
  },
}

// Service area data organized by county
const SERVICE_AREAS = {
  duval: {
    name: 'Duval County',
    description: 'Jacksonville and surrounding beaches',
    locations: [
      { name: 'Jacksonville', href: '/', description: 'Main service hub - same day delivery' },
      { name: 'Jacksonville Beach', href: '/dumpster-rental-jacksonville-beach-fl', description: 'Beaches area service' },
      { name: 'Atlantic Beach', href: '/dumpster-rental-atlantic-beach-fl', description: 'Coastal community service' },
      { name: 'Neptune Beach', href: '/dumpster-rental-neptune-beach-fl', description: 'Beach town service' },
      { name: 'Arlington', href: '/', description: 'East Jacksonville service' },
      { name: 'Mandarin', href: '/', description: 'South Jacksonville service' },
      { name: 'Southside', href: '/', description: 'Southeast Jacksonville service' },
      { name: 'Riverside', href: '/', description: 'Historic district service' },
    ],
  },
  stJohns: {
    name: 'St. Johns County',
    description: 'St. Augustine and Ponte Vedra areas',
    locations: [
      { name: 'St. Augustine', href: '/dumpster-rental-st-augustine-fl', description: 'Historic coast service' },
      { name: 'Ponte Vedra Beach', href: '/dumpster-rental-ponte-vedra-fl', description: 'Ponte Vedra area service' },
      { name: 'Nocatee', href: '/dumpster-rental-ponte-vedra-fl', description: 'Master-planned community' },
      { name: 'St. Johns', href: '/dumpster-rental-st-augustine-fl', description: 'St. Johns area service' },
      { name: 'Fruit Cove', href: '/dumpster-rental-st-augustine-fl', description: 'North St. Johns service' },
    ],
  },
  clay: {
    name: 'Clay County',
    description: 'Orange Park and western communities',
    locations: [
      { name: 'Orange Park', href: '/dumpster-rental-orange-park-fl', description: 'Clay County hub' },
      { name: 'Fleming Island', href: '/dumpster-rental-fleming-island-fl', description: 'Fleming Island service' },
      { name: 'Middleburg', href: '/dumpster-rental-middleburg-fl', description: 'Rural Clay County' },
      { name: 'Green Cove Springs', href: '/dumpster-rental-green-cove-springs-fl', description: 'County seat service' },
      { name: 'Oakleaf', href: '/dumpster-rental-orange-park-fl', description: 'Oakleaf Plantation area' },
    ],
  },
  nassau: {
    name: 'Nassau County',
    description: 'Fernandina Beach and Yulee areas',
    locations: [
      { name: 'Fernandina Beach', href: '/dumpster-rental-fernandina-beach-fl', description: 'Amelia Island service' },
      { name: 'Yulee', href: '/dumpster-rental-fernandina-beach-fl', description: 'Nassau County service' },
      { name: 'Callahan', href: '/dumpster-rental-fernandina-beach-fl', description: 'Western Nassau service' },
      { name: 'Hilliard', href: '/dumpster-rental-fernandina-beach-fl', description: 'North Nassau service' },
    ],
  },
}

export default function LocationsPage() {
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
              <span className="text-white">Service Areas</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpster Rental Service Areas in{' '}
              <span className="text-primary">Northeast Florida</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Proudly serving Jacksonville and the surrounding communities with reliable,
              affordable dumpster rental services. Same-day delivery available in most areas.
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
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Same-Day</div>
                <div className="text-gray-500 text-sm">Delivery Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">4 Counties</div>
                <div className="text-gray-500 text-sm">Served Daily</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">7 Days</div>
                <div className="text-gray-500 text-sm">A Week Service</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Fully</div>
                <div className="text-gray-500 text-sm">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Where We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Service Areas by County
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide dumpster rental services throughout Northeast Florida.
              Click on any location to learn more about service in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(SERVICE_AREAS).map(([key, county]) => (
              <div
                key={key}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{county.name}</h3>
                    <p className="text-gray-500">{county.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {county.locations.map((location) => (
                    <Link
                      key={location.name}
                      href={location.href}
                      className="group flex items-center gap-2 p-3 bg-white rounded-xl hover:bg-primary hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white flex-shrink-0" />
                      <span className="font-medium text-secondary group-hover:text-white text-sm">
                        {location.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Local Service
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Serving the 904 Area Code & Beyond
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                As a locally owned and operated dumpster rental company, we know Northeast Florida.
                Our drivers are familiar with every neighborhood, ensuring fast, reliable delivery
                no matter where you are in our service area.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Same-day delivery in Jacksonville and nearby areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Next-day service to outer counties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">No extra delivery fees within service area</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Flexible scheduling to fit your project timeline</span>
                </li>
              </ul>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441050.7825570982!2d-81.97979073!3d30.3321838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20FL!5e0!3m2!1sen!2sus!4v1702900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="904 Dumpster Service Area Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Not Sure If We Service Your Area?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Give us a call! We may be able to accommodate locations outside our standard service area.
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
