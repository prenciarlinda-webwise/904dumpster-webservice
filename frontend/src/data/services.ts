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
    metaTitle: '10 Yard Dumpster Rental - Dimensions, Cost & What Fits',
    metaDescription: '10 yard dumpster rental from $299. 12 ft x 7.5 ft x 3.6 ft roll-off container, 1 ton disposal included, holds 3 pickup truck loads. Free delivery, pickup, and same-day service.',
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
      'dumpster sizes 10 yard',
      '10 yard roll off dumpster rental prices',
      '10yd dumpster dimensions',
      '10 yd dumpster dimensions',
      'how big is a 10 yd dumpster',
      'what size is a 10 yard dumpster',
      'how much to rent a 10 yard dumpster',
      'cost to rent a 10 yard dumpster',
      'how much is it to rent a 10 yard dumpster',
      '10 cubic yard dumpster dimensions',
      '10 yard container dimensions',
      'what are the dimensions of a 10 yard dumpster',
      'how big is a 10 yard roll off dumpster',
      'how big is 10 yard dumpster',
      'dumpster dimensions 10 yard',
      'dimensions 10 yard dumpster',
      'dimensions of a 10 yard roll off dumpster',
      '10 cu yd dumpster dimensions',
    ],
    description: 'A 10 yard dumpster rental at 904 Dumpster costs $299 flat. The price includes delivery, pickup, a 3-day rental period, and disposal of up to 1 ton, making the 10-yard the most affordable roll-off option for small cleanouts, garage projects, and single-room renovations. Available across Jacksonville and Northeast Florida.',
    features: [
      'Compact 12\' x 7.5\' x 3.6\' dimensions',
      'Fits in most residential driveways',
      'Holds approximately 3 pickup truck loads',
      '3-day rental included (2-week option available)',
      'Up to 1 ton disposal included',
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
        answer: 'A 10 yard dumpster measures 12 feet long by 7.5 feet wide by 3.6 feet high. It holds 10 cubic yards of debris, equivalent to roughly 3 full-size pickup truck loads or 40 to 50 large contractor bags. The container has the footprint of a small sedan and fits comfortably in a standard single-car driveway.',
      },
      {
        question: 'How much does a 10 yard dumpster cost?',
        answer: 'A 10 yard dumpster rental costs $299 at 904 Dumpster. National averages run $425 to $750 for the same size, so 904 Dumpster is roughly 30 to 50 percent below market. The $299 flat rate includes delivery, a 3-day rental, pickup, and disposal of up to 1 ton, with no fuel surcharges, environmental fees, or admin charges.',
        image: '/images/10-yard-dumpster-rental-promo.jpg',
      },
      {
        question: 'What is the weight limit for a 10 yard dumpster?',
        answer: 'The weight limit for a 10 yard dumpster at 904 Dumpster is 2,000 pounds, which equals 1 ton and is included in the $299 flat rate. That capacity covers most household cleanouts and light renovation debris. Overage above 1 ton is billed at $75 per additional ton. Heavy materials like concrete, brick, and dirt fill the weight allowance faster than the volume allowance.',
      },
      {
        question: 'Will a couch fit in a 10 yard dumpster?',
        answer: 'Yes, a standard couch fits easily in a 10 yard dumpster. The container is 12 feet long and 7.5 feet wide with a 3.6-foot height, leaving plenty of room for a couch plus additional furniture such as chairs, mattresses, dressers, and end tables. Most single-room furniture cleanouts fit in a 10 yard dumpster with space to spare.',
      },
      {
        question: 'How many pickup truck loads fit in a 10 yard dumpster?',
        answer: 'A 10 yard dumpster holds approximately 3 full-size pickup truck loads of debris. Each landfill trip typically costs $50 to $75 in disposal fees, plus fuel and 1 to 2 hours of your time. A single 10 yard rental from 904 Dumpster at $299 replaces those 3 trips and removes the lifting, driving, and unloading from your project.',
      },
      {
        question: 'Can I put concrete in a 10 yard dumpster?',
        answer: 'Yes, you can put concrete in a 10 yard dumpster, but the 2,000-pound weight limit fills up quickly. A 10-yard bin filled entirely with concrete would far exceed the limit, so the 10-yard works best for small amounts of concrete mixed with other debris. For concrete-only loads like a driveway tear-out, call 904 Dumpster at (904) 240-5598 for heavy-debris pricing.',
      },
    ],
    customPage: true,
  },
  {
    slug: '15-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '15 Yard Dumpster Rental',
    metaTitle: '15 Yard Dumpster Rental - Dimensions, Cost & Roofing Capacity',
    metaDescription: '15 yard dumpster rental from $349. 14 ft x 7.5 ft x 4.5 ft roll-off container, 1.5 ton disposal, holds 25 to 30 squares of shingles or 5 to 6 pickup truck loads. Free delivery and pickup.',
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
      '15yd dumpster dimensions',
      '15 cubic feet dumpster',
      'size of 15 yard dumpster',
      '15 cubic yard dumpster dimensions',
      'how big is a 15 cubic yard dumpster',
      'how big is a 15 yd dumpster',
      'how big is 15 yard dumpster',
      'how much is a 15 yard dumpster rental',
      'how long is a 15 yard dumpster',
      'what is the size of a 15 yard dumpster',
      'what does a 15 yard dumpster look like',
      'how much can a 15 yard dumpster hold',
      'how much weight can a 15 yard dumpster hold',
      '15 cubic yard',
      '15 cubic yards',
    ],
    description: 'A 15 yard dumpster rental at 904 Dumpster costs $349 flat. The price includes delivery, pickup, a 5-day rental, and disposal of up to 1.5 tons. The 15-yard is the most-rented size for roofing tear-offs (25 to 30 squares of shingles), kitchen and bathroom remodels, and mid-size cleanouts. Available across Jacksonville and Northeast Florida.',
    features: [
      'Compact 14\' x 7.5\' x 4.5\' dimensions - fits standard driveways',
      '$349 flat rate - no hidden fees or broker markups',
      'Holds 5-6 pickup truck loads (80-100 contractor bags)',
      '5-day rental included ($15/day extensions available)',
      'Up to 1.5 tons (3,000 lbs) disposal included',
      '2-week ($399) and monthly ($499) options available',
      'Free delivery and pickup - same-day available',
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
        answer: 'A 15 yard dumpster measures 14 feet long, 7.5 feet wide, and 4.5 feet high, roughly the footprint of a large SUV. The 14-foot length fits comfortably in a standard residential driveway without overhanging the sidewalk, which keeps the container compliant with most municipal placement rules.',
        image: '/images/15-yard-dumpster.jpg',
      },
      {
        question: 'How much can a 15 yard dumpster hold?',
        answer: 'A 15 yard dumpster holds exactly 15 cubic yards of waste, equivalent to 5 to 6 standard pickup truck beds, roughly 80 to 100 large 33-gallon contractor bags, debris from a full kitchen remodel, or about 1,500 square feet of flooring tear-out (carpet and padding).',
      },
      {
        question: 'How many roofing squares fit in a 15 yard dumpster?',
        answer: 'A 15 yard dumpster safely holds 25 to 30 squares of standard asphalt shingles, equal to 2,500 to 3,000 square feet of roof. An average single-family home generates about 2 tons of roofing debris, which fits within the 1.5-ton included weight allowance plus a small overage. For heavy architectural shingles, plan for 25 squares maximum to stay under the weight limit.',
        image: '/images/dumpster-rental-roofing-jacksonville.jpg',
      },
      {
        question: 'How much does a 15 yard dumpster cost?',
        answer: 'A 15 yard dumpster rental costs $349 at 904 Dumpster. National guides put the same size between $500 and $1,000, so 904 Dumpster comes in well below market. The $349 rate includes delivery, a 5-day rental, pickup, and disposal of up to 1.5 tons. Overage above 1.5 tons is $75 per additional ton.',
      },
      {
        question: 'Is a 15 yard dumpster big enough for a kitchen remodel?',
        answer: 'Yes, the 15 yard is the right size for a full kitchen remodel in most homes. It holds old cabinets, countertops, flooring, drywall, appliances, and fixtures from a standard kitchen renovation. The 4.5-foot walls are low enough to toss heavy debris over the side without a ladder, and the rear swing door allows walk-in loading for bulky items like dishwashers and vanities.',
      },
      {
        question: 'What is the weight limit for a 15 yard dumpster?',
        answer: 'The weight limit for a 15 yard dumpster at 904 Dumpster is 3,000 pounds, equal to 1.5 tons, included in the $349 flat rate. That covers most renovation projects, roofing tear-offs, and medium-sized cleanouts. Overage above 1.5 tons is billed at $75 per additional ton. Heavy materials like concrete, brick, and dirt fill the weight allowance much faster than the volume allowance.',
      },
    ],
    customPage: true,
  },
  {
    slug: '20-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '20 Yard Dumpster Rental',
    metaTitle: '20 Yard Dumpster Rental - Dimensions, Cost & What Fits',
    metaDescription: '20 yard dumpster rental from $399. 14 ft x 7.5 ft x 5.8 ft roll-off container, 2 ton disposal, holds 7 pickup truck loads or whole-house cleanout debris. Free delivery and pickup.',
    keywords: [
      '20 yard dumpster',
      '20 yard dumpster rental',
      '20 yd dumpster rental',
      '20 yd dumpster',
      '20 yard dumpster dimensions',
      '20 cubic yard dumpster',
      '20 yard roll off dumpster',
      '20 yard roll off container',
      '20 yard roll off dumpster rental',
      '20 yard dumpster size',
      '20 yard dumpster cost',
      '20 yard dumpster rental cost',
      '20 yard dumpster rental prices near me',
      '20 yard dumpster rental prices',
      '20 yard dumpster price',
      '20 yard container',
      'how big is a 20 yard dumpster',
      'how much does a 20 yard dumpster cost',
      'how long is a 20 yard dumpster',
      'how much is a 20 yard dumpster rental',
      '15 vs 20 yard dumpster',
      'dumpster rental 20 yard',
      'dimensions of a 20 yard dumpster',
      'dumpster rental jacksonville fl',
      'what are the dimensions of a 20 yard dumpster',
      '20 yard roll off dumpster dimensions',
      'how much does it cost to rent a 20 yard dumpster',
      '20 cubic yard dumpster dimensions',
      'what size is a 20 yard dumpster',
      'how wide is a 20 yard dumpster',
      'how big is a 20 cubic yard dumpster',
      'how many feet is a 20 yard dumpster',
      'cost to rent a 20 yard dumpster',
      'dimensions of a 20 yard roll off dumpster',
      '20 yard dumpster weight',
      '20 yard dumpster vs 30 yard dumpster',
    ],
    description: 'A 20 yard dumpster rental at 904 Dumpster costs $399 flat. The price includes delivery, pickup, a 5-day rental, and disposal of up to 2 tons, making the 20-yard the best value per cubic yard for whole-house cleanouts, multi-room remodels, and construction debris. Available across Jacksonville and Northeast Florida.',
    features: [
      '14\' x 7.5\' x 5.8\' dimensions,largest residential size',
      '$399 flat rate,no hidden fees or broker markups',
      'Holds approximately 7 pickup truck loads (100-120 contractor bags)',
      '5-day rental included ($15/day extensions available)',
      'Up to 2 tons (4,000 lbs) disposal included',
      'Free delivery and pickup,same-day available',
      'Driveway protection boards included at no extra cost',
      'Contractor and multi-dumpster pricing available',
    ],
    idealFor: [
      'Whole-House Estate Cleanouts',
      'Major Home Renovations (multi-room)',
      'Construction & New Build Cleanup',
      'Large Deck, Fence & Shed Demolition',
      'Commercial Buildout Debris',
      'Storm Damage & Hurricane Cleanup',
      'Whole-Home Remodels (kitchen + bath + flooring)',
      'Large Landscaping & Land Clearing',
    ],
    faqs: [
      {
        question: 'How big is a 20 yard dumpster?',
        answer: 'A 20 yard dumpster measures 14 feet long by 7.5 feet wide by 5.8 feet high. It holds 20 cubic yards of debris, equivalent to about 7 full-size pickup truck loads or 100 to 120 large contractor bags. The container has the same footprint as a 15-yard dumpster but stands roughly a foot taller, giving 33 percent more capacity.',
        image: '/images/20-yard-dumpster.jpg',
      },
      {
        question: 'How much does a 20 yard dumpster cost?',
        answer: 'A 20 yard dumpster rental costs $399 at 904 Dumpster. National guides like Hometown Dumpster Rental put the same size between $350 and $650, so 904 Dumpster falls at the low end of market with no hidden add-ons. The flat rate covers delivery, a 5-day rental, pickup, and disposal of up to 2 tons. Overage above 2 tons is billed at $75 per additional ton.',
      },
      {
        question: 'What is the difference between a 15 and 20 yard dumpster?',
        answer: 'The 15 yard dumpster measures 14 ft x 7.5 ft x 4.5 ft, holds 5 to 6 pickup truck loads, and costs $349 with a 1.5-ton weight allowance. The 20 yard dumpster measures 14 ft x 7.5 ft x 5.8 ft, holds 7 pickup truck loads, and costs $399 with a 2-ton weight allowance. Both have the same footprint, but the 20-yard is 1.3 feet taller, giving 33 percent more volume and more tonnage for only $50 more. Choose the 15-yard for roofing and single-room projects, and the 20-yard for multi-room renovations, whole-house cleanouts, and construction.',
      },
      {
        question: 'How much can a 20 yard dumpster hold?',
        answer: 'A 20 yard dumpster holds 20 cubic yards of debris, equivalent to 7 pickup truck loads, 100 to 120 large contractor bags, or the debris from a whole-house renovation. It comfortably handles multi-room remodels, large deck demolitions, full-home estate cleanouts, and construction site cleanup. The 2-ton (4,000-pound) weight allowance covers most household and construction debris.',
      },
      {
        question: 'Will a 20 yard dumpster fit in my driveway?',
        answer: 'Yes, in most cases. The 20 yard dumpster is 14 feet long and 7.5 feet wide, the same footprint as the 15-yard, so it fits in most standard two-car driveways. The main consideration is the 5.8-foot container height: the roll-off truck needs at least 14 feet of overhead clearance for safe placement. Watch for low-hanging tree branches and overhead wires.',
        image: '/images/20-yard-dumpster-driveway-delivery.jpg',
      },
      {
        question: 'What is the weight limit for a 20 yard dumpster?',
        answer: 'The weight limit for a 20 yard dumpster at 904 Dumpster is 4,000 pounds, equal to 2 tons, included in the $399 flat rate. That is sufficient for most construction debris, furniture, and household items. Overage above 2 tons is billed at $75 per additional ton. Heavy materials like concrete, brick, and dirt hit the weight limit faster than bulky but lightweight items like furniture and drywall.',
      },
    ],
    customPage: true,
  },
  {
    slug: 'dumpster-size-guide',
    type: 'guide',
    title: 'Dumpster Size Chart',
    metaTitle: 'Dumpster Size Chart - 10, 15 & 20 Yard Dimensions Compared',
    metaDescription: 'Dumpster size chart with dimensions for 10 yard (12\'x7.5\'x3.6\'), 15 yard (14\'x7.5\'x4.5\'), and 20 yard (14\'x7.5\'x5.8\') roll-off containers. Standard dumpster sizes compared with photos.',
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
      'sizes of roll off dumpsters',
      'how big are dumpsters',
      'different dumpster sizes',
      'rental dumpster sizes',
      'what are dumpster sizes',
      'what size do dumpsters come in',
      'what sizes do dumpsters come in',
      'roll off dumpster sizes',
      'average dumpster size',
      'dumpster sizes in yards',
      'typical dumpster size',
      'dumpster sizes pictures',
      'roll off dumpster size comparison',
      'what size roll off dumpster do i need',
      'dumpster capacity',
      'different sizes of dumpsters',
      'biggest dumpster',
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
    slug: 'commercial-dumpster-rental-jacksonville-fl',
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
      'commercial dumpster rentals',
      'commercial dumpster cost',
      'commercial trash dumpster sizes',
      'business dumpster cost',
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
      { title: 'Construction Dumpster', href: '/construction-dumpster-rental-jacksonville-fl', description: 'For job site waste removal' },
      { title: 'Junk Removal', href: '/junk-removal-jacksonville-fl', description: 'One-time cleanout service' },
      { title: '20 Yard Dumpster', href: '/20-yard-dumpster-rental', description: 'Largest roll-off option' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'construction-dumpster-rental-jacksonville-fl',
    type: 'service',
    title: 'Construction Dumpster Rental Jacksonville',
    metaTitle: 'Construction Dumpster Rental Jacksonville FL',
    metaDescription: 'Construction dumpster rental in Jacksonville FL from $349. 10, 15, and 20-yard roll-offs for job sites, renovations, and roofing. Same-day delivery and contractor pricing.',
    keywords: [
      'construction dumpster rental jacksonville',
      'construction dumpsters rental',
      'construction dumpster sizes',
      'construction dumpster near me',
      'how much is a construction dumpster',
      'roll off dumpster rental jacksonville fl',
      'job site dumpster rental',
      'contractor dumpster jacksonville',
      'roofing dumpster rental jacksonville',
      'construction debris removal jacksonville',
    ],
    description: 'Construction dumpster rental in Jacksonville from $349. Heavy-duty 10, 15, and 20-yard roll-off containers for job sites, renovations, and roofing tear-offs. Same-day delivery, contractor pricing on multiple containers, and on-call swap-outs to keep your project on schedule.',
    features: [
      'Heavy-duty roll-offs for construction debris',
      'On-time delivery and pickup, guaranteed',
      'Flexible scheduling for project timelines',
      'Contractor pricing on 3+ containers',
      'Same-day swap-outs available',
      'Net-30 billing for active accounts',
    ],
    idealFor: [
      'New Construction',
      'Home Renovations',
      'Commercial Build-Outs',
      'Demolition Projects',
      'Roofing Jobs',
      'Flooring Removal',
      'Framing Debris',
      'Sitework and Land Clearing',
    ],
    pricing: {
      startingAt: '$349',
      includes: [
        'Delivery and pickup',
        '5-day rental period',
        '1.5 to 2 tons disposal',
        'Contractor pricing available',
      ],
    },
    faqs: [
      {
        question: 'What size dumpster do I need for a construction project?',
        answer: 'Most construction projects in Jacksonville fit a 15-yard or 20-yard roll-off. The 15-yard handles single-room remodels, kitchen tear-outs, and roofing jobs of 25 to 30 squares. The 20-yard is the contractor standard for whole-home renovations, framing debris, and multi-trade builds. For new construction or large commercial sites, 904 Dumpster offers contractor pricing on multiple containers and recurring delivery schedules.',
      },
      {
        question: 'How much is a construction dumpster?',
        answer: 'A construction dumpster from 904 Dumpster starts at $349 for the 15-yard and $399 for the 20-yard, all-inclusive of delivery, pickup, 5 days on site, and 1.5 to 2 tons of disposal. National averages for construction roll-offs run $400 to $750 per haul, putting 904 Dumpster well below market in the Jacksonville area. Contractor volume pricing is available on 3 or more containers.',
      },
      {
        question: 'What can I put in a construction dumpster?',
        answer: 'Construction dumpsters accept lumber, drywall, framing scraps, flooring, cabinets, tile, brick, concrete (within the weight limit), roofing shingles, insulation, siding, and general jobsite debris. Prohibited materials include hazardous chemicals, wet paint (must be dried), batteries, tires, freon-containing appliances, and electronics, all of which must go to the Duval County Household Hazardous Waste facility.',
      },
      {
        question: 'Do you offer contractor pricing on multiple construction dumpsters?',
        answer: 'Yes. 904 Dumpster offers volume pricing for general contractors, roofers, and remodelers running 3 or more containers per month in Jacksonville and Northeast Florida. Recurring delivery schedules, dedicated dispatch, same-day swap-outs, and net-30 billing terms are available. Call (904) 240-5598 to set up a contractor account.',
      },
      {
        question: 'How long can I keep a construction dumpster on a Jacksonville job site?',
        answer: 'Standard rental is 5 days, with $15 per day extensions for longer projects. For long-running construction jobs, 904 Dumpster offers weekly and monthly rates plus on-call swap-outs, where the team hauls a full container and drops a fresh empty on the same day so the crew never stops working.',
      },
      {
        question: 'Do I need a permit for a construction dumpster in Jacksonville, FL?',
        answer: 'No permit is needed if the dumpster is placed on private property such as a job site, parking lot, or driveway. For street or right-of-way placement, the City of Jacksonville Development Services Department requires a Right-of-Way permit. 904 Dumpster places on private property whenever possible to avoid permit delays on active construction schedules.',
      },
    ],
    relatedServices: [
      { title: 'Commercial Dumpster', href: '/commercial-dumpster-rental-jacksonville-fl', description: 'Ongoing business waste service' },
      { title: 'Demolition Services', href: '/demolition-services-jacksonville-fl', description: 'Professional demolition with debris removal' },
      { title: '20 Yard Dumpster', href: '/20-yard-dumpster-rental', description: 'Our largest roll-off for big projects' },
    ],
    showDumpsterSizes: true,
    customPage: true,
  },
  {
    slug: 'residential-dumpster-rental-jacksonville-fl',
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
      'household dumpster rental',
      'dumpster rental residential',
      'driveway dumpster rental',
      'residential roll off',
      'dumpster rentals for residential',
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
      startingAt: '$299',
      includes: [
        'Delivery & Pickup',
        '5-day rental period',
        'Up to 2 tons disposal',
        'Driveway protection',
      ],
    },
    relatedServices: [
      { title: '10 Yard Dumpster', href: '/10-yard-dumpster-rental', description: 'Perfect for small cleanouts' },
      { title: 'Junk Removal', href: '/junk-removal-jacksonville-fl', description: 'We do all the heavy lifting' },
      { title: 'Size Guide', href: '/dumpster-size-guide', description: 'Find your perfect size' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'concrete-disposal-dumpster-jacksonville-fl',
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
      'concrete junk removal',
      'disposing of concrete',
      'concrete disposal dumpster',
      'recycling concrete waste',
      'concrete dumpster cost',
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
      { title: 'Demolition Services', href: '/demolition-services-jacksonville-fl', description: 'Professional demolition' },
      { title: 'Construction Dumpster', href: '/construction-dumpster-rental-jacksonville-fl', description: 'Job site waste removal' },
      { title: '10 Yard Dumpster', href: '/10-yard-dumpster-rental', description: 'Ideal for heavy materials' },
    ],
    showDumpsterSizes: true,
  },
  {
    slug: 'junk-removal-jacksonville-fl',
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
      'whole house junk removal',
      'junk pods',
      'take it away dumpster rental',
      'remove and dispose',
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
    slug: 'demolition-services-jacksonville-fl',
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
      'demolition dumpster',
      'demo bin',
      'home deconstruction',
      'full gut rehab',
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
