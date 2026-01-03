import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  Phone,
  Truck,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle2,
  Home as HomeIcon,
  HardHat,
  Building2,
  MapPin,
  Users,
  DollarSign,
  Award,
  Zap,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'
import { QuickSizeFinder } from '@/components/QuickSizeFinder'
import { GoogleReviews } from '@/components/GoogleReviews'
import DeliveryMap from '@/components/DeliveryMap'

// Service Areas for Geo Section
const SERVICE_AREAS = {
  duval: ['Jacksonville', 'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach', 'Arlington', 'Riverside', 'San Marco', 'Mandarin', 'Southside'],
  stJohns: ['St. Augustine', 'Ponte Vedra Beach', 'Nocatee', 'St. Johns', 'Fruit Cove', 'Julington Creek'],
  clay: ['Orange Park', 'Fleming Island', 'Middleburg', 'Green Cove Springs', 'Oakleaf'],
  nassau: ['Fernandina Beach', 'Yulee', 'Callahan', 'Hilliard'],
}

// FAQ Data - PAA optimized (40-50 words, direct first sentence)
const FAQ_DATA = [
  {
    question: 'How much does dumpster rental cost in Jacksonville?',
    answer:
      'Dumpster rental in Jacksonville costs $275-$375 at 904 Dumpster. Most competitors charge $350-$500. Our 10-yard is $275, 15-yard is $325, and 20-yard is $375. All prices include delivery, pickup, disposal, and 5-day rental.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer:
      'Standard rental is 5 days, included in your price. Extensions cost $15 per additional day. Most home cleanouts finish within the 5-day period. Call us if you need more time.',
  },
  {
    question: 'What size dumpster do I need?',
    answer:
      'A 10-yard fits garage cleanouts, 15-yard handles roofing projects and kitchen remodels, and 20-yard works for whole-house cleanouts and construction. When unsure, size up—you only pay for what you use.',
  },
  {
    question: 'Do you offer same-day delivery in Jacksonville?',
    answer:
      'Yes, same-day delivery is available when you book before noon. We serve Jacksonville, Orange Park, St. Augustine, Ponte Vedra, and all of Northeast Florida. Next-day delivery is always guaranteed.',
  },
  {
    question: 'What can I put in the dumpster?',
    answer:
      'Most household items, construction debris, furniture, appliances, yard waste, and roofing materials are accepted. Prohibited items include hazardous waste, paint, batteries, tires, and electronics.',
  },
]

// JSON-LD Schemas

// FAQ Schema for rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// LocalBusiness Schema - ONLY on Homepage (main office in Jacksonville)
// This is the main business location - location pages use Service schema instead
// STRATEGY: Emphasize "904 Area Code" and "Locally Owned" to beat national brokers
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.904dumpster.com/#localbusiness',
  // IMPORTANT: Match GBP name exactly for Local Pack ranking
  name: '904 Dumpster - Dumpster Rental Jacksonville',
  // BROKER KILLER: Emphasize local ownership - Google's Helpful Content update prioritizes local expertise
  description: '904 Dumpster is a locally owned and operated dumpster rental company serving the 904 area code - Jacksonville and Northeast Florida. Not a broker or national call center. Same-day delivery, transparent pricing, and real local service from your neighbors.',
  alternateName: '904 Dumpster',
  slogan: 'Your Local 904 Dumpster Rental - Not a Broker, Just Your Neighbors',
  url: 'https://www.904dumpster.com',
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: 'https://www.904dumpster.com/images/og-image.jpg',
  logo: 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
  // Social proof - tells Google these are all the same entity
  sameAs: [
    'https://www.facebook.com/p/904-Dumpster-Dumpster-Rental-Jacksonville-61556959737507/',
    'https://www.yelp.com/biz/904-dumpsters-jacksonville',
    'https://www.instagram.com/904dumpsters/',
    'https://www.tiktok.com/@904dumpsters',
    'https://maps.app.goo.gl/Vrp3o6ejzffzjKnRA',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32246',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.3322,
    longitude: -81.6557,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '148',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mike T.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Fast delivery, fair pricing, and the driver was super helpful placing the dumpster exactly where I needed it. Will use again!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah K.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Used them for my kitchen renovation. No hidden fees, easy scheduling. Highly recommend 904 Dumpster!',
    },
  ],
  // Local expertise signals for Google's Helpful Content update
  knowsAbout: [
    'Jacksonville dumpster rental',
    'Northeast Florida waste disposal',
    'Duval County construction debris removal',
    'St. Johns County dumpster service',
    'Clay County roll-off containers',
    '904 area code local services',
    // Additional services for keyword ranking
    'Junk removal Jacksonville FL',
    'Demolition services Jacksonville',
    'Construction debris hauling Jacksonville',
    'Estate cleanout services Northeast Florida',
    'Roofing debris removal Jacksonville',
  ],
  // Additional local business properties
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Jacksonville', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'St. Augustine', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Orange Park', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Ponte Vedra Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Jacksonville Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Atlantic Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Neptune Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Middleburg', containedInPlace: { '@type': 'State', name: 'Florida' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dumpster Rental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '10 Yard Dumpster Rental',
          url: 'https://www.904dumpster.com/10-yard-dumpster-rental',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '15 Yard Dumpster Rental',
          url: 'https://www.904dumpster.com/15-yard-dumpster-rental',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '20 Yard Dumpster Rental',
          url: 'https://www.904dumpster.com/20-yard-dumpster-rental',
        },
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      {/* LocalBusiness Schema - Main office in Jacksonville (NOT applied globally) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen -mt-16 lg:-mt-32">
        {/* ============================================
            SECTION 1: HERO (Conversion & Intent)
        ============================================ */}
        <section className="relative min-h-screen flex items-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/main-hero-dumpster.jpeg"
              alt="Affordable Dumpster Rental Jacksonville FL - 904 Dumpster"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/70" />
          </div>

          {/* Floating Decorations */}
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-32 lg:py-40 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Headlines */}
              <div>
                {/* Trust Signal Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/90 text-sm font-medium">
                    148 Five-Star Google Reviews
                  </span>
                </div>

                {/* H1 - Primary Keyword */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Affordable Dumpster Rental in{' '}
                  <span className="text-primary">Jacksonville, FL</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  Local, Reliable Roll-Off Bins for Homeowners & Contractors in the 904.
                  Same-day delivery. No hidden fees.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Same-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Locally Owned</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>No Hidden Fees</span>
                  </div>
                </div>

                {/* CTA Buttons - Mobile */}
                <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                  <a
                    href="#sizes"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 transition-all"
                  >
                    <Truck className="w-5 h-5" />
                    View Our Dumpster Sizes
                  </a>
                </div>
              </div>

              {/* Right - Quick Size Finder */}
              <QuickSizeFinder />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2: SIZE SELECTOR (Visual & Transactional)
        ============================================ */}
        <section id="sizes" className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Roll-Off Dumpster Sizes
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                Choose Your Dumpster Size
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                All prices include delivery, pickup, disposal, and a 5-day rental period.
                No hidden fees, ever.
              </p>
            </div>

            {/* Size Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  size: '10',
                  name: '10 Yard Dumpster',
                  dimensions: "12' L × 7.5' W × 3.6' H",
                  tons: '1.5',
                  bestFor: ['Small Cleanouts', 'Garage Cleanout', 'Single Room Reno'],
                  price: '$275',
                  popular: false,
                  image: '/images/10 Yard Dumpster.avif',
                  href: '/10-yard-dumpster-rental',
                },
                {
                  size: '15',
                  name: '15 Yard Dumpster',
                  dimensions: "14' L × 7.5' W × 4.5' H",
                  tons: '2',
                  bestFor: ['Roofing Projects', 'Medium Cleanouts', 'Kitchen Remodel'],
                  price: '$325',
                  popular: false,
                  image: '/images/15 yard dumpster.avif',
                  href: '/15-yard-dumpster-rental',
                },
                {
                  size: '20',
                  name: '20 Yard Dumpster',
                  dimensions: "14' L × 7.5' W × 5.8' H",
                  tons: '2',
                  bestFor: ['Large Renovations', 'Construction', 'Estate Cleanout'],
                  price: '$375',
                  popular: true,
                  image: '/images/20 yard dumpster.avif',
                  href: '/20-yard-dumpster-rental',
                },
              ].map((dumpster) => (
                <div
                  key={dumpster.size}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                    dumpster.popular ? 'border-2 border-green-600' : 'border border-green-500'
                  }`}
                >

                  {/* Popular Badge */}
                  {dumpster.popular && (
                    <div className="absolute top-6 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Image - White background */}
                  <div className="bg-white p-6 pb-4">
                    <Image
                      src={dumpster.image}
                      alt={`${dumpster.name} Rental Jacksonville FL`}
                      width={400}
                      height={280}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-2">
                    {/* Size & Price Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-4xl font-black text-secondary">{dumpster.size}</span>
                        <span className="text-gray-400 text-lg ml-1">yard</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-primary">{dumpster.price}</div>
                        <div className="text-xs text-gray-400">5-day rental</div>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5 p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Dimensions</div>
                        <div className="text-sm font-semibold text-secondary">{dumpster.dimensions}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Weight Included</div>
                        <div className="text-sm font-semibold text-secondary">{dumpster.tons} tons</div>
                      </div>
                    </div>

                    {/* Best For Tags */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {dumpster.bestFor.map((item, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <a
                        href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-all duration-300 ${
                          dumpster.popular
                            ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30'
                            : 'bg-secondary hover:bg-primary text-white'
                        }`}
                      >
                        Book Now
                      </a>
                      <Link
                        href={dumpster.href}
                        className="w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Size Guide CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">Not sure which size you need?</p>
              <Link
                href="/dumpster-size-guide"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                View Our Complete Size Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: GOOGLE REVIEWS (Social Proof)
        ============================================ */}
        <GoogleReviews />

        {/* ============================================
            SECTION 4: PROBLEM-SOLVER GRID (Internal Linking)
        ============================================ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Solutions For Every Project
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                Dumpster Solutions for Every Project
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Whether you&apos;re a homeowner tackling a cleanout or a contractor managing a job site,
                we have the right dumpster for you.
              </p>
            </div>

            {/* Silo Links Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: HomeIcon,
                  title: 'Home Cleanouts',
                  desc: 'Purge the clutter with ease. Perfect for garage, attic, and estate cleanouts.',
                  href: '/dumpster-rental/dumpsters-for-home-cleanouts',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: HardHat,
                  title: 'Construction Sites',
                  desc: 'Heavy-duty bins for pros. Handles lumber, drywall, and debris.',
                  href: '/dumpster-rental/dumpsters-for-construction-projects',
                  color: 'from-orange-500 to-orange-600',
                },
                {
                  icon: Building2,
                  title: 'Roofing Jobs',
                  desc: 'Shingle-ready roll-offs. Built for heavy roofing materials.',
                  href: '/dumpster-rental/dumpsters-for-roofing-projects',
                  color: 'from-red-500 to-red-600',
                },
                {
                  icon: Users,
                  title: 'Property Managers',
                  desc: 'Fast turnarounds for rentals. Recurring service available.',
                  href: '/dumpster-rental/dumpsters-for-property-owners',
                  color: 'from-purple-500 to-purple-600',
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: LOCAL SERVICE AREA "GEO-SILO"
        ============================================ */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Content */}
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Service Areas
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                  Serving Jacksonville & Surrounding 904 Areas
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We proudly deliver dumpsters throughout Duval, St. Johns, Clay, and Nassau counties.
                  Same-day delivery available in most areas when you call before noon.
                </p>

                {/* County Lists */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Duval County
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {SERVICE_AREAS.duval.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      St. Johns County
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {SERVICE_AREAS.stJohns.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Clay County
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {SERVICE_AREAS.clay.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Nassau County
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {SERVICE_AREAS.nassau.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/locations"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    View All Service Areas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right - Map */}
              {/*
                IMPORTANT: Replace this placeholder with your actual Google Business Profile embed URL!
                Steps:
                1. Go to Google Maps and search for your business (or create GMB listing first)
                2. Click "Share" > "Embed a map"
                3. Copy the src URL from the iframe code
                4. Paste it below

                Having a generic Jacksonville map (instead of your business) sends negative quality signals to Google.
              */}
              <div className="bg-gray-100 rounded-3xl overflow-hidden h-[500px] lg:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882378.2701757269!2d-82.33537777880585!3d30.243061145835284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db642a87e4a74b%3A0x1adfa8130de0c999!2s904%20Dumpster%20-%20Dumpster%20Rental%20Jacksonville!5e0!3m2!1sen!2s!4v1766570595183!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="904 Dumpster Service Area - Jacksonville FL"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6: WHY CHOOSE US (Authority)
        ============================================ */}
        <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                The Local Difference
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We&apos;re not a broker or a national call center. We&apos;re your neighbors,
                and we take pride in serving the Jacksonville community.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: 'No Hidden Fees',
                  desc: 'Your quote includes everything: delivery, pickup, disposal, and rental period. What we quote is what you pay.',
                },
                {
                  icon: Truck,
                  title: 'Driveway-Friendly Trucks',
                  desc: 'Our trucks are designed to protect your driveway. We use boards and take care placing your dumpster.',
                },
                {
                  icon: Award,
                  title: 'Locally Owned',
                  desc: 'We live and work in Jacksonville. We\'re not a broker sending random trucks – we\'re your local dumpster experts.',
                },
                {
                  icon: Zap,
                  title: 'Same-Day Service',
                  desc: 'Call before noon and get your dumpster the same day. We understand your project can\'t wait.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-white/40 mt-4">Fast booking • Instant confirmation • Same-day delivery</p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 7: FAQ (SEO + Schema)
        ============================================ */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about renting a dumpster in Jacksonville.
              </p>
            </div>

            {/* FAQ Accordion */}
            <FAQSection faqs={FAQ_DATA} />

            {/* More Questions CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">Have more questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frequently-asked-questions"
                  className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  View All FAQs
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <span className="text-gray-300 hidden sm:block">|</span>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 text-secondary font-bold"
                >
                  <Phone className="w-4 h-4" />
                  Call Us: {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 8: DELIVERY MAP (Social Proof)
        ============================================ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Trusted By Your Neighbors
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                Recent Deliveries Across Jacksonville
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                See where we&apos;ve recently delivered dumpsters. From the beaches to Orange Park,
                we&apos;re proud to serve the entire 904 area.
              </p>
            </div>

            {/* Delivery Map Component */}
            <DeliveryMap height="500px" showStats={true} />
          </div>
        </section>

        {/* ============================================
            SECTION 9: FINAL CTA
        ============================================ */}
        <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Book online now for fast, easy dumpster rental in Jacksonville, FL.
              Same-day delivery available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link
                href="/dumpster-size-guide"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-white hover:text-primary transition-all duration-300"
              >
                Check Size Guidelines
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
