import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, Truck, Clock, Shield, DollarSign } from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import pricing from '@/data/pricing.json'
import { generatePricingItemListSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Prices Jacksonville FL',
  description:
    'Dumpster rental prices in Jacksonville FL. 10-yard from $275, 15-yard from $325, 20-yard from $375. 5-day rental included. No hidden fees.',
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville',
  },
}

export default function PricingPage() {
  const pricingSchema = generatePricingItemListSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Pricing', url: 'https://www.904dumpster.com/dumpster-rental-pricing-jacksonville' },
  ])

  const dumpsterData = [
    {
      size: '10',
      price: pricing.dumpsters['10-yard'].basePrice,
      days: pricing.dumpsters['10-yard'].rentalDays,
      tons: pricing.dumpsters['10-yard'].tonnageIncluded,
      truckLoads: pricing.dumpsters['10-yard'].truckLoadsEquivalent,
      dimensions: `${pricing.dumpsters['10-yard'].dimensions.length}' x ${pricing.dumpsters['10-yard'].dimensions.width}' x ${pricing.dumpsters['10-yard'].dimensions.height}'`,
      ideal: ['Small cleanouts', 'Garage cleanouts', 'Minor renovations', 'Yard cleanup'],
      href: '/10-yard-dumpster-rental',
    },
    {
      size: '15',
      price: pricing.dumpsters['15-yard'].basePrice,
      days: pricing.dumpsters['15-yard'].rentalDays,
      tons: pricing.dumpsters['15-yard'].tonnageIncluded,
      truckLoads: pricing.dumpsters['15-yard'].truckLoadsEquivalent,
      dimensions: `${pricing.dumpsters['15-yard'].dimensions.length}' x ${pricing.dumpsters['15-yard'].dimensions.width}' x ${pricing.dumpsters['15-yard'].dimensions.height}'`,
      ideal: ['Roofing projects', 'Kitchen remodels', 'Deck removal', 'Medium cleanouts'],
      href: '/15-yard-dumpster-rental',
      popular: true,
    },
    {
      size: '20',
      price: pricing.dumpsters['20-yard'].basePrice,
      days: pricing.dumpsters['20-yard'].rentalDays,
      tons: pricing.dumpsters['20-yard'].tonnageIncluded,
      truckLoads: pricing.dumpsters['20-yard'].truckLoadsEquivalent,
      dimensions: `${pricing.dumpsters['20-yard'].dimensions.length}' x ${pricing.dumpsters['20-yard'].dimensions.width}' x ${pricing.dumpsters['20-yard'].dimensions.height}'`,
      ideal: ['Large renovations', 'Construction', 'Estate cleanouts', 'Commercial projects'],
      href: '/20-yard-dumpster-rental',
    },
  ]

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
            Transparent, all-inclusive pricing with no hidden fees. See exactly what you will pay
            before you book.
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
                    We will notify you before pickup if overages apply.
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
                    Need more than 5 days? Additional days are $10/day. Just let us know before
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Book Your Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Get a free quote or book your dumpster now. Same-day delivery available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
