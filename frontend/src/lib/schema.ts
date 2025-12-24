import { BUSINESS } from './constants'
import { LOCATIONS } from '@/data/locations'
import pricing from '@/data/pricing.json'

// Types for schema generation
interface GeoCoordinates {
  latitude: number
  longitude: number
}

interface FAQ {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

// ============================================================================
// SITE-WIDE SCHEMAS (for layout.tsx)
// ============================================================================

// WebSite schema - enables sitelinks search box
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.904dumpster.com/#website',
    url: 'https://www.904dumpster.com',
    name: BUSINESS.name,
    description: 'Professional dumpster rental services in Jacksonville, FL and Northeast Florida.',
    publisher: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.904dumpster.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }
}

// Organization schema - enhanced for knowledge panel
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.904dumpster.com/#organization',
    name: BUSINESS.name,
    url: 'https://www.904dumpster.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://www.904dumpster.com/#logo',
      url: 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
      contentUrl: 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
      caption: BUSINESS.name,
    },
    image: {
      '@id': 'https://www.904dumpster.com/#logo',
    },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32246',
      addressCountry: 'US',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }
}

// Generate ServiceArea schema with neighborhood GeoCoordinates
export function generateServiceAreaSchema() {
  return LOCATIONS.map((location) => ({
    '@type': 'City',
    name: location.city,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: `${location.county} County`,
    },
  }))
}

// Generate enhanced LocalBusiness schema with all neighborhoods
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.904dumpster.com/#organization',
    name: BUSINESS.name,
    description: 'Professional dumpster rental and waste management services in Jacksonville, FL. Same-day delivery available for residential and commercial projects.',
    url: 'https://www.904dumpster.com',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
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
    areaServed: generateServiceAreaSchema(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dumpster Rental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '10 Yard Dumpster Rental',
            description: 'Perfect for small home cleanouts and minor renovation projects',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '15 Yard Dumpster Rental',
            description: 'Great for roofing projects and medium cleanouts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '20 Yard Dumpster Rental',
            description: 'Ideal for large renovation projects and construction jobs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Junk Removal',
            description: 'Full-service junk removal for residential and commercial properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Demolition Services',
            description: 'Professional demolition services including permits and cleanup',
          },
        },
      ],
    },
  }
}

// Generate Product schema for dumpster size pages
export function generateDumpsterProductSchema(size: '10' | '15' | '20') {
  const dumpsterKey = `${size}-yard` as keyof typeof pricing.dumpsters
  const dumpsterData = pricing.dumpsters[dumpsterKey]
  const dims = dumpsterData.dimensions

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${size} Yard Dumpster Rental`,
    description: `${size} cubic yard roll-off dumpster. Dimensions: ${dims.length}' x ${dims.width}' x ${dims.height}'. Holds approximately ${dumpsterData.truckLoadsEquivalent} pickup truck loads.`,
    brand: {
      '@type': 'Brand',
      name: BUSINESS.name,
    },
    offers: {
      '@type': 'Offer',
      price: dumpsterData.basePrice.toString(),
      priceCurrency: 'USD',
      priceValidUntil: pricing.priceValidUntil,
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': 'https://www.904dumpster.com/#organization',
      },
      areaServed: generateServiceAreaSchema(),
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Dimensions',
        value: `${dims.length}' x ${dims.width}' x ${dims.height}'`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Capacity',
        value: `${size} cubic yards`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Weight Limit',
        value: `${dumpsterData.weightLimit.toLocaleString()} lbs (${dumpsterData.tonnageIncluded} tons)`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Rental Period',
        value: `${dumpsterData.rentalDays} days`,
      },
    ],
  }
}

// Generate Service schema for non-dumpster service pages
export function generateServiceSchema(
  serviceName: string,
  description: string,
  areaServed?: boolean
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
  }

  if (areaServed) {
    schema.areaServed = generateServiceAreaSchema()
  }

  return schema
}

// Generate FAQPage schema
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Location-specific Service schema (NOT LocalBusiness - avoids claiming physical presence)
// This correctly represents that we SERVICE the area, not that we have an office there
export function generateLocationServiceSchema(
  locationName: string,
  geo: GeoCoordinates,
  county: string,
  serviceRadius: string
) {
  // Parse service radius (e.g., "15 miles" -> 15)
  const radiusMiles = parseInt(serviceRadius) || 15
  const radiusMeters = radiusMiles * 1609.34 // Convert miles to meters

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.904dumpster.com/dumpster-rental-${locationName.toLowerCase().replace(/\s+/g, '-')}-fl#service`,
    name: `Dumpster Rental in ${locationName}, FL`,
    description: `Professional dumpster rental services in ${locationName}, ${county} County, FL. Same-day delivery available. 10, 15, and 20 yard roll-off containers.`,
    url: `https://www.904dumpster.com/dumpster-rental-${locationName.toLowerCase().replace(/\s+/g, '-')}-fl`,
    serviceType: 'Dumpster Rental',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32246',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      geoRadius: radiusMeters,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Dumpster Rental Services in ${locationName}`,
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
}

// Legacy function - keep for backwards compatibility but prefer generateLocationServiceSchema
export function generateLocationSchema(
  locationName: string,
  geo: GeoCoordinates,
  county: string
) {
  return generateLocationServiceSchema(locationName, geo, county, '15 miles')
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate AggregateRating schema
export function generateAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    image: 'https://www.904dumpster.com/images/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32246',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '523',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// ============================================================================
// PAGE-SPECIFIC SCHEMAS
// ============================================================================

// WebPage schema for general pages
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    about: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    inLanguage: 'en-US',
  }
}

// AboutPage schema
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.904dumpster.com/about#webpage',
    url: 'https://www.904dumpster.com/about',
    name: 'About 904 Dumpster',
    description: 'Learn about 904 Dumpster, Jacksonville\'s trusted local dumpster rental company.',
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    about: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    mainEntity: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    inLanguage: 'en-US',
  }
}

// ContactPage schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://www.904dumpster.com/contact-us#webpage',
    url: 'https://www.904dumpster.com/contact-us',
    name: 'Contact 904 Dumpster',
    description: 'Contact 904 Dumpster for dumpster rental in Jacksonville FL. Get a free quote today.',
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    about: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    inLanguage: 'en-US',
  }
}

// CollectionPage schema for blog index
export function generateBlogCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.904dumpster.com/blog#webpage',
    url: 'https://www.904dumpster.com/blog',
    name: 'Dumpster Rental Blog | Tips, Guides & Local Info',
    description: 'Expert dumpster rental tips, home improvement guides, and local Jacksonville waste disposal information.',
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    about: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    inLanguage: 'en-US',
  }
}

// Article schema for blog posts (enhanced)
export function generateArticleSchema(
  title: string,
  description: string,
  slug: string,
  author: string,
  publishedDate: string,
  updatedDate?: string,
  tags?: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.904dumpster.com/blog/${slug}#article`,
    headline: title,
    description,
    url: `https://www.904dumpster.com/blog/${slug}`,
    datePublished: publishedDate,
    dateModified: updatedDate || publishedDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://www.904dumpster.com',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.904dumpster.com/blog/${slug}#webpage`,
    },
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    keywords: tags?.join(', '),
    inLanguage: 'en-US',
  }
}

// ItemList schema for pricing page
export function generatePricingItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dumpster Rental Pricing',
    description: 'Transparent dumpster rental pricing in Jacksonville FL',
    url: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: '10 Yard Dumpster Rental',
          description: 'Perfect for small home cleanouts',
          offers: {
            '@type': 'Offer',
            price: pricing.dumpsters['10-yard'].basePrice,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: '15 Yard Dumpster Rental',
          description: 'Great for roofing and medium projects',
          offers: {
            '@type': 'Offer',
            price: pricing.dumpsters['15-yard'].basePrice,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: '20 Yard Dumpster Rental',
          description: 'Ideal for large renovations and construction',
          offers: {
            '@type': 'Offer',
            price: pricing.dumpsters['20-yard'].basePrice,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
    ],
  }
}

// HowTo schema for guides
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// SiteNavigationElement for AI indexing
export function generateSiteNavigationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    hasPart: [
      {
        '@type': 'SiteNavigationElement',
        name: 'Dumpster Sizes',
        url: 'https://www.904dumpster.com/dumpster-size-guide',
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Services',
        url: 'https://www.904dumpster.com/residential-dumpster-rental',
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Locations',
        url: 'https://www.904dumpster.com/dumpster-rental-st-augustine-fl',
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Pricing',
        url: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville',
      },
      {
        '@type': 'SiteNavigationElement',
        name: 'Contact',
        url: 'https://www.904dumpster.com/contact-us',
      },
    ],
  }
}
