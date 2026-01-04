// Service page types
export type ServiceType = 'dumpster-size' | 'service' | 'location' | 'guide'

export interface FAQ {
  question: string
  answer: string
  image?: string
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
    metaDescription: 'Rent a 10 yard dumpster in Jacksonville FL for $275. Perfect for garage cleanouts & small renovations. Same-day delivery available.',
    keywords: [
      '10 yard dumpster',
      '10 yard dumpster rental',
      '10 yd dumpster rental',
      '10 yd dumpster',
      '10 yard roll off dumpster',
      '10 cubic yard dumpster',
      '10 yard dumpster dimensions',
      '10 yard dumpster size',
      '10 cubic yard dumpster rental',
      '10 yd roll off dumpster',
      '10 yard dumpster cost',
      'smallest dumpster rental',
      '10 yard container',
    ],
    description: 'Our 10 yard dumpster is the smallest roll-off container we offer, perfect for homeowners tackling small cleanouts, garage projects, and minor home renovations. This 10 cubic yard dumpster fits in tight Jacksonville Beach and Neptune Beach driveways.',
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
      'Yard Debris Removal',
      'Attic Cleanouts',
      'Single Room Remodels',
      'Estate Cleanouts (1-2 rooms)',
      'Moving Cleanouts',
      'Small Deck Removal',
    ],
    faqs: [
      {
        question: 'How big is a 10 yard dumpster?',
        answer: 'A 10 yard dumpster measures 12\' long x 7.5\' wide x 3.6\' high and holds about 3 pickup truck loads. This compact size fits most residential driveways and is ideal for garage cleanouts and small renovations.',
      },
      {
        question: 'What does a 10 yard dumpster look like?',
        answer: 'A 10 yard dumpster is a low-profile rectangular metal container, only 3.6 feet high. It\'s about the length of a compact car with a rear swing door for easy walk-in loading.',
        image: '/images/10-yard-dumpster.jpg',
      },
      {
        question: 'How much does a 10 yard dumpster cost in Jacksonville?',
        answer: 'At 904 Dumpster, our 10 yard costs $275 flat rate. Most Jacksonville competitors charge $350-$400 for the same size. Our price includes delivery, 5-day rental, pickup, and disposal up to 1.5 tons.',
      },
      {
        question: 'What is the smallest dumpster you can rent?',
        answer: 'At 904 Dumpster, our smallest option is the 10 yard container. It\'s perfect for smaller residential projects without paying for capacity you don\'t need.',
      },
      {
        question: 'How many pickup truck loads fit in a 10 yard dumpster?',
        answer: 'A 10 yard dumpster holds approximately 3 full-size pickup truck loads of debris. Instead of making multiple dump runs, you load once and we haul it away.',
      },
    ],
    customPage: true,
  },
  {
    slug: '15-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '15 Yard Dumpster Rental in Jacksonville, FL',
    metaTitle: '15 Yard Dumpster Rental Jacksonville FL - $325 Flat Rate & Same-Day',
    metaDescription: 'Rent a 15-yard dumpster in Jacksonville for $325. Perfect for roofing, kitchen remodels, and multi-room cleanouts. Local experts with driveway-safe protection.',
    keywords: [
      '15 yard dumpster',
      '15 yard dumpster rental',
      '15 yd dumpster',
      '15 yard dumpster dimensions',
      '15 cubic yard dumpster',
      '15 yard roll off dumpster',
      '15 yard roll off container',
      '15 yard dumpster rental cost',
      '15 yd dumpster rental',
      '15 yard dumpster price',
      '15 yard dumpster size',
      '15 yard dumpster jacksonville',
      'roofing dumpster jacksonville',
      'dumpster rental near me',
      '15 yard dumpster weight limit',
      'how much does a 15 yard dumpster cost',
    ],
    description: 'When it comes to home renovations, roofing projects, or major decluttering in Northeast Florida, finding the "Goldilocks" solution for waste management is critical. The 15-yard roll-off dumpster is Jacksonville\'s most popular rental for a reason. At 904 Dumpster, we provide a $325 flat-rate solution that eliminates middleman broker fees and delivers real, local value to your doorstep.',
    features: [
      'Compact 14\' x 7.5\' x 4.5\' dimensions - fits standard driveways',
      '$325 flat rate - no hidden fees or broker markups',
      'Holds 5-6 pickup truck loads (80-100 contractor bags)',
      '5-day rental included ($15/day extensions available)',
      'Up to 2 tons (4,000 lbs) disposal included',
      'Free delivery and pickup - same-day available',
      'Driveway protection boards included at no extra cost',
      'Local Jacksonville experts - not a call center in Ohio',
    ],
    idealFor: [
      'Roofing Projects (25-30 squares of shingles)',
      'Kitchen & Bathroom Remodels',
      'Major Garage or Attic Purge',
      'Deck & Fence Removal (250 sq ft+)',
      '1,500 sq ft Flooring Tear-Out',
      'Multi-Room Estate Cleanouts',
      'Storm Damage Cleanup',
      'Pressure-Treated Wood Disposal',
    ],
    faqs: [
      {
        question: 'How big is a 15 yard dumpster?',
        answer: 'A 15 yard dumpster measures 14 feet long, 7.5 feet wide, and 4.5 feet high - roughly the size of a large SUV. Because our 15-yard bins are only 14 feet long, they fit comfortably in a standard residential driveway without hanging over the sidewalk, a common cause for city citations in Atlantic Beach and Downtown Jacksonville.',
        image: '/images/15-yard-dumpster.jpg',
      },
      {
        question: 'How much can a 15 yard dumpster hold?',
        answer: 'A 15 yard dumpster holds exactly 15 cubic yards of waste. To visualize this for your Jacksonville project: 5-6 standard pickup truck beds filled to the brim, approximately 80-100 large (33-gallon) contractor trash bags, debris from a large kitchen remodel, or 1,500 sq ft of flooring tear-out (carpet and padding).',
      },
      {
        question: 'What is the average cost of a 15 yard dumpster in Jacksonville?',
        answer: 'In the Jacksonville market, prices range from $325 to $450. 904 Dumpster offers a flat rate of $325 with no hidden broker fees. Our price includes delivery, 5-day rental, pickup, and disposal up to 2 tons (4,000 lbs). Overage fee is $75/ton only if you exceed the weight limit.',
      },
      {
        question: 'How many roofing squares fit in a 15 yard dumpster?',
        answer: 'A 15 yard dumpster can safely hold 25-30 squares of standard asphalt shingles (2,500-3,000 sq ft of roof). Most Jacksonville homes (avg. 2,500 sq ft) generate about 2 tons of roofing debris, which fits perfectly within our included weight limit. If you have heavy architectural shingles, we recommend staying under 30 squares to avoid exceeding the weight limit.',
      },
      {
        question: 'Will a 15 yard dumpster damage my driveway?',
        answer: 'Not with 904 Dumpster. Unlike national brokers, we provide complimentary wood planks (driveway protection boards) for every 15-yard delivery. Our professional drivers are trained in residential delivery and know how to protect Florida asphalt and pavers from the steel rollers.',
      },
      {
        question: 'Do I need a permit for a dumpster in Jacksonville?',
        answer: 'If the dumpster is placed entirely on your private property (driveway or yard), no permit is required. However, if you need to place it on a public street in areas like Springfield or Downtown, you must apply for a Right-of-Way permit through the City of Jacksonville Development Services Department. We know which neighborhoods require permits.',
      },
      {
        question: 'Can I rent a 15 yard dumpster for concrete?',
        answer: 'Yes, but only for "clean" concrete loads. Concrete is extremely heavy; a 15-yard bin filled with concrete would be impossible for a standard truck to lift. If you\'re tearing up a driveway, call us for "Heavy Debris" pricing and loading instructions.',
      },
      {
        question: 'How soon can you deliver to St. Augustine or Orange Park?',
        answer: 'We offer same-day delivery for all 15-yard rentals in St. Johns and Clay counties if you call before 11:00 AM. We also serve Nassau, Duval, and surrounding Northeast Florida areas.',
      },
    ],
    customPage: true,
  },
  {
    slug: '20-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '20 Yard Dumpster Rental',
    metaTitle: '20 Yard Dumpster Rental Jacksonville FL',
    metaDescription: 'Rent a 20 yard dumpster in Jacksonville FL for $375. Our largest size for major renovations & estate cleanouts. Same-day delivery available.',
    keywords: [
      '20 yard dumpster',
      '20 yd dumpster rental',
      '20 yard dumpster rental',
      '20 yard dumpster dimensions',
      '20 yd dumpster',
      '20 cubic yard dumpster',
      '20 yard roll off container',
      '20 yard roll off dumpster rental',
      '20 yard dumpster size',
      '20 yard dumpster cost',
      '20 yard dumpster rental cost',
      '20 yard container',
      '20 yard dumpster price',
    ],
    description: 'Our 20 yard dumpster is the largest residential roll off container we offer, ideal for major renovations, construction projects, and whole-home cleanouts. This 20 cubic yard dumpster provides maximum capacity for big projects throughout Jacksonville and Northeast Florida.',
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
      'Large Home Renovations',
      'Construction Jobs',
      'Whole-House Estate Cleanouts',
      'Commercial Projects',
      'Whole-Home Remodels',
      'New Construction Cleanup',
      'Large Deck Removal',
      'Storm Debris Cleanup',
    ],
    faqs: [
      {
        question: 'How big is a 20 yard dumpster?',
        answer: 'A 20 yard dumpster measures 14\' long x 7.5\' wide x 5.8\' high and holds about 7 pickup truck loads. It has the same footprint as a 15-yard but is taller, providing maximum capacity.',
      },
      {
        question: 'What does a 20 yard dumpster look like?',
        answer: 'A 20 yard dumpster is a rectangular metal container about shoulder-height (5.8 feet) and the length of a sedan. It features a rear swing door for easy walk-in loading.',
        image: '/images/20-yard-dumpster.jpg',
      },
      {
        question: 'How much does a 20 yard dumpster cost in Jacksonville?',
        answer: 'At 904 Dumpster, our 20 yard costs $375 flat rate. Most Jacksonville competitors charge $450-$500 for the same size. Our price includes delivery, 5-day rental, pickup, and disposal up to 2 tons.',
      },
      {
        question: 'What is the largest dumpster you can rent?',
        answer: 'At 904 Dumpster, our largest option is the 20 yard container. It holds approximately 7 pickup truck loads and is ideal for major renovations and construction projects.',
      },
      {
        question: 'How many pickup truck loads fit in a 20 yard dumpster?',
        answer: 'A 20 yard dumpster holds approximately 7 full-size pickup truck loads of debris. It\'s perfect for large home renovations, construction cleanup, and whole-house cleanouts.',
      },
    ],
    customPage: true,
  },
  {
    slug: 'dumpster-size-guide',
    type: 'guide',
    title: 'Dumpster Size Guide',
    metaTitle: 'Dumpster Sizes Guide - Compare 10, 15 & 20 Yard',
    metaDescription: 'Compare dumpster sizes for your project. 10 yard ($275), 15 yard ($325), 20 yard ($375). Find the right roll off container size in Jacksonville.',
    keywords: [
      'dumpster sizes',
      'roll off dumpster sizes',
      'dumpster size',
      'dumpster container sizes',
      'construction dumpster sizes',
      'standard dumpster size',
      'residential dumpster sizes',
      'roll off dumpster dimensions',
      'roll off container sizes',
      'what size dumpsters are there',
    ],
    description: 'Compare standard dumpster sizes to find the right roll off container for your project. We offer 10, 15, and 20 yard residential dumpster sizes in Jacksonville.',
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
    faqs: [
      {
        question: 'What size dumpsters are there?',
        answer: 'Standard dumpster sizes include 10, 15, 20, 30, and 40 yard containers. At 904 Dumpster, we offer 10, 15, and 20 yard residential dumpster sizes, which cover most home projects.',
      },
      {
        question: 'What is the most common dumpster size?',
        answer: 'The 15 yard dumpster is the most popular size for residential projects. It handles roofing jobs, kitchen remodels, and medium cleanouts while still fitting in standard driveways.',
      },
      {
        question: 'What size dumpster do I need for a home cleanout?',
        answer: 'For a single room or garage cleanout, a 10 yard is sufficient. For a whole-house cleanout, choose a 20 yard. At 904 Dumpster, we offer free size consultations.',
      },
      {
        question: '15 vs 20 yard dumpster - which should I choose?',
        answer: 'Choose a 15 yard for roofing, kitchen remodels, or 2-3 room cleanouts. Choose a 20 yard for whole-house cleanouts, large renovations, or construction projects.',
      },
      {
        question: 'What are standard roll off dumpster dimensions?',
        answer: 'Roll off dumpster dimensions vary by size: 10 yard (12\'x7.5\'x3.6\'), 15 yard (14\'x7.5\'x4.5\'), and 20 yard (14\'x7.5\'x5.8\'). All fit standard residential driveways.',
      },
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
    title: 'Junk Removal Jacksonville FL',
    metaTitle: 'Junk Removal Jacksonville FL - Same-Day Pickup',
    metaDescription: 'Junk removal in Jacksonville FL. We do the heavy lifting - furniture, appliances, yard waste. Same-day junk pickup available. Call now!',
    keywords: [
      'junk removal jacksonville fl',
      'junk removal jacksonville',
      'junk removal jacksonville florida',
      'junk removal duval county',
      'junk pickup jacksonville fl',
      'junk hauling jacksonville',
      'furniture removal jacksonville',
      'appliance removal jacksonville fl',
      'trash removal service jacksonville',
      'junk removal in jacksonville fl',
    ],
    description: 'Full-service junk removal in Jacksonville FL where we do all the heavy lifting. Just point to what you want gone, and we make it disappear. Same-day junk pickup available throughout Duval County.',
    features: [
      'We do ALL the heavy lifting',
      'Same-day junk pickup available',
      'Upfront pricing - no surprises',
      'We clean up after ourselves',
      'Eco-friendly disposal & recycling',
      'Furniture, appliances, electronics',
      'Yard waste and debris removal',
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
    faqs: [
      {
        question: 'How much does junk removal cost in Jacksonville?',
        answer: 'Junk removal pricing depends on how much space your items take in our truck. We offer quarter, half, and full truckload options. Call for a free quote with upfront pricing and no hidden fees.',
      },
      {
        question: 'Do you offer same-day junk pickup in Jacksonville FL?',
        answer: 'Yes, we offer same-day junk removal in Jacksonville and Duval County when you call before noon. We serve all of Northeast Florida including Orange Park, St. Augustine, and Ponte Vedra.',
      },
      {
        question: 'What items do you remove with junk hauling?',
        answer: 'We remove furniture, appliances, mattresses, yard waste, construction debris, electronics, and general household junk. We cannot take hazardous materials, paint, or chemicals.',
      },
      {
        question: 'How does junk removal work?',
        answer: 'Just point to what you want gone. Our crew does all the heavy lifting, loading, and cleanup. We haul everything away and dispose of items responsibly, recycling when possible.',
      },
      {
        question: 'Is junk removal cheaper than renting a dumpster?',
        answer: 'For small cleanouts, junk removal is often cheaper and easier since we do the work. For large projects like renovations, a dumpster rental gives you more time and capacity at a lower per-item cost.',
      },
    ],
    customPage: true,
  },
  {
    slug: 'demolition-services-jacksonville',
    type: 'service',
    title: 'Demolition Services Jacksonville FL',
    metaTitle: 'Demolition Services Jacksonville FL - Licensed Contractors',
    metaDescription: 'Demolition services in Jacksonville FL. Commercial, residential & interior demolition. Pool removal, site clearing. Licensed & insured demolition contractors.',
    keywords: [
      'demolition services',
      'demolition services near me',
      'commercial demolition services',
      'interior demolition services',
      'residential demolition services',
      'demolition services jacksonville fl',
      'demolition contractors jacksonville',
      'pool demolition jacksonville',
      'site clearing jacksonville fl',
      'industrial demolition services',
    ],
    description: 'Professional demolition services in Jacksonville FL for commercial, residential, and industrial projects. Our licensed demolition contractors handle everything from interior demolition to complete structure removal with debris hauling included.',
    features: [
      'Commercial demolition services',
      'Residential demolition services',
      'Interior/selective demolition',
      'Pool demolition & removal',
      'Site clearing & excavation',
      'Emergency demolition services',
      'Licensed and insured in Florida',
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
    faqs: [
      {
        question: 'How much do demolition services cost in Jacksonville?',
        answer: 'Demolition costs vary by project size, structure type, and debris removal needs. We provide free on-site estimates for all demolition services in Jacksonville. Call for a custom quote.',
      },
      {
        question: 'What demolition services do you offer?',
        answer: 'We offer commercial demolition, residential demolition, interior demolition, pool removal, shed demolition, deck removal, site clearing, and emergency demolition services throughout Jacksonville FL.',
      },
      {
        question: 'Do you need a permit for demolition in Jacksonville FL?',
        answer: 'Most demolition projects in Jacksonville require permits from the City of Jacksonville Building Inspection Division. We handle permit acquisition as part of our demolition services.',
      },
      {
        question: 'Is debris removal included with demolition services?',
        answer: 'Yes, all our demolition services include complete debris removal and disposal. We leave your site clean and ready for the next phase of your project.',
      },
      {
        question: 'How long does residential demolition take?',
        answer: 'Residential demolition typically takes 1-3 days depending on structure size. Shed and deck demolition is usually same-day. Interior demolition varies by scope.',
      },
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
