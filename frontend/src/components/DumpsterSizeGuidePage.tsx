import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Ruler,
  Truck,
  Shield,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { defaultPricing } from '@/data/pricing-helpers'
import { ServicePage } from '@/data/services'
import { FAQSection } from '@/components/FAQSection'

const SIZES = [
  {
    key: '10' as const,
    pricingKey: '10-yard' as const,
    image: '/images/10-yard-dumpster.jpg',
    loads: 3,
    bestFor: 'Garage cleanout, single-room remodel, small landscaping job',
    projects: [
      'Garage or attic cleanout',
      'Single-room remodel',
      'Small landscaping job',
      'Bathroom renovation',
    ],
  },
  {
    key: '15' as const,
    pricingKey: '15-yard' as const,
    image: '/images/15-yard-dumpster.jpg',
    loads: 5,
    bestFor: 'Roof tear-off, kitchen remodel, 2-3 room cleanout',
    projects: [
      'Roof tear-off (up to 30 squares)',
      'Kitchen remodel',
      '2-3 room cleanout',
      'Deck removal',
    ],
  },
  {
    key: '20' as const,
    pricingKey: '20-yard' as const,
    image: '/images/20-yard-dumpster.jpg',
    loads: 7,
    bestFor: 'Whole-house cleanout, large renovation, construction debris',
    projects: [
      'Whole-house cleanout',
      'Estate cleanout',
      'Large renovation',
      'New construction debris',
    ],
  },
]

const LARGER_SIZES = [
  {
    label: '30 yard',
    dims: '22 ft x 8 ft x 6 ft',
    loads: '~9 pickup loads',
    use: 'Full-home demolition, large new construction, major addition cleanup',
  },
  {
    label: '40 yard',
    dims: '22 ft x 8 ft x 8 ft',
    loads: '~12 pickup loads',
    use: 'Commercial construction, full-home rebuild, industrial-scale cleanup',
  },
]

export default function DumpsterSizeGuidePage({ service }: { service: ServicePage }) {
  const sizesWithPricing = SIZES.map((s) => {
    const p = defaultPricing.dumpsters[s.pricingKey]
    return {
      ...s,
      price: p.basePrice,
      tons: p.tonnageIncluded,
      days: p.rentalDays,
      dims: p.dimensions,
      cubicYards: parseInt(s.key, 10),
    }
  })

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white" title="904 Dumpster Home">Dumpster Rental Jacksonville</Link>
            <span>/</span>
            <span className="text-white">Dumpster Sizes Chart</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Dumpster Sizes <span className="text-primary">Chart</span>
              </h1>
              <p className="text-sm text-white/50 uppercase tracking-wider mb-6">
                10, 15 &amp; 20 yard roll-off dimensions compared &bull; Jacksonville, FL
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Side-by-side dumpster sizes chart with real dimensions, weight limits, and project recommendations.
                The 10, 15, and{' '}
                <Link href="/20-yard-dumpster-rental" title="20 Yard Dumpster Rental Jacksonville FL" className="text-primary hover:underline font-semibold">
                  20 yard
                </Link>{' '}
                roll-off containers cover almost every home project in Jacksonville. Pick
                your size below or compare them in the chart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.icans.ai/customer-portal/904dumpster/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Book a Dumpster Rental Online"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Book Online Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  title="Call 904 Dumpster for size advice"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-3">
                {sizesWithPricing.map((s) => (
                  <div key={s.key} className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                    <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-white/10">
                      <Image
                        src={s.image}
                        alt={`${s.key} yard roll-off dumpster ${s.dims.length} feet long ${s.dims.width} feet wide ${s.dims.height} feet high`}
                        title={`${s.key} Yard Dumpster`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-black text-2xl">{s.key}<span className="text-primary text-sm font-bold">yd</span></div>
                      <div className="text-white/60 text-xs">${s.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sizes Chart Table - the literal "chart" the keyword wants */}
      <section id="chart" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Comparison Chart
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
              904 Dumpster Sizes Chart
            </h2>
            <p className="text-lg text-gray-600">
              Every standard residential roll-off dumpster size compared on the dimensions and capacity that
              actually decide which one fits your Jacksonville project.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Size</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Dimensions (L x W x H)</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Volume</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Pickup Loads</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Weight Limit</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Rental Period</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Starting Price</th>
                  <th scope="col" className="px-4 py-4 text-sm uppercase tracking-wider font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sizesWithPricing.map((s) => (
                  <tr key={s.key} className="hover:bg-gray-50 transition-colors">
                    <th scope="row" className="px-4 py-5 font-black text-secondary text-lg whitespace-nowrap">
                      {s.key} yard
                    </th>
                    <td className="px-4 py-5 text-gray-700 whitespace-nowrap">
                      {s.dims.length} ft x {s.dims.width} ft x {s.dims.height} ft
                    </td>
                    <td className="px-4 py-5 text-gray-700">{s.cubicYards} cubic yards</td>
                    <td className="px-4 py-5 text-gray-700">~{s.loads} loads</td>
                    <td className="px-4 py-5 text-gray-700 whitespace-nowrap">{s.tons} ton{s.tons !== 1 ? 's' : ''} included</td>
                    <td className="px-4 py-5 text-gray-700 whitespace-nowrap">{s.days} days</td>
                    <td className="px-4 py-5 font-bold text-primary text-lg whitespace-nowrap">${s.price}</td>
                    <td className="px-4 py-5 text-gray-700 text-sm">{s.bestFor}</td>
                  </tr>
                ))}
                {LARGER_SIZES.map((s) => (
                  <tr key={s.label} className="bg-gray-50">
                    <th scope="row" className="px-4 py-5 font-bold text-gray-500 text-lg whitespace-nowrap">
                      {s.label}
                    </th>
                    <td className="px-4 py-5 text-gray-500 whitespace-nowrap">{s.dims}</td>
                    <td className="px-4 py-5 text-gray-500">{parseInt(s.label, 10)} cubic yards</td>
                    <td className="px-4 py-5 text-gray-500">{s.loads}</td>
                    <td className="px-4 py-5 text-gray-500">Not offered locally</td>
                    <td className="px-4 py-5 text-gray-500">Varies</td>
                    <td className="px-4 py-5 text-gray-500">Not offered</td>
                    <td className="px-4 py-5 text-gray-500 text-sm">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            904 Dumpster offers 10, 15, and 20 yard residential roll-off containers - the three sizes that fit a
            standard Jacksonville driveway. 30 and 40 yard sizes shown above are industry standard for context;
            for those, see <Link href="/construction-dumpster-rental-jacksonville-fl" className="text-primary hover:underline" title="Construction Dumpster Rental">construction dumpster rental</Link>.
          </p>
        </div>
      </section>

      {/* 20 Yard Dumpster Dimensions - AEO Quick Answer */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
            20 Yard Dumpster Dimensions
          </h2>
          <div className="bg-white border-l-4 border-primary rounded-r-lg p-6 mb-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Quick Answer</p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A <strong>20 yard dumpster measures 14 feet long × 7.5 feet wide × 5.8 feet tall</strong> (168 in × 90 in × 70 in). It holds 20 cubic yards — about 540 cubic feet, or 7 full-size pickup truck loads — and weighs roughly 5,500 lbs empty. The footprint is identical to the 15-yard container but the walls are 1.3 feet taller, giving 33% more usable volume. A standard two-car Jacksonville driveway fits the 20-yard without overhang.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
            {[
              { label: 'Length', value: '14 ft' },
              { label: 'Width', value: '7.5 ft' },
              { label: 'Wall Height', value: '5.8 ft' },
              { label: 'Capacity', value: '20 cu yd' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              title="Book a 20 Yard Dumpster Online"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Book a 20 Yard Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/20-yard-dumpster-rental" title="20 Yard Dumpster Rental Jacksonville FL" className="text-primary font-semibold hover:underline">
              See full 20 yard specs &amp; pricing →
            </Link>
          </div>
          <p className="text-sm text-gray-600 text-center">
            The 20 yard is our largest residential size and the most popular for whole-house cleanouts and multi-room renovations. Same-day delivery is available across all of Duval, Clay, St. Johns, and Nassau counties —{' '}
            <a href="#book-by-location" className="text-primary font-semibold hover:underline">
              dumpster rental service areas near you
            </a>.
          </p>
        </div>
      </section>

      {/* Side-by-side Size Cards */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Compare Dumpster Sizes Side by Side
            </h2>
            <p className="text-lg text-gray-600">
              Visual size comparison for the three most common Jacksonville roll-off rentals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sizesWithPricing.map((s) => (
              <div key={s.key} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={s.image}
                    alt={`${s.key} yard dumpster comparison - ${s.cubicYards} cubic yards, ${s.dims.length} feet long, holds ${s.tons} ton${s.tons !== 1 ? 's' : ''}`}
                    title={`${s.key} Yard Dumpster Size`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-black text-secondary">{s.key} Yard Dumpster</h3>
                    <span className="text-2xl font-black text-primary">${s.price}</span>
                  </div>
                  <div className="space-y-2 mb-5 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Ruler className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{s.dims.length} ft x {s.dims.width} ft x {s.dims.height} ft</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Truck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{s.loads} pickup truck loads</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{s.tons} ton{s.tons !== 1 ? 's' : ''} included &middot; {s.days} day rental</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-bold">Typical Projects</div>
                    <ul className="space-y-1.5">
                      {s.projects.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/${s.key}-yard-dumpster-rental`}
                    title={`${s.key} Yard Dumpster Rental in Jacksonville`}
                    className="block w-full text-center bg-secondary hover:bg-primary text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    {s.key} Yard Dumpster Rental
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-8 text-center">
            How to Pick a Size From This Chart
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The dumpster sizes chart above lists every standard roll-off size, but in practice almost every
              Jacksonville home project lands in the 10, 15, or 20 yard range. Two numbers in the chart decide
              which one fits: <strong>volume in cubic yards</strong> and <strong>weight limit in tons</strong>.
              Volume tells you how much debris the container holds; weight limit tells you whether the contents
              push you into an overage charge.
            </p>
            <p>
              For light, bulky debris like furniture, drywall, or attic clutter, volume is the limit you hit
              first - so size up. For heavy debris like concrete, dirt, roofing shingles, or tile, weight is the
              limit you hit first - so the smaller dense-load size often wins. A 10 yard half-full of concrete is
              cheaper than a 15 yard with a weight overage.
            </p>
            <p>
              When you are genuinely between two sizes, sizing up at 904 Dumpster only costs $50 more, not 50%
              more. A second mid-project delivery costs another $299+. The math almost always favors going one
              size up. Call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold" title="Call 904 Dumpster">{BUSINESS.phone}</a> if
              you want a real recommendation based on your project - 10 years of Jacksonville deliveries means
              we have seen your project before.
            </p>
          </div>
        </div>
      </section>

      {/* Book by Location - highest-traffic page on the site, pass authority + users to the pages that actually book */}
      <section id="book-by-location" className="py-16 lg:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Book Your Dumpster by Location
            </h2>
            <p className="text-lg text-gray-600">
              Same-day delivery across Duval, Clay, St. Johns, and Nassau counties. Find your area below for local pricing and delivery details.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                county: 'Duval County',
                areas: [
                  { name: 'Arlington', href: '/dumpster-rental-arlington-fl' },
                  { name: 'Atlantic Beach', href: '/dumpster-rental-atlantic-beach-fl' },
                  { name: 'Jacksonville Beach', href: '/dumpster-rental-jacksonville-beach-fl' },
                  { name: 'Mandarin', href: '/dumpster-rental-mandarin-fl' },
                  { name: 'Neptune Beach', href: '/dumpster-rental-neptune-beach-fl' },
                  { name: 'Riverside-Avondale', href: '/dumpster-rental-riverside-avondale-fl' },
                  { name: 'San Marco', href: '/dumpster-rental-san-marco-fl' },
                ],
              },
              {
                county: 'Clay County',
                areas: [
                  { name: 'Fleming Island', href: '/dumpster-rental-fleming-island-fl' },
                  { name: 'Green Cove Springs', href: '/dumpster-rental-green-cove-springs-fl' },
                  { name: 'Middleburg', href: '/dumpster-rental-middleburg-fl' },
                  { name: 'Orange Park', href: '/dumpster-rental-orange-park-fl' },
                ],
              },
              {
                county: 'St. Johns County',
                areas: [
                  { name: 'Ponte Vedra Beach', href: '/dumpster-rental-ponte-vedra-fl' },
                  { name: 'St. Augustine', href: '/dumpster-rental-st-augustine-fl' },
                ],
              },
              {
                county: 'Nassau County',
                areas: [
                  { name: 'Fernandina Beach', href: '/dumpster-rental-fernandina-beach-fl' },
                  { name: 'Hilliard', href: '/dumpster-rental-hilliard-fl' },
                ],
              },
            ].map((group) => (
              <div key={group.county}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">{group.county}</h3>
                <ul className="space-y-2">
                  {group.areas.map((area) => (
                    <li key={area.href}>
                      <Link href={area.href} className="text-gray-700 hover:text-primary hover:underline" title={`Dumpster Rental ${area.name} FL`}>
                        Dumpster Rental {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              title="Book a Dumpster Rental Online"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Book Online Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Dumpster Sizes - Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Answers to the size questions Jacksonville homeowners ask most.
            </p>
          </div>
          {service.faqs && <FAQSection faqs={service.faqs} />}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Book the Right Size?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Same-day delivery across Jacksonville when you book before noon. Flat-rate pricing, no fuel
            surcharges, no surprise fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              title="Book a Dumpster Rental Online"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Book Online Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/dumpster-rental-pricing-jacksonville"
              title="Dumpster Rental Pricing in Jacksonville"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Dumpster Rental Pricing Jacksonville
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
