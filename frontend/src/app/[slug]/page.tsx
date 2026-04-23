import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Clock,
  Shield,
  DollarSign,
} from 'lucide-react'
import { BUSINESS, REVIEWS } from '@/lib/constants'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { SERVICES, getServiceBySlug, getAllServiceSlugs, ServicePage } from '@/data/services'
import { LOCATIONS, getLocationBySlug, getAllLocationSlugs } from '@/data/locations'
import DeliveryMap from '@/components/DeliveryMap'
import { getLocationCountByArea } from '@/data/deliveryLocations'
import {
  generateDumpsterProductSchema,
  generateDumpsterHowToSchema,
  generateSizePageLocalBusinessSchema,
  generateServiceSchema,
  generateLocationServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema'
import { defaultPricing, getCountyPricing, getCountyKey } from '@/data/pricing-helpers'

// Generate static params for all pages (SSG)
export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs()
  const locationSlugs = getAllLocationSlugs()

  const allSlugs = [...serviceSlugs, ...locationSlugs]

  return allSlugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata dynamically with proper OpenGraph for visual trust
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // Check if it's a service page
  const service = getServiceBySlug(slug)
  if (service) {
    // Enhanced title format: "10 Yard Dumpster Rental Jacksonville FL - Dimensions & Pricing"
    // Note: "- 904 Dumpster" is added automatically by layout.tsx template
    const sizeMatch = slug.match(/^(\d+)-yard/)
    const enhancedTitle = sizeMatch
      ? `${service.metaTitle}`
      : service.metaTitle

    return {
      title: enhancedTitle,
      description: service.metaDescription,
      alternates: {
        canonical: `https://www.904dumpster.com/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: service.metaDescription,
        type: 'website',
        url: `https://www.904dumpster.com/${slug}`,
        siteName: '904 Dumpster',
        images: [
          {
            url: sizeMatch
              ? `/images/${sizeMatch[1]}-yard-dumpster.jpg`
              : '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: service.title,
          },
        ],
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: enhancedTitle,
        description: service.metaDescription,
        images: [sizeMatch ? `/images/${sizeMatch[1]}-yard-dumpster.jpg` : '/images/og-image.jpg'],
      },
    }
  }

  // Check if it's a location page
  const location = getLocationBySlug(slug)
  if (location) {
    // Note: "- 904 Dumpster" is added automatically by layout.tsx template
    const enhancedTitle = `${location.metaTitle} - Same-Day Delivery`

    return {
      title: enhancedTitle,
      description: location.metaDescription,
      alternates: {
        canonical: `https://www.904dumpster.com/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: location.metaDescription,
        type: 'website',
        url: `https://www.904dumpster.com/${slug}`,
        siteName: '904 Dumpster',
        images: [
          {
            url: '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: `Dumpster Rental in ${location.name}, FL`,
          },
        ],
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: enhancedTitle,
        description: location.metaDescription,
        images: ['/images/og-image.jpg'],
      },
    }
  }

  return {
    title: '404 - Page Not Found',
  }
}

// Main page component
export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Check if it's a service page
  const service = getServiceBySlug(slug)
  if (service) {
    // For template-based services
    if (!service.customPage) {
      return (
        <>
          <ServicePageTemplate
            title={service.title}
            description={service.description}
            features={service.features}
            idealFor={service.idealFor}
            pricing={service.pricing}
            faqs={service.faqs}
            relatedServices={service.relatedServices}
            showDumpsterSizes={service.showDumpsterSizes}
            ctaText={service.ctaText}
          />
          {/* Service Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateServiceSchema(service.title, service.description, true)
              ),
            }}
          />
          {/* Breadcrumb Schema - critical for site hierarchy */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateBreadcrumbSchema([
                  { name: 'Home', url: 'https://www.904dumpster.com' },
                  { name: 'Services', url: 'https://www.904dumpster.com' },
                  { name: service.title, url: `https://www.904dumpster.com/${slug}` },
                ])
              ),
            }}
          />
          {/* FAQ Schema */}
          {service.faqs && service.faqs.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateFAQSchema(service.faqs)),
              }}
            />
          )}
        </>
      )
    }

    // For dumpster size pages (custom layout)
    if (service.type === 'dumpster-size') {
      const sizeMatch = slug.match(/^(\d+)-yard/)
      if (sizeMatch) {
        const size = sizeMatch[1] as '10' | '15' | '20'
        return <DumpsterSizePage size={size} service={service} />
      }
    }

    // Custom Junk Removal Page
    if (slug === 'junk-removal-jacksonville') {
      return <JunkRemovalPage service={service} />
    }

    // Custom Demolition Services Page
    if (slug === 'demolition-services-jacksonville') {
      return <DemolitionServicesPage />
    }

    // For other custom pages, render a basic template for now
    return (
      <>
        <ServicePageTemplate
          title={service.title}
          description={service.description}
          features={service.features}
          idealFor={service.idealFor}
          pricing={service.pricing}
          faqs={service.faqs}
          relatedServices={service.relatedServices}
          showDumpsterSizes={service.showDumpsterSizes !== false}
          ctaText={service.ctaText}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateServiceSchema(service.title, service.description, true)
            ),
          }}
        />
        {/* Breadcrumb Schema - critical for site hierarchy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema([
                { name: 'Home', url: 'https://www.904dumpster.com' },
                { name: 'Services', url: 'https://www.904dumpster.com' },
                { name: service.title, url: `https://www.904dumpster.com/${slug}` },
              ])
            ),
          }}
        />
        {/* FAQ Schema */}
        {service.faqs && service.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateFAQSchema(service.faqs)),
            }}
          />
        )}
      </>
    )
  }

  // Check if it's a location page
  const location = getLocationBySlug(slug)
  if (location) {
    return <LocationPage location={location} />
  }

  // 404
  notFound()
}

// Dumpster Size Page Component
function DumpsterSizePage({
  size,
  service,
}: {
  size: '10' | '15' | '20'
  service: typeof SERVICES[0]
}) {
  const dumpsterKey = `${size}-yard` as keyof typeof defaultPricing.dumpsters
  const dumpster = defaultPricing.dumpsters[dumpsterKey]
  const dims = dumpster.dimensions

  const allSizes = [
    { size: '10', price: defaultPricing.dumpsters['10-yard'].basePrice, tons: defaultPricing.dumpsters['10-yard'].tonnageIncluded, days: defaultPricing.dumpsters['10-yard'].rentalDays, loads: 3 },
    { size: '15', price: defaultPricing.dumpsters['15-yard'].basePrice, tons: defaultPricing.dumpsters['15-yard'].tonnageIncluded, days: defaultPricing.dumpsters['15-yard'].rentalDays, loads: 5 },
    { size: '20', price: defaultPricing.dumpsters['20-yard'].basePrice, tons: defaultPricing.dumpsters['20-yard'].tonnageIncluded, days: defaultPricing.dumpsters['20-yard'].rentalDays, loads: 7 },
  ]

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
                <Link href="/" className="hover:text-white" title="904 Dumpster Home">Home</Link>
                <span>/</span>
                <span className="text-white">{size} Yard Dumpster</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                {size} Yard Dumpster Rental in{' '}
                <span className="text-primary">Jacksonville, FL</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.icans.ai/customer-portal/904dumpster/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Book a Dumpster Rental Online"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Book Online Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/dumpster-size-guide"
                  title="Dumpster Size Guide"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
                >
                  Size Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden hidden lg:block">
                <Image
                  src={`/images/${size}-yard-dumpster.jpg`}
                  alt={`${size} Yard Dumpster Rental Jacksonville FL`}
                  title={`${size} Yard Dumpster Rental Jacksonville FL`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <span className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  {size} Yard Dumpster
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-secondary">
                    ${dumpster.basePrice}
                  </span>
                </div>
                <p className="text-gray-500 mt-2">Starting price - All-inclusive</p>
              </div>

              {/* Rental Pricing Tiers */}
              <div className="mb-6">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 text-center">Rental Pricing</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-primary/5 border-2 border-primary/20">
                    <span className="font-semibold text-secondary">{dumpster.rentalDays} days</span>
                    <span className="text-xl font-black text-primary">${dumpster.basePrice}</span>
                  </div>
                  {dumpster.twoWeekPrice && (
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-secondary">10 days</span>
                      <span className="text-xl font-black text-primary">${dumpster.twoWeekPrice}</span>
                    </div>
                  )}
                  {size === '20' && 'monthPrice' in dumpster && dumpster.monthPrice && (
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="font-semibold text-secondary">30 days</span>
                      <span className="text-xl font-black text-primary">${dumpster.monthPrice}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">Up to {dumpster.tonnageIncluded} Tons</div>
                    <div className="text-sm text-gray-500">$75/ton additional</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">{size} Cubic Yards</div>
                    <div className="text-sm text-gray-500">≈ {dumpster.truckLoadsEquivalent} pickup truck loads</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">Free Delivery</div>
                    <div className="text-sm text-gray-500">Same-day available</div>
                  </div>
                </div>
              </div>

              {/* Book Online Button */}
              <a
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                title={`Book ${size} Yard Dumpster Online`}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl transition-all duration-200"
              >
                Book Online
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-2xl font-black">{dims.length}&apos;</div>
              <div className="text-white/70 text-sm">Length</div>
            </div>
            <div>
              <div className="text-2xl font-black">{dims.width}&apos;</div>
              <div className="text-white/70 text-sm">Width</div>
            </div>
            <div>
              <div className="text-2xl font-black">{dims.height}&apos;</div>
              <div className="text-white/70 text-sm">Height</div>
            </div>
            <div>
              <div className="text-2xl font-black">{dumpster.weightLimit.toLocaleString()} lbs</div>
              <div className="text-white/70 text-sm">Weight Limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              All-Inclusive Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What&apos;s Included for ${dumpster.basePrice}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Yard Specific: What Is a 10 Yard Dumpster? */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Is a 10 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A 10 yard dumpster is a roll-off container that holds 10 cubic yards of debris,equivalent to approximately 3 pickup truck loads or 40-50 large contractor trash bags. It is the smallest standard dumpster size available for residential rental in Jacksonville, FL, and the most affordable option for homeowners tackling small-to-medium projects.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To visualize 10 cubic yards, imagine a space roughly 12 feet long, 7.5 feet wide, and 3.6 feet high,about the footprint of a compact SUV. The container sits low to the ground, making it easy to toss items over the sides or walk debris in through the rear swing door. Its compact profile means it fits in most standard driveways without blocking sidewalks or streets.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At 904 Dumpster, we rent 10 yard dumpsters across Jacksonville and Northeast Florida for a flat rate of <strong className="text-secondary">$299</strong>, which includes delivery, pickup, a 3-day rental period, and disposal of up to 1 ton. As a locally owned company serving the 904 area since 2016, we deliver with driveway protection boards on every drop-off and offer same-day delivery when you book before noon.
            </p>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: Dimensions & Size */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              10 Yard Dumpster Dimensions &amp; Size
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 10 yard dumpster measures 12 feet long by 7.5 feet wide by 3.6 feet high. The container occupies approximately the same space as a single parking spot, making it the most driveway-friendly dumpster size available. At only 3.6 feet tall,roughly waist-height on most adults,it is easy to load without a ladder or ramp.
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Specification</th>
                    <th className="text-left py-4 px-6 font-bold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Length</td>
                    <td className="py-4 px-6 text-gray-600">12 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Width</td>
                    <td className="py-4 px-6 text-gray-600">7.5 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Height</td>
                    <td className="py-4 px-6 text-gray-600">3.6 feet (43 inches)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Volume</td>
                    <td className="py-4 px-6 text-gray-600">10 cubic yards</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Weight Limit</td>
                    <td className="py-4 px-6 text-gray-600">3,000 lbs (1.5 tons)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Equivalent Capacity</td>
                    <td className="py-4 px-6 text-gray-600">3 pickup truck loads / 40-50 contractor bags</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Rear Door</td>
                    <td className="py-4 px-6 text-gray-600">Full-width swing door for walk-in loading</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The rear swing door opens fully, allowing you to walk heavy items like furniture and appliances directly into the container instead of lifting them over the sides. This is especially useful for estate cleanouts and moving projects. When closed, the door latches securely to prevent debris from spilling during transport. For size comparison, the 10 yard is about 2 feet shorter and nearly a foot lower than our <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard dumpster</Link>, making it a better fit for driveways with limited clearance.
            </p>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: Cost in Jacksonville */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              10 Yard Dumpster Cost in Jacksonville
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 10 yard dumpster rental in Jacksonville, FL costs $299 at 904 Dumpster, which includes delivery, a 3-day rental period, pickup, and disposal of up to 1 ton. Most competitors in the Jacksonville area charge between $350 and $400 for the same size container, making 904 Dumpster $75-$125 cheaper on average with no hidden fees.
            </p>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Item</th>
                    <th className="text-left py-4 px-6 font-bold">904 Dumpster</th>
                    <th className="text-left py-4 px-6 font-bold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Base Rental</td>
                    <td className="py-4 px-6 font-bold text-primary text-xl">$299</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Includes delivery and pickup</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Disposal Included</td>
                    <td className="py-4 px-6 font-bold text-secondary">1.5 Tons</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">3,000 lbs included in base price</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Rental Period</td>
                    <td className="py-4 px-6 font-bold text-secondary">5 Days</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">$15/day extensions available</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Overage Fee</td>
                    <td className="py-4 px-6 font-bold text-secondary">$75/Ton</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Only if you exceed 1.5 tons</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Fuel Surcharge</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included,never charged separately</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Environmental Fee</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included,no add-on charges</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Admin / Booking Fee</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included,book direct, no broker</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Many national dumpster brokers advertise low base rates of $199-$249 but add fuel surcharges ($25-$50), environmental fees ($15-$30), and per-ton disposal charges that can double your final bill. With 904 Dumpster, the $299 price is the price you pay,period. Based on our 10 years of serving Jacksonville homeowners, this transparent pricing saves customers an average of $75-$125 compared to competitors who stack hidden fees.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-secondary">Dumpster rental vs. hauling it yourself:</strong> A single trip to Trail Ridge Landfill costs approximately $50-$75 in disposal fees plus fuel and 1-2 hours of your time. Our 10 yard dumpster holds 3 pickup truck loads, meaning you would spend $150-$225 in dump fees alone,not counting gas, vehicle wear, and 4-6 hours of driving and unloading. At $299 all-in with delivery to your driveway, renting a dumpster is the smarter choice for most Jacksonville homeowners.
            </p>
            <div className="mt-6">
              <Link href="/dumpster-rental-pricing-jacksonville" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" title="Dumpster Rental Pricing Jacksonville">
                View Full Pricing for All Sizes <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: What Can You Put In */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Can You Put in a 10 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 10 yard dumpster accepts most common household and light construction materials. You can dispose of furniture, appliances (without freon), yard waste, general household junk, drywall, lumber, flooring, cabinets, and renovation debris. Below is a detailed breakdown of accepted and prohibited items.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Accepted Materials
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Furniture (couches, tables, chairs, dressers)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Household junk and general clutter</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Yard waste (branches, brush, sod, leaves)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Drywall, lumber, and plywood</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Flooring (carpet, tile, laminate, vinyl)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Cabinets, countertops, and fixtures</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Mattresses and box springs</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Small amounts of concrete or brick (mind weight)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Appliances (washers, dryers, dishwashers, stoves)</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Prohibited Items
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Wet paint (must be dried with sand or kitty litter)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Batteries and hazardous chemicals</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Tires</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Appliances with freon (refrigerators, AC units)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Electronics (TVs, computers, monitors)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Medical waste</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <Link href="/rules/prohibited-items-list" className="text-primary font-semibold hover:underline inline-flex items-center gap-1" title="Prohibited Items List">
                    View complete prohibited items list <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-gray-700">
                <strong className="text-secondary">Pro Tip:</strong> After delivering thousands of 10 yard dumpsters across Jacksonville, we find that most garage cleanouts fill about 60-70% of the container. If you think your project is borderline between a 10 and 15 yard, call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a>,we can help you choose the right size and avoid paying for capacity you don&apos;t need. If you&apos;d rather not load it yourself, check out our <Link href="/junk-removal-jacksonville" className="text-primary hover:underline" title="Junk Removal Jacksonville">junk removal service</Link> where we do all the heavy lifting.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: Best Uses / Expanded Use Cases */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Project Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Best Uses for a 10 Yard Dumpster
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Based on 10 years and over 2,000 dumpster deliveries across Jacksonville, here are the most common projects our customers use the 10 yard dumpster for.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-4">Garage &amp; Attic Cleanouts</h3>
                <p className="text-gray-600 leading-relaxed">
                  The 10 yard dumpster is the most popular choice for Jacksonville homeowners cleaning out a single-car or two-car garage. A typical garage cleanout produces enough debris to fill 60-70% of the container, leaving room for unexpected items you find along the way. Old bicycles, broken lawn equipment, holiday decorations, and stacks of boxes all fit with room to spare. The low 3.6-foot walls make it easy to toss items over the side without a ramp. For large 3-car garages packed floor to ceiling, consider our <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard dumpster</Link> instead.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-4">Small Bathroom or Kitchen Remodel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Renovating a single bathroom or a small galley kitchen generates more debris than most homeowners expect,old tile, drywall, vanities, countertops, and fixtures add up quickly. The 10 yard dumpster handles a single-room remodel comfortably. Use the rear swing door to walk in heavy items like cast-iron tubs or granite countertop sections. If your remodel spans multiple rooms or includes heavy materials like full-slab granite, step up to a <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard</Link> for additional capacity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-4">Yard Debris &amp; Landscaping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jacksonville&apos;s growing season produces a significant amount of yard waste. The 10 yard dumpster works well for trimming projects, bush removal, small tree limbs, sod removal, and general landscaping cleanup. It holds approximately 3 pickup truck loads of yard debris, saving multiple trips to the Duval County yard waste drop-off. Remember that yard waste is lighter than construction debris, so you will likely hit the volume limit before the 3,000-pound weight limit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-4">Estate Cleanouts &amp; Moving</h3>
                <p className="text-gray-600 leading-relaxed">
                  When cleaning out 1-2 rooms of an estate or preparing a home for sale, the 10 yard dumpster provides enough capacity without overwhelming the driveway. It is particularly popular with <Link href="/residential-dumpster-rental" className="text-primary hover:underline" title="Residential Dumpster Rental">residential customers</Link> in Mandarin and San Marco who need to clear furniture, clothing, and household items from a few rooms. For whole-house estate cleanouts, our <Link href="/20-yard-dumpster-rental" className="text-primary hover:underline" title="20 Yard Dumpster Rental">20 yard dumpster</Link> is a better value.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: How Rental Works */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              How Our 10 Yard Dumpster Rental Works
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Renting a 10 yard dumpster from 904 Dumpster takes about 5 minutes to book and typically arrives the same day or next business day. Here is the step-by-step process from booking to pickup.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Book Online or Call</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="https://app.icans.ai/customer-portal/904dumpster/book/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="Book a Dumpster Rental Online">Book online 24/7</a> through our booking system or call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">(904) 240-5598</a> during business hours. Tell us your preferred delivery date and placement location (driveway, yard, or street). Same-day delivery is available when you order before noon.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Deliver to Your Door</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our driver will call 30 minutes before arrival so you can point them to the exact placement spot. We place driveway protection boards under the container to protect your surface from scratches. The entire delivery takes about 10 minutes. We serve all of Jacksonville, plus St. Johns, Clay, and Nassau counties.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Fill Your Dumpster</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have 5 days to load at your own pace. Use the rear swing door for heavy items or toss lighter debris over the 3.6-foot walls. Keep all debris below the top edge for safe transport. If your project takes longer, call us for an extension at $15 per additional day.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Pick Up &amp; Dispose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you&apos;re finished loading, call, text, or email us. Most pickups happen within 24 hours of your request. We haul your debris to Trail Ridge Landfill or the appropriate disposal facility. Your rental is complete,no additional charges beyond what was quoted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: When to Choose 10 vs 15 vs 20 */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              When to Choose a 10 Yard vs. 15 Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The 10 yard dumpster is the right choice when your project is limited to a single room, one area of the home, or a moderate amount of debris. It is the most cost-effective option for garage cleanouts, single bathroom remodels, and small landscaping projects. If your project involves more than one room, heavy materials like roofing shingles or concrete, or a significant volume of bulky furniture, our <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard dumpster</Link> at $349 offers 50% more capacity for only $50 more.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <strong className="text-secondary">Our rule of thumb after 2,000+ deliveries:</strong> If you&apos;re unsure between two sizes, it is almost always better to size up. Ordering a second dumpster because you ran out of space costs more than the $50 difference between sizes. When in doubt, call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a> and describe your project,our team can recommend the right size based on years of experience with Jacksonville homes.
            </p>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: What Is a 20 Yard Roll-Off Dumpster? */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Is a 20 Yard Roll-Off Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A 20 yard dumpster is the largest standard roll-off container available for residential rental in Jacksonville, FL. It holds 20 cubic yards of debris,equivalent to approximately 7 pickup truck loads or 120-140 large contractor trash bags. This is the size contractors reach for on construction jobs, whole-house cleanouts, and major renovation projects where smaller containers would need to be swapped mid-project.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To visualize 20 cubic yards, imagine a container 14 feet long, 7.5 feet wide, and 5.8 feet high,roughly the length of a mid-size sedan with walls just under 6 feet tall. Despite being our largest size, the 20 yard dumpster shares the same footprint as our <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard dumpster</Link>,the extra capacity comes from the taller sidewalls, not a wider or longer frame. This means it fits in the same driveway space while holding 33% more debris.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At 904 Dumpster, we rent 20 yard dumpsters across Jacksonville and Northeast Florida for a flat rate of <strong className="text-secondary">$399</strong>, which includes delivery, pickup, a 5-day rental period, and disposal of up to 2 tons (4,000 lbs). At just $18.75 per cubic yard, the 20 yard offers the best value per cubic yard of any size we carry. As a locally owned company serving the 904 area since 2016, we deliver with driveway protection boards on every drop-off and offer same-day delivery when you book before noon.
            </p>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: Dimensions & Size */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              20 Yard Dumpster Dimensions &amp; Size
            </h2>

            <h3 className="text-2xl font-bold text-secondary mb-4">How Big Is a 20 Yard Dumpster?</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 20 yard dumpster measures 14 feet long by 7.5 feet wide by 5.8 feet high. It occupies roughly the same ground space as a standard parking spot,14 feet of driveway length and 7.5 feet of width. The key difference from the 15 yard is the wall height: at 5.8 feet (nearly 6 feet tall), the 20 yard can stack construction debris, drywall sheets, and lumber much higher without overfilling.
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Specification</th>
                    <th className="text-left py-4 px-6 font-bold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Length</td>
                    <td className="py-4 px-6 text-gray-600">14 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Width</td>
                    <td className="py-4 px-6 text-gray-600">7.5 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Height</td>
                    <td className="py-4 px-6 text-gray-600">5.8 feet (70 inches)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Volume</td>
                    <td className="py-4 px-6 text-gray-600">20 cubic yards</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Weight Limit</td>
                    <td className="py-4 px-6 text-gray-600">4,000 lbs (2 tons)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Equivalent Capacity</td>
                    <td className="py-4 px-6 text-gray-600">7 pickup truck loads / 120-140 contractor bags</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Rear Door</td>
                    <td className="py-4 px-6 text-gray-600">Full-width swing door for walk-in loading</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Footprint</td>
                    <td className="py-4 px-6 text-gray-600">Same as 15-yard,extra capacity from taller walls</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-4">Will a 20 Yard Dumpster Fit in My Driveway?</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              In most Jacksonville neighborhoods,yes. The 20 yard dumpster requires the same 14-foot length and 7.5-foot width as the 15 yard, so if a 15 yard fits in your driveway, a 20 yard will too. The only additional consideration is overhead clearance: the 5.8-foot wall height means the container itself clears most garage doors, but our roll-off truck needs approximately <strong className="text-secondary">22 feet of vertical clearance</strong> for safe delivery and pickup.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-secondary">Jacksonville-specific tip:</strong> Watch for low-hanging oak branches, especially in established neighborhoods like Riverside, Avondale, and San Marco. If you&apos;re unsure about clearance, send us a photo of your driveway and we&apos;ll confirm fit before scheduling delivery. For homes without driveways or with tight access, we can often place the container on the street with a City of Jacksonville right-of-way permit,call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a> and we&apos;ll handle the details.
            </p>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: Cost in Jacksonville */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              20 Yard Dumpster Rental Cost in Jacksonville
            </h2>

            <h3 className="text-2xl font-bold text-secondary mb-4">What&apos;s Included in the $399 Flat Rate</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 20 yard dumpster rental in Jacksonville, FL costs $399 at 904 Dumpster. This flat-rate price includes delivery, a 5-day rental period, pickup, and disposal of up to 2 tons (4,000 lbs). At $18.75 per cubic yard, the 20 yard is the most cost-efficient size for large projects,compared to $27.50/yard for the 10-yard and $21.67/yard for the 15-yard.
            </p>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Item</th>
                    <th className="text-left py-4 px-6 font-bold">904 Dumpster</th>
                    <th className="text-left py-4 px-6 font-bold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Base Rental</td>
                    <td className="py-4 px-6 font-bold text-primary text-xl">$399</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Includes delivery and pickup</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Disposal Included</td>
                    <td className="py-4 px-6 font-bold text-secondary">2 Tons</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">4,000 lbs included in base price</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Rental Period</td>
                    <td className="py-4 px-6 font-bold text-secondary">5 Days</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">$15/day extensions available</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Overage Fee</td>
                    <td className="py-4 px-6 font-bold text-secondary">$75/Ton</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Only if you exceed 2 tons</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Fuel Surcharge</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included,never charged separately</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium text-secondary">Environmental Fee</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included,no add-on charges</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Admin / Booking Fee</td>
                    <td className="py-4 px-6 font-bold text-primary">$0</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Book direct,no broker markup</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-4">904 Dumpster vs. National Providers</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              National dumpster brokers like Budget Dumpster and Waste Management advertise 20 yard rentals starting at $350-$450 in the Jacksonville market,but the final invoice often tells a different story. After fuel surcharges ($25-$50), environmental fees ($15-$30), and administrative charges ($20-$35), the average 20 yard rental from a national provider lands between $450 and $550. With 904 Dumpster, $399 is the total price,no add-ons, no surprises.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-secondary">20 yard dumpster vs. hauling it yourself:</strong> A single trip to Trail Ridge Landfill costs approximately $50-$75 in disposal fees plus fuel and 1-2 hours of your time. Our 20 yard dumpster holds 7 pickup truck loads, meaning you would spend $350-$525 in dump fees alone,not counting gas, vehicle wear, and 10-14 hours of driving and unloading. At $399 all-in with delivery to your driveway, renting a 20 yard dumpster saves the average Jacksonville homeowner $200+ and an entire weekend of work.
            </p>
            <div className="mt-6">
              <Link href="/dumpster-rental-pricing-jacksonville" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" title="Dumpster Rental Pricing Jacksonville">
                View Full Pricing for All Sizes <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: What Can You Put In */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Can You Put in a 20 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 20 yard dumpster accepts most common residential and construction materials. Because the 20 yard handles the biggest projects, it is frequently loaded with a mix of heavy construction debris and general household items. Here is what you can,and cannot,place in a 20 yard roll-off container in Jacksonville.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Accepted Materials
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Construction debris (drywall, lumber, framing, plywood)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Roofing shingles and underlayment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Furniture, mattresses, and appliances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cabinets, countertops, and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Flooring (tile, carpet, hardwood, laminate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Yard waste (branches, sod, landscaping debris)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>General household junk and clutter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Windows, doors, and trim</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Prohibited Items
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Hazardous waste (paint, chemicals, solvents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Tires and automotive batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Refrigerants / Freon-containing appliances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Medical or biological waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Asbestos-containing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Propane tanks and fuel containers</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <Link href="/rules/prohibited-items-list" className="text-primary font-semibold hover:underline" title="Prohibited Items List">
                    View complete prohibited items list →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-gray-700">
                <strong className="text-secondary">Pro tip for heavy loads:</strong> The 20 yard dumpster has a 2-ton (4,000 lb) weight limit. Construction debris like drywall and lumber is relatively light by volume,you can typically fill the entire container without exceeding the weight limit. However, if you are disposing of concrete, brick, stone, or dirt, these materials weigh significantly more per cubic yard. For heavy debris projects, consider our <Link href="/concrete-disposal-dumpster" className="text-primary hover:underline" title="Concrete Disposal Dumpster">concrete disposal dumpster</Link> or call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a> to discuss the best approach.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: Best Projects */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Project Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Best Projects for a 20 Yard Dumpster
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The 20 yard dumpster is the go-to choice for Jacksonville&apos;s biggest residential and commercial projects. Here are the four most common use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Whole-House Cleanouts &amp; Estate Cleanouts</h3>
                <p className="text-gray-600 mb-4">
                  Clearing an entire home,whether you&apos;re preparing a property for sale, managing an estate after a loved one passes, or gutting a house before a full renovation,generates an enormous volume of debris. Furniture, clothing, kitchenware, electronics, and decades of accumulated belongings fill up smaller dumpsters quickly.
                </p>
                <p className="text-gray-600">
                  The 20 yard dumpster holds the contents of most 3-4 bedroom Jacksonville homes in a single load, eliminating the cost and delay of ordering a second container. For larger estates or hoarder cleanouts, ask about back-to-back scheduling.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Major Renovations &amp; Remodels</h3>
                <p className="text-gray-600 mb-4">
                  Multi-room renovations, kitchen-and-bath combos, or full-floor remodels produce a mix of drywall, lumber, old cabinets, flooring, and fixtures that quickly overwhelm a <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline" title="15 Yard Dumpster Rental">15 yard dumpster</Link>. The 20 yard gives contractors room to work through an entire phase without stopping to schedule a swap.
                </p>
                <p className="text-gray-600">
                  <strong className="text-secondary">Contractor tip:</strong> Keep the dumpster close to your work area. Our drivers can place the 20 yard in your driveway, on the street (with permit), or even on a job site pad. Let us know your preferred placement when you book.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Demolition Projects</h3>
                <p className="text-gray-600 mb-4">
                  Tearing down a large deck, removing a shed, demolishing interior walls, or gutting a garage generates heavy, bulky debris that smaller dumpsters cannot handle efficiently. The 20 yard&apos;s 5.8-foot walls accommodate long lumber, plywood sheets, and stacked drywall without overflowing.
                </p>
                <p className="text-gray-600">
                  For full structural demolition projects in Jacksonville, our <Link href="/demolition-services-jacksonville" className="text-primary hover:underline" title="Demolition Services Jacksonville">demolition services</Link> team can handle the teardown and haul-away,or you can rent the dumpster and manage the demo yourself.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Storm Damage &amp; Hurricane Cleanup</h3>
                <p className="text-gray-600 mb-4">
                  Jacksonville sits in a hurricane-prone zone, and severe storms can generate massive amounts of debris,downed tree branches, damaged fencing, waterlogged drywall, ruined flooring, and destroyed furniture. After a major storm, demand for dumpsters surges across Northeast Florida.
                </p>
                <p className="text-gray-600">
                  <strong className="text-secondary">Storm season tip:</strong> If a hurricane or tropical storm is approaching, contact us early to reserve a 20 yard dumpster for post-storm cleanup. We prioritize existing reservations and can often deliver within 24 hours of roads being cleared. As a local company, we stay in Jacksonville through the storm,national brokers often pause service for days or weeks after major weather events.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: 15 Yard vs. 20 Yard Comparison */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              15 Yard vs. 20 Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The 15 yard and 20 yard are our two most popular sizes for mid-to-large projects in Jacksonville. They share the same 14&apos; × 7.5&apos; footprint,the 20 yard simply has taller walls (5.8&apos; vs. 4.5&apos;), which gives you 33% more capacity for only $50 more. The 15 yard includes a 1.5-ton weight allowance and the 20 yard includes a 2-ton weight allowance, both with a 5-day rental period.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <strong className="text-secondary">Our recommendation after 2,000+ deliveries:</strong> If you are on the fence between 15 and 20 yards, size up. A second dumpster delivery costs far more than the $50 difference. The 20 yard is the right call for any project involving more than one room, construction debris, or an estate cleanout,and at $18.75/yard it is the best value per cubic yard we offer.
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Feature</th>
                    <th className="text-left py-4 px-6 font-bold">15 Yard</th>
                    <th className="text-left py-4 px-6 font-bold">20 Yard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Price</td>
                    <td className="py-4 px-6 text-gray-600">$349</td>
                    <td className="py-4 px-6 font-bold text-primary">$399</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Capacity</td>
                    <td className="py-4 px-6 text-gray-600">15 cubic yards</td>
                    <td className="py-4 px-6 font-bold text-primary">20 cubic yards</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Dimensions</td>
                    <td className="py-4 px-6 text-gray-600">14&apos; × 7.5&apos; × 4.5&apos;</td>
                    <td className="py-4 px-6 font-bold text-secondary">14&apos; × 7.5&apos; × 5.8&apos;</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Weight Limit</td>
                    <td className="py-4 px-6 text-gray-600">1.5 tons (3,000 lbs)</td>
                    <td className="py-4 px-6 text-gray-600">2 tons (4,000 lbs)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Truck Load Equiv.</td>
                    <td className="py-4 px-6 text-gray-600">5 loads</td>
                    <td className="py-4 px-6 font-bold text-primary">7 loads</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Cost per Yard</td>
                    <td className="py-4 px-6 text-gray-600">$21.67/yd</td>
                    <td className="py-4 px-6 font-bold text-primary">$18.75/yd</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Best For</td>
                    <td className="py-4 px-6 text-gray-600">Single-room remodels, roofing</td>
                    <td className="py-4 px-6 font-bold text-secondary">Whole-house, construction, demo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Still not sure which size is right? Call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a>,describe your project and we&apos;ll recommend the best size based on 10 years of experience delivering dumpsters to Jacksonville homes and job sites. You can also visit our <Link href="/dumpster-size-guide" className="text-primary hover:underline" title="Dumpster Size Guide">dumpster size guide</Link> for a side-by-side comparison of all three sizes.
            </p>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: How to Rent */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              How to Rent a 20 Yard Dumpster in Jacksonville
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Renting a 20 yard dumpster from 904 Dumpster is a straightforward, four-step process. Most orders are confirmed within minutes, and same-day delivery is available when you book before noon.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Book Online or Call</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reserve your 20 yard dumpster through our <a href="https://app.icans.ai/customer-portal/904dumpster/book/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline" title="Book a Dumpster Rental Online">online booking system</a> or call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a>. Tell us your delivery address, preferred drop-off date, and what type of debris you&apos;ll be loading. We&apos;ll confirm your reservation immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Deliver to Your Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our driver delivers the 20 yard dumpster to your driveway or job site, placing driveway protection boards underneath at no extra charge. We&apos;ll position the container exactly where you need it,rear door facing your work area for easy walk-in loading.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Fill It Up at Your Pace</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have 5 days to fill the dumpster. Load debris over the sides or walk it in through the rear swing door. Fill to the top of the walls,do not stack above the rim. Need extra time? Extensions are available for $15/day. Just call us before your rental period ends.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Pick Up &amp; Dispose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call or text us when you&apos;re done loading (or we&apos;ll come on your scheduled pickup date). We haul the container to a licensed Jacksonville-area disposal facility. If your load is under 2 tons, you&apos;re all set,no additional charges. Done early? We&apos;ll pick up early at no penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 20-Yard Specific: E-E-A-T Trust Section */}
      {size === '20' && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Locally Owned &amp; Operated
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Why Jacksonville Chooses 904 Dumpster
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The 20 yard is the contractor&apos;s choice in Jacksonville,and most of our contractor clients are repeat customers who switched from national providers. Why? Because when you need the largest residential dumpster for a major renovation, construction job, or estate cleanout, you need a company that shows up on time, places the container exactly where you need it, and doesn&apos;t pad the invoice with hidden fees.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We deliver 20 yard dumpsters throughout Duval, St. Johns, Clay, and Nassau counties,from the historic homes of Ortega and San Jose to the new construction in Nocatee and World Golf Village. Our drivers know the HOA rules in Ponte Vedra, the tight driveways of Riverside, and the street-placement permits required in the Beaches communities. We serve all major Jacksonville zip codes including 32246, 32225, 32250, 32210, 32205, 32207, 32216, and more.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Serving Jacksonville Since 2016</div>
                      <div className="text-white/60">10 years of local dumpster rental experience</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">2,000+ Deliveries Completed</div>
                      <div className="text-white/60">5.0★ rating across {REVIEWS.count} Google reviews</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Fully Licensed &amp; Insured</div>
                      <div className="text-white/60">Duval, Clay, St. Johns &amp; Nassau Counties</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Best Value Per Cubic Yard</div>
                      <div className="text-white/60">$18.75/yd,lowest cost per yard of any size</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: What Is a 15 Yard Dumpster? */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Is a 15 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A 15 yard dumpster is a mid-size roll-off container that holds 15 cubic yards of debris,equivalent to approximately 5-6 pickup truck loads or 80-100 large contractor trash bags. It is the most popular dumpster size for residential projects in Jacksonville, FL, striking the ideal balance between capacity and driveway footprint for roofing jobs, kitchen remodels, and multi-room cleanouts.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To visualize 15 cubic yards, imagine a container 14 feet long, 7.5 feet wide, and 4.5 feet high,roughly the same footprint as a large SUV. The 15 yard sits between our <Link href="/10-yard-dumpster-rental" className="text-primary hover:underline" title="10 Yard Dumpster Rental">10 yard dumpster</Link> ($299) and our <Link href="/20-yard-dumpster-rental" className="text-primary hover:underline" title="20 Yard Dumpster Rental">20 yard dumpster</Link> ($399), offering 50% more capacity than the 10 yard for only $50 more.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At 904 Dumpster, we rent 15 yard dumpsters across Jacksonville and Northeast Florida for a flat rate of <strong className="text-secondary">$349</strong>, which includes delivery, pickup, a 5-day rental period, and disposal of up to 1.5 tons (3,000 lbs). As a locally owned company serving the 904 area since 2016, we are not a broker or national call center, we own our trucks, employ local drivers, and include driveway protection boards on every delivery at no extra cost.
            </p>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Dimensions & Size */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              15 Yard Dumpster Dimensions &amp; Size
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 15 yard dumpster measures 14 feet long by 7.5 feet wide by 4.5 feet high. The container fits within a standard residential driveway without overhanging onto the sidewalk,a common cause for city citations in neighborhoods like Atlantic Beach and Downtown Jacksonville. At 4.5 feet tall, the walls are low enough to toss heavy debris over the side without needing a ladder, but high enough to contain bulky items like appliances and cabinets.
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Specification</th>
                    <th className="text-left py-4 px-6 font-bold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Length</td>
                    <td className="py-4 px-6 text-gray-600">14 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Width</td>
                    <td className="py-4 px-6 text-gray-600">7.5 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Exterior Height</td>
                    <td className="py-4 px-6 text-gray-600">4.5 feet (54 inches)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Volume</td>
                    <td className="py-4 px-6 text-gray-600">15 cubic yards</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Weight Limit</td>
                    <td className="py-4 px-6 text-gray-600">3,000 lbs (1.5 tons)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Equivalent Capacity</td>
                    <td className="py-4 px-6 text-gray-600">5-6 pickup truck loads / 80-100 contractor bags</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Roofing Capacity</td>
                    <td className="py-4 px-6 text-gray-600">25-30 squares of asphalt shingles</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-secondary">Rear Door</td>
                    <td className="py-4 px-6 text-gray-600">Full-width swing door for walk-in loading</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Compared to the <Link href="/10-yard-dumpster-rental" className="text-primary hover:underline" title="10 Yard Dumpster Rental">10 yard dumpster</Link>, the 15 yard is 2 feet longer and nearly a foot taller, providing 50% more volume. Compared to the <Link href="/20-yard-dumpster-rental" className="text-primary hover:underline" title="20 Yard Dumpster Rental">20 yard dumpster</Link>, it is the same length but 1.3 feet shorter, making it easier to fit in driveways with overhead obstructions like oak tree branches,a common consideration in Riverside, Avondale, and San Marco neighborhoods.
            </p>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: What Can You Put In? */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              What Can You Put in a 15 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A 15 yard dumpster accepts most household, renovation, and construction materials. This includes furniture, appliances (without freon), roofing shingles, drywall, lumber, flooring, cabinets, yard waste, and general household debris. Below is a breakdown of what is and is not accepted.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Accepted Materials
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Asphalt shingles (25-30 roofing squares)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Kitchen cabinets, countertops, and fixtures</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Drywall, lumber, plywood, and framing</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Flooring (carpet, tile, laminate, hardwood)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Furniture and mattresses</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Pressure-treated deck lumber and fence posts</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Appliances (washers, dryers, dishwashers, stoves)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Yard waste (branches, brush, sod, stumps)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" /> Small amounts of concrete or brick (mind weight)</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Prohibited Items
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Wet paint (must be dried with sand or kitty litter)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Batteries and hazardous chemicals</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Tires</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Appliances with freon (refrigerators, AC units)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Electronics (TVs, computers, monitors)</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Medical waste</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <Link href="/rules/prohibited-items-list" className="text-primary font-semibold hover:underline inline-flex items-center gap-1" title="Prohibited Items List">
                    View complete prohibited items list <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-gray-700">
                <strong className="text-secondary">Pro Tip:</strong> For roofing projects, shingles are deceptively heavy,one &quot;square&quot; (100 sq ft) of three-tab shingles weighs approximately 250 lbs. A 15 yard dumpster holds 25-30 squares within the 1.5-ton weight limit. If you have architectural shingles or a roof larger than 3,000 sq ft, call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a> to discuss whether you&apos;ll need a weight limit adjustment. If you&apos;d rather not load it yourself, check out our <Link href="/junk-removal-jacksonville" className="text-primary hover:underline" title="Junk Removal Jacksonville">junk removal service</Link>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: How Rental Works */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              How Our 15 Yard Dumpster Rental Works
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Renting a 15 yard dumpster from 904 Dumpster takes about 5 minutes to book. Same-day delivery is available throughout Jacksonville and surrounding counties when you order before noon.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Book Online or Call</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="https://app.icans.ai/customer-portal/904dumpster/book/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="Book a Dumpster Rental Online">Book online 24/7</a> or call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">(904) 240-5598</a> during business hours. Let us know your preferred delivery date and where to place the dumpster. For roofing jobs, contractors often request street placement,we can advise on permit requirements for your Jacksonville neighborhood.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Deliver to Your Door</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our driver calls 30 minutes before arrival so you can direct placement. We place driveway protection boards under the container at no extra charge to protect your surface from scratches,standard on every delivery. The entire drop-off takes about 10 minutes. We deliver to all of Duval, St. Johns, Clay, and Nassau counties.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Fill Your Dumpster</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have 5 days to load at your pace. Use the rear swing door for heavy items like cast-iron tubs and granite countertops, or toss lighter debris over the 4.5-foot walls. Keep all debris below the top edge for safe transport. Need more time? Extensions are $15 per additional day,just call us before your 5 days are up.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">We Pick Up &amp; Dispose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you&apos;re finished, call, text, or email. Most pickups happen within 24 hours. We haul your debris to Trail Ridge Landfill or the appropriate disposal facility. No additional charges beyond your quoted ${dumpster.basePrice} price, unless you exceeded the {dumpster.tonnageIncluded}-ton weight limit, in which case we charge ${defaultPricing.extraTonRate}/ton overage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Mental Model - Capacity Visualization (AI Overview Bait) */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Understanding the Volume
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                How Much Can a 15-Yard Dumpster Hold?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Most homeowners struggle to visualize &quot;cubic yards.&quot; Here&apos;s how to picture it for your Jacksonville project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">5-6 Pickup Trucks</h3>
                <p className="text-gray-600">Imagine 5-6 standard pickup truck beds filled to the brim. That&apos;s the capacity of one 15-yard bin.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">80-100 Contractor Bags</h3>
                <p className="text-gray-600">Fits approximately 80-100 large (33-gallon) contractor trash bags.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">25-30 Roofing Squares</h3>
                <p className="text-gray-600">Handles 2,500-3,000 sq ft of asphalt shingles from a typical Jacksonville home roof.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">1,500 Sq Ft Flooring</h3>
                <p className="text-gray-600">Can hold debris from a 1,500 sq ft flooring tear-out including carpet and padding.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Roofing Standard Section */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  The Roofing Industry Standard
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Why the 15-Yard Bin is the &quot;Roofing Standard&quot; in the 904
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Jacksonville roofing contractors almost exclusively use 15-yard bins for residential tear-offs. Why? <strong className="text-white">Weight management.</strong>
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80">
                        <strong className="text-white">Shingles are heavy:</strong> One &quot;square&quot; (100 sq ft) of three-tab shingles weighs approximately 250 lbs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80">
                        <strong className="text-white">Perfect capacity:</strong> A 15-yard dumpster can hold roughly 25-30 squares of shingles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80">
                        <strong className="text-white">Built-in safeguard:</strong> Using a larger 20-yard bin for shingles often leads to over-filling and massive overweight fees at the landfill. The 15-yard acts as a natural safeguard, keeping your project on budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Weight Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Our ${dumpster.basePrice} flat rate includes</span>
                    <span className="text-white font-bold">{dumpster.tonnageIncluded} tons ({dumpster.weightLimit.toLocaleString()} lbs)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Average 2,500 sq ft roof generates</span>
                    <span className="text-white font-bold">~2 tons of debris</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/80">Overage fee (if exceeded)</span>
                    <span className="text-white font-bold">${defaultPricing.extraTonRate}/ton</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-6">
                  If you&apos;re a roofer working in Mandarin or Southside, the 15-yard bin is your most cost-effective choice.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Top Project Use Cases */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Project Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Top Project Use Cases for a 15-Yard Rental
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                If your project falls into one of these categories, the 15-yard is likely your best ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Kitchen & Bathroom Remodels</h3>
                <p className="text-gray-600 mb-4">
                  When you rip out old cabinets, granite countertops, and cast-iron tubs, you need volume.
                </p>
                <p className="text-gray-600">
                  The 4.5-foot walls of the 15-yard bin are <strong>low enough to toss heavy debris over the side without needing a ladder</strong>, but deep enough to contain bulky items like a dishwasher or vanity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Major Garage or Attic Purge</h3>
                <p className="text-gray-600 mb-4">
                  If you&apos;re clearing out a 2-car garage that hasn&apos;t been touched in a decade, a 10-yard bin is often too small.
                </p>
                <p className="text-gray-600">
                  The 15-yard accommodates old bicycles, lawn furniture, broken workbenches, and those endless stacks of moving boxes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Deck & Fence Removal</h3>
                <p className="text-gray-600 mb-4">
                  Tearing down a 250-sq-ft wooden deck? The 15-yard handles the pressure-treated lumber and posts with ease.
                </p>
                <p className="text-gray-600">
                  <strong>Note:</strong> In Jacksonville, the city&apos;s bulk pickup will often refuse pressure-treated wood due to chemical treatments. A dumpster is the only legal way to dispose of this material.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: 904 Advantage - Local vs National Brokers */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Local vs. National
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                The 904 Advantage: Why Local Beats National Brokers
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                When you search for &quot;dumpster rental near me,&quot; you&apos;ll see national giants like Waste Management or Budget Dumpster. Here&apos;s why booking directly with a Jacksonville-owned company is the smart choice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">No Hidden &quot;Environmental&quot; Fees</h3>
                <p className="text-gray-600">
                  National brokers often quote a low base price and add $50–$100 in &quot;fuel surcharges&quot; or &quot;admin fees&quot; at checkout. <strong>Our $349 price is the price.</strong>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Driveway Protection Boards</h3>
                <p className="text-gray-600">
                  We know Florida asphalt and pavers. <strong>Every 15-yard delivery includes complimentary wood planks</strong> to ensure the steel rollers never touch your driveway directly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Local Knowledge</h3>
                <p className="text-gray-600">
                  We know which neighborhoods require permits. If you&apos;re in Neptune Beach, we know the specific street-placement rules. <strong>A call center in Ohio doesn&apos;t.</strong>
                </p>
              </div>
            </div>

            {/* Google Reviews Link */}
            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/maps/place/904+Dumpster/@30.1924066,-81.6871206,17z/data=!4m8!3m7!1s0x88e5b08bcbd9e4d1:0xa5b1ef12a58f5e8d!8m2!3d30.1924066!4d-81.6845457!9m1!1b1!16s%2Fg%2F11vd8yc8jp"
                target="_blank"
                rel="noopener noreferrer"
                title="904 Dumpster Google Reviews"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
              >
                <span>See our 143+ 5-Star Reviews on Google</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Pricing Table */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                How Much Does a 15-Yard Dumpster Cost in Jacksonville?
              </h2>
              <p className="text-gray-600 text-lg">
                Pricing in the Northeast Florida market fluctuates, but we maintain a competitive, transparent structure.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Item</th>
                    <th className="text-left py-4 px-6 font-bold">904 Dumpster Price</th>
                    <th className="text-left py-4 px-6 font-bold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Base Rental</td>
                    <td className="py-4 px-6 font-bold text-primary text-xl">$349</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Includes delivery and pickup</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Weight Limit</td>
                    <td className="py-4 px-6 font-bold text-secondary">1.5 Tons</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Included in base price</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium text-secondary">Rental Period</td>
                    <td className="py-4 px-6 font-bold text-secondary">5 Days</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Extensions available for $15/day</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 font-medium text-secondary">Overage Fee</td>
                    <td className="py-4 px-6 font-bold text-secondary">$75/Ton</td>
                    <td className="py-4 px-6 text-gray-600 hidden sm:table-cell">Only applies if you exceed 1.5 tons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Size Comparison Table (PAA Bait) */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Choose Your Size
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Is a 15-Yard Dumpster Right for You?
              </h2>
              <p className="text-gray-600 text-lg">
                Use this table to find the best dumpster size for your project type.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold">Project Type</th>
                    <th className="text-left py-4 px-6 font-bold">Recommended Size</th>
                    <th className="text-left py-4 px-6 font-bold hidden md:table-cell">Why?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-secondary">Small Garage Cleanout</td>
                    <td className="py-4 px-6">
                      <Link href="/10-yard-dumpster-rental" className="text-primary font-bold hover:underline" title="10 Yard Dumpster Rental">10 Yard</Link>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">Fits in tight single-car driveways</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-primary/5">
                    <td className="py-4 px-6 text-secondary font-medium">Kitchen Remodel</td>
                    <td className="py-4 px-6">
                      <span className="text-primary font-bold">15 Yard</span>
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">BEST FIT</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">Handles bulky cabinets + appliances</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-primary/5">
                    <td className="py-4 px-6 text-secondary font-medium">Full Roof Replacement</td>
                    <td className="py-4 px-6">
                      <span className="text-primary font-bold">15 Yard</span>
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">BEST FIT</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">The &quot;Goldilocks&quot; size for shingle weight</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-primary/5">
                    <td className="py-4 px-6 text-secondary font-medium">Deck Removal (250+ sq ft)</td>
                    <td className="py-4 px-6">
                      <span className="text-primary font-bold">15 Yard</span>
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">BEST FIT</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">Handles pressure-treated lumber legally</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-secondary">Major Construction / Demo</td>
                    <td className="py-4 px-6">
                      <Link href="/20-yard-dumpster-rental" className="text-primary font-bold hover:underline" title="20 Yard Dumpster Rental">20 Yard</Link>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">Best for heavy lumber and drywall stacks</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-secondary">Whole-House Estate Cleanout</td>
                    <td className="py-4 px-6">
                      <Link href="/20-yard-dumpster-rental" className="text-primary font-bold hover:underline" title="20 Yard Dumpster Rental">20 Yard</Link>
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">Maximum capacity for large jobs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 15-Yard Specific: Local Service & E-E-A-T Trust Section */}
      {size === '15' && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Locally Owned &amp; Operated
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  15 Yard Dumpster Delivery Across Jacksonville
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The 15 yard is our most-requested dumpster for Jacksonville roofing contractors and homeowners tackling kitchen remodels. We deliver same-day throughout Duval, St. Johns, Clay, and Nassau counties,from the historic bungalows in Springfield to the newer construction in Nocatee and World Golf Village. Our drivers know the tight driveways of Riverside, the HOA rules in Ponte Vedra, and the street-placement permits required in Neptune Beach.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We serve all major Jacksonville zip codes including 32246, 32225, 32250, 32210, 32205, 32207, 32216, and more. For areas outside our standard service zone, call us,we can often accommodate special delivery requests across Northeast Florida.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Fully Licensed &amp; Insured</div>
                      <div className="text-white/60">Duval, Clay, St. Johns &amp; Nassau Counties</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Serving Jacksonville Since 2016</div>
                      <div className="text-white/60">10 years of local dumpster rental experience</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">2,000+ Deliveries Completed</div>
                      <div className="text-white/60">5.0★ rating across {REVIEWS.count} Google reviews</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">No Hidden Fees,Guaranteed</div>
                      <div className="text-white/60">Flat-rate pricing, no broker markups</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10-Yard Specific: Local Service & E-E-A-T Trust Section */}
      {size === '10' && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Locally Owned &amp; Operated
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  10 Yard Dumpster Delivery Across Jacksonville
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Whether you&apos;re renovating a bungalow in Springfield, cleaning out a garage in Mandarin, or preparing a flip in Arlington, our 10 yard dumpster is delivered to your door,usually the same day you order. Our drivers know every Jacksonville neighborhood, from the narrow driveways in Riverside and Avondale to the newer developments in Nocatee and Durbin Crossing.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We deliver 10 yard dumpsters throughout the greater Jacksonville metro area including zip codes 32246, 32225, 32250, 32210, 32205, and all of Duval, St. Johns, Clay, and Nassau counties. For areas outside our standard service zone, call us,we can often accommodate special delivery requests.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Fully Licensed &amp; Insured</div>
                      <div className="text-white/60">Duval, Clay, St. Johns &amp; Nassau Counties</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Serving Jacksonville Since 2016</div>
                      <div className="text-white/60">10 years of local dumpster rental experience</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">2,000+ Deliveries Completed</div>
                      <div className="text-white/60">5.0★ rating across {REVIEWS.count} Google reviews</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">No Hidden Fees,Guaranteed</div>
                      <div className="text-white/60">Flat-rate pricing, no broker markups</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Compare Sizes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Compare Sizes
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              {size} Yard vs. Other Dumpster Sizes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {allSizes.map((dumpsterSize) => (
              <div
                key={dumpsterSize.size}
                className={`rounded-2xl p-8 ${
                  dumpsterSize.size === size
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl transition-all'
                }`}
              >
                {dumpsterSize.size === size && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Current
                  </span>
                )}
                <h3 className={`text-2xl font-black mb-2 ${dumpsterSize.size === size ? '' : 'text-secondary'}`}>
                  {dumpsterSize.size} Yard
                </h3>
                <div className={`text-4xl font-black mb-4 ${dumpsterSize.size === size ? '' : 'text-secondary'}`}>
                  ${dumpsterSize.price}
                </div>
                <p className={`mb-4 ${dumpsterSize.size === size ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpsterSize.days}-day rental - {dumpsterSize.tons} ton limit
                </p>
                <ul className={`space-y-2 text-sm ${dumpsterSize.size === size ? '' : 'text-gray-600'}`}>
                  <li>✓ {dumpsterSize.loads} pickup truck loads</li>
                </ul>
                {dumpsterSize.size !== size && (
                  <Link
                    href={`/${dumpsterSize.size}-yard-dumpster-rental`}
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-4"
                    title={`${dumpsterSize.size} Yard Dumpster Rental`}
                  >
                    View details <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Requirements - Information Gain Content */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Before You Book
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Delivery Requirements for {size} Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-world clearance guidelines for Jacksonville neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Overhead Clearance</h3>
              <p className="text-gray-600">
                Requires <strong>22 feet of vertical clearance</strong> for our roll-off trucks. Watch for low-hanging oak trees common in Jacksonville neighborhoods like Riverside and Avondale.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Approach Length</h3>
              <p className="text-gray-600">
                Needs <strong>50 feet of straight-line approach</strong> for our roll-off trucks to safely place the dumpster. Tight San Marco alleys? Call us, we&apos;ll find a solution.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Surface Protection</h3>
              <p className="text-gray-600">
                We provide <strong>driveway protection boards at no extra cost</strong> to prevent damage to your pavers, asphalt, or concrete. Standard on every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Size Specific */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                {size} Yard Dumpster FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {faq.question}
                  </h3>
                  {faq.image && (
                    <div className="mb-6">
                      <Image
                        src={faq.image}
                        alt={faq.question}
                        title={faq.question}
                        width={600}
                        height={400}
                        className="rounded-xl w-full max-w-lg"
                      />
                    </div>
                  )}
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Resources - Internal Linking */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/residential-dumpster-rental" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Residential Dumpster Rental">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Residential Dumpster Rental</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Dumpsters for homeowners &amp; DIY projects</p>
            </Link>
            <Link href="/blog/how-to-choose-right-dumpster-size" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Dumpster Size Guide">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Dumpster Size Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Compare 10, 15, and 20 yard options</p>
            </Link>
            <Link href="/rules/prohibited-items-list" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Prohibited Items List">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Prohibited Items</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">What you can&apos;t put in a dumpster</p>
            </Link>
            <Link href="/dumpster-rental-pricing-jacksonville" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Dumpster Rental Pricing Jacksonville">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Pricing &amp; Booking</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">View all sizes and book online</p>
            </Link>
            <Link href="/junk-removal-jacksonville" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Junk Removal Jacksonville">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Junk Removal</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">We do the heavy lifting for you</p>
            </Link>
            <Link href="/blog/jacksonville-dumpster-permit-guide" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Jacksonville Dumpster Permit Guide">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Permit Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Jacksonville permit requirements</p>
            </Link>
            <Link href="/frequently-asked-questions" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Frequently Asked Questions">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">All FAQs</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Answers to common questions</p>
            </Link>
            <Link href="/concrete-disposal-dumpster" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all" title="Concrete Disposal Dumpster">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Concrete Disposal</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Heavy debris &amp; concrete removal</p>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-secondary mb-4 text-center">Service Areas</h3>
            <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
              We deliver {size} yard dumpsters throughout the greater Jacksonville metro area, including these cities and communities in Duval, St. Johns, Clay, and Nassau counties.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dumpster-rental-jacksonville-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Jacksonville Beach">Jacksonville Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Orange Park">Orange Park</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in St. Augustine">St. Augustine</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Ponte Vedra">Ponte Vedra</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-fleming-island-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Fleming Island">Fleming Island</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-green-cove-springs-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Green Cove Springs">Green Cove Springs</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-atlantic-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Atlantic Beach">Atlantic Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-neptune-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Neptune Beach">Neptune Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-fernandina-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Fernandina Beach">Fernandina Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-middleburg-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Middleburg">Middleburg</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-2xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rent a {size} Yard Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Free delivery - Up to {dumpster.tonnageIncluded} tons included - {dumpster.rentalDays}-day rental
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-white/70 text-sm uppercase tracking-wide">Starting at</span>
              <span className="text-4xl font-black text-white">${dumpster.basePrice}</span>
            </div>
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              title={`Book ${size} Yard Dumpster Online`}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
            >
              Book Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup - Product (Enhanced with AggregateRating and Reviews) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateDumpsterProductSchema(size)),
        }}
      />
      {/* Schema Markup - LocalBusiness (critical for Local SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSizePageLocalBusinessSchema(size)),
        }}
      />
      {/* Schema Markup - HowTo (for AI Overviews and rich results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateDumpsterHowToSchema(size)),
        }}
      />
      {/* Schema Markup - Breadcrumb (critical for site hierarchy) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Dumpster Sizes', url: 'https://www.904dumpster.com/dumpster-size-guide' },
              { name: `${size} Yard Dumpster`, url: `https://www.904dumpster.com/${size}-yard-dumpster-rental` },
            ])
          ),
        }}
      />
      {/* FAQ Schema */}
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(service.faqs)),
          }}
        />
      )}
    </div>
  )
}

// Location Page Component
function LocationPage({ location }: { location: typeof LOCATIONS[0] }) {
  const countyKey = getCountyKey(location.county, location.city)
  const countyPricing = getCountyPricing(countyKey)
  const availableSizes = Object.keys(countyPricing.dumpsters) as Array<keyof typeof countyPricing.dumpsters>

  const dumpsterSizes = availableSizes.map((sizeKey) => {
    const d = countyPricing.dumpsters[sizeKey]
    return {
      size: d.size,
      price: d.basePrice,
      slug: `${d.size}-yard-dumpster-rental`,
      days: d.rentalDays,
    }
  })

  // Check if location has extended content
  const hasExtendedContent = location.aboutCity && location.whyChooseUs && location.commonProjects

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
              <Link href="/" className="hover:text-white" title="904 Dumpster Home">Home</Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {location.heroTitle}{' '}
              <span className="text-primary">{location.name}, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">{location.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                title="Call 904 Dumpster"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {location.phone}
              </a>
              <Link
                href="/contact-us"
                title="Contact 904 Dumpster"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden">
              <Image
                src="/images/dumpster-rental-jacksonville-florida.jpg"
                alt={`Dumpster Rental in ${location.name}, FL - 904 Dumpster`}
                title={`Dumpster Rental ${location.name} FL`}
                width={800}
                height={400}
                className="w-full h-48 lg:h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{location.county} County</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Mon-Sun Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* About This City */}
      {location.aboutCity && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  About {location.name}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                  Dumpster Rental Services in {location.name}, {location.state}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {location.aboutCity}
                </p>
              </div>

              {/* Service Area Details */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Service Area Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary">County</div>
                      <div className="text-gray-600">{location.county} County, Florida</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary">Service Radius</div>
                      <div className="text-gray-600">{location.serviceRadius} from {location.name}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary">Local Phone</div>
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-primary hover:underline" title="Call 904 Dumpster">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  {location.zipCodes && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-secondary">ZIP Codes Served</div>
                        <div className="text-gray-600">{location.zipCodes.join(', ')}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Available Dumpster Sizes - CRITICAL INTERNAL LINKING SECTION */}
      <section className={`py-20 lg:py-28 ${hasExtendedContent ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Dumpster Rental {location.name} FL
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Available Dumpster Sizes in {location.name}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Same-day dumpster delivery to {location.name} and {location.county} County.
              All prices include delivery, pickup, and disposal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dumpsterSizes.map((dumpster) => (
              <Link
                key={dumpster.size}
                href={`/${dumpster.slug}`}
                title={`${dumpster.size} Yard Dumpster Rental`}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl font-black text-primary mb-2">
                  {dumpster.size} <span className="text-xl text-gray-400">yard</span>
                </div>
                <div className="text-3xl font-black text-secondary mb-4">
                  ${dumpster.price}
                </div>
                <p className="text-gray-500 mb-4">{dumpster.days}-day rental included</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                  {dumpster.size} Yard Dumpster Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          {/* Additional internal links for SEO juice */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Not sure which size? Check our{' '}
              <Link href="/dumpster-size-guide" className="text-primary font-semibold hover:underline" title="Dumpster Size Guide">
                complete dumpster size guide
              </Link>{' '}
              or view our{' '}
              <Link href="/dumpster-rental-pricing-jacksonville" className="text-primary font-semibold hover:underline" title="Dumpster Rental Pricing Jacksonville">
                transparent pricing page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {location.whyChooseUs && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Why Choose 904 Dumpster
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                  Your Trusted Dumpster Partner in {location.name}
                </h2>
                <ul className="space-y-4">
                  {location.whyChooseUs.map((reason, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-lg">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Projects */}
              {location.commonProjects && (
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-secondary mb-6">
                    Common Projects in {location.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {location.commonProjects.map((project, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Local Info */}
      {location.localInfo && (
        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Important Information for {location.name} Residents
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {location.localInfo}
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                FAQs About Dumpster Rental in {location.name}
              </h2>
            </div>

            <div className="space-y-6">
              {location.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
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

      {/* Delivery Map - Show recent deliveries in this area */}
      {getLocationCountByArea(location.name) > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Recent Deliveries
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Recent Dumpster Deliveries in {location.name}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                See where we&apos;ve recently delivered dumpsters in {location.name} and nearby areas.
                We know this neighborhood!
              </p>
            </div>

            <DeliveryMap filterArea={location.name} height="400px" showStats={false} />
          </div>
        </section>
      )}

      {/* Nearby Areas - With Internal Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              We Also Serve Nearby Areas
            </h2>
            <p className="text-gray-600 text-lg">
              Same great service throughout {location.county} County and surrounding areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {location.nearbyAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 shadow-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          {/* Other Location Pages */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-secondary mb-6 text-center">All Service Areas</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link href="/dumpster-rental-jacksonville-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Jacksonville Beach">Jacksonville Beach</Link>
              <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Orange Park">Orange Park</Link>
              <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in St. Augustine">St. Augustine</Link>
              <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Ponte Vedra">Ponte Vedra</Link>
              <Link href="/dumpster-rental-fleming-island-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Fleming Island">Fleming Island</Link>
              <Link href="/dumpster-rental-green-cove-springs-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Green Cove Springs">Green Cove Springs</Link>
              <Link href="/dumpster-rental-middleburg-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Middleburg">Middleburg</Link>
              <Link href="/dumpster-rental-atlantic-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Atlantic Beach">Atlantic Beach</Link>
              <Link href="/dumpster-rental-neptune-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Neptune Beach">Neptune Beach</Link>
              <Link href="/dumpster-rental-fernandina-beach-fl" className="text-primary hover:text-secondary font-medium" title="Dumpster Rental in Fernandina Beach">Fernandina Beach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources - Internal Linking */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/how-to-choose-right-dumpster-size" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all" title="Dumpster Size Guide">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Dumpster Size Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Compare 10, 15, and 20 yard options</p>
            </Link>
            <Link href="/blog/what-cannot-go-in-dumpster" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all" title="Prohibited Items List">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Prohibited Items</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">What you can&apos;t put in a dumpster</p>
            </Link>
            <Link href="/blog/jacksonville-dumpster-permit-guide" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all" title="Jacksonville Dumpster Permit Guide">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Permit Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Jacksonville permit requirements</p>
            </Link>
            <Link href="/residential-dumpster-rental" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all" title="Residential Dumpster Rental">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Residential Services</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Home cleanouts & renovations</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rent in {location.name}?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for same-day delivery throughout {location.county} County.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            title="Call 904 Dumpster"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            {location.phone}
          </a>
        </div>
      </section>

      {/* Schema Markup - Service (NOT LocalBusiness - we service, not have office there) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocationServiceSchema(
              location.name,
              location.geo,
              location.county,
              location.serviceRadius
            )
          ),
        }}
      />
      {/* Schema Markup - Breadcrumb (critical for site hierarchy) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Locations', url: 'https://www.904dumpster.com' },
              { name: location.name, url: `https://www.904dumpster.com/${location.slug}` },
            ])
          ),
        }}
      />
      {/* FAQ Schema */}
      {location.faqs && location.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(location.faqs)),
          }}
        />
      )}
    </div>
  )
}

// Junk Removal Jacksonville Page Component
function JunkRemovalPage({ service }: { service: ServicePage }) {
  const junkServices = [
    {
      title: 'Furniture Removal',
      description: 'Sofas, beds, tables, chairs, dressers - we haul away all types of furniture. No need to move it yourself, our crew handles everything.',
    },
    {
      title: 'Appliance Removal',
      description: 'Refrigerators, washers, dryers, stoves, dishwashers - we remove and properly dispose of all household appliances.',
    },
    {
      title: 'Yard Waste Removal',
      description: 'Branches, leaves, landscaping debris, old fencing - we clean up your yard and haul everything away.',
    },
    {
      title: 'Estate Cleanouts',
      description: 'Full estate and house cleanout services. We handle the entire process with care and respect during difficult times.',
    },
    {
      title: 'Office & Commercial Junk',
      description: 'Desks, cubicles, office furniture, and commercial equipment removal for businesses throughout Jacksonville.',
    },
    {
      title: 'Construction Debris',
      description: 'Leftover materials, old fixtures, drywall, flooring - we remove construction debris from your job site.',
    },
  ]

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
              <Link href="/" className="hover:text-white" title="904 Dumpster Home">Home</Link>
              <span>/</span>
              <span className="text-white">Junk Removal</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Junk Removal{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Full-service junk removal in Jacksonville FL. We do all the heavy lifting - just point to what you want gone. Same-day junk pickup available throughout Duval County and Northeast Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                title="Call 904 Dumpster"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
                title="Contact 904 Dumpster"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Same-Day Pickup</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>We Do The Lifting</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Local Jacksonville Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              What We Remove
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Junk Hauling Services in Jacksonville
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From furniture removal to estate cleanouts, we handle all types of junk removal in Jacksonville FL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {junkServices.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Easy Junk Pickup in Jacksonville FL
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black">1</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Call or Book Online</h3>
              <p className="text-gray-600">Schedule your junk removal. Same-day pickup available when you call before noon.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black">2</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Point to Your Junk</h3>
              <p className="text-gray-600">Just show us what needs to go. We do all the heavy lifting, loading, and cleanup.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black">3</div>
              <h3 className="text-lg font-bold text-secondary mb-2">We Haul It Away</h3>
              <p className="text-gray-600">We remove everything and leave your space clean. Eco-friendly disposal included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Junk Removal Jacksonville FL - FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready for Same-Day Junk Removal?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call now for junk removal in Jacksonville FL. We handle everything from furniture to full estate cleanouts.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            title="Call 904 Dumpster"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              'Junk Removal Jacksonville FL',
              'Full-service junk removal in Jacksonville FL. Furniture removal, appliance disposal, estate cleanouts, and same-day junk pickup. We do all the heavy lifting.',
              true
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Services', url: 'https://www.904dumpster.com' },
              { name: 'Junk Removal Jacksonville', url: 'https://www.904dumpster.com/junk-removal-jacksonville' },
            ])
          ),
        }}
      />
      {/* FAQ Schema */}
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(service.faqs)),
          }}
        />
      )}
    </div>
  )
}

// Demolition Services Page Component - 904 Dumpster offers demolition services
function DemolitionServicesPage() {
  const demolitionServices = [
    {
      title: 'Commercial Demolition Services',
      description: 'We have the expertise and experience to demolish large projects of any size, including old schools, metal buildings, and large industrial and commercial buildings.',
    },
    {
      title: 'Residential Demolition Services',
      description: 'We can tear down part of a house or the entire structure. We offer shed removal, driveway removal, mobile home removal, and garage demolition.',
    },
    {
      title: 'Pool Demolition & Removal',
      description: 'We have the equipment, team, and skills to demolish and remove all parts of an old pool and fill the entire hole. Our pool removal services include concrete removal and recycling.',
    },
    {
      title: 'Interior Demolition Services',
      description: 'We oversee the removal of specific parts of office or house structures so they are ready for reconstruction, rehab, or redesign.',
    },
    {
      title: 'Emergency Demolition',
      description: 'We are prepared to assist with emergency demolition which may be required due to fire, flood, hurricanes, water damage, or more. We are the most responsive emergency contractor in Jacksonville.',
    },
    {
      title: 'Site Clearing Services',
      description: 'We have over a decade of experience in land clearing, excavation, and site prep projects for Jacksonville sites of different sizes for future development.',
    },
  ]

  const industries = [
    {
      title: 'Retail & Medical',
      description: 'Complete or partial demolition of retail, shopping centers, restaurants, entertainment, and medical spaces.',
    },
    {
      title: 'Multi-Family Units',
      description: 'Total demolition of one to four-story buildings, 500 to 500,000 square feet. Complete demolition and decommissioning of large commercial buildings.',
    },
    {
      title: 'Industrial',
      description: 'Interior and exterior demo of industrial and manufacturing buildings. We can work in occupied or vacant premises.',
    },
    {
      title: 'Government',
      description: 'Demolish everything from roadways to buildings, inside and outside, operational or condemned. We handle large facility decommissioning projects.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured in the State of Florida',
      icon: Shield,
    },
    {
      title: 'Professional Equipment',
      description: 'Access to all heavy-duty tools and equipment needed for your project',
      icon: Truck,
    },
    {
      title: 'Experienced Team',
      description: 'With decades of experience in the construction industry, we have the expertise to complete your demolition project',
      icon: CheckCircle2,
    },
    {
      title: 'Local Service',
      description: 'Serving Jacksonville and surrounding areas including Duval, Clay, St. Johns, and Nassau Counties',
      icon: MapPin,
    },
  ]

  const serviceAreas = [
    'Jacksonville Beach',
    'Atlantic Beach',
    'Neptune Beach',
    'Orange Park',
    'Fleming Island',
    'Middleburg',
    'St. Augustine',
    'Yulee',
    'Fernandina Beach',
    'Palatka',
  ]

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
              <Link href="/" className="hover:text-white" title="904 Dumpster Home">Home</Link>
              <span>/</span>
              <span className="text-white">Demolition Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Demolition Services{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Professional demolition services in Jacksonville FL for commercial, residential, and industrial projects. Our licensed demolition contractors handle everything from interior demolition to complete structure removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                title="Call 904 Dumpster"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
                title="Contact 904 Dumpster"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Professional Equipment</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Local Jacksonville Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demolition Services We Offer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Our Demolition Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Commercial & Residential Demolition Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We are a Florida-based demolition company specializing in commercial demolition services, residential demolition services, interior demolition, and site clearing. Our licensed demolition contractors have the expertise and equipment to complete your Jacksonville project safely and on schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demolitionServices.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Licensed Demolition Contractors in Jacksonville FL
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Industrial Demolition Services for Jacksonville Businesses
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide demolition services for private and public sectors including large commercial construction companies, city, state, and federal government agencies throughout Jacksonville FL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-secondary mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Demolition Services Near Me - Jacksonville FL Area
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We provide demolition services throughout Duval County, Clay County, St. Johns County, and Nassau County. Looking for demolition services near you? We serve all of Northeast Florida.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 rounded-full px-6 py-3"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Help? Call Us for a Quote
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Contact us today for a free demolition estimate. We handle projects of all sizes throughout Jacksonville and Northeast Florida.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            title="Call 904 Dumpster"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              'Demolition Services Jacksonville FL',
              'Professional commercial and residential demolition services in Jacksonville, FL. We offer complete demolition, pool removal, interior demolition, site clearing, and emergency demolition services.',
              true
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Services', url: 'https://www.904dumpster.com' },
              { name: 'Demolition Services', url: 'https://www.904dumpster.com/demolition-services-jacksonville' },
            ])
          ),
        }}
      />
    </div>
  )
}
