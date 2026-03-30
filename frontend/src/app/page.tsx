import { Metadata } from 'next'
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
  Calendar,
} from 'lucide-react'
import { BUSINESS, REVIEWS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'
import { QuickSizeFinder } from '@/components/QuickSizeFinder'
import { GoogleReviews } from '@/components/GoogleReviews'
import { HeroReviewSlider } from '@/components/HeroReviewSlider'
import DeliveryMap from '@/components/DeliveryMap'

// Homepage-specific metadata (overrides layout.tsx default)
export const metadata: Metadata = {
  title: 'Dumpster Rental Jacksonville FL - $299 Same-Day - 904 Dumpster',
  description: 'Dumpster rental Jacksonville FL from $299. 10, 15 & 20-yard roll-off containers with free delivery, pickup, and disposal. Same-day delivery available. Locally owned since 2016. Call (904) 240-5598.',
  openGraph: {
    title: 'Dumpster Rental Jacksonville FL - $299 Same-Day - 904 Dumpster',
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
    title: 'Dumpster Rental Jacksonville FL - $299 Same-Day - 904 Dumpster',
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
      'For small amounts of junk (a few items), hiring 904 Dumpster\'s junk removal service is the most affordable option — we do all the heavy lifting. For larger cleanouts, renting a 10-yard dumpster at $299 and loading it yourself is the cheapest approach. Self-hauling to Trail Ridge Landfill costs $50-75 per load plus your time, so a dumpster rental saves money after just 2-3 loads.',
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
      text: 'Load your debris during the 5-day rental period. Extensions available at $15/day.',
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
    streetAddress: '2798 Anniston Rd',
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
      streetAddress: '2798 Anniston Rd',
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
  description: 'Roll-off dumpster rental service in Jacksonville, FL. 10, 15, and 20-yard containers available with same-day delivery. All rentals include delivery, pickup, disposal, and 5-day rental period.',
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
          description: '12ft x 7.5ft x 3.6ft roll-off container. Holds 1.5 tons. Ideal for garage cleanouts and small renovations.',
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
          description: '14ft x 7.5ft x 4.5ft roll-off container. Holds 2 tons. Perfect for roofing and kitchen remodels.',
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
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-3">
                    From $299 — Same-Day Delivery
                  </span>
                </h1>

                {/* Sub-headline - Keyword in first sentence + AI-citable facts */}
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  Dumpster rental Jacksonville FL starting at $299 with free delivery, pickup, and disposal included.
                  Locally owned since 2016. 5.0-star rated with {REVIEWS.count} Google reviews.
                  10, 15 &amp; 20-yard roll-off containers for homeowners and contractors.
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
            CITATION SECTION - AI Overview & Rich Results
        ============================================ */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-secondary text-center mb-6">
              Dumpster Rental in Jacksonville, FL, Pricing & Sizes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>904 Dumpster</strong> is a locally owned dumpster rental company in Jacksonville, FL,
              founded in 2016. Dumpster rental prices at 904 Dumpster start at $299 for a 10-yard container,
              $349 for a 15-yard, and $399 for a 20-yard. All prices include delivery, pickup, and disposal.
              and a 5-day rental period with no hidden fees. 904 Dumpster serves Duval, St. Johns, Clay,
              and Nassau counties with same-day delivery available when customers book before noon.
              The company maintains a 5.0-star rating across {REVIEWS.count} Google reviews and is fully insured.
              904 Dumpster owns its trucks and employs local drivers, unlike national brokers or call centers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/dumpster-rental-pricing-jacksonville"
                title="Dumpster Rental Pricing Jacksonville"
                className="text-primary font-semibold hover:underline"
              >
                View Full Pricing Details →
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/contact-us"
                title="Contact 904 Dumpster for a Free Quote"
                className="text-primary font-semibold hover:underline"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            DUMPSTER RENTAL COSTS IN JACKSONVILLE
        ============================================ */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-secondary mb-6">
              Dumpster Rental Costs in Jacksonville, FL
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Dumpster rental prices in Jacksonville typically range from $299 to $500+ depending on the provider, size, and what&apos;s included.
                At <strong className="text-secondary">904 Dumpster</strong>, our all-inclusive pricing starts at <strong className="text-primary">$299 for a 10-yard dumpster</strong>,
                <strong className="text-primary"> $349 for a 15-yard</strong>, and <strong className="text-primary">$399 for a 20-yard</strong>.
                Every rental includes delivery, pickup, disposal fees at Trail Ridge Landfill, and a 5-day rental period, no hidden charges.
              </p>

              <p className="mb-4">
                Looking for cheap dumpster rental in Jacksonville? Many national brokers advertise lower base rates but add fuel surcharges ($25-50), environmental fees ($15-30), and per-ton disposal charges that can double your final bill.
                Our affordable dumpster rental pricing eliminates these surprises. For example, our 15-yard dumpster at $349 includes 1.5 tons of disposal, that&apos;s enough for most kitchen remodels and roofing projects.
                Competitors often charge $250 base plus $65/ton disposal, meaning the same project could cost $380+ with hidden fees.
              </p>

              <p className="mb-4">
                <strong className="text-secondary">How does 904 Dumpster compare to hauling debris yourself?</strong>{' '}
                A single trip to Trail Ridge Landfill costs approximately $50-75 in disposal fees for a pickup truck load, plus fuel and your time.
                Our 10-yard dumpster holds 3 pickup truck loads, meaning you&apos;d spend $150-225 in dump fees alone, not counting 3+ hours of driving and unloading.
                At $299 all-in with delivery to your driveway, renting a dumpster saves both money and hassle for most Jacksonville homeowners.
              </p>

              <p className="mb-4">
                Need an extra day or two? Extensions are $15 per day. Most customers finish within the included 5-day rental, but we&apos;re flexible if your project takes longer.
                For longer-term projects like construction sites, ask about our weekly and monthly rates.
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
                Choose Your Dumpster Size
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Need a small dumpster rental for a garage cleanout or a large container for construction? All prices include delivery, pickup, disposal, and a 5-day rental period.
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
                  price: '$299',
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
                How Dumpster Rental Works in Jacksonville
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Renting a roll-off dumpster from 904 Dumpster is straightforward. Here&apos;s exactly what to expect with your roll-off dumpster rental in Jacksonville from start to finish.
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
                <h3 className="text-xl font-bold text-secondary mb-3">Choose Your Size</h3>
                <p className="text-gray-600">
                  Select from 10-yard ($299), 15-yard ($349), or 20-yard ($399) based on your project needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Schedule Delivery</h3>
                <p className="text-gray-600">
                  Book online or call (904) 240-5598. Same-day delivery available when you order before noon.
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
                <h3 className="text-xl font-bold text-secondary mb-3">We Pick It Up</h3>
                <p className="text-gray-600">
                  Call or text when ready. We pick up your dumpster and handle disposal at the landfill.
                </p>
              </div>
            </div>

            {/* Prose Explanation */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-secondary mb-6">What to Expect When Renting a Dumpster in Jacksonville</h3>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-secondary">Choosing the right size</strong> is the first step in your roll-off dumpster rental.
                  Whether you need a garbage dumpster rental for a cleanout or a trash dumpster rental for a renovation project,
                  our 10-yard dumpster works well for single-room cleanouts, garage purges, and small landscaping projects —
                  it holds roughly 3 pickup truck loads of debris. The 15-yard is our most versatile size,
                  handling kitchen remodels, roofing tear-offs (up to 20 squares of shingles), and medium estate cleanouts.
                  For whole-house renovations, construction projects, or large cleanouts, the 20-yard provides maximum capacity
                  while still fitting in most Jacksonville driveways.
                </p>

                <p>
                  <strong className="text-secondary">Scheduling delivery</strong> is simple. You can{' '}
                  <a href="https://app.icans.ai/customer-portal/904dumpster/book/" target="_blank" rel="noopener noreferrer" title="Book a Dumpster Rental Online" className="text-primary hover:underline">
                    book online 24/7
                  </a>{' '}
                  or call us at (904) 240-5598 during business hours. When ordering, let us know where you&apos;d like the dumpster placed:
                  most customers prefer their driveway, but we can also place on grass, gravel, or the street if you have a permit.
                  Our drivers will call 30 minutes before arrival so you can point them to the exact spot.
                </p>

                <p>
                  <strong className="text-secondary">During your rental period,</strong> you have 5 days to fill the dumpster at your own pace.
                  Load items through the rear swing doors (great for heavy items like concrete) or toss debris over the sides.
                  Don&apos;t overfill: debris should stay below the top edge for safe transport.
                  If your project runs longer than expected, call us for an extension at $15 per additional day.
                </p>

                <p>
                  <strong className="text-secondary">Pickup is hassle-free.</strong> When you&apos;re done loading, simply call, text, or email us.
                  Most pickups happen within 24 hours of your request. We handle all disposal at Trail Ridge Landfill or
                  the appropriate facility based on your debris type. Your rental is complete, and your project is one step closer to finished.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  href: '/residential-dumpster-rental',
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
                The Local Difference
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                As a locally owned dumpster rental company in Jacksonville, we&apos;re not a broker or a national call center. We&apos;re your neighbors,
                and we take pride in serving the Jacksonville community.
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
                  Every 904 Dumpster quote includes delivery, pickup, disposal fees, and a 5-day rental period.
                  Many competitors advertise low base rates then add fuel surcharges, environmental fees, and disposal costs at pickup.
                  We believe in transparent pricing: the price you see is the price you pay, with no surprises when we pick up your dumpster.
                  If you need extra days, we charge a flat $15 per day, and we&apos;ll always let you know before any additional charges apply.
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
                  904 Dumpster isn&apos;t a national broker or call center. We&apos;re a Jacksonville-based company that owns our trucks and employs local drivers.
                  Founded in 2016, we&apos;ve completed over 2,000 dumpster deliveries across Duval, St. Johns, Clay, and Nassau counties.
                  When you call us, you&apos;re talking to someone who knows Jacksonville, from the narrow driveways in Riverside to the newer developments in Nocatee.
                  We take pride in being your neighbors and treat every property like it&apos;s our own.
                </p>
              </div>

              {/* Same-Day Service */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Same-Day Delivery Available</h3>
                <p className="text-white/70 leading-relaxed">
                  When you book before noon, we can deliver your dumpster the same day throughout Jacksonville and surrounding areas.
                  We understand that renovation projects, storm cleanups, and construction jobs can&apos;t always wait for scheduled deliveries.
                  Our dispatch team monitors routes throughout the day to fit in last-minute orders whenever possible.
                  Need a pickup sooner than expected? Just call or text, and most pickups happen within 24 hours of your request.
                </p>
              </div>

              {/* Driveway-Friendly */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Driveway-Friendly Equipment</h3>
                <p className="text-white/70 leading-relaxed">
                  Our roll-off trucks use rubber-tired wheels and we place wooden boards under dumpster feet to protect your driveway from scratches and cracks.
                  Many Jacksonville homes have decorative concrete, pavers, or freshly sealed driveways, and we take extra care during placement.
                  Our drivers are trained to position dumpsters exactly where you need them, whether that&apos;s close to the garage, by the backyard gate, or in the street (when permitted).
                  If you have tight spaces or HOA restrictions, we&apos;ll work with you to find the best solution.
                </p>
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
              <p className="text-white/40 mt-4">Fast booking • Instant confirmation • Same-day delivery</p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6B: LICENSED & INSURED (E-E-A-T)
        ============================================ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Verified Credentials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6">
                Licensed, Insured &amp; Trusted
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                When you compare dumpster rental companies in Jacksonville, credentials matter.
                904 Dumpster is fully verified and government-listed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Clay County Licensed Franchise Hauler</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  904 Dumpster is listed as an approved franchise hauler on the{' '}
                  <a href="https://www.claycountygov.com/community/garbage-and-recycling/franchise-haulers" target="_blank" rel="nofollow noopener noreferrer" title="Clay County Licensed Franchise Haulers" className="text-primary hover:underline">Clay County government website</a>.
                  This means we meet all county requirements for insurance, licensing, and legal waste disposal.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Fully Insured</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  904 Dumpster carries general liability and commercial auto coverage for every delivery.
                  Your property is protected from the moment our truck arrives until your dumpster is picked up.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Serving Jacksonville Since 2016</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With 10 years of local experience and over 2,000 dumpster deliveries completed across Northeast Florida,
                  904 Dumpster is one of Jacksonville&apos;s most experienced independent roll-off providers.
                  We maintain a 5.0-star Google rating with {REVIEWS.count} verified reviews.
                </p>
              </div>
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
