import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Calendar,
  Weight,
  Ruler,
  MapPin,
  Building2,
  HardHat,
  Home,
  Hammer,
  AlertTriangle,
  Lightbulb,
  Star,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '20 Yard Dumpster Rental | Large Roll-Off Container | 904 Dumpster',
  description:
    'Rent a 20 yard dumpster for $425. Perfect for large renovations, construction projects, and estate cleanouts. 5-day rental included. Dimensions: 22\' x 8\' x 4.5\'. Call (904) 240-5598.',
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
    'dimensions of a 20 yard dumpster',
    'how long is a 20 yard dumpster',
    '15 vs 20 yard dumpster',
  ],
}

const USE_CASES = [
  {
    title: 'Construction Sites',
    href: '/services/construction-dumpster-rental',
    icon: Building2,
    description: 'New builds and major renovations',
  },
  {
    title: 'Contractor Projects',
    href: '/services/contractor-dumpster-rental',
    icon: HardHat,
    description: 'Large-scale professional jobs',
  },
  {
    title: 'Estate Cleanouts',
    href: '/services/home-cleanout-dumpster-rental',
    icon: Home,
    description: 'Whole-house cleanouts and moves',
  },
  {
    title: 'Major Remodels',
    href: '/services/construction-dumpster-rental',
    icon: Hammer,
    description: 'Multi-room renovation projects',
  },
]

const SERVICE_AREAS = [
  { county: 'Duval County', cities: ['Jacksonville', 'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach', 'Baldwin'] },
  { county: 'St. Johns County', cities: ['St. Augustine', 'Ponte Vedra', 'Nocatee', 'Fruit Cove', 'World Golf Village'] },
  { county: 'Clay County', cities: ['Orange Park', 'Fleming Island', 'Middleburg', 'Green Cove Springs', 'Oakleaf'] },
  { county: 'Nassau County', cities: ['Fernandina Beach', 'Yulee', 'Callahan', 'Hilliard', 'Amelia Island'] },
]

const WHAT_FITS = [
  'Full kitchen renovation debris including cabinets, countertops, and flooring',
  'Complete bathroom demolition materials from multiple bathrooms',
  'Entire home flooring replacement (hardwood, tile, carpet, and subfloor)',
  'Whole-house estate cleanout contents including furniture and appliances',
  'Large deck demolition (up to 500+ square feet) with framing and posts',
  'Major roofing projects (up to 35-40 squares of shingles)',
  'Construction site debris from new builds or additions',
  'Commercial office cleanouts and renovation waste',
  'Yard waste from large landscaping projects or storm cleanup',
  'Multiple room renovation debris simultaneously',
]

const PROHIBITED_ITEMS = [
  'Hazardous materials (paints, solvents, oils, chemicals)',
  'Tires and automotive fluids',
  'Batteries (car batteries, lithium batteries)',
  'Electronics (TVs, computers, monitors)',
  'Appliances with refrigerants (refrigerators, AC units)',
  'Medical waste and pharmaceuticals',
  'Asbestos-containing materials',
  'Propane tanks and pressurized containers',
  'Railroad ties and treated lumber',
  'Contaminated soil or absorbents',
]

const FAQS = [
  {
    question: 'How big is a 20 yard dumpster?',
    answer: 'A 20 yard dumpster measures 22 feet long by 8 feet wide by 4.5 feet tall. This is our largest roll-off container and holds approximately 20 cubic yards of material, which is equivalent to about 7 full-size pickup truck loads. The 22-foot length requires adequate space in your driveway or job site, so make sure you have at least 60 feet of clearance for the delivery truck to safely maneuver and place the container.',
  },
  {
    question: 'What is the difference between a 15 yard and 20 yard dumpster?',
    answer: 'The main difference is capacity and weight limit. A 20 yard dumpster holds approximately 40% more material (20 cubic yards vs 15 cubic yards) and has a higher weight allowance of 4 tons compared to 3 tons for the 15 yard. The 20 yard is also longer (22 feet vs 16 feet) and slightly taller (4.5 feet vs 4 feet). Choose the 20 yard for construction projects, whole-house cleanouts, or any job generating substantial debris. The 15 yard works well for roofing and mid-size renovations.',
  },
  {
    question: 'How much does it cost to rent a 20 yard dumpster?',
    answer: 'Our 20 yard dumpster rental costs $425, which includes delivery to your location, a 5-day rental period, up to 4 tons of disposal weight, and pickup when you are done. There are no hidden fees, fuel surcharges, or environmental charges. If you need the dumpster for longer than 5 days, additional days are available at a daily rate. Going over the 4-ton weight limit incurs overage charges, which we will discuss before delivery so there are no surprises.',
  },
  {
    question: 'What fits in a 20 yard dumpster?',
    answer: 'A 20 yard dumpster can handle major project waste including full kitchen renovations (cabinets, countertops, appliances), whole-house estate cleanouts, large deck demolitions, construction site debris, and substantial roofing projects up to 35-40 squares. It holds the equivalent of about 7 pickup truck loads. This size is popular for contractors working on new construction, homeowners doing major renovations, and property managers clearing out entire units or homes.',
  },
  {
    question: 'How many squares of shingles fit in a 20 yard dumpster?',
    answer: 'A 20 yard dumpster can typically hold 35 to 40 squares of asphalt shingles when roof debris is the only material. However, roofing projects often include felt paper, flashing, nails, and damaged decking, which adds volume. For large roofing jobs with multiple layers of shingles, consider that old shingles are heavy and you may hit the 4-ton weight limit before filling the container. We recommend our 15 yard for most residential roofing projects to avoid overage charges.',
  },
  {
    question: 'Will a 20 yard dumpster fit in my driveway?',
    answer: 'A 20 yard dumpster requires a space at least 22 feet long and 8 feet wide. Most standard two-car driveways can accommodate this size, but you will need additional clearance for the delivery truck (about 60 feet total for safe maneuvering). Check for overhead obstacles like low-hanging tree branches, power lines, or basketball hoops. The dumpster sits about 4.5 feet high when empty. If driveway space is limited, we can often place the container in the street with a permit or on a cleared section of your yard.',
  },
  {
    question: 'How long can I keep a 20 yard dumpster?',
    answer: 'Our standard rental period is 5 days, which is included in the $425 price. Most construction projects and large cleanouts can be completed within this timeframe. If you need more time, simply call us to extend your rental at our daily rate. For ongoing construction projects or contractor accounts, we offer flexible long-term rental arrangements with volume discounts. We also offer same-day pickup if you finish early.',
  },
  {
    question: 'Do I need a permit for a 20 yard dumpster?',
    answer: 'You typically do not need a permit when placing the dumpster on your private property, such as your driveway. However, if the dumpster needs to be placed on a public street, sidewalk, or right-of-way, you will likely need a permit from the City of Jacksonville or your local municipality. Permit requirements vary by location. We can help you understand the requirements for your specific situation and even assist with the permit process if needed.',
  },
  {
    question: 'Is a 20 yard dumpster too big for residential use?',
    answer: 'Not necessarily. While the 20 yard is our largest container and is popular with contractors, many homeowners rent this size for major projects like whole-house cleanouts, multi-room renovations, moving out of a long-term home, or substantial landscaping projects. If you are unsure whether the 20 yard is right for your project, call us and describe what you are disposing of. We will recommend the right size so you do not overpay for unused capacity or end up needing a second dumpster.',
  },
  {
    question: 'Can I throw construction debris in a 20 yard dumpster?',
    answer: 'Yes, 20 yard dumpsters are ideal for construction debris including lumber, drywall, concrete (in moderate amounts), roofing materials, siding, insulation, and general construction waste. However, certain materials are prohibited including hazardous chemicals, asbestos, paint, and electronics. Concrete and dirt are especially heavy, so if you have substantial amounts, let us know so we can advise on weight limits. We recycle construction materials whenever possible.',
  },
]

// JSON-LD Schema for Product
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: '20 Yard Dumpster Rental',
  description: 'Large 20 cubic yard roll-off dumpster rental for construction projects, major renovations, and estate cleanouts. Dimensions: 22\' x 8\' x 4.5\'. 4-ton weight limit.',
  brand: {
    '@type': 'Brand',
    name: '904 Dumpster',
  },
  offers: {
    '@type': 'Offer',
    price: '425',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
    seller: {
      '@type': 'LocalBusiness',
      name: '904 Dumpster',
      telephone: '(904) 240-5598',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32246',
      },
    },
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Rental Period',
      value: '5 days',
    },
    {
      '@type': 'PropertyValue',
      name: 'Weight Limit',
      value: '4 tons (8,000 lbs)',
    },
    {
      '@type': 'PropertyValue',
      name: 'Dimensions',
      value: '22\' x 8\' x 4.5\'',
    },
  ],
}

// JSON-LD Schema for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function TwentyYardDumpsterPage() {
  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Prominent Pricing */}
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
                <Link href="/services" className="hover:text-white">Services</Link>
                <span>/</span>
                <span className="text-white">20 Yard Dumpster</span>
              </nav>
              <div className="inline-block bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                Maximum Capacity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                20 Yard Dumpster Rental in{' '}
                <span className="text-primary">Jacksonville, FL</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Our largest roll-off dumpster is ideal for major renovations, construction projects,
                and whole-house cleanouts. At 22 feet long and holding up to 7 pickup truck loads,
                this container handles the biggest residential and commercial jobs with ease.
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

            {/* Prominent Pricing Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full">
                Largest Size
              </div>
              <div className="text-center mb-6">
                <span className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  20 Yard Dumpster
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-secondary">$425</span>
                </div>
                <p className="text-gray-500 mt-2">Starting price with all-inclusive pricing</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">5-Day Rental</div>
                    <div className="text-sm text-gray-500">Included in price</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Weight className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">Up to 4 Tons</div>
                    <div className="text-sm text-gray-500">8,000 lbs disposal included</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Ruler className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">20 Cubic Yards</div>
                    <div className="text-sm text-gray-500">Approximately 7 pickup truck loads</div>
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
                href={`tel:${BUSINESS.phoneRaw}`}
                className="block w-full text-center bg-primary hover:bg-secondary text-white font-bold text-lg py-4 rounded-xl transition-all"
              >
                Reserve Now – {BUSINESS.phone}
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
              <div className="text-2xl font-black">22&apos;</div>
              <div className="text-white/70 text-sm">Length</div>
            </div>
            <div>
              <div className="text-2xl font-black">8&apos;</div>
              <div className="text-white/70 text-sm">Width</div>
            </div>
            <div>
              <div className="text-2xl font-black">4.5&apos;</div>
              <div className="text-white/70 text-sm">Height</div>
            </div>
            <div>
              <div className="text-2xl font-black">8,000 lbs</div>
              <div className="text-white/70 text-sm">Weight Limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 20 Yard is Best for Big Jobs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Maximum Capacity
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why Choose Our Largest Dumpster?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The 20 yard dumpster is the workhorse of major construction and renovation projects.
                With 40% more capacity than our 15 yard and double the space of our 10 yard, this
                container eliminates the need for multiple hauls on big jobs, saving you time and money.
              </p>
              <p className="text-gray-600 mb-6">
                At 22 feet long, 8 feet wide, and 4.5 feet tall, this roll-off container provides
                ample room for bulky items like furniture, large appliances, and construction debris.
                The manageable 4.5-foot height makes loading easy, even for heavy materials like
                concrete or roofing shingles.
              </p>
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                <Star className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-bold text-secondary">Contractor Favorite</div>
                  <div className="text-sm text-gray-600">Most popular size for construction sites and major renovations</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-secondary text-xl mb-6">20 Yard Dumpster Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Dimensions</span>
                  <span className="font-bold text-secondary">22&apos; L × 8&apos; W × 4.5&apos; H</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-bold text-secondary">20 Cubic Yards</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Weight Limit</span>
                  <span className="font-bold text-secondary">4 Tons (8,000 lbs)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Equivalent To</span>
                  <span className="font-bold text-secondary">7 Pickup Truck Loads</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Rental Period</span>
                  <span className="font-bold text-secondary">5 Days Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-bold text-primary">Same-Day Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Fits */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Capacity Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What Fits in a 20 Yard Dumpster?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A 20 yard dumpster holds approximately 20 cubic yards of material, equivalent to
              about 7 full-size pickup truck loads. Here is what our largest container can handle
              for your major project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {WHAT_FITS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-red-500 font-bold text-sm uppercase tracking-wider mb-4">
              Important
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Items We Cannot Accept
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              For safety and environmental compliance, certain materials cannot be placed in
              our dumpsters. Please review this list before loading your container.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {PROHIBITED_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-red-50 rounded-xl p-4"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Not sure if your material is accepted? Call us at{' '}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Loading Tips */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Pro Tips
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Loading Your 20 Yard Dumpster
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Get the most out of your rental with these loading tips from our experienced team.
              Proper loading can help you avoid overage charges and maximize capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Use the Rear Door',
                tip: 'The 20 yard has a swing-open rear door that makes it easy to walk heavy items directly into the container. This is especially helpful for appliances, furniture, and construction materials.',
              },
              {
                title: 'Load Heavy Items First',
                tip: 'Place heavy materials like concrete, dirt, and tile on the bottom. This lowers the center of gravity for safe transport and creates a stable base for lighter materials on top.',
              },
              {
                title: 'Break Down Large Items',
                tip: 'Disassemble furniture, break down boxes, and cut large pieces to maximize space. A little extra effort breaking things down can save you from needing a second dumpster.',
              },
              {
                title: 'Distribute Weight Evenly',
                tip: 'Spread heavy materials across the entire floor of the container rather than concentrating weight in one area. This ensures safe transport and prevents damage.',
              },
              {
                title: 'Watch the Fill Line',
                tip: 'Do not load debris above the top edge of the dumpster. Overfilled containers cannot be safely transported. If material exceeds the fill line, we will need to remove it before pickup.',
              },
              {
                title: 'Mind the Weight Limit',
                tip: 'The 4-ton limit can be reached before the container looks full, especially with heavy materials. If you have concrete, dirt, or roofing debris, estimate weight carefully.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              All-Inclusive Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What&apos;s Included for $425
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our transparent pricing means no surprises. Your 20 yard dumpster rental
              includes everything you need to complete your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Delivery to your location',
              '5-day rental period',
              'Up to 4 tons disposal',
              'Pickup when you\'re done',
              'Driveway protection boards',
              'No hidden fees',
              'Same-day delivery available',
              'Friendly, professional service',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases with Links */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Perfect For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Best Uses for a 20 Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our largest dumpster handles big jobs with ease. From construction sites to
              estate cleanouts, the 20 yard container is the go-to choice for substantial projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((useCase, i) => (
              <Link
                key={i}
                href={useCase.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <useCase.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-500 mb-4">{useCase.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Not sure if a 20 yard is right for your project?</p>
            <Link
              href="/services/dumpster-size-guide"
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              View our size guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              20 Yard Dumpster FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about renting a 20 yard dumpster in Jacksonville.
            </p>
          </div>

          <FAQSection faqs={FAQS} />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Where We Deliver 20 Yard Dumpsters
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide same-day dumpster delivery throughout the Jacksonville metro area
              and surrounding counties. Our coverage includes construction sites, residential
              neighborhoods, and commercial properties across Northeast Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-secondary">{area.county}</h3>
                </div>
                <ul className="space-y-2">
                  {area.cities.map((city, j) => (
                    <li key={j} className="text-gray-600 text-sm">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Don&apos;t see your area? Call us – we may still be able to help!
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
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
              Need a Different Size?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Compare our dumpster sizes to find the best fit for your project.
              Not sure which size is right? Call us and we will help you decide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/10-yard-dumpster-rental"
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                10 Yard
              </h3>
              <div className="text-4xl font-black text-secondary mb-4">$275</div>
              <p className="text-gray-500 mb-4">5-day rental • 2 ton limit</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 3 pickup truck loads</li>
                <li>✓ Small cleanouts</li>
                <li>✓ Garage projects</li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-semibold mt-4">
                View details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/15-yard-dumpster-rental"
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                15 Yard
              </h3>
              <div className="text-4xl font-black text-secondary mb-4">$350</div>
              <p className="text-gray-500 mb-4">5-day rental • 3 ton limit</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 5 pickup truck loads</li>
                <li>✓ Roofing projects</li>
                <li>✓ Medium renovations</li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-semibold mt-4">
                View details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="bg-primary text-white rounded-2xl p-8 relative">
              <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Current
              </span>
              <h3 className="text-2xl font-black mb-2">20 Yard</h3>
              <div className="text-4xl font-black mb-4">$425</div>
              <p className="text-white/70 mb-4">5-day rental • 4 ton limit</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 7 pickup truck loads</li>
                <li>✓ Construction sites</li>
                <li>✓ Large cleanouts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                For Professionals
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Contractor? Get Volume Discounts
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Regular dumpster needs? We offer volume discounts, priority scheduling,
                and dedicated account management for contractors and builders. Our 20 yard
                dumpsters are perfect for construction sites, and we can coordinate multiple
                deliveries to keep your project on schedule.
              </p>
              <Link
                href="/services/contractor-dumpster-rental"
                className="inline-flex items-center gap-2 bg-primary hover:bg-white text-white hover:text-secondary font-bold px-6 py-3 rounded-xl transition-all"
              >
                Learn About Contractor Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-primary mb-2">10%</div>
                <div className="text-white/70 text-sm">Volume Discount</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-primary mb-2">24hr</div>
                <div className="text-white/70 text-sm">Priority Delivery</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-primary mb-2">NET 30</div>
                <div className="text-white/70 text-sm">Billing Available</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-primary mb-2">1:1</div>
                <div className="text-white/70 text-sm">Account Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rent a 20 Yard Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-4">
            $425 for 5 days • 4 tons included • Same-day delivery available
          </p>
          <p className="text-white/60 mb-10">
            Call now to reserve our largest dumpster for your Jacksonville area project.
            We handle construction sites, major renovations, and whole-house cleanouts.
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
    </div>
  )
}
