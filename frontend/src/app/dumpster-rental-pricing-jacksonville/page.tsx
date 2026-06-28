import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, Truck, Clock, Shield, DollarSign } from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import { defaultPricing, priceValidUntil } from '@/data/pricing-helpers'
import { generatePricingItemListSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Prices Jacksonville FL - 904 Dumpster',
  description:
    'Dumpster rental prices in Jacksonville FL. 10-yard from $299, 15-yard from $349, 20-yard from $399. Rental period included. No hidden fees.',
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville',
  },
  openGraph: {
    title: 'Dumpster Rental Prices Jacksonville FL - 904 Dumpster',
    description: 'Transparent dumpster rental pricing in Jacksonville FL. 10-yard $299, 15-yard $349, 20-yard $399. Delivery, pickup, and disposal included.',
    type: 'website',
    url: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville',
    siteName: '904 Dumpster',
    images: [
      {
        url: '/images/main-hero-dumpster.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dumpster rental pricing in Jacksonville FL from $299',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Prices Jacksonville FL - 904 Dumpster',
    description: 'Transparent pricing: 10-yard $299, 15-yard $349, 20-yard $399. No hidden fees.',
    images: ['/images/main-hero-dumpster.jpeg'],
  },
}

export default function PricingPage() {
  const pricingSchema = generatePricingItemListSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Dumpster Rental Jacksonville', url: 'https://www.904dumpster.com' },
    { name: 'Pricing', url: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville' },
  ])

  const dumpsterData = [
    {
      size: '10',
      price: defaultPricing.dumpsters['10-yard'].basePrice,
      days: defaultPricing.dumpsters['10-yard'].rentalDays,
      tons: defaultPricing.dumpsters['10-yard'].tonnageIncluded,
      truckLoads: defaultPricing.dumpsters['10-yard'].truckLoadsEquivalent,
      dimensions: `${defaultPricing.dumpsters['10-yard'].dimensions.length}' x ${defaultPricing.dumpsters['10-yard'].dimensions.width}' x ${defaultPricing.dumpsters['10-yard'].dimensions.height}'`,
      ideal: ['Small cleanouts', 'Garage cleanouts', 'Minor renovations', 'Yard cleanup'],
      href: '/10-yard-dumpster-rental',
    },
    {
      size: '15',
      price: defaultPricing.dumpsters['15-yard'].basePrice,
      days: defaultPricing.dumpsters['15-yard'].rentalDays,
      tons: defaultPricing.dumpsters['15-yard'].tonnageIncluded,
      truckLoads: defaultPricing.dumpsters['15-yard'].truckLoadsEquivalent,
      dimensions: `${defaultPricing.dumpsters['15-yard'].dimensions.length}' x ${defaultPricing.dumpsters['15-yard'].dimensions.width}' x ${defaultPricing.dumpsters['15-yard'].dimensions.height}'`,
      ideal: ['Roofing projects', 'Kitchen remodels', 'Deck removal', 'Medium cleanouts'],
      href: '/15-yard-dumpster-rental',
    },
    {
      size: '20',
      price: defaultPricing.dumpsters['20-yard'].basePrice,
      days: defaultPricing.dumpsters['20-yard'].rentalDays,
      tons: defaultPricing.dumpsters['20-yard'].tonnageIncluded,
      truckLoads: defaultPricing.dumpsters['20-yard'].truckLoadsEquivalent,
      dimensions: `${defaultPricing.dumpsters['20-yard'].dimensions.length}' x ${defaultPricing.dumpsters['20-yard'].dimensions.width}' x ${defaultPricing.dumpsters['20-yard'].dimensions.height}'`,
      ideal: ['Large renovations', 'Construction', 'Estate cleanouts', 'Commercial projects'],
      href: '/20-yard-dumpster-rental',
      popular: true,
    },
  ]

  const pricingFaqs = [
    {
      q: 'How much does it cost to rent a dumpster in Jacksonville FL?',
      a: 'A dumpster rental in Jacksonville costs $299 for a 10-yard, $349 for a 15-yard, or $399 for a 20-yard at 904 Dumpster. Each price is flat-rate and includes delivery, pickup, a 5-day rental period, and disposal of the included tonnage (1 ton, 1.5 tons, and 2 tons respectively).',
    },
    {
      q: 'Are there hidden fees in 904 Dumpster pricing?',
      a: 'No. The advertised flat rates of $299, $349, and $399 cover delivery, pickup, disposal, and the rental period. There are no fuel surcharges, environmental fees, administrative fees, or delivery zone charges added to the bill. Weight overages above the included tonnage are billed at $75 per additional ton.',
    },
    {
      q: 'What is the cheapest dumpster rental in Jacksonville?',
      a: 'The 10-yard dumpster at $299 is the most affordable size. It holds about 3 pickup truck loads, fits any standard residential driveway, and works well for single-room cleanouts, garage purges, or small bathroom remodels. Be cautious of competitors advertising sub-$200 rentals, as those almost always have hidden delivery, fuel, or disposal fees that inflate the final bill above $400.',
    },
    {
      q: 'What is included in the flat-rate dumpster rental price?',
      a: 'Every 904 Dumpster rental includes drop-off delivery to your Jacksonville-area address, a 5-day rental period, pickup when you call, and disposal at Trail Ridge Landfill up to the included tonnage. Two-week and monthly rental options are also available at slightly higher rates for projects that run longer.',
    },
    {
      q: 'Are there extra charges for heavy debris like concrete or dirt?',
      a: 'Heavy materials hit the weight allowance faster than the volume allowance. Mixed loads with concrete, brick, tile, or dirt typically require a smaller 10-yard dumpster sized for the weight rather than the volume. For projects exclusively involving heavy debris, we offer a dedicated concrete disposal dumpster service designed to handle the extra tonnage.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Pricing</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Dumpster Rental <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transparent, all-inclusive <Link href="/" className="text-white underline decoration-primary/60 hover:decoration-primary">dumpster rental Jacksonville FL</Link> pricing with no hidden fees. Same flat rates for{' '}
            <Link href="/dumpster-rental-jacksonville-beach-fl" className="text-white/90 hover:text-white underline decoration-white/30">Jacksonville Beach</Link>,{' '}
            <Link href="/dumpster-rental-st-augustine-fl" className="text-white/90 hover:text-white underline decoration-white/30">St. Augustine</Link>, and all Northeast Florida locations. See exactly what you will pay before you book.
          </p>
        </div>
      </section>

      {/* What's Included Bar */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5-Day Rental</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Disposal Included</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Choose Your Size
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Dumpster Sizes & Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All prices include delivery, pickup, and disposal up to the included weight limit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dumpsterData.map((dumpster) => (
              <div
                key={dumpster.size}
                className={`relative rounded-3xl p-8 ${
                  dumpster.popular
                    ? 'bg-secondary text-white shadow-2xl scale-105'
                    : 'bg-gray-50'
                }`}
              >
                {dumpster.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`text-5xl font-black mb-2 ${
                      dumpster.popular ? 'text-primary' : 'text-primary'
                    }`}
                  >
                    {dumpster.size}
                    <span className={`text-xl ${dumpster.popular ? 'text-white/60' : 'text-gray-400'}`}>
                      {' '}yard
                    </span>
                  </div>
                  <div
                    className={`text-4xl font-black mb-2 ${
                      dumpster.popular ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    ${dumpster.price}
                  </div>
                  <div className={dumpster.popular ? 'text-white/60' : 'text-gray-500'}>
                    Starting price
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      dumpster.popular ? 'bg-white/10' : 'bg-white'
                    }`}
                  >
                    <Clock className={`w-5 h-5 ${dumpster.popular ? 'text-primary' : 'text-primary'}`} />
                    <div>
                      <div className={`font-semibold ${dumpster.popular ? 'text-white' : 'text-secondary'}`}>
                        {dumpster.days}-Day Rental
                      </div>
                      <div className={`text-sm ${dumpster.popular ? 'text-white/60' : 'text-gray-500'}`}>
                        Included in price
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      dumpster.popular ? 'bg-white/10' : 'bg-white'
                    }`}
                  >
                    <Shield className={`w-5 h-5 ${dumpster.popular ? 'text-primary' : 'text-primary'}`} />
                    <div>
                      <div className={`font-semibold ${dumpster.popular ? 'text-white' : 'text-secondary'}`}>
                        Up to {dumpster.tons} Tons
                      </div>
                      <div className={`text-sm ${dumpster.popular ? 'text-white/60' : 'text-gray-500'}`}>
                        Disposal included
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      dumpster.popular ? 'bg-white/10' : 'bg-white'
                    }`}
                  >
                    <Truck className={`w-5 h-5 ${dumpster.popular ? 'text-primary' : 'text-primary'}`} />
                    <div>
                      <div className={`font-semibold ${dumpster.popular ? 'text-white' : 'text-secondary'}`}>
                        {dumpster.dimensions}
                      </div>
                      <div className={`text-sm ${dumpster.popular ? 'text-white/60' : 'text-gray-500'}`}>
                        ≈ {dumpster.truckLoads} pickup truck loads
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className={`text-sm font-semibold mb-3 ${dumpster.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    Ideal for:
                  </div>
                  <ul className="space-y-2">
                    {dumpster.ideal.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${dumpster.popular ? 'text-primary' : 'text-primary'}`} />
                        <span className={dumpster.popular ? 'text-white/80' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={dumpster.href}
                  className={`block w-full text-center font-bold py-4 rounded-xl transition-all ${
                    dumpster.popular
                      ? 'bg-primary hover:bg-white text-white hover:text-secondary'
                      : 'bg-primary hover:bg-secondary text-white'
                  }`}
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jacksonville Dumpster Rental Context (triangulation for the high-volume cluster) */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Local Pricing Context
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Dumpster Rental in Jacksonville, FL: How Our Pricing Compares
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
            <p>
              Pricing for <strong>Jacksonville dumpster rental</strong> typically ranges from $300 to $650 per container depending on size, vendor, and what is bundled in. National guides like Hometown Dumpster Rental and HomeAdvisor list the same 10/15/20-yard sizes between $350 and $650 for the Jacksonville market. 904 Dumpster prices the same containers at $299, $349, and $399 because we are a locally owned hauler, not a broker, and we operate our own trucks across Duval and the surrounding counties.
            </p>
            <p>
              When you compare quotes for <strong>dumpster rental in Jacksonville</strong>, the price you are quoted is rarely the price you pay. Common add-ons that brokers and out-of-town haulers tack on at booking or invoicing include: fuel surcharges ($25 to $50), environmental or admin fees ($15 to $40), driveway protection (sometimes $40 to $75 if not standard), and trip charges if the truck cannot place the container on the first attempt. Our flat rate folds delivery, the rental period, pickup, and disposal into a single number, with weight overage and rental extensions only billed when actually used.
            </p>
            <p>
              Different parts of the metro area have different price baselines. Pricing in <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:underline" title="Dumpster Rental St. Augustine FL">St. Augustine</Link> and <Link href="/dumpster-rental-fernandina-beach-fl" className="text-primary hover:underline" title="Dumpster Rental Fernandina Beach FL">Fernandina Beach</Link> runs higher because of the longer drive from our Jacksonville yard, while Clay County deliveries to <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:underline" title="Dumpster Rental Orange Park FL">Orange Park</Link>, <Link href="/dumpster-rental-fleming-island-fl" className="text-primary hover:underline" title="Dumpster Rental Fleming Island FL">Fleming Island</Link>, and <Link href="/dumpster-rental-middleburg-fl" className="text-primary hover:underline" title="Dumpster Rental Middleburg FL">Middleburg</Link> match Jacksonville-core rates because we run those routes daily. For the <Link href="/" className="text-primary hover:underline" title="Dumpster Rental Jacksonville FL Homepage">Jacksonville-area homepage</Link>, current pricing, and our service-area map, see the rate cards above or call us for an exact quote tailored to your project and ZIP code.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Iframe */}
      <section id="book" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Reserve Online
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
              Book Your Jacksonville Dumpster Rental
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-time availability, transparent pricing, instant confirmation.
            </p>
          </div>
          <div className="relative w-full h-screen rounded-lg overflow-hidden">
            <iframe
              src="https://app.icans.ai/customer-portal/904dumpster/book/"
              id="booking-iframe"
              loading="lazy"
              title="Dumpster Booking"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="w-full h-full border-0 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What About Additional Fees?
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5">
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">No Delivery Fee</div>
                  <p className="text-gray-600">
                    Delivery and pickup are always included in your quoted price.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">No Fuel Surcharge</div>
                  <p className="text-gray-600">
                    We do not add fuel surcharges or hidden environmental fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Weight Overage</div>
                  <p className="text-gray-600">
                    If you exceed the included weight limit, additional tons are charged at $75/ton.
                    We weigh the load at the landfill and will notify you of any overages before disposal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Extended Rental</div>
                  <p className="text-gray-600">
                    Need more than 5 days? Additional days are $15/day. Just let us know before
                    your rental period ends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Prohibited Items</div>
                  <p className="text-gray-600">
                    Hazardous materials, tires, and certain electronics cannot be disposed of in
                    dumpsters. Removal of prohibited items may result in additional charges. See our{' '}
                    <Link href="/rules/prohibited-items-list" className="text-primary hover:underline">
                      Prohibited Items list
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need to Know - PAA Content for AI */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What You Need to Know About Dumpster Rental in Jacksonville
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-secondary mb-3">How much does a dumpster rental cost in Jacksonville?</h3>
            <p className="text-gray-600 mb-6">
              904 Dumpster offers roll-off dumpster rental in Jacksonville starting at $299 for a 10-yard container, $349 for a 15-yard, and $399 for a 20-yard. All prices include delivery, pickup, disposal, and a rental period with no hidden fees. This is typically $50-$150 less than competitors in the Jacksonville market.
            </p>

            <h3 className="text-xl font-bold text-secondary mb-3">What is the cheapest dumpster rental in Jacksonville?</h3>
            <p className="text-gray-600 mb-6">
              The most affordable dumpster rental in Jacksonville is the 10-yard dumpster from 904 Dumpster at $299. This price includes everything: delivery, 3-day rental, pickup, and disposal up to 1 ton. There are no fuel surcharges, environmental fees, or hidden costs added at checkout.
            </p>

            <h3 className="text-xl font-bold text-secondary mb-3">Can you get same-day dumpster delivery in Jacksonville?</h3>
            <p className="text-gray-600 mb-6">
              Yes, 904 Dumpster offers same-day delivery in Jacksonville when you book before noon. We serve all of Duval County including Jacksonville Beach, Atlantic Beach, and Neptune Beach, plus St. Johns, Clay, and Nassau counties. Next-day delivery is guaranteed for all orders.
            </p>

            <h3 className="text-xl font-bold text-secondary mb-3">What can you put in a dumpster in Jacksonville, FL?</h3>
            <p className="text-gray-600 mb-6">
              In Jacksonville, you can put most household items, furniture, appliances, construction debris, roofing shingles, yard waste, and renovation materials in a dumpster. Prohibited items include hazardous waste, paint, batteries, tires, and electronics. See our <Link href="/rules/prohibited-items-list" className="text-primary hover:underline">complete prohibited items list</Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links - Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-secondary">Related Services & Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Related Services */}
            <div>
              <h3 className="font-bold text-secondary mb-4">Explore Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/residential-dumpster-rental-jacksonville-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Residential dumpster rental in Jacksonville
                  </Link>
                </li>
                <li>
                  <Link href="/construction-dumpster-rental-jacksonville-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Construction dumpster rental Jacksonville
                  </Link>
                </li>
                <li>
                  <Link href="/15-yard-dumpster-rental" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    15 yard dumpster (the roofing size)
                  </Link>
                </li>
                <li>
                  <Link href="/dumpster-size-guide" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster size guide for Jacksonville projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Areas */}
            <div>
              <h3 className="font-bold text-secondary mb-4">Popular Service Areas</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/dumpster-rental-st-augustine-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in St. Augustine, FL
                  </Link>
                </li>
                <li>
                  <Link href="/dumpster-rental-orange-park-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in Orange Park, FL
                  </Link>
                </li>
                <li>
                  <Link href="/dumpster-rental-ponte-vedra-fl" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dumpster rental in Ponte Vedra Beach, FL
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    View all service areas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-10 text-center">
            Dumpster rental pricing questions
          </h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <h3 className="text-lg font-bold text-secondary pr-4">{faq.q}</h3>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Book Your Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book online now for instant scheduling. Same-day delivery available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              Book Online Now
              <ArrowRight className="w-6 h-6" />
            </a>
            <Link
              href="/dumpster-size-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Check Size Guidelines
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
