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
import { BUSINESS } from '@/lib/constants'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { SERVICES, getServiceBySlug, getAllServiceSlugs, ServicePage } from '@/data/services'
import { LOCATIONS, getLocationBySlug, getAllLocationSlugs } from '@/data/locations'
import DeliveryMap from '@/components/DeliveryMap'
import { getLocationCountByArea } from '@/data/deliveryLocations'
import {
  generateDumpsterProductSchema,
  generateServiceSchema,
  generateLocationServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema'
import pricing from '@/data/pricing.json'

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
      keywords: service.keywords,
      alternates: {
        canonical: `https://www.904dumpster.com/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: service.metaDescription,
        type: 'website',
        url: `https://www.904dumpster.com/${slug}`,
        siteName: '904 Dumpster - Dumpster Rental Jacksonville',
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
      keywords: location.keywords,
      alternates: {
        canonical: `https://www.904dumpster.com/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: location.metaDescription,
        type: 'website',
        url: `https://www.904dumpster.com/${slug}`,
        siteName: '904 Dumpster - Dumpster Rental Jacksonville',
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
  const dumpsterKey = `${size}-yard` as keyof typeof pricing.dumpsters
  const dumpster = pricing.dumpsters[dumpsterKey]
  const dims = dumpster.dimensions

  const allSizes = [
    { size: '10', price: pricing.dumpsters['10-yard'].basePrice, tons: pricing.dumpsters['10-yard'].tonnageIncluded, loads: 3 },
    { size: '15', price: pricing.dumpsters['15-yard'].basePrice, tons: pricing.dumpsters['15-yard'].tonnageIncluded, loads: 5 },
    { size: '20', price: pricing.dumpsters['20-yard'].basePrice, tons: pricing.dumpsters['20-yard'].tonnageIncluded, loads: 7 },
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
                <Link href="/" className="hover:text-white">Home</Link>
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
                  href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
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
                  Size Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">{dumpster.rentalDays}-Day Rental</div>
                    <div className="text-sm text-gray-500">$15/day additional</div>
                  </div>
                </div>
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

              <a
                href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary hover:bg-secondary text-white font-bold text-lg py-4 rounded-xl transition-all"
              >
                Book Online Now
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

      {/* Ideal For */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Perfect For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Popular Uses for a {size} Yard Dumpster
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.idealFor.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  5-day rental - {dumpsterSize.tons} ton limit
                </p>
                <ul className={`space-y-2 text-sm ${dumpsterSize.size === size ? '' : 'text-gray-600'}`}>
                  <li>✓ {dumpsterSize.loads} pickup truck loads</li>
                </ul>
                {dumpsterSize.size !== size && (
                  <Link
                    href={`/${dumpsterSize.size}-yard-dumpster-rental`}
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-4"
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
            <Link href="/blog/how-to-choose-right-dumpster-size" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Dumpster Size Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Compare 10, 15, and 20 yard options</p>
            </Link>
            <Link href="/blog/what-cannot-go-in-dumpster" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Prohibited Items</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">What you can&apos;t put in a dumpster</p>
            </Link>
            <Link href="/blog/jacksonville-dumpster-permit-guide" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Permit Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Jacksonville permit requirements</p>
            </Link>
            <Link href="/dumpster-rental-pricing-jacksonville" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Pricing & Booking</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">View all sizes and book online</p>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-secondary mb-4 text-center">Service Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dumpster-rental-jacksonville-beach-fl" className="text-primary hover:text-secondary font-medium">Jacksonville Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:text-secondary font-medium">Orange Park</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:text-secondary font-medium">St. Augustine</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:text-secondary font-medium">Ponte Vedra</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-fleming-island-fl" className="text-primary hover:text-secondary font-medium">Fleming Island</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-green-cove-springs-fl" className="text-primary hover:text-secondary font-medium">Green Cove Springs</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-atlantic-beach-fl" className="text-primary hover:text-secondary font-medium">Atlantic Beach</Link>
              <span className="text-gray-300">•</span>
              <Link href="/dumpster-rental-fernandina-beach-fl" className="text-primary hover:text-secondary font-medium">Fernandina Beach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rent a {size} Yard Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            ${dumpster.basePrice} for {dumpster.rentalDays} days - Free delivery - Up to {dumpster.tonnageIncluded} tons included
          </p>
          <a
            href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            Book Online Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Schema Markup - Product (Enhanced with AggregateRating and isRelatedTo) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateDumpsterProductSchema(size)),
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
  const dumpsterSizes = [
    { size: '10', price: pricing.dumpsters['10-yard'].basePrice, slug: '10-yard-dumpster-rental' },
    { size: '15', price: pricing.dumpsters['15-yard'].basePrice, slug: '15-yard-dumpster-rental' },
    { size: '20', price: pricing.dumpsters['20-yard'].basePrice, slug: '20-yard-dumpster-rental' },
  ]

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
              <Link href="/" className="hover:text-white">Home</Link>
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
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {location.phone}
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-primary hover:underline">
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
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl font-black text-primary mb-2">
                  {dumpster.size} <span className="text-xl text-gray-400">yard</span>
                </div>
                <div className="text-3xl font-black text-secondary mb-4">
                  ${dumpster.price}
                </div>
                <p className="text-gray-500 mb-4">5-day rental included</p>
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
              <Link href="/dumpster-size-guide" className="text-primary font-semibold hover:underline">
                complete dumpster size guide
              </Link>{' '}
              or view our{' '}
              <Link href="/dumpster-rental-pricing-jacksonville" className="text-primary font-semibold hover:underline">
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
              <Link href="/dumpster-rental-jacksonville-beach-fl" className="text-primary hover:text-secondary font-medium">Jacksonville Beach</Link>
              <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:text-secondary font-medium">Orange Park</Link>
              <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:text-secondary font-medium">St. Augustine</Link>
              <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:text-secondary font-medium">Ponte Vedra</Link>
              <Link href="/dumpster-rental-fleming-island-fl" className="text-primary hover:text-secondary font-medium">Fleming Island</Link>
              <Link href="/dumpster-rental-green-cove-springs-fl" className="text-primary hover:text-secondary font-medium">Green Cove Springs</Link>
              <Link href="/dumpster-rental-middleburg-fl" className="text-primary hover:text-secondary font-medium">Middleburg</Link>
              <Link href="/dumpster-rental-atlantic-beach-fl" className="text-primary hover:text-secondary font-medium">Atlantic Beach</Link>
              <Link href="/dumpster-rental-neptune-beach-fl" className="text-primary hover:text-secondary font-medium">Neptune Beach</Link>
              <Link href="/dumpster-rental-fernandina-beach-fl" className="text-primary hover:text-secondary font-medium">Fernandina Beach</Link>
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
            <Link href="/blog/how-to-choose-right-dumpster-size" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Dumpster Size Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Compare 10, 15, and 20 yard options</p>
            </Link>
            <Link href="/blog/what-cannot-go-in-dumpster" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Prohibited Items</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">What you can&apos;t put in a dumpster</p>
            </Link>
            <Link href="/blog/jacksonville-dumpster-permit-guide" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all">
              <h3 className="font-bold text-secondary group-hover:text-white mb-2">Permit Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">Jacksonville permit requirements</p>
            </Link>
            <Link href="/residential-dumpster-rental" className="group bg-white rounded-xl p-6 hover:bg-primary transition-all">
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
              <Link href="/" className="hover:text-white">Home</Link>
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
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
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
              <Link href="/" className="hover:text-white">Home</Link>
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
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
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
