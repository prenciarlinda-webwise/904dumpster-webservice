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
    metaTitle: '10 Yard Dumpster Rental Jacksonville - $275',
    metaDescription: '$275 flat rate includes delivery, pickup, 5-day rental & 1.5-ton disposal. No hidden fees. Same-day delivery available. Book online or call (904) 240-5598.',
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
    description: 'A 10 yard dumpster rental in Jacksonville, FL costs $275 at 904 Dumpster. The flat rate includes delivery, pickup, a 5-day rental period, and 1.5 tons of disposal, making it the most affordable roll-off option for small cleanouts and garage projects. Locally owned and serving Jacksonville and Northeast Florida since 2016 with five-star Google reviews.',
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
        answer: 'A 10 yard dumpster measures 12 feet long by 7.5 feet wide by 3.6 feet high. It holds 10 cubic yards of debris, which is equivalent to approximately 3 full-size pickup truck loads or 40-50 large contractor bags. The container is roughly the footprint of a small sedan and fits comfortably in a standard single-car driveway.',
      },
      {
        question: 'What does a 10 yard dumpster look like?',
        answer: 'A 10 yard dumpster is a low-profile rectangular steel container standing only 3.6 feet high,about waist-height on most adults. It features a rear swing door for easy walk-in loading of heavy items and open top for tossing lighter debris. The compact profile makes it the least visually obtrusive dumpster size, which Jacksonville HOA communities often prefer.',
        image: '/images/10-yard-dumpster.jpg',
      },
      {
        question: 'How much does a 10 yard dumpster cost in Jacksonville?',
        answer: 'A 10 yard dumpster rental in Jacksonville, FL costs $275 at 904 Dumpster. This flat-rate price includes delivery, a 5-day rental period, pickup, and disposal of up to 1.5 tons (3,000 lbs). Most Jacksonville competitors charge $350-$400 for the same size, making 904 Dumpster $75-$125 cheaper on average. There are no hidden fuel surcharges, environmental fees, or admin charges.',
        image: '/images/10-yard-dumpster-rental-promo.jpg',
      },
      {
        question: 'What is the smallest dumpster you can rent?',
        answer: 'The smallest roll-off dumpster commonly available in Jacksonville is a 10 yard container. At 904 Dumpster, the 10 yard is our entry-level size at $275. It is ideal for single-room projects, garage cleanouts, and small renovations where you need more capacity than trash bags but don\'t want to pay for a larger container you won\'t fill.',
      },
      {
        question: 'How many pickup truck loads fit in a 10 yard dumpster?',
        answer: 'A 10 yard dumpster holds approximately 3 full-size pickup truck loads of debris. This means instead of making 3 separate trips to Trail Ridge Landfill (costing $50-$75 per trip in disposal fees alone, plus fuel and time), you load everything into one container and we haul it away for $275 total.',
      },
      {
        question: 'Will a couch fit in a 10 yard dumpster?',
        answer: 'Yes, a standard couch fits easily in a 10 yard dumpster. The container is 12 feet long and 7.5 feet wide with a 3.6-foot height, providing plenty of room for a couch plus additional furniture like chairs, mattresses, dressers, and end tables. Most single-room furniture cleanouts fit within a 10 yard dumpster with space to spare.',
      },
      {
        question: 'What is the weight limit for a 10 yard dumpster?',
        answer: 'The weight limit for a 10 yard dumpster at 904 Dumpster is 3,000 pounds (1.5 tons), which is included in the $275 flat rate. This is sufficient for most household cleanouts and light renovation debris. If you exceed the weight limit, an overage fee of $75 per additional ton applies. Heavy materials like concrete, brick, or dirt fill up weight capacity faster than volume.',
      },
      {
        question: 'Can I put concrete in a 10 yard dumpster?',
        answer: 'Yes, you can put concrete in a 10 yard dumpster, but be mindful of the 3,000-pound weight limit. Concrete is extremely heavy,a 10-yard bin filled entirely with concrete would far exceed the weight limit. For small amounts of concrete mixed with other debris, the 10 yard works fine. For concrete-only loads like a driveway tear-out, call us at (904) 240-5598 for heavy debris pricing.',
      },
      {
        question: 'Is it cheaper to rent a dumpster or go to the dump?',
        answer: 'For most Jacksonville projects, renting a 10 yard dumpster is cheaper than making multiple dump runs. A single trip to Trail Ridge Landfill costs $50-$75 in disposal fees plus fuel and 1-2 hours of your time. Since a 10 yard dumpster holds 3 pickup truck loads, you would spend $150-$225 in dump fees alone for the equivalent capacity,not counting gas, vehicle wear, and 4-6 hours of driving and unloading. Our $275 all-in price saves both money and time.',
      },
      {
        question: 'How long can I keep a 10 yard dumpster rental?',
        answer: 'The standard rental period for a 10 yard dumpster at 904 Dumpster is 5 days, included in the $275 price. If your project takes longer, extensions are available at $15 per additional day. Most Jacksonville homeowners finish garage cleanouts and small renovation projects within the 5-day window. Call us when you\'re done loading and we typically pick up within 24 hours.',
      },
      {
        question: 'Do I need a permit for a dumpster in Jacksonville, FL?',
        answer: 'No permit is needed if the dumpster is placed on your private property, such as your driveway or yard. If placement on a public street or right-of-way is necessary, you will need a Right-of-Way permit from the City of Jacksonville Development Services Department. At 904 Dumpster, we place on driveways 99% of the time. Our drivers know which Jacksonville neighborhoods like Riverside and Springfield have tight driveways and can advise on the best placement.',
        image: '/images/dumpster-rental-home-cleanout-jacksonville.jpg',
      },
    ],
    customPage: true,
  },
  {
    slug: '15-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '15 Yard Dumpster Rental in Jacksonville, FL',
    metaTitle: '15 Yard Dumpster Rental Jacksonville - $325',
    metaDescription: '$325 flat rate includes delivery, pickup, 5-day rental & 2-ton disposal. No hidden fees. Same-day delivery available. Book online or call (904) 240-5598.',
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
    description: 'A 15 yard dumpster rental in Jacksonville, FL costs $325 at 904 Dumpster. The flat rate includes delivery, pickup, a 5-day rental period, and 2 tons of disposal, making it the most popular size for roofing jobs and mid-size renovations. Locally owned and serving Jacksonville and Northeast Florida since 2016 with five-star Google reviews.',
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
        image: '/images/dumpster-rental-roofing-jacksonville.jpg',
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
      {
        question: 'What is the weight limit for a 15 yard dumpster?',
        answer: 'The weight limit for a 15 yard dumpster at 904 Dumpster is 4,000 pounds (2 tons), included in the $325 flat rate. This is sufficient for most renovation projects, roofing tear-offs, and medium-sized cleanouts. If you exceed 2 tons, an overage fee of $75 per additional ton applies. For heavy materials like concrete, brick, or dirt, call us for heavy debris pricing guidance.',
      },
      {
        question: 'How long can I keep a 15 yard dumpster?',
        answer: 'The standard rental period for a 15 yard dumpster at 904 Dumpster is 5 days, included in the $325 price. Extensions are available at $15 per additional day if your project runs longer. Most Jacksonville homeowners complete kitchen remodels and roofing projects within the 5-day window. For longer-term construction projects, ask about our weekly rates.',
      },
      {
        question: 'Is a 15 yard dumpster big enough for a kitchen remodel?',
        answer: 'Yes, a 15 yard dumpster is the ideal size for a full kitchen remodel in most Jacksonville homes. It comfortably holds old cabinets, countertops, flooring, drywall, appliances, and fixtures from a standard kitchen renovation. The 4.5-foot walls are low enough to toss heavy debris over the side without a ladder, and the rear swing door allows walk-in loading for bulky items like dishwashers and vanities.',
      },
      {
        question: 'What items cannot go in a 15 yard dumpster?',
        answer: 'Prohibited items include wet paint (must be dried with sand or kitty litter), batteries, hazardous chemicals, tires, appliances containing freon (refrigerators and AC units), electronics (TVs, computers), and medical waste. These items must be taken to the Duval County Household Hazardous Waste facility. All common construction debris, furniture, yard waste, and household junk are accepted.',
      },
    ],
    customPage: true,
  },
  {
    slug: '20-yard-dumpster-rental',
    type: 'dumpster-size',
    title: '20 Yard Dumpster Rental',
    metaTitle: '20 Yard Dumpster Rental Jacksonville - $375',
    metaDescription: '$375 flat rate includes delivery, pickup, 5-day rental & 2-ton disposal. No hidden fees. Same-day delivery available. Book online or call (904) 240-5598.',
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
    description: 'A 20 yard dumpster rental in Jacksonville, FL costs $375 at 904 Dumpster. The flat rate includes delivery, pickup, a 5-day rental period, and 2 tons of disposal, the best value per cubic yard for whole-house cleanouts and construction jobs. Locally owned and serving Jacksonville and Northeast Florida since 2016 with five-star Google reviews.',
    features: [
      '14\' x 7.5\' x 5.8\' dimensions,largest residential size',
      '$375 flat rate,no hidden fees or broker markups',
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
        question: 'How much does a 20 yard dumpster cost in Jacksonville?',
        answer: 'A 20 yard dumpster rental in Jacksonville, FL costs $375 at 904 Dumpster. This flat-rate price includes delivery, a 5-day rental period, pickup, and disposal of up to 2 tons (4,000 lbs). Most Jacksonville competitors charge $450-$500 for the same size, making 904 Dumpster $75-$125 cheaper on average. There are no hidden fuel surcharges, environmental fees, or admin charges.',
      },
      {
        question: 'How big is a 20 yard dumpster?',
        answer: 'A 20 yard dumpster measures 14 feet long by 7.5 feet wide by 5.8 feet high. It holds 20 cubic yards of debris, which is equivalent to approximately 7 full-size pickup truck loads or 100-120 large contractor bags. The container has the same footprint as a 15-yard dumpster but stands nearly a foot and a half taller, providing 33% more capacity.',
      },
      {
        question: 'How much can a 20 yard dumpster hold?',
        answer: 'A 20 yard dumpster holds 20 cubic yards of debris,equivalent to 7 pickup truck loads, 100-120 large contractor bags, or the debris from a whole-house renovation. It comfortably handles multi-room remodels, large deck demolitions, entire home estate cleanouts, and construction site cleanup. The 2-ton (4,000 lb) weight limit covers most household and construction debris.',
        image: '/images/20-yard-dumpster.jpg',
      },
      {
        question: 'What is the difference between a 15 and 20 yard dumpster?',
        answer: 'The 15 yard dumpster (14\'×7.5\'×4.5\') holds 5-6 pickup truck loads and costs $325. The 20 yard dumpster (14\'×7.5\'×5.8\') holds 7 pickup truck loads and costs $375. Both have the same footprint and 2-ton weight limit, but the 20 yard is 1.3 feet taller, giving you 33% more volume for only $50 more. Choose the 15-yard for single-room projects and roofing; choose the 20-yard for multi-room renovations, whole-house cleanouts, and construction.',
      },
      {
        question: 'Will a 20 yard dumpster fit in my driveway?',
        answer: 'A 20 yard dumpster from 904 Dumpster is 14 feet long and 7.5 feet wide,the same footprint as our 15-yard container. It fits in most standard two-car driveways in Jacksonville. The main consideration is the 5.8-foot height, which requires at least 14 feet of overhead clearance for our roll-off truck to safely place it. Watch for low-hanging oak branches common in neighborhoods like Riverside and Avondale.',
        image: '/images/20-yard-dumpster-driveway-delivery.jpg',
      },
      {
        question: 'What can you put in a 20 yard dumpster?',
        answer: 'A 20 yard dumpster accepts most household, renovation, and construction materials including furniture, appliances (without freon), drywall, lumber, flooring, roofing shingles, cabinets, yard waste, and general debris. Prohibited items include wet paint, batteries, hazardous chemicals, tires, freon-containing appliances (refrigerators, AC units), and electronics. The 20-yard is large enough for whole-house cleanouts and major renovation debris.',
      },
      {
        question: 'How much weight can a 20 yard dumpster hold?',
        answer: 'The weight limit for a 20 yard dumpster at 904 Dumpster is 4,000 pounds (2 tons), included in the $375 flat rate. This is sufficient for most construction debris, furniture, and household items. If you exceed 2 tons, an overage fee of $75 per additional ton applies. Heavy materials like concrete, brick, and dirt reach the weight limit faster than bulky but lightweight items like furniture and drywall.',
      },
      {
        question: 'Do I need a permit for a 20 yard dumpster in Jacksonville?',
        answer: 'No permit is needed if the dumpster is placed on your private property,your driveway, yard, or parking area. If placement on a public street or right-of-way is required, you will need a Right-of-Way permit from the City of Jacksonville Development Services Department. At 904 Dumpster, we place on driveways 99% of the time. For construction projects that require street placement, our team can advise on the permit process for your Jacksonville neighborhood.',
      },
      {
        question: 'Will a 20 yard dumpster damage my driveway?',
        answer: 'Not with 904 Dumpster. We include complimentary driveway protection boards on every delivery,wooden planks placed under the container\'s steel rollers to prevent scratches, cracks, or marks on your surface. Our drivers are trained in residential placement and know how to protect Florida asphalt, concrete, and pavers. This is standard on every 20-yard delivery at no extra charge.',
      },
      {
        question: 'How soon can you deliver a 20 yard dumpster?',
        answer: 'Same-day delivery is available throughout Jacksonville, St. Johns, Clay, and Nassau counties when you book before noon. Next-business-day delivery is guaranteed for all orders. Our driver calls 30 minutes before arrival so you can direct placement. For urgent construction site needs, call us at (904) 240-5598 and we will do our best to accommodate same-day service.',
      },
      {
        question: 'What are common 20-yard dumpster rental mistakes?',
        answer: 'The three most common mistakes are: (1) Underestimating weight,a 20-yard bin filled with heavy debris like concrete can exceed the 2-ton limit quickly. Mix heavy items with lighter debris or call us for heavy load pricing. (2) Overfilling above the rim,debris must stay below the top edge for safe transport. (3) Not checking overhead clearance,our roll-off trucks need at least 14 feet of overhead clearance for the 5.8-foot tall container.',
      },
      {
        question: 'Can I use a 20 yard dumpster for concrete or heavy debris?',
        answer: 'Yes, but be aware of the 4,000-pound weight limit. Concrete is extremely heavy,a 20-yard bin filled entirely with concrete would far exceed the limit. For small to moderate amounts of concrete mixed with other debris, the 20-yard works fine. For concrete-only loads like driveway or patio demolition, call us at (904) 240-5598 for heavy debris pricing and loading guidance.',
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
      'construction trash bins for rent',
      'construction waste container',
      'construction container rentals',
      'construction site dumpsters',
      'construction site dumpster',
      'construction roll off dumpster rental',
      'construction waste containers',
      'cost of construction dumpster',
      'construction dumpster size',
      'dumpster rental construction',
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
