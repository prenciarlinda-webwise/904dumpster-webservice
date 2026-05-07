import { BUSINESS, REVIEWS } from './constants'
import { LOCATIONS } from '@/data/locations'
import { defaultPricing, priceValidUntil } from '@/data/pricing-helpers'

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

// Shared sameAs profile URLs (single source of truth for entity disambiguation)
const SAMEAS_URLS = [
  'https://www.facebook.com/p/904-Dumpster-Dumpster-Rental-Jacksonville-61556959737507/',
  'https://www.yelp.com/biz/904-dumpsters-jacksonville',
  'https://www.instagram.com/904dumpsters/',
  'https://www.tiktok.com/@904dumpsters',
  'https://maps.app.goo.gl/Vrp3o6ejzffzjKnRA',
]

// Wikipedia URLs for cities and counties served. Used as @id refs on City/AdministrativeArea
// schema objects so search engines can disambiguate the entities served.
const CITY_WIKIPEDIA_URLS: Record<string, string> = {
  Jacksonville: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida',
  'St. Augustine': 'https://en.wikipedia.org/wiki/St._Augustine,_Florida',
  'Atlantic Beach': 'https://en.wikipedia.org/wiki/Atlantic_Beach,_Florida',
  'Neptune Beach': 'https://en.wikipedia.org/wiki/Neptune_Beach,_Florida',
  'Jacksonville Beach': 'https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida',
  'Ponte Vedra Beach': 'https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida',
  'Ponte Vedra': 'https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida',
  'Orange Park': 'https://en.wikipedia.org/wiki/Orange_Park,_Florida',
  'Fleming Island': 'https://en.wikipedia.org/wiki/Fleming_Island,_Florida',
  Middleburg: 'https://en.wikipedia.org/wiki/Middleburg,_Florida',
  'Green Cove Springs': 'https://en.wikipedia.org/wiki/Green_Cove_Springs,_Florida',
  'Fernandina Beach': 'https://en.wikipedia.org/wiki/Fernandina_Beach,_Florida',
  Arlington: 'https://en.wikipedia.org/wiki/Arlington,_Jacksonville',
}

const COUNTY_WIKIPEDIA_URLS: Record<string, string> = {
  Duval: 'https://en.wikipedia.org/wiki/Duval_County,_Florida',
  'St. Johns': 'https://en.wikipedia.org/wiki/St._Johns_County,_Florida',
  Clay: 'https://en.wikipedia.org/wiki/Clay_County,_Florida',
  Nassau: 'https://en.wikipedia.org/wiki/Nassau_County,_Florida',
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
      streetAddress: '2797 Anniston Rd',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32246',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.facebook.com/p/904-Dumpster-Dumpster-Rental-Jacksonville-61556959737507/',
      'https://www.yelp.com/biz/904-dumpsters-jacksonville',
      'https://www.instagram.com/904dumpsters/',
      'https://www.tiktok.com/@904dumpsters',
      'https://maps.app.goo.gl/Vrp3o6ejzffzjKnRA',
    ],
    founder: {
      '@type': 'Person',
      name: 'Dionis (Danny)',
      jobTitle: 'Founder & Owner',
    },
    foundingDate: '2016',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }
}

// Generate ServiceArea schema with neighborhood GeoCoordinates and Wikipedia @id refs
// for entity disambiguation. Each city/county references its Wikipedia entity so search
// engines can match the served-area to the canonical place entity.
export function generateServiceAreaSchema() {
  return LOCATIONS.map((location) => {
    const cityWiki = CITY_WIKIPEDIA_URLS[location.city]
    const countyWiki = COUNTY_WIKIPEDIA_URLS[location.county]
    const cityObj: Record<string, unknown> = {
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
        ...(countyWiki ? { '@id': countyWiki, sameAs: countyWiki } : {}),
      },
    }
    if (cityWiki) {
      cityObj['@id'] = cityWiki
      cityObj.sameAs = cityWiki
    }
    return cityObj
  })
}

// Generate enhanced LocalBusiness schema with all neighborhoods
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.904dumpster.com/#localbusiness',
    name: BUSINESS.name,
    description: 'Professional dumpster rental and waste management services in Jacksonville, FL. Same-day delivery available for residential and commercial projects.',
    url: 'https://www.904dumpster.com',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
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
        dayOfWeek: ['Saturday'],
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

// Generate Product schema for dumpster size pages (Enhanced with AggregateRating and isRelatedTo)
export function generateDumpsterProductSchema(size: '10' | '15' | '20') {
  const dumpsterKey = `${size}-yard` as keyof typeof defaultPricing.dumpsters
  const dumpsterData = defaultPricing.dumpsters[dumpsterKey]
  const dims = dumpsterData.dimensions

  // Generate related products (other dumpster sizes)
  const allSizes = ['10', '15', '20'] as const
  const relatedProducts = allSizes
    .filter((s) => s !== size)
    .map((s) => ({
      '@type': 'Product',
      name: `${s} Yard Dumpster`,
      url: `https://www.904dumpster.com/${s}-yard-dumpster-rental`,
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://www.904dumpster.com/${size}-yard-dumpster-rental#product`,
    name: `${size} Yard Dumpster Rental`,
    description: `${size} cubic yard roll-off dumpster. Dimensions: ${dims.length}' x ${dims.width}' x ${dims.height}'. Holds approximately ${dumpsterData.truckLoadsEquivalent} pickup truck loads. Perfect for ${size === '10' ? 'small cleanouts and garage projects' : size === '15' ? 'roofing projects and kitchen remodels' : 'large renovations and construction jobs'}.`,
    image: `https://www.904dumpster.com/images/${size}-yard-dumpster.jpg`,
    sku: `904D-${size}YD`,
    mpn: `904D-${size}YD-RO`,
    category: 'Roll-Off Dumpster Rental',
    itemCondition: 'https://schema.org/NewCondition',
    brand: {
      '@type': 'Brand',
      name: BUSINESS.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEWS.rating,
      reviewCount: REVIEWS.count,
      bestRating: REVIEWS.bestRating,
      worstRating: REVIEWS.worstRating,
    },
    offers: {
      '@type': 'Offer',
      price: dumpsterData.basePrice.toString(),
      priceCurrency: 'USD',
      priceValidUntil: priceValidUntil,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `https://www.904dumpster.com/${size}-yard-dumpster-rental`,
      seller: {
        '@type': 'Organization',
        '@id': 'https://www.904dumpster.com/#organization',
        name: BUSINESS.name,
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
      {
        '@type': 'PropertyValue',
        name: 'Delivery',
        value: 'Same-day delivery available in Jacksonville FL',
      },
    ],
    // isRelatedTo - links product sizes together for semantic graph
    isRelatedTo: relatedProducts,
  }
}

// Generate HowTo schema for dumpster rental process on size pages
export function generateDumpsterHowToSchema(size: '10' | '15' | '20') {
  const dumpsterKey = `${size}-yard` as keyof typeof defaultPricing.dumpsters
  const dumpsterData = defaultPricing.dumpsters[dumpsterKey]

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Rent a ${size} Yard Dumpster in Jacksonville, FL`,
    description: `Step-by-step guide to renting a ${size} yard roll-off dumpster from 904 Dumpster in Jacksonville. Takes 5 minutes to book with same-day delivery available.`,
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: dumpsterData.basePrice.toString(),
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Book Online or Call',
        text: `Book your ${size} yard dumpster online 24/7 or call (904) 240-5598 during business hours. Choose your preferred delivery date and placement location. Same-day delivery available when you order before noon.`,
        url: 'https://www.904dumpster.com/' + size + '-yard-dumpster-rental',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'We Deliver to Your Door',
        text: 'Our driver calls 30 minutes before arrival. We place driveway protection boards under the container and position it exactly where you need it. Delivery takes about 10 minutes.',
        url: 'https://www.904dumpster.com/' + size + '-yard-dumpster-rental',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Fill Your Dumpster',
        text: `You have ${dumpsterData.rentalDays} days to load debris at your own pace. Use the rear swing door for heavy items or toss lighter debris over the walls. Keep debris below the top edge. Extensions available at $${defaultPricing.extraDayRate}/day.`,
        url: 'https://www.904dumpster.com/' + size + '-yard-dumpster-rental',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'We Pick Up and Dispose',
        text: 'Call, text, or email when done loading. Most pickups happen within 24 hours. We haul debris to the appropriate disposal facility. No additional charges beyond your quoted price.',
        url: 'https://www.904dumpster.com/' + size + '-yard-dumpster-rental',
      },
    ],
  }
}

// Generate LocalBusiness schema for dumpster size pages
export function generateSizePageLocalBusinessSchema(size: '10' | '15' | '20') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.904dumpster.com/#localbusiness',
    name: '904 Dumpster',
    description: `Professional ${size} yard dumpster rental in Jacksonville FL. Same-day delivery, transparent pricing, locally owned since 2016.`,
    url: 'https://www.904dumpster.com',
    telephone: '+19042405598',
    email: BUSINESS.email,
    priceRange: '$299-$649',
    founder: {
      '@type': 'Person',
      name: 'Dionis (Danny)',
      jobTitle: 'Founder & Owner',
    },
    foundingDate: '2016',
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
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/p/904-Dumpster-Dumpster-Rental-Jacksonville-61556959737507/',
      'https://www.yelp.com/biz/904-dumpsters-jacksonville',
      'https://www.instagram.com/904dumpsters/',
      'https://www.tiktok.com/@904dumpsters',
      'https://maps.app.goo.gl/Vrp3o6ejzffzjKnRA',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEWS.rating,
      reviewCount: REVIEWS.count,
      bestRating: REVIEWS.bestRating,
      worstRating: REVIEWS.worstRating,
    },
    areaServed: [
      { '@type': 'City', name: 'Jacksonville', containedInPlace: { '@type': 'State', name: 'Florida' } },
      ...generateServiceAreaSchema(),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dumpster Rental Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '10 Yard Dumpster Rental', url: 'https://www.904dumpster.com/10-yard-dumpster-rental' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '15 Yard Dumpster Rental', url: 'https://www.904dumpster.com/15-yard-dumpster-rental' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '20 Yard Dumpster Rental', url: 'https://www.904dumpster.com/20-yard-dumpster-rental' } },
      ],
    },
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
      sameAs: SAMEAS_URLS,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#answer-intro', '#faq-section'],
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
  const cityWiki = CITY_WIKIPEDIA_URLS[locationName]
  const countyWiki = COUNTY_WIKIPEDIA_URLS[county]

  // areaServed combines a precise GeoCircle (for radius coverage) with a named City
  // entity (for Wikipedia disambiguation). Search engines match the served city
  // to its canonical entity via the @id ref.
  const cityEntity: Record<string, unknown> = {
    '@type': 'City',
    name: locationName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: `${county} County`,
      ...(countyWiki ? { '@id': countyWiki, sameAs: countyWiki } : {}),
    },
  }
  if (cityWiki) {
    cityEntity['@id'] = cityWiki
    cityEntity.sameAs = cityWiki
  }

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
      sameAs: SAMEAS_URLS,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2797 Anniston Rd',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32246',
        addressCountry: 'US',
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#answer-intro', '#faq-section'],
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        geoRadius: radiusMeters,
      },
      cityEntity,
    ],
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
      streetAddress: '2797 Anniston Rd',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32246',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEWS.rating,
      reviewCount: REVIEWS.count,
      bestRating: REVIEWS.bestRating,
      worstRating: REVIEWS.worstRating,
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
    description: 'Learn about 904 Dumpster and founder Dionis (Danny). Jacksonville\'s trusted local dumpster rental company, serving Northeast Florida since 2016.',
    isPartOf: {
      '@id': 'https://www.904dumpster.com/#website',
    },
    about: {
      '@id': 'https://www.904dumpster.com/#organization',
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      founder: {
        '@type': 'Person',
        name: 'Dionis (Danny)',
        jobTitle: 'Founder & Owner',
        description: 'Florida resident for over 10 years. Founded 904 Dumpster in 2016 with a focus on quality equipment, clear communication, and fast, reliable service for Jacksonville and Northeast Florida.',
        worksFor: {
          '@type': 'Organization',
          name: BUSINESS.name,
        },
      },
      foundingDate: '2016',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2797 Anniston Rd',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32246',
        addressCountry: 'US',
      },
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
        streetAddress: '2797 Anniston Rd',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32246',
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

// Article schema for blog posts
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
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      url: 'https://www.904dumpster.com',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.904dumpster.com/#organization',
      name: BUSINESS.name,
      url: 'https://www.904dumpster.com',
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
          description: 'Perfect for small home cleanouts. Dimensions: 12\' x 7.5\' x 3.6\'. Holds 3 pickup truck loads.',
          image: 'https://www.904dumpster.com/images/10-yard-dumpster.jpg',
          brand: {
            '@type': 'Brand',
            name: BUSINESS.name,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: REVIEWS.rating,
            reviewCount: REVIEWS.count,
            bestRating: REVIEWS.bestRating,
            worstRating: REVIEWS.worstRating,
          },
          offers: {
            '@type': 'Offer',
            price: defaultPricing.dumpsters['10-yard'].basePrice,
            priceCurrency: 'USD',
            priceValidUntil: priceValidUntil,
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
          description: 'Great for roofing and medium projects. Dimensions: 14\' x 7.5\' x 4.5\'. Holds 5 pickup truck loads.',
          image: 'https://www.904dumpster.com/images/15-yard-dumpster.jpg',
          brand: {
            '@type': 'Brand',
            name: BUSINESS.name,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: REVIEWS.rating,
            reviewCount: REVIEWS.count,
            bestRating: REVIEWS.bestRating,
            worstRating: REVIEWS.worstRating,
          },
          offers: {
            '@type': 'Offer',
            price: defaultPricing.dumpsters['15-yard'].basePrice,
            priceCurrency: 'USD',
            priceValidUntil: priceValidUntil,
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
          description: 'Ideal for large renovations and construction. Dimensions: 14\' x 7.5\' x 5.8\'. Holds 7 pickup truck loads.',
          image: 'https://www.904dumpster.com/images/20-yard-dumpster.jpg',
          brand: {
            '@type': 'Brand',
            name: BUSINESS.name,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: REVIEWS.rating,
            reviewCount: REVIEWS.count,
            bestRating: REVIEWS.bestRating,
            worstRating: REVIEWS.worstRating,
          },
          offers: {
            '@type': 'Offer',
            price: defaultPricing.dumpsters['20-yard'].basePrice,
            priceCurrency: 'USD',
            priceValidUntil: priceValidUntil,
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
        url: 'https://www.904dumpster.com/residential-dumpster-rental-jacksonville-fl',
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
