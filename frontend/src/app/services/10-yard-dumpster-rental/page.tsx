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
  Home,
  Hammer,
  Leaf,
  Package,
  XCircle,
  Lightbulb,
  HelpCircle,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '10 Yard Dumpster Rental | Small Roll-Off Container | 904 Dumpster',
  description:
    'Rent a 10 yard dumpster for $275. Perfect for small cleanouts, garage projects, and minor renovations. 5-day rental included. Dimensions: 12\' x 8\' x 3.5\'. Call (904) 240-5598.',
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
    'dimensions of a 10 yard dumpster',
    '10 yard vs 15 yard dumpster',
  ],
}

const USE_CASES = [
  {
    title: 'Garage Cleanouts',
    href: '/services/home-cleanout-dumpster-rental',
    icon: Home,
    description: 'Clear out years of accumulated items',
  },
  {
    title: 'Small Renovations',
    href: '/services/construction-dumpster-rental',
    icon: Hammer,
    description: 'Single room remodels and updates',
  },
  {
    title: 'Yard Debris',
    href: '/services/residential-dumpster-rental',
    icon: Leaf,
    description: 'Landscaping waste and yard cleanup',
  },
  {
    title: 'Attic Cleanouts',
    href: '/services/home-cleanout-dumpster-rental',
    icon: Package,
    description: 'Declutter storage spaces',
  },
]

const SERVICE_AREAS = [
  { county: 'Duval County', cities: ['Jacksonville', 'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach', 'Baldwin'] },
  { county: 'St. Johns County', cities: ['St. Augustine', 'Ponte Vedra', 'Nocatee', 'Fruit Cove', 'World Golf Village'] },
  { county: 'Clay County', cities: ['Orange Park', 'Fleming Island', 'Middleburg', 'Green Cove Springs', 'Oakleaf'] },
  { county: 'Nassau County', cities: ['Fernandina Beach', 'Yulee', 'Callahan', 'Hilliard', 'Amelia Island'] },
]

const FAQS = [
  {
    question: 'How big is a 10 yard dumpster?',
    answer: 'A 10 yard dumpster measures approximately 12 feet long, 8 feet wide, and 3.5 feet high. It holds about 10 cubic yards of material, which is equivalent to approximately 3 pickup truck loads of debris. This compact size makes it ideal for residential driveways and tight spaces while still providing ample capacity for most small to medium projects.',
  },
  {
    question: 'What can I put in a 10 yard dumpster?',
    answer: 'A 10 yard dumpster can hold most common household and construction debris including furniture, appliances (with freon removed), yard waste, construction materials, flooring, drywall, roofing shingles, and general junk. However, hazardous materials like paint, chemicals, batteries, tires, and electronics with screens are not permitted. If you\'re unsure about a specific item, give us a call and we\'ll help you determine the best disposal method.',
  },
  {
    question: 'How much does a 10 yard dumpster cost?',
    answer: 'Our 10 yard dumpster rental starts at $275, which includes delivery, a 5-day rental period, up to 2 tons of disposal, pickup, and driveway protection boards. There are no hidden fees. Additional days can be added for $15 per day, and any weight over 2 tons is charged at $65 per additional ton. This all-inclusive pricing makes it easy to budget for your project.',
  },
  {
    question: 'How long can I keep the 10 yard dumpster?',
    answer: 'The standard rental period for our 10 yard dumpster is 5 days, which is usually plenty of time for most small projects. If you need more time, we offer flexible extensions at just $15 per additional day. Just give us a call before your rental period ends to arrange an extension. There\'s no penalty for finishing early – we\'ll pick up the dumpster whenever you\'re ready.',
  },
  {
    question: 'Will a 10 yard dumpster fit in my driveway?',
    answer: 'Yes, a 10 yard dumpster is our most compact option and fits in most residential driveways. At only 12 feet long and 8 feet wide, it takes up about the same space as a large SUV or small boat. The low 3.5-foot height also makes it easy to load without a ladder. We provide driveway protection boards to prevent any damage to your concrete or asphalt.',
  },
  {
    question: 'How much weight can a 10 yard dumpster hold?',
    answer: 'Our 10 yard dumpster rental includes up to 2 tons (4,000 pounds) of disposal weight. This is sufficient for most household cleanouts and light construction debris. For heavier materials like concrete, brick, or dirt, you may need to be mindful of the weight limit or consider our larger dumpster options. We\'ll help you estimate the weight during your initial consultation.',
  },
  {
    question: '10 yard vs 15 yard dumpster – which should I choose?',
    answer: 'Choose a 10 yard dumpster if you\'re doing a single-room cleanout, small bathroom renovation, garage cleanup, or yard work. Choose a 15 yard dumpster if you\'re tackling a larger project like a kitchen remodel, multiple room cleanout, roofing project, or deck removal. When in doubt, it\'s often better to size up – it\'s more cost-effective than needing a second dumpster.',
  },
  {
    question: 'Do I need a permit for a 10 yard dumpster?',
    answer: 'If the dumpster is placed on your private property (like your driveway), you typically don\'t need a permit in most Jacksonville area jurisdictions. However, if you need to place the dumpster on the street or in a public right-of-way, you may need a permit from your local municipality. We can help guide you through the permit process if needed.',
  },
]

const WHAT_FITS = [
  'Single garage cleanout (boxes, old furniture, tools)',
  'Small bathroom renovation debris',
  'One room of carpet and flooring',
  'Small deck removal (under 200 sq ft)',
  'Yard waste from landscaping project',
  'Attic or basement cleanout',
  'Estate cleanout (1-2 rooms)',
  'Moving cleanout (unwanted items)',
  'Small shed demolition debris',
  'Storm debris cleanup',
]

const PROHIBITED_ITEMS = [
  'Hazardous waste and chemicals',
  'Paint cans (unless completely dry)',
  'Batteries of any kind',
  'Tires (contact us for tire disposal)',
  'Appliances with freon (unless certified removed)',
  'Electronics with screens (TVs, monitors)',
  'Medical waste',
  'Asbestos-containing materials',
  'Flammable liquids',
  'Propane tanks',
]

const LOADING_TIPS = [
  {
    title: 'Start with flat items',
    description: 'Place flat items like plywood, drywall, and mattresses against the bottom and sides first. This creates a stable base and maximizes space.',
  },
  {
    title: 'Break down large items',
    description: 'Disassemble furniture, break down boxes, and cut large items into smaller pieces. This helps you fit more into the dumpster.',
  },
  {
    title: 'Fill gaps with small debris',
    description: 'Use smaller items and loose debris to fill in gaps between larger items. Think of it like a puzzle – every space counts.',
  },
  {
    title: 'Distribute weight evenly',
    description: 'Spread heavy items throughout the dumpster rather than concentrating them in one area. This ensures safe transport.',
  },
  {
    title: 'Don\'t overfill',
    description: 'Keep all debris below the top edge of the dumpster. We cannot transport overfilled dumpsters for safety reasons.',
  },
]

export default function TenYardDumpsterPage() {
  return (
    <div className="min-h-screen">
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
                <span className="text-white">10 Yard Dumpster</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                10 Yard Dumpster Rental in{' '}
                <span className="text-primary">Jacksonville, FL</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Our smallest roll-off dumpster is the perfect choice for homeowners tackling small cleanouts,
                garage projects, and minor home renovations. Compact enough to fit in tight driveways while
                still offering plenty of capacity for most residential projects.
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
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <span className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  10 Yard Dumpster
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-secondary">$275</span>
                </div>
                <p className="text-gray-500 mt-2">Starting price • All-inclusive</p>
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
                    <div className="font-bold text-secondary">Up to 2 Tons</div>
                    <div className="text-sm text-gray-500">Disposal included</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Ruler className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">10 Cubic Yards</div>
                    <div className="text-sm text-gray-500">≈ 3 pickup truck loads</div>
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
              <div className="text-2xl font-black">12&apos;</div>
              <div className="text-white/70 text-sm">Length</div>
            </div>
            <div>
              <div className="text-2xl font-black">8&apos;</div>
              <div className="text-white/70 text-sm">Width</div>
            </div>
            <div>
              <div className="text-2xl font-black">3.5&apos;</div>
              <div className="text-white/70 text-sm">Height</div>
            </div>
            <div>
              <div className="text-2xl font-black">4,000 lbs</div>
              <div className="text-white/70 text-sm">Weight Limit</div>
            </div>
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
              What&apos;s Included for $275
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our transparent pricing means no surprises. Everything you need for your project is included
              in one simple price – no hidden fees, no extra charges for delivery or pickup.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Delivery to your location',
              '5-day rental period',
              'Up to 2 tons disposal',
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

      {/* What Fits in a 10 Yard Dumpster */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Size Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                What Fits in a 10 Yard Dumpster?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                A 10 yard dumpster holds approximately 10 cubic yards of material, which is equivalent to
                about 3 pickup truck loads. To help you visualize, imagine a space that&apos;s 12 feet long,
                8 feet wide, and 3.5 feet deep. This compact yet capable container is perfect for a variety
                of residential projects.
              </p>
              <p className="text-gray-600 mb-8">
                The 10 yard dumpster is our most popular choice for homeowners because it fits easily in
                most driveways and provides enough capacity for common household projects without paying
                for space you don&apos;t need. The low 3.5-foot height makes it easy to load – most people
                can toss items over the side without needing a ladder.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Pro Tip
                </h3>
                <p className="text-gray-600">
                  Not sure if a 10 yard dumpster is big enough for your project? Give us a call and describe
                  what you&apos;re working on. Our experienced team can help you estimate the right size based
                  on thousands of similar projects we&apos;ve handled. It&apos;s always better to ask than to
                  end up with a dumpster that&apos;s too small.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-secondary mb-6">Common Projects for a 10 Yard Dumpster:</h3>
              <div className="space-y-3">
                {WHAT_FITS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases with Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Perfect For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Popular Uses for a 10 Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our smallest dumpster is ideal for homeowner projects and small cleanouts.
              Click below to learn more about specific project types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((useCase, i) => (
              <Link
                key={i}
                href={useCase.href}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all"
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
            <p className="text-gray-600 mb-4">Not sure if a 10 yard is right for your project?</p>
            <Link
              href="/services/dumpster-size-guide"
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              View our complete size guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Loading Tips */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Maximize Your Space
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Tips for Loading Your 10 Yard Dumpster
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Get the most out of your dumpster rental with these expert loading tips.
              Proper loading can help you fit more debris and avoid overweight charges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOADING_TIPS.map((tip, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-white/70">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Important Information
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                What Can&apos;t Go in the Dumpster?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                For safety and environmental reasons, certain items cannot be disposed of in a roll-off
                dumpster. These restrictions are required by law and help protect our landfills,
                groundwater, and the environment.
              </p>
              <p className="text-gray-600 mb-8">
                If you have items on this list, don&apos;t worry – we can help you find the proper
                disposal method. Many of these items can be recycled or disposed of through
                specialized facilities. Just give us a call and we&apos;ll point you in the right direction.
              </p>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 text-primary font-bold"
              >
                <Phone className="w-4 h-4" />
                Questions? Call {BUSINESS.phone}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-secondary mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Prohibited Items
              </h3>
              <div className="space-y-3">
                {PROHIBITED_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-4">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              10 Yard Dumpster Delivery in Jacksonville & Surrounding Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide fast, reliable dumpster delivery throughout the Jacksonville metro area
              and surrounding counties. Same-day delivery is available in most locations.
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
              Don&apos;t see your area listed? Give us a call – we may still be able to help!
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
              10 Yard vs. Other Dumpster Sizes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Not sure if a 10 yard dumpster is the right size for your project?
              Compare our available sizes below to find the perfect fit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary text-white rounded-2xl p-8 relative">
              <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Current
              </span>
              <h3 className="text-2xl font-black mb-2">10 Yard</h3>
              <div className="text-4xl font-black mb-4">$275</div>
              <p className="text-white/70 mb-4">5-day rental • 2 ton limit</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 3 pickup truck loads</li>
                <li>✓ Small cleanouts</li>
                <li>✓ Garage projects</li>
                <li>✓ Single room remodels</li>
              </ul>
            </div>

            <Link
              href="/services/15-yard-dumpster-rental"
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all group"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded mb-4">
                Most Popular
              </span>
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                15 Yard
              </h3>
              <div className="text-4xl font-black text-secondary mb-4">$350</div>
              <p className="text-gray-500 mb-4">5-day rental • 3 ton limit</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 5 pickup truck loads</li>
                <li>✓ Roofing projects</li>
                <li>✓ Medium renovations</li>
                <li>✓ Multi-room cleanouts</li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-semibold mt-4">
                View details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/20-yard-dumpster-rental"
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all group"
            >
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                20 Yard
              </h3>
              <div className="text-4xl font-black text-secondary mb-4">$425</div>
              <p className="text-gray-500 mb-4">5-day rental • 4 ton limit</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 7 pickup truck loads</li>
                <li>✓ Construction sites</li>
                <li>✓ Large cleanouts</li>
                <li>✓ Major renovations</li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-semibold mt-4">
                View details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              10 Yard Dumpster FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about renting a 10 yard dumpster.
              Still have questions? Give us a call!
            </p>
          </div>

          <FAQSection faqs={FAQS} />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have a question that&apos;s not answered here?</p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              <HelpCircle className="w-4 h-4" />
              Call us at {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Rent a 10 Yard Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-4">
            $275 for 5 days • Free delivery • Up to 2 tons included
          </p>
          <p className="text-white/60 mb-10">
            Call now to reserve your dumpster. Same-day delivery available
            throughout the Jacksonville area.
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
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: '10 Yard Dumpster Rental',
            description: 'Compact 10 cubic yard roll-off dumpster perfect for small cleanouts, garage projects, and minor renovations. Holds approximately 3 pickup truck loads.',
            brand: {
              '@type': 'Brand',
              name: '904 Dumpster',
            },
            offers: {
              '@type': 'Offer',
              price: '275',
              priceCurrency: 'USD',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'LocalBusiness',
                name: '904 Dumpster',
                telephone: BUSINESS.phone,
              },
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Dimensions',
                value: '12\' x 8\' x 3.5\'',
              },
              {
                '@type': 'PropertyValue',
                name: 'Capacity',
                value: '10 cubic yards',
              },
              {
                '@type': 'PropertyValue',
                name: 'Weight Limit',
                value: '4,000 lbs (2 tons)',
              },
              {
                '@type': 'PropertyValue',
                name: 'Rental Period',
                value: '5 days',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </div>
  )
}
