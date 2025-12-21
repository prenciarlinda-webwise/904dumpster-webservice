import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  Truck,
  Home,
  HardHat,
  Building2,
  Hammer,
  Trash2,
  CheckCircle2,
  Users,
  Briefcase,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services Jacksonville FL | 904 Dumpster',
  description:
    'Professional dumpster rental, junk removal, and demolition services in Jacksonville FL. 10, 15, & 20 yard roll-off containers. Same-day delivery available.',
  keywords: [
    'dumpster rental services jacksonville',
    'roll off dumpster jacksonville fl',
    'junk removal jacksonville',
    'demolition services jacksonville',
    'construction dumpster rental',
    'residential dumpster rental',
  ],
}

const SERVICE_CATEGORIES = [
  {
    title: 'Dumpster Rental',
    description: 'Roll-off dumpsters in 10, 15, and 20 yard sizes for any project.',
    icon: Truck,
    href: '#dumpster-sizes',
    color: 'from-primary to-green-600',
  },
  {
    title: 'Junk Removal',
    description: 'Full-service junk hauling. We do the heavy lifting for you.',
    icon: Trash2,
    href: '/services/junk-removal-jacksonville',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Demolition Services',
    description: 'Professional demolition for sheds, decks, pools, and more.',
    icon: Hammer,
    href: '/services/demolition-services-jacksonville',
    color: 'from-orange-500 to-orange-600',
  },
]

const PROJECT_SERVICES = [
  {
    title: 'Home Cleanouts',
    description: 'Estate cleanouts, garage purges, and decluttering projects.',
    icon: Home,
    href: '/services/home-cleanout-dumpster-rental',
  },
  {
    title: 'Construction Projects',
    description: 'Heavy-duty dumpsters for job sites, renovations, and new builds.',
    icon: HardHat,
    href: '/services/construction-dumpster-rental',
  },
  {
    title: 'Roofing Jobs',
    description: 'Shingle-ready roll-offs built for heavy roofing materials.',
    icon: Building2,
    href: '/services/roofing-dumpster-rental',
  },
  {
    title: 'Concrete & Heavy Debris',
    description: 'Specialized containers for concrete, brick, and dirt disposal.',
    icon: Hammer,
    href: '/services/concrete-disposal-dumpster-rental',
  },
]

const USER_SERVICES = [
  {
    title: 'Residential',
    description: 'Homeowner-friendly dumpsters for DIY projects and cleanouts.',
    icon: Home,
    href: '/services/residential-dumpster-rental',
  },
  {
    title: 'Contractors',
    description: 'Reliable service for construction professionals. Volume discounts available.',
    icon: Briefcase,
    href: '/services/contractor-dumpster-rental',
  },
  {
    title: 'Property Managers',
    description: 'Fast turnarounds for rental turnovers and property maintenance.',
    icon: Users,
    href: '/services/property-management-dumpster-rental',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpster Rental Services in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              From small cleanouts to large construction projects, we have the right solution
              for your waste removal needs. Same-day delivery available.
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three core services to handle all your waste removal and demolition needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dumpster Sizes Section */}
      <section id="dumpster-sizes" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Roll-Off Dumpster Sizes
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Choose Your Dumpster Size
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer three sizes to fit any project. Not sure which one you need?{' '}
              <Link href="/services/dumpster-size-guide" className="text-primary font-semibold hover:underline">
                Check our size guide
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((dumpster) => (
              <div
                key={dumpster.size}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={`/images/${dumpster.size}-yard-dumpster.jpg`}
                    alt={`${dumpster.name} Rental Jacksonville FL`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl font-black text-white">{dumpster.size}</span>
                    <span className="text-white/80 ml-1">yard</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">{dumpster.name}</h3>
                  <ul className="space-y-2 mb-6 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{dumpster.dimensions}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{dumpster.capacity}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{dumpster.weight}</span>
                    </li>
                  </ul>
                  <p className="text-gray-500 text-sm mb-6">{dumpster.description}</p>
                  <Link
                    href={`/services/${dumpster.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/dumpster-size-guide"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all"
            >
              View Complete Size Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* By Project */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              By Project Type
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Dumpsters for Every Project
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized solutions for different types of projects and waste materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_SERVICES.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
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

      {/* By User Type */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              By Customer Type
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Solutions for Everyone
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you&apos;re a homeowner, contractor, or property manager, we have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {USER_SERVICES.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
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
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for a free quote. Same-day delivery available in Jacksonville and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-white hover:text-primary transition-all duration-300"
            >
              Request Quote Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
