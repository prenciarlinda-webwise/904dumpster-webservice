import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  Truck,
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
  Calendar,
} from 'lucide-react'
import { BUSINESS, REVIEWS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'
import { GoogleReviews } from '@/components/GoogleReviews'
import { HeroReviewSlider } from '@/components/HeroReviewSlider'

// Homepage-specific metadata (overrides layout.tsx default)
export const metadata: Metadata = {
  title: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
  description: 'Dumpster rental Jacksonville FL from $299. 10, 15 & 20-yard roll-off containers with free delivery, pickup, and disposal. Same-day delivery available. Locally owned since 2016. Call (904) 240-5598.',
  openGraph: {
    title: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
    description: 'Dumpster rental Jacksonville FL from $299. 10, 15 & 20-yard roll-off containers with free delivery, pickup, and disposal. Same-day delivery. Locally owned since 2016.',
    type: 'website',
    url: 'https://www.904dumpster.com',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
    images: [
      {
        url: '/images/main-hero-dumpster.jpeg',
        width: 1200,
        height: 630,
        alt: '904 Dumpster - Dumpster Rental Jacksonville FL',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
    description: 'Dumpster rental Jacksonville FL from $299. Same-day delivery. No hidden fees. Locally owned.',
    images: ['/images/main-hero-dumpster.jpeg'],
  },
  alternates: {
    canonical: 'https://www.904dumpster.com',
  },
}

// Service Areas for Geo Section
const SERVICE_AREAS = {
  duval: ['Jacksonville', 'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach', 'Arlington', 'Riverside', 'San Marco', 'Mandarin', 'Southside'],
  stJohns: ['St. Augustine', 'Ponte Vedra Beach', 'Nocatee', 'St. Johns', 'Fruit Cove', 'Julington Creek'],
  clay: ['Orange Park', 'Fleming Island', 'Middleburg', 'Green Cove Springs', 'Oakleaf'],
  nassau: ['Fernandina Beach', 'Yulee', 'Callahan', 'Hilliard'],
}

// FAQ Data - PAA optimized (40-50 words, direct first sentence)
// Expanded to 10 questions matching Google's "People Also Ask" queries
const FAQ_DATA = [
  {
    question: 'How much does dumpster rental cost in Jacksonville?',
    answer:
      'Dumpster rental in Jacksonville starts at $299 at 904 Dumpster. Most competitors charge $350-$500. Our 10-yard is $299, 15-yard is $349, and 20-yard is $399. All prices include delivery, pickup, and disposal.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer:
      'Standard rental is 5 days, included in your price. Extensions cost $15 per additional day. Most home cleanouts finish within the 5-day period. Call us if you need more time.',
  },
  {
    question: 'What size dumpster do I need?',
    answer:
      'A 10-yard fits garage cleanouts, 15-yard handles roofing projects and kitchen remodels, and 20-yard works for whole-house cleanouts and construction. When unsure, size up, you only pay for what you use.',
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
  {
    question: 'Is it cheaper to get a dumpster or go to the dump?',
    answer:
      'For most Jacksonville projects, renting a dumpster is cheaper than multiple dump runs. A single trip to Trail Ridge Landfill costs $50-75 in fees plus fuel and time. A 10-yard dumpster from 904 Dumpster is $299 all-in and holds 3 pickup truck loads, saving you 3+ round trips.',
  },
  {
    question: 'How much does it cost to rent a dumpster for 1 week?',
    answer:
      'At 904 Dumpster, our 10-yard rental starts at $299 (3-day rental) and our 15 and 20-yard start at $349 (5-day rental). Need more time? Extensions are $15/day, or choose our 2-week or monthly options.',
  },
  {
    question: 'Will a couch fit in a 10 yard dumpster?',
    answer:
      'Yes, a standard couch fits easily in a 10-yard dumpster. Our 10-yard container is 12 feet long and 3.6 feet high, large enough for a couch plus additional furniture, mattresses, or household items from a room cleanout.',
  },
  {
    question: 'What items are prohibited in dumpster rentals?',
    answer:
      'Prohibited items include hazardous materials (paint, chemicals, batteries), tires, electronics (TVs, computers), appliances containing freon, and medical waste. In Jacksonville, these items must be taken to the Duval County Household Hazardous Waste facility instead.',
  },
  {
    question: 'Do I need a permit for a dumpster in Jacksonville, FL?',
    answer:
      'No permit is needed if the dumpster is placed on your private property (driveway, yard). If placement is on a public street or right-of-way, you\'ll need a Right of Way Permit from Jacksonville\'s Development Services Department. 904 Dumpster places on driveways 99% of the time.',
  },
  {
    question: 'What is the cheapest way to get rid of junk in Jacksonville?',
    answer:
      'For small amounts of junk (a few items), hiring 904 Dumpster\'s junk removal service is the most affordable option. We do all the heavy lifting. For larger cleanouts, renting a 10-yard dumpster at $299 and loading it yourself is the cheapest approach. Self-hauling to Trail Ridge Landfill costs $50-75 per load plus your time, so a dumpster rental saves money after just 2-3 loads.',
  },
  {
    question: 'What is a roll-off dumpster?',
    answer:
      'A roll-off dumpster is an open-top container delivered on a roll-off truck. The truck tilts the bed and "rolls off" the container onto your driveway or job site. Roll-off dumpsters are the standard for residential and commercial waste removal projects. 904 Dumpster provides 10, 15, and 20-yard roll-off containers throughout Jacksonville and Northeast Florida.',
  },
]

// JSON-LD Schemas

// HowTo Schema for AI Overviews and voice search
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Rent a Dumpster in Jacksonville, FL',
  description: 'Step-by-step guide to renting a roll-off dumpster from 904 Dumpster in Jacksonville.',
  totalTime: 'PT5M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '275-375',
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Choose Your Dumpster Size',
      text: 'Select from 10-yard ($299), 15-yard ($349), or 20-yard ($399) roll-off dumpsters based on your project size.',
      url: 'https://www.904dumpster.com/dumpster-size-guide',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule Delivery',
      text: 'Book online or call (904) 240-5598. Same-day delivery available when you book before noon.',
      url: 'https://www.904dumpster.com/',
    },
    {
      '@type': 'HowToStep',
      name: 'Fill Your Dumpster',
      text: 'Load your debris during your rental period (3 days for 10-yard, 5 days for 15 and 20-yard). Extensions available at $15/day.',
      url: 'https://www.904dumpster.com/rules/prohibited-items-list',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule Pickup',
      text: 'Call or text when ready. 904 Dumpster picks up and handles disposal at the landfill.',
      url: 'https://www.904dumpster.com/',
    },
  ],
}

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
  slogan: 'Same-Day Dumpster Delivery in Jacksonville, FL',
  founder: {
    '@type': 'Person',
    name: 'Dionis (Danny)',
    jobTitle: 'Founder & Owner',
  },
  foundingDate: '2016',
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
    streetAddress: '2797 Anniston Rd',
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
    ratingValue: REVIEWS.rating,
    reviewCount: REVIEWS.count,
    bestRating: REVIEWS.bestRating,
    worstRating: REVIEWS.worstRating,
  },
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
      streetAddress: '2797 Anniston Rd',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32246',
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
  // Speakable schema for voice search (AEO)
  speakable: {
    '@type': 'SpeakableSpecification',
    xpath: [
      "/html/head/meta[@name='description']/@content",
    ],
  },
}

// Service Schema - Primary service offering with pricing
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dumpster Rental',
  name: 'Dumpster Rental Jacksonville FL',
  description: 'Roll-off dumpster rental service in Jacksonville, FL. 10, 15, and 20-yard containers available with same-day delivery. All rentals include delivery, pickup, disposal, and rental period.',
  provider: {
    '@type': 'LocalBusiness',
    name: '904 Dumpster',
    '@id': 'https://www.904dumpster.com/#localbusiness',
  },
  areaServed: [
    { '@type': 'City', name: 'Jacksonville', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Duval County' },
    { '@type': 'AdministrativeArea', name: 'St. Johns County' },
    { '@type': 'AdministrativeArea', name: 'Clay County' },
    { '@type': 'AdministrativeArea', name: 'Nassau County' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dumpster Sizes',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '10 Yard Dumpster Rental',
          description: '12ft x 7.5ft x 3.6ft roll-off container. Holds 1 ton. 3-day rental. Ideal for garage cleanouts and small renovations.',
          url: 'https://www.904dumpster.com/10-yard-dumpster-rental',
        },
        price: '275',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '15 Yard Dumpster Rental',
          description: '14ft x 7.5ft x 4.5ft roll-off container. Holds 1.5 tons. Perfect for roofing and kitchen remodels.',
          url: 'https://www.904dumpster.com/15-yard-dumpster-rental',
        },
        price: '325',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '20 Yard Dumpster Rental',
          description: '14ft x 7.5ft x 5.8ft roll-off container. Holds 2 tons. Best for large renovations and construction.',
          url: 'https://www.904dumpster.com/20-yard-dumpster-rental',
        },
        price: '375',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
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
      {/* HowTo Schema for AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Service Schema with pricing for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              alt="Dumpster Rental Jacksonville FL - 904 Dumpster roll-off container on driveway"
              title="Dumpster Rental Jacksonville FL - 904 Dumpster"
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
                    {REVIEWS.count} Five-Star Google Reviews
                  </span>
                </div>

                {/* H1 - Exact Match Primary Keyword */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Dumpster Rental{' '}
                  <span className="text-primary">Jacksonville FL</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  Jacksonville dumpster rental starting at $299. Delivery, pickup, and disposal included.
                  10, 15 &amp; 20-yard roll-off containers for homeowners and contractors. Locally owned since 2016.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Truck className="w-5 h-5 text-primary" />
                    <span>Same-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Since 2016</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Locally Owned</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span>No Hidden Fees</span>
                  </div>
                  <a
                    href="https://www.claycountygov.com/community/garbage-and-recycling/franchise-haulers"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Clay County Licensed Franchise Haulers"
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white/90 text-sm hover:bg-white/20 transition-all"
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span>Clay County Licensed Hauler</span>
                  </a>
                </div>

                {/* CTA Buttons - Mobile */}
                <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                  <a
                    href="#sizes"
                    title="View Dumpster Sizes and Pricing"
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 transition-all"
                  >
                    <Truck className="w-5 h-5" />
                    View Our Dumpster Sizes
                  </a>
                </div>
              </div>

              {/* Right - Review Slider */}
              <HeroReviewSlider />
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
            DUMPSTER RENTAL COSTS IN JACKSONVILLE
        ============================================ */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-secondary mb-6">
              How Much Does a Dumpster Cost in Jacksonville?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Dumpster rental prices in Jacksonville typically range from $299 to $500+ depending on the provider, size, and what&apos;s included.
                At <strong className="text-secondary">904 Dumpster</strong>, our all-inclusive pricing starts at <strong className="text-primary">$299 for a 10-yard dumpster</strong>,
                <strong className="text-primary"> $349 for a 15-yard</strong>, and <strong className="text-primary">$399 for a 20-yard</strong>.
                Every rental includes delivery, pickup, and disposal fees at Trail Ridge Landfill. The 10-yard comes with a 3-day rental, while 15 and 20-yard include a 5-day rental. No hidden charges.
              </p>

              <p className="mb-4">
                Looking for an affordable dumpster in Jacksonville FL? Many national brokers advertise low base rates but add fuel surcharges, environmental fees, and per-ton disposal that can double your bill.
                Our 15-yard at $349 includes 1.5 tons of disposal, enough for most kitchen remodels and roofing projects.
                Competitors often charge $250 base plus $65/ton, meaning the same project costs $380+ after hidden fees.
              </p>

              <p className="mb-4">
                A single trip to Trail Ridge Landfill costs $50-75 per pickup truck load in disposal fees alone.
                Our 10-yard holds 3 truck loads. At $299 all-in with delivery to your driveway, a dumpster rental in Jacksonville saves money and time for most homeowners.
                Need extra days? Extensions are $15 per day. For construction sites, ask about weekly and monthly rates.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/dumpster-rental-pricing-jacksonville"
                title="Dumpster Rental Pricing Jacksonville"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View Detailed Pricing Breakdown
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-gray-300">|</span>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                title="Call 904 Dumpster"
                className="inline-flex items-center gap-2 text-secondary font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call for Custom Quote: {BUSINESS.phone}
              </a>
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
                Roll-Off Container Sizes and Pricing
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Every Jacksonville dumpster rental includes delivery, pickup, disposal, and a rental period. No hidden fees, ever.
              </p>
            </div>

            {/* Size Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  size: '10',
                  name: '10 Yard Dumpster',
                  dimensions: "12' L × 7.5' W × 3.6' H",
                  tons: '1',
                  days: 3,
                  bestFor: ['Small Cleanouts', 'Garage Cleanout', 'Single Room Reno'],
                  price: '$299',
                  popular: false,
                  image: '/images/10 Yard Dumpster.avif',
                  href: '/10-yard-dumpster-rental',
                },
                {
                  size: '15',
                  name: '15 Yard Dumpster',
                  dimensions: "14' L × 7.5' W × 4.5' H",
                  tons: '1.5',
                  days: 5,
                  bestFor: ['Roofing Projects', 'Medium Cleanouts', 'Kitchen Remodel'],
                  price: '$349',
                  popular: false,
                  image: '/images/15 yard dumpster.avif',
                  href: '/15-yard-dumpster-rental',
                },
                {
                  size: '20',
                  name: '20 Yard Dumpster',
                  dimensions: "14' L × 7.5' W × 5.8' H",
                  tons: '2',
                  days: 5,
                  bestFor: ['Large Renovations', 'Construction', 'Estate Cleanout'],
                  price: '$399',
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
                      title={`${dumpster.name} - Jacksonville FL`}
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
                        <div className="text-xs text-gray-400">{dumpster.days}-day rental</div>
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
                        href="https://app.icans.ai/customer-portal/904dumpster/book/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Book a Dumpster Rental Online"
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
                        title={`${dumpster.name} Details`}
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
                title="Dumpster Size Guide"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                View Our Complete Size Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            HOW DUMPSTER RENTAL WORKS IN JACKSONVILLE
        ============================================ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Simple 4-Step Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                How It Works
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Renting a roll-off dumpster in Jacksonville is straightforward. Here&apos;s what to expect from start to finish.
              </p>
            </div>

            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src="/images/dumpster-rental-residential-jacksonville.jpg"
                alt="Residential dumpster rental delivery in Jacksonville FL - 904 Dumpster in side yard"
                title="Residential Dumpster Rental Jacksonville FL - How It Works"
                width={1200}
                height={600}
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Choose Your Dumpster Size</h3>
                <p className="text-gray-600">
                  Select from 10-yard ($299), 15-yard ($349), or 20-yard ($399) dumpsters in Jacksonville FL based on your project.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Schedule Your Jacksonville Dumpster Delivery</h3>
                <p className="text-gray-600">
                  Book online or call (904) 240-5598. Same-day dumpster service available when you order before noon.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Fill Your Dumpster</h3>
                <p className="text-gray-600">
                  You have 5 days to load your debris. Need more time? Extensions are just $15 per day.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">We Handle Pickup and Disposal</h3>
                <p className="text-gray-600">
                  Call or text when ready. Our dumpster service in Jacksonville FL picks up and handles landfill disposal.
                </p>
              </div>
            </div>

            {/* Quick Summary + CTAs */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-secondary mb-4">What to Expect with Your Jacksonville Dumpster Rental</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our 10-yard holds roughly 3 pickup truck loads, the 15-yard handles roofing tear-offs and kitchen remodels,
                and the 20-yard fits whole-house renovations while still fitting most Jacksonville driveways.{' '}
                <a href="https://app.icans.ai/customer-portal/904dumpster/book/" target="_blank" rel="noopener noreferrer" title="Book a Dumpster Rental Online" className="text-primary hover:underline">Book online 24/7</a> or
                call (904) 240-5598. Our drivers call 30 minutes before arrival and place boards under dumpster feet to protect your driveway.
                When you&apos;re done loading, call or text for pickup within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.icans.ai/customer-portal/904dumpster/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Book a Dumpster Rental Online"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
                >
                  Book Your Dumpster Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/rules/prohibited-items-list"
                  title="Prohibited Items List"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all"
                >
                  What Can I Put In?
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
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
                Jacksonville Dumpster Rental for Every Project
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Whether you&apos;re a homeowner tackling a cleanout or a contractor managing a job site,
                our dumpster service in Jacksonville FL has you covered.
              </p>
            </div>

            {/* Silo Links Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: HomeIcon,
                  title: 'Home Cleanout Dumpsters',
                  desc: 'Dumpster rental for garage, attic, and estate cleanouts in Jacksonville.',
                  href: '/residential-dumpster-rental',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: HardHat,
                  title: 'Construction Dumpster Rental',
                  desc: 'Heavy-duty roll-off containers for lumber, drywall, and job site debris.',
                  href: '/dumpster-rental/dumpsters-for-construction-projects',
                  color: 'from-orange-500 to-orange-600',
                },
                {
                  icon: Building2,
                  title: 'Roofing Dumpster Service',
                  desc: 'Shingle-ready dumpsters built for heavy roofing materials.',
                  href: '/dumpster-rental/dumpsters-for-roofing-projects',
                  color: 'from-red-500 to-red-600',
                },
                {
                  icon: Users,
                  title: 'Property Manager Dumpsters',
                  desc: 'Fast turnarounds for rental properties. Recurring dumpster service available.',
                  href: '/residential-dumpster-rental',
                  color: 'from-purple-500 to-purple-600',
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  title={item.title}
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
                  For local dumpster rental in Jacksonville and surrounding areas, we proudly deliver throughout Duval, St. Johns, Clay, and Nassau counties.
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

                <div className="mt-6">
                  <Link
                    href="/locations"
                    title="View All Dumpster Rental Service Areas"
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

            {/* Jacksonville Neighborhoods Prose - Full Width SEO Content */}
            <div className="mt-12 p-8 lg:p-12 bg-white rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-black text-secondary mb-6">Jacksonville Neighborhoods We Serve</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
                <p>
                  From <Link href="/dumpster-rental-jacksonville-fl" title="Dumpster Rental in Riverside" className="text-primary hover:underline">Riverside</Link> home
                  renovations to <Link href="/dumpster-rental-arlington-fl" title="Dumpster Rental in Arlington" className="text-primary hover:underline">Arlington</Link> estate
                  cleanouts, 904 Dumpster delivers across every Jacksonville neighborhood. Homeowners
                  in <Link href="/dumpster-rental-mandarin-fl" title="Dumpster Rental in Mandarin" className="text-primary hover:underline">Mandarin</Link> and
                  San Marco frequently rent our 15-yard dumpster for kitchen and bathroom remodels,
                  while contractors in Southside and Baymeadows prefer our 20-yard containers for
                  commercial buildouts.
                </p>
                <p>
                  Beach communities like <Link href="/dumpster-rental-jacksonville-beach-fl" title="Dumpster Rental in Jacksonville Beach" className="text-primary hover:underline">Jacksonville Beach</Link>,{' '}
                  <Link href="/dumpster-rental-neptune-beach-fl" title="Dumpster Rental in Neptune Beach" className="text-primary hover:underline">Neptune Beach</Link>, and{' '}
                  <Link href="/dumpster-rental-atlantic-beach-fl" title="Dumpster Rental in Atlantic Beach" className="text-primary hover:underline">Atlantic Beach</Link> often
                  need dumpsters for storm cleanup and older home renovations. In Clay County,{' '}
                  <Link href="/dumpster-rental-orange-park-fl" title="Dumpster Rental in Orange Park" className="text-primary hover:underline">Orange Park</Link> and{' '}
                  <Link href="/dumpster-rental-fleming-island-fl" title="Dumpster Rental in Fleming Island" className="text-primary hover:underline">Fleming Island</Link> residents
                  use our services for land clearing and new construction debris.
                </p>
                <p>
                  St. Johns County customers in <Link href="/dumpster-rental-st-augustine-fl" title="Dumpster Rental in St. Augustine" className="text-primary hover:underline">St. Augustine</Link> and{' '}
                  <Link href="/dumpster-rental-ponte-vedra-beach-fl" title="Dumpster Rental in Ponte Vedra Beach" className="text-primary hover:underline">Ponte Vedra Beach</Link> rely
                  on us for estate cleanouts and renovation projects. We also serve Nassau County
                  including Fernandina Beach and Yulee.
                </p>
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
                Why Jacksonville Chooses 904 Dumpster
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We&apos;re not a broker or a national call center. 904 Dumpster is a locally owned dumpster service in Jacksonville FL,
                and we take pride in serving the community we live in.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* No Hidden Fees */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No Hidden Fees, Guaranteed</h3>
                <p className="text-white/70 leading-relaxed">
                  Every dumpster rental in Jacksonville FL from 904 Dumpster includes delivery, pickup, disposal, and a rental period.
                  The price you see is the price you pay. Need extra days? A flat $15 per day, no surprises.
                </p>
              </div>

              {/* Locally Owned */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Locally Owned Since 2016</h3>
                <Image
                  src="/images/jacksonville-dumpster-rental.jpg"
                  alt="904 Dumpster locally owned dumpster rental company in Jacksonville FL"
                  title="Locally Owned Dumpster Rental Jacksonville FL"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-white/70 leading-relaxed">
                  We own our trucks and employ local drivers. Over 2,000 dumpster deliveries completed across Duval, St. Johns, Clay, and Nassau counties.
                  When you call, you talk to someone who knows Jacksonville, from the narrow driveways in Riverside to the newer developments in Nocatee.
                </p>
              </div>

              {/* Same-Day Service */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Same-Day Dumpster Delivery</h3>
                <p className="text-white/70 leading-relaxed">
                  Book before noon and get your dumpster delivered the same day throughout Jacksonville and surrounding areas.
                  Need a pickup sooner than expected? Call or text, and most pickups happen within 24 hours.
                </p>
              </div>

              {/* Driveway-Friendly */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Driveway-Friendly Equipment</h3>
                <p className="text-white/70 leading-relaxed">
                  We place wooden boards under dumpster feet and use rubber-tired trucks to protect your driveway.
                  Our drivers position dumpsters exactly where you need them. Tight spaces or HOA restrictions? We&apos;ll work with you.
                </p>
              </div>
            </div>

            {/* Credentials Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">Clay County Licensed Hauler</h3>
                <p className="text-white/60 text-xs">
                  Listed on the{' '}
                  <a href="https://www.claycountygov.com/community/garbage-and-recycling/franchise-haulers" target="_blank" rel="nofollow noopener noreferrer" title="Clay County Licensed Franchise Haulers" className="text-primary hover:underline">Clay County government website</a>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">Fully Insured</h3>
                <p className="text-white/60 text-xs">General liability and commercial auto coverage on every delivery</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">5.0-Star Google Rating</h3>
                <p className="text-white/60 text-xs">{REVIEWS.count} verified reviews from Jacksonville customers</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                title="Book a Dumpster Rental Online"
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-white/40 mt-4">Fast booking - Instant confirmation - Same-day delivery</p>
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
                Dumpster Rental Jacksonville FL FAQ
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
                  title="Frequently Asked Questions"
                  className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  View All FAQs
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <span className="text-gray-300 hidden sm:block">|</span>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  title="Call 904 Dumpster"
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
            SECTION 8: FINAL CTA
        ============================================ */}
        <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Book Your Dumpster Rental in Jacksonville Today
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Same-day dumpster delivery available. Book online or call (904) 240-5598.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                title="Book a Dumpster Rental Online"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link
                href="/dumpster-size-guide"
                title="Dumpster Size Guide"
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
