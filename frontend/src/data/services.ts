// Service page types
export type ServiceType = 'dumpster-size' | 'service' | 'location' | 'guide'

export interface FAQ {
  question: string
  answer: string
}

export interface RelatedService {
  title: string
  href: string
  description: string
}

export interface ServicePage {
  slug: string
  type: ServiceType
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  description: string
  features: string[]
  idealFor: string[]
  pricing?: {
    startingAt: string
    includes: string[]
  }
  faqs?: FAQ[]
  relatedServices?: RelatedService[]
  showDumpsterSizes?: boolean
  ctaText?: string
  // For custom pages (dumpster sizes, junk removal, demolition)
  customPage?: boolean
}

// All service pages data
export const SERVICES: ServicePage[] = [
  // ============================================
  // TIER 1: PRODUCT HUB - Dumpster Sizes
  // ============================================
  {
    slug: '10-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '10 Yard Dumpster Rental',
    metaTitle: '10 Yard Dumpster Rental Jacksonville FL',
    metaDescription: 'Rent a 10 yard dumpster in Jacksonville FL from $275. Perfect for small cleanouts and minor renovations.',
    keywords: [
      '10 yard dumpster',
      '10 yard dumpster rental',
      '10 yard roll off dumpster',
      '10 cubic yard dumpster',
      '10 yard dumpster dimensions',
      '10 yard dumpster size',
      'how big is a 10 yard dumpster',
      '10 yard dumpster rental cost',
      '10 yard dumpster price',
    ],
    description: 'Our smallest roll-off dumpster is the perfect choice for homeowners tackling small cleanouts, garage projects, and minor home renovations.',
    features: [
      'Compact 12\' x 7.5\' x 3.6\' dimensions',
      'Fits in most residential driveways',
      'Holds approximately 3 pickup truck loads',
      '5-day rental included',
      'Up to 1.5 tons disposal included',
      'Free delivery and pickup',
      'Same-day delivery available',
      'Driveway protection boards included',
    ],
    idealFor: [
      'Garage Cleanouts',
      'Small Renovations',
      'Yard Debris',
      'Attic Cleanouts',
      'Single Room Remodels',
      'Estate Cleanouts (1-2 rooms)',
      'Moving Cleanouts',
      'Small Deck Removal',
    ],
    customPage: true,
  },
  {
    slug: '15-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '15 Yard Dumpster Rental',
    metaTitle: '15 Yard Dumpster Rental Jacksonville FL',
    metaDescription: 'Rent a 15 yard dumpster in Jacksonville FL from $325. Ideal for roofing projects and kitchen remodels.',
    keywords: [
      '15 yard dumpster',
      '15 yard dumpster rental',
      '15 yard roll off dumpster',
      '15 cubic yard dumpster',
      '15 yard dumpster dimensions',
      '15 yard dumpster size',
      'how big is a 15 yard dumpster',
      '15 yard dumpster rental cost',
      '15 yard dumpster price',
    ],
    description: 'Our most popular size for roofing projects and medium-sized home renovations. The 15-yard dumpster offers the perfect balance of capacity and accessibility.',
    features: [
      'Mid-size 14\' x 7.5\' x 4.5\' dimensions',
      'Most popular size for roofing',
      'Holds approximately 5 pickup truck loads',
      '5-day rental included',
      'Up to 2 tons disposal included',
      'Free delivery and pickup',
      'Same-day delivery available',
      'Driveway protection boards included',
    ],
    idealFor: [
      'Roofing Projects',
      'Kitchen Remodels',
      'Bathroom Renovations',
      'Deck Removal',
      'Medium Cleanouts',
      'Flooring Projects',
      'Multi-Room Cleanouts',
      'Storm Damage Cleanup',
    ],
    customPage: true,
  },
  {
    slug: '20-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '20 Yard Dumpster Rental',
    metaTitle: '20 Yard Dumpster Rental Jacksonville FL',
    metaDescription: 'Rent a 20 yard dumpster in Jacksonville FL from $375. Perfect for large renovations and construction projects.',
    keywords: [
      '20 yard dumpster',
      '20 yard dumpster rental',
      '20 yard roll off dumpster',
      '20 cubic yard dumpster',
      '20 yard dumpster dimensions',
      '20 yard dumpster size',
      'how big is a 20 yard dumpster',
      '20 yard dumpster rental cost',
      '20 yard dumpster price',
    ],
    description: 'Our largest residential dumpster is ideal for major renovations, construction projects, and whole-home cleanouts. Maximum capacity for big projects.',
    features: [
      'Large 14\' x 7.5\' x 5.8\' dimensions',
      'Best for major projects',
      'Holds approximately 7 pickup truck loads',
      '5-day rental included',
      'Up to 2 tons disposal included',
      'Free delivery and pickup',
      'Same-day delivery available',
      'Contractor pricing available',
    ],
    idealFor: [
      'Large Renovations',
      'Construction Jobs',
      'Estate Cleanouts',
      'Commercial Projects',
      'Whole-Home Remodels',
      'New Construction Cleanup',
      'Large Deck Removal',
      'Major Landscaping',
    ],
    customPage: true,
  },
  {
    slug: 'dumpster-size-guide',
    type: 'guide',
    title: 'Dumpster Size Guide',
    metaTitle: 'Dumpster Size Guide Jacksonville FL',
    metaDescription: 'Find the perfect dumpster size for your project. Compare 10, 15, and 20 yard roll-off containers.',
    keywords: [
      'dumpster size guide',
      'what size dumpster do i need',
      'dumpster size comparison',
      'roll off dumpster sizes',
      'dumpster rental sizes jacksonville',
      'how to choose dumpster size',
    ],
    description: 'Not sure what size dumpster you need? Our comprehensive guide helps you choose the right container for your project.',
    features: [
      'Compare all available sizes',
      'Visual size comparisons',
      'Project-based recommendations',
      'Weight capacity information',
      'Free size consultation',
      'Expert advice available',
    ],
    idealFor: [
      'First-time renters',
      'Homeowners',
      'Contractors',
      'Property managers',
    ],
    customPage: true,
  },

  // ============================================
  // TIER 3: SERVICE-SPECIFIC
  // ============================================
  {
    slug: 'commercial-dumpster-rental',
    type: 'service',
    title: 'Commercial Dumpster Rental',
    metaTitle: 'Commercial Dumpster Rental Jacksonville FL',
    metaDescription: 'Commercial dumpster rental in Jacksonville FL for businesses and offices. Volume discounts available.',
    keywords: [
      'commercial dumpster rental jacksonville',
      'permanent dumpster service',
      'business dumpster rental',
      'office dumpster service',
      'retail waste management',
      'commercial waste removal jacksonville',
    ],
    description: 'Reliable commercial dumpster service for Jacksonville businesses. From small offices to large retail centers, we provide consistent, dependable waste management solutions.',
    features: [
      'Scheduled pickup service',
      'Multiple size options',
      'Volume discounts available',
      'Flexible contract terms',
      'Dedicated account manager',
      'Emergency service available',
      'Recycling options',
      'Invoiced billing',
    ],
    idealFor: [
      'Office Buildings',
      'Retail Stores',
      'Restaurants',
      'Property Managers',
      'Apartment Complexes',
      'Warehouses',
      'Industrial Sites',
      'Shopping Centers',
    ],
    pricing: {
      startingAt: '$150/month',
      includes: [
        'Weekly or bi-weekly pickup',
        'Container maintenance',
        'Flexible scheduling',
        'No long-term contracts required',
      ],
    },
    relatedServices: [
      { title: 'Construction Dumpster', href: '/construction-dumpster-rental', description: 'For job site waste removal' },
      { title: 'Junk Removal', href: '/junk-removal-jacksonville', description: 'One-time cleanout service' },
      { title: '20 Yard Dumpster', href: '/20-yard-dumpster-rental', description: 'Largest roll-off option' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'construction-dumpster-rental',
    type: 'service',
    title: 'Construction Dumpster Rental',
    metaTitle: 'Construction Dumpster Rental Jacksonville FL',
    metaDescription: 'Construction dumpster rental in Jacksonville FL. Heavy-duty roll-off containers for job sites and renovations.',
    keywords: [
      'construction dumpster rental jacksonville',
      'job site dumpster rental',
      'contractor dumpster jacksonville fl',
      'renovation dumpster rental',
      'construction debris removal',
      'roofing dumpster rental',
    ],
    description: 'Heavy-duty roll-off dumpsters designed for construction sites and renovation projects. We understand job site logistics and provide reliable, on-time service.',
    features: [
      'Heavy-duty containers for construction debris',
      'On-time delivery and pickup guaranteed',
      'Flexible scheduling for project timelines',
      'High weight limits for heavy materials',
      'Volume discounts for contractors',
      'Multiple dumpsters available for large sites',
      'Same-day service available',
      'Extended rental periods available',
    ],
    idealFor: [
      'New Construction',
      'Home Renovations',
      'Commercial Build-Outs',
      'Demolition Projects',
      'Roofing Jobs',
      'Flooring Removal',
      'Framing Debris',
      'General Construction',
    ],
    pricing: {
      startingAt: '$350',
      includes: [
        'Delivery & Pickup',
        'Up to 4 tons disposal',
        '5-day rental period',
        'Contractor pricing available',
      ],
    },
    relatedServices: [
      { title: 'Commercial Dumpster', href: '/commercial-dumpster-rental', description: 'Ongoing business waste service' },
      { title: 'Demolition Services', href: '/demolition-services-jacksonville', description: 'Professional demolition with debris removal' },
      { title: '20 Yard Dumpster', href: '/20-yard-dumpster-rental', description: 'Our largest size for big projects' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'residential-dumpster-rental',
    type: 'service',
    title: 'Residential Dumpster Rental',
    metaTitle: 'Residential Dumpster Rental Jacksonville FL',
    metaDescription: 'Residential dumpster rental in Jacksonville FL. Homeowner-friendly service for DIY projects and cleanouts.',
    keywords: [
      'residential dumpster rental jacksonville',
      'homeowner dumpster rental',
      'diy dumpster rental jacksonville fl',
      'home project dumpster',
      'residential roll off',
      'home cleanout dumpster',
      'estate cleanout dumpster',
    ],
    description: 'Homeowner-friendly dumpster rental service designed for DIY projects. We make renting a dumpster easy with transparent pricing and excellent customer service.',
    features: [
      'Easy online or phone ordering',
      'Driveway-friendly delivery',
      'Driveway protection boards included',
      'Flexible rental periods',
      'No hidden fees',
      'Same-day delivery available',
      'Helpful size recommendations',
      'Family-owned local service',
    ],
    idealFor: [
      'Home Cleanouts',
      'Garage Cleanups',
      'Estate Cleanouts',
      'DIY Renovations',
      'Moving Cleanouts',
      'Yard Projects',
      'Attic/Basement Cleanouts',
      'Spring Cleaning',
    ],
    pricing: {
      startingAt: '$275',
      includes: [
        'Delivery & Pickup',
        '5-day rental period',
        'Up to 2 tons disposal',
        'Driveway protection',
      ],
    },
    relatedServices: [
      { title: '10 Yard Dumpster', href: '/10-yard-dumpster-rental', description: 'Perfect for small cleanouts' },
      { title: 'Junk Removal', href: '/junk-removal-jacksonville', description: 'We do all the heavy lifting' },
      { title: 'Size Guide', href: '/dumpster-size-guide', description: 'Find your perfect size' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'concrete-disposal-dumpster',
    type: 'service',
    title: 'Concrete Disposal Dumpster',
    metaTitle: 'Concrete Disposal Dumpster Jacksonville FL',
    metaDescription: 'Concrete and heavy debris disposal in Jacksonville FL. Specialized dumpsters for concrete, brick, and stone.',
    keywords: [
      'concrete disposal dumpster jacksonville',
      'heavy debris dumpster rental',
      'concrete removal jacksonville fl',
      'brick disposal dumpster',
      'dirt removal dumpster',
      'stone disposal jacksonville',
    ],
    description: 'Specialized dumpster service for concrete, brick, dirt, and other heavy materials. Our containers are rated for heavy loads with proper weight limits.',
    features: [
      'Heavy-duty containers for dense materials',
      'Weight-rated for concrete and brick',
      'Smaller containers to manage weight',
      'Proper disposal at recycling facilities',
      'Dirt and fill dirt accepted',
      'Stone and asphalt accepted',
      'Clear weight limit guidelines',
      'Overweight protection advice',
    ],
    idealFor: [
      'Concrete Slab Removal',
      'Driveway Demolition',
      'Patio Removal',
      'Brick Projects',
      'Foundation Work',
      'Landscaping Debris',
      'Pool Deck Removal',
      'Sidewalk Replacement',
    ],
    pricing: {
      startingAt: '$350',
      includes: [
        'Delivery & Pickup',
        'Up to 2 tons concrete',
        '5-day rental period',
        'Recycling when possible',
      ],
    },
    relatedServices: [
      { title: 'Demolition Services', href: '/demolition-services-jacksonville', description: 'Professional demolition' },
      { title: 'Construction Dumpster', href: '/construction-dumpster-rental', description: 'Job site waste removal' },
      { title: '10 Yard Dumpster', href: '/10-yard-dumpster-rental', description: 'Ideal for heavy materials' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'junk-removal-jacksonville',
    type: 'service',
    title: 'Junk Removal',
    metaTitle: 'Junk Removal Jacksonville FL',
    metaDescription: 'Professional junk removal in Jacksonville FL. We do all the heavy lifting. Same-day service available.',
    keywords: [
      'junk removal jacksonville fl',
      'junk hauling jacksonville',
      'furniture removal jacksonville',
      'appliance removal jacksonville',
      'trash removal service jacksonville',
      'junk pickup jacksonville',
    ],
    description: 'Full-service junk removal where we do all the heavy lifting. Just point to what you want gone, and we make it disappear.',
    features: [
      'We do ALL the heavy lifting',
      'Same-day service available',
      'Upfront pricing - no surprises',
      'We clean up after ourselves',
      'Eco-friendly disposal & recycling',
      'Furniture, appliances, electronics',
      'Yard waste and debris',
      'Estate and hoarding cleanouts',
    ],
    idealFor: [
      'Furniture Removal',
      'Appliance Disposal',
      'Estate Cleanouts',
      'Hoarding Cleanup',
      'Office Cleanouts',
      'Garage Cleanups',
      'Yard Waste Removal',
      'Moving Cleanouts',
    ],
    customPage: true,
  },
  {
    slug: 'demolition-services-jacksonville',
    type: 'service',
    title: 'Demolition Contractors',
    metaTitle: 'Demolition Contractors Jacksonville FL',
    metaDescription: 'Professional commercial and residential demolition services in Jacksonville FL. Pool demolition, interior demolition, site clearing, and emergency demolition. Licensed & insured.',
    keywords: [
      'demolition contractors jacksonville fl',
      'demolition services jacksonville',
      'commercial demolition jacksonville',
      'residential demolition jacksonville',
      'pool demolition jacksonville',
      'interior demolition jacksonville',
      'demolition company jacksonville fl',
      'site clearing jacksonville',
      'emergency demolition jacksonville',
    ],
    description: 'When it comes to commercial and residential demolition, 904 Dumpster has the experience and expertise to do the job. Regardless of the size, whether small buildings or large industrial ones, we are the people for the job.',
    features: [
      'Commercial & residential demolition',
      'Pool demolition & removal',
      'Interior/selective demolition',
      'Site clearing & excavation',
      'Emergency demolition services',
      'Licensed and insured in Florida',
      'Professional equipment & vehicles',
      'Debris removal included',
    ],
    idealFor: [
      'Commercial Buildings',
      'Residential Structures',
      'Swimming Pool Removal',
      'Interior Demolition',
      'Site Clearing',
      'Emergency Demolition',
      'Industrial Facilities',
      'Government Projects',
    ],
    customPage: true,
  },
]

// Helper functions
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug)
}

export function getServicesByType(type: ServiceType): ServicePage[] {
  return SERVICES.filter((service) => service.type === type)
}
