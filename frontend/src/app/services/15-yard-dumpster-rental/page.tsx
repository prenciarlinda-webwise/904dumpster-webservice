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
  HardHat,
  Layers,
  XCircle,
  Lightbulb,
  HelpCircle,
  Star,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { FAQSection } from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '15 Yard Dumpster Rental | Mid-Size Roll-Off Container | 904 Dumpster',
  description:
    'Rent a 15 yard dumpster for $350. Ideal for roofing projects, medium cleanouts, and kitchen remodels. 5-day rental included. Dimensions: 14\' x 8\' x 4.5\'. Call (904) 240-5598.',
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
    'dimensions of a 15 yard dumpster',
    '15 vs 20 yard dumpster',
    '10 yard vs 15 yard dumpster',
  ],
}

const USE_CASES = [
  {
    title: 'Roofing Projects',
    href: '/services/roofing-dumpster-rental',
    icon: Home,
    description: 'Perfect for shingle tear-offs up to 25 squares',
  },
  {
    title: 'Kitchen Remodels',
    href: '/services/construction-dumpster-rental',
    icon: Hammer,
    description: 'Cabinets, counters, flooring removal',
  },
  {
    title: 'Estate Cleanouts',
    href: '/services/home-cleanout-dumpster-rental',
    icon: Layers,
    description: 'Clear multiple rooms at once',
  },
  {
    title: 'Contractor Jobs',
    href: '/services/contractor-dumpster-rental',
    icon: HardHat,
    description: 'Medium renovation projects',
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
    question: 'How big is a 15 yard dumpster?',
    answer: 'A 15 yard dumpster measures approximately 14 feet long, 8 feet wide, and 4.5 feet high. It holds about 15 cubic yards of material, which is equivalent to approximately 5 pickup truck loads of debris. This mid-size container offers the perfect balance between capacity and footprint, making it our most popular choice for home renovation projects.',
  },
  {
    question: 'What can I put in a 15 yard dumpster?',
    answer: 'A 15 yard dumpster can hold most common household and construction debris including furniture, appliances (with freon removed), yard waste, roofing shingles, construction materials, flooring, drywall, cabinetry, and general junk. It\'s particularly popular for roofing projects as it can handle up to 25 squares of shingles. Hazardous materials like paint, chemicals, batteries, and electronics with screens are not permitted.',
  },
  {
    question: 'How much does a 15 yard dumpster cost?',
    answer: 'Our 15 yard dumpster rental starts at $350, which includes delivery, a 5-day rental period, up to 3 tons of disposal, pickup, and driveway protection boards. There are no hidden fees. Additional days can be added for $15 per day, and any weight over 3 tons is charged at $65 per additional ton. This all-inclusive pricing makes it easy to budget for your project.',
  },
  {
    question: 'How long can I keep the 15 yard dumpster?',
    answer: 'The standard rental period for our 15 yard dumpster is 5 days, which is typically enough time for most medium-sized projects like kitchen remodels or roofing jobs. If you need more time, we offer flexible extensions at just $15 per additional day. Simply call us before your rental period ends to arrange an extension. We\'ll pick up the dumpster whenever you\'re ready.',
  },
  {
    question: 'Will a 15 yard dumpster fit in my driveway?',
    answer: 'Yes, a 15 yard dumpster fits in most standard residential driveways. At 14 feet long and 8 feet wide, it\'s comparable to parking a large pickup truck with an extended bed. The 4.5-foot height is still manageable for most people to load without a ladder. We provide driveway protection boards to prevent any damage to your concrete or asphalt surface.',
  },
  {
    question: 'How much weight can a 15 yard dumpster hold?',
    answer: 'Our 15 yard dumpster rental includes up to 3 tons (6,000 pounds) of disposal weight. This is sufficient for most roofing projects, kitchen remodels, and medium-sized cleanouts. For projects involving heavier materials like concrete or roofing with multiple layers, you may want to discuss weight estimates with our team to ensure you choose the right size.',
  },
  {
    question: '15 yard vs 10 yard dumpster – which should I choose?',
    answer: 'Choose a 15 yard dumpster if you\'re tackling a roofing project, kitchen or bathroom remodel, multiple room cleanout, or deck removal. Choose a 10 yard dumpster if you\'re doing a single-room cleanout, small renovation, or garage cleanup. The 15 yard offers 50% more capacity for only $75 more, making it the better value for medium-sized projects.',
  },
  {
    question: '15 yard vs 20 yard dumpster – which should I choose?',
    answer: 'Choose a 15 yard dumpster for roofing projects, kitchen remodels, or estate cleanouts. Choose a 20 yard dumpster for large construction projects, whole-house renovations, or commercial jobs. If you\'re unsure, our team can help you estimate the right size based on your specific project. When in doubt, sizing up is often more cost-effective than needing a second dumpster.',
  },
  {
    question: 'Is the 15 yard dumpster good for roofing projects?',
    answer: 'Yes, the 15 yard dumpster is our most popular choice for residential roofing projects. It can typically handle a complete roof tear-off for homes up to 2,500 square feet (approximately 25 squares of shingles). The 3-ton weight limit is well-suited for asphalt shingles. For larger homes or multiple-layer tear-offs, consider our 20 yard option.',
  },
  {
    question: 'Do I need a permit for a 15 yard dumpster?',
    answer: 'If the dumpster is placed on your private property (like your driveway), you typically don\'t need a permit in most Jacksonville area jurisdictions. However, if you need to place the dumpster on the street or in a public right-of-way, you may need a permit from your local municipality. We can help guide you through the permit process if needed.',
  },
]

const WHAT_FITS = [
  'Complete roof tear-off (up to 25 squares of shingles)',
  'Full kitchen remodel debris (cabinets, counters, flooring)',
  'Bathroom renovation (tub, vanity, tile, drywall)',
  'Medium deck removal (200-400 sq ft)',
  'Multiple room carpet and flooring removal',
  'Estate cleanout (3-4 rooms of contents)',
  'Large landscaping project debris',
  'Garage conversion debris',
  'Window and siding replacement',
  'Small addition demo debris',
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
    title: 'Load roofing shingles flat',
    description: 'Stack shingles flat on the bottom of the dumpster. This distributes weight evenly and leaves room for other debris on top.',
  },
  {
    title: 'Break down cabinets',
    description: 'Disassemble kitchen cabinets before tossing them. You\'ll fit twice as much by removing doors and shelving.',
  },
  {
    title: 'Save room for demo debris',
    description: 'If you\'re doing a remodel, demo debris comes last. Load the items you\'re removing first, then add demolition waste.',
  },
  {
    title: 'Fill from back to front',
    description: 'Start loading at the back of the dumpster and work your way toward the door. This makes it easier to access and fill evenly.',
  },
  {
    title: 'Use the door for heavy items',
    description: 'The swing-open door makes it easy to walk in heavy items like tile, concrete, or bundled shingles.',
  },
]

export default function FifteenYardDumpsterPage() {
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
                <span className="text-white">15 Yard Dumpster</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4" />
                Most Popular Size
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                15 Yard Dumpster Rental in{' '}
                <span className="text-primary">Jacksonville, FL</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Our most popular dumpster size is the perfect choice for roofing projects, kitchen remodels,
                and medium-sized cleanouts. The 15 yard container offers the ideal balance of capacity and
                footprint – big enough for serious projects, yet compact enough for most driveways.
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
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                Best Seller
              </div>
              <div className="text-center mb-6">
                <span className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  15 Yard Dumpster
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-secondary">$350</span>
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
                    <div className="font-bold text-secondary">Up to 3 Tons</div>
                    <div className="text-sm text-gray-500">Disposal included</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Ruler className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-secondary">15 Cubic Yards</div>
                    <div className="text-sm text-gray-500">≈ 5 pickup truck loads</div>
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
              <div className="text-2xl font-black">14&apos;</div>
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
              <div className="text-2xl font-black">6,000 lbs</div>
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
              What&apos;s Included for $350
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
              'Up to 3 tons disposal',
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

      {/* Why 15 Yard is Most Popular */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Why It&apos;s #1
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why the 15 Yard Dumpster is Our Most Popular Size
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The 15 yard dumpster hits the sweet spot for home renovation projects. It offers 50% more
                capacity than our 10 yard option while maintaining a footprint that fits comfortably in
                most residential driveways. This makes it the go-to choice for roofing contractors,
                remodelers, and homeowners tackling medium-sized projects.
              </p>
              <p className="text-gray-600 mb-6">
                At just $75 more than the 10 yard, the 15 yard dumpster provides significantly more value
                per cubic yard. You get enough space for a complete roof tear-off, a full kitchen remodel,
                or a multi-room estate cleanout without the worry of running out of room mid-project.
              </p>
              <p className="text-gray-600">
                The 4.5-foot height is still manageable for loading, and the rear swing door makes it easy
                to walk in heavy items like tile, concrete, or bundled shingles. Whether you&apos;re a
                contractor or a DIY homeowner, the 15 yard dumpster has the capacity you need without
                paying for space you won&apos;t use.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-bold text-secondary mb-6">15 Yard Dumpster at a Glance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Dimensions</span>
                  <span className="font-bold text-secondary">14&apos; L × 8&apos; W × 4.5&apos; H</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-bold text-secondary">15 cubic yards</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Equivalent to</span>
                  <span className="font-bold text-secondary">5 pickup truck loads</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Weight limit</span>
                  <span className="font-bold text-secondary">3 tons (6,000 lbs)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Rental period</span>
                  <span className="font-bold text-secondary">5 days included</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Starting price</span>
                  <span className="font-bold text-primary text-xl">$350</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Fits in a 15 Yard Dumpster */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Size Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                What Fits in a 15 Yard Dumpster?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                A 15 yard dumpster holds approximately 15 cubic yards of material, which is equivalent to
                about 5 pickup truck loads. The dimensions of 14 feet long, 8 feet wide, and 4.5 feet high
                provide ample space for most home renovation and cleanout projects.
              </p>
              <p className="text-gray-600 mb-8">
                For roofing projects, a 15 yard dumpster can typically handle a complete tear-off for homes
                up to 2,500 square feet – that&apos;s approximately 25 squares of asphalt shingles. The 3-ton
                weight limit is well-suited for roofing materials, which are heavier than typical household
                debris.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Pro Tip for Roofing Projects
                </h3>
                <p className="text-gray-600">
                  When disposing of roofing shingles, stack them flat on the bottom of the dumpster to
                  distribute weight evenly. If you have multiple layers of shingles to remove, you may
                  need to upgrade to a 20 yard dumpster or schedule a swap-out mid-project. Our team can
                  help you estimate based on your roof size and number of layers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-secondary mb-6">Common Projects for a 15 Yard Dumpster:</h3>
              <div className="space-y-3">
                {WHAT_FITS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
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
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Perfect For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Popular Uses for a 15 Yard Dumpster
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The 15 yard dumpster is versatile enough for a wide range of projects.
              Click below to learn more about specific project types.
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
            <p className="text-gray-600 mb-4">Not sure if a 15 yard is right for your project?</p>
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
              Tips for Loading Your 15 Yard Dumpster
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
              15 Yard Dumpster Delivery in Jacksonville & Surrounding Areas
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
              15 Yard vs. Other Dumpster Sizes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Not sure if a 15 yard dumpster is the right size for your project?
              Compare our available sizes below to find the perfect fit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/10-yard-dumpster-rental"
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all group"
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
                <li>✓ Single room remodels</li>
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
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-4">
                Best Seller
              </span>
              <h3 className="text-2xl font-black mb-2">15 Yard</h3>
              <div className="text-4xl font-black mb-4">$350</div>
              <p className="text-white/70 mb-4">5-day rental • 3 ton limit</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 5 pickup truck loads</li>
                <li>✓ Roofing projects</li>
                <li>✓ Medium renovations</li>
                <li>✓ Multi-room cleanouts</li>
              </ul>
            </div>

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
              15 Yard Dumpster FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about renting a 15 yard dumpster.
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
            Ready to Rent a 15 Yard Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-4">
            $350 for 5 days • Free delivery • Up to 3 tons included
          </p>
          <p className="text-white/60 mb-10">
            Call now to reserve our most popular dumpster size. Same-day delivery available
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
            name: '15 Yard Dumpster Rental',
            description: 'Mid-size 15 cubic yard roll-off dumpster ideal for roofing projects, kitchen remodels, and medium cleanouts. Holds approximately 5 pickup truck loads.',
            brand: {
              '@type': 'Brand',
              name: '904 Dumpster',
            },
            offers: {
              '@type': 'Offer',
              price: '350',
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
                value: '14\' x 8\' x 4.5\'',
              },
              {
                '@type': 'PropertyValue',
                name: 'Capacity',
                value: '15 cubic yards',
              },
              {
                '@type': 'PropertyValue',
                name: 'Weight Limit',
                value: '6,000 lbs (3 tons)',
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
