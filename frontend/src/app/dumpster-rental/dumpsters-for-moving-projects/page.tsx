import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Clock,
  Shield,
  DollarSign,
  PackageOpen,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpsters for Moving Projects Jacksonville FL - 904 Dumpster',
  description:
    'Moving dumpster rental in Jacksonville FL. Declutter before moving, whole house cleanouts, and junk removal for your move. Same-day delivery available. Call (904) 240-5598.',
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-moving-projects',
  },
  openGraph: {
    title: 'Dumpsters for Moving Projects Jacksonville FL - 904 Dumpster',
    description:
      'Moving dumpster rental in Jacksonville FL. Declutter before moving with a roll-off dumpster.',
    type: 'website',
    url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-moving-projects',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
  },
}

const features = [
  'Perfect for pre-move decluttering and cleanouts',
  'Handles furniture, appliances, and household junk',
  'Flexible rental periods to match your moving timeline',
  'Delivered to your driveway for easy loading',
  'No hidden fees or surprise charges',
  'Same-day and next-day delivery available',
  'Avoid multiple trips to the dump',
  'Stress-free way to downsize before a move',
]

const idealFor = [
  'Pre-Move Decluttering',
  'Whole House Cleanouts',
  'Estate Cleanouts',
  'Downsizing Projects',
  'Garage & Attic Purges',
  'Old Furniture Disposal',
  'Moving Out Cleanup',
  'Foreclosure Cleanouts',
]

const faqs = [
  {
    question: 'What size dumpster do I need for a move?',
    answer:
      'For most residential moves, a 10 or 15 yard dumpster is ideal. A 10 yard handles a single room or small apartment cleanout, while a 15 yard is perfect for a whole house declutter. If you are clearing out an entire estate or large home, a 20 yard dumpster may be the best option.',
  },
  {
    question: 'How far in advance should I rent a dumpster before moving?',
    answer:
      'We recommend booking your dumpster 1-2 weeks before your move date. This gives you time to sort, declutter, and load items at your own pace. Same-day delivery is also available if you need a dumpster on short notice.',
  },
  {
    question: 'What can I throw in a moving dumpster?',
    answer:
      'You can dispose of most household items including old furniture, mattresses, clothing, appliances, boxes, and general household junk. Prohibited items include hazardous materials, paint, chemicals, tires, and batteries.',
  },
  {
    question: 'How long can I keep the dumpster during my move?',
    answer:
      'Our standard rental period gives you plenty of time to declutter and clean out your home. If you need more time, extended rental periods are available at affordable daily rates. Just let us know your moving timeline.',
  },
  {
    question: 'Can I put old furniture and appliances in the dumpster?',
    answer:
      'Yes! Old furniture, couches, mattresses, dressers, and most appliances can go right in the dumpster. This is much easier than trying to haul bulky items to the dump yourself or scheduling multiple pickup services.',
  },
  {
    question: 'Do you deliver dumpsters to apartments or condos?',
    answer:
      'We deliver to houses, condos, and apartments throughout Jacksonville. For apartments or condos, we may need to place the dumpster in a parking lot or designated area. Contact us to discuss your specific location.',
  },
]

const relatedServices = [
  {
    title: 'Junk Removal',
    href: '/junk-removal-jacksonville',
    description: 'Let us do the heavy lifting for you',
  },
  {
    title: '10 Yard Dumpster',
    href: '/10-yard-dumpster-rental',
    description: 'Perfect for small cleanouts and single rooms',
  },
  {
    title: '15 Yard Dumpster',
    href: '/15-yard-dumpster-rental',
    description: 'Ideal for whole house decluttering',
  },
]

const blogPosts = [
  {
    title: 'What Size Dumpster Do I Need?',
    href: '/blog/what-size-dumpster-do-i-need',
    description: 'A complete guide to choosing the right dumpster size',
  },
  {
    title: 'Decluttering Tips Before a Move',
    href: '/blog/decluttering-tips-before-moving',
    description: 'How to downsize effectively before moving day',
  },
  {
    title: 'Dumpster Rental Pricing Guide',
    href: '/blog/dumpster-rental-pricing-guide',
    description: 'Everything you need to know about dumpster costs',
  },
]

export default function DumpstersForMovingProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Dumpsters for Moving Projects</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpsters for Moving Projects in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Moving is stressful enough without worrying about what to do with all the stuff you
              don&apos;t want to take with you. Our roll-off dumpsters make it easy to declutter,
              clean out, and simplify your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex items-center justify-center gap-2">
              <PackageOpen className="w-5 h-5" />
              <span>Moving Cleanouts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Flexible Rentals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>Flat-Rate Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Dumpster When Moving */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Simplify Your Move
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why You Need a Dumpster When Moving
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Whether you are moving across town or across the country, a dumpster rental is the
                smartest way to handle all the items you do not want to take with you. Instead of
                making dozens of trips to the dump or cramming everything into your moving truck,
                simply toss unwanted items into a conveniently placed dumpster in your driveway.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Most people are surprised by how much stuff they have accumulated over the years.
                Old furniture, broken appliances, outdated electronics, clothes that no longer fit,
                and boxes of forgotten items all add up quickly. A <Link href="/" className="text-primary hover:underline">Jacksonville FL dumpster rental</Link> gives you one easy
                solution for getting rid of it all so you can start fresh in your new home.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-6">Ideal For:</h3>
              <div className="grid grid-cols-2 gap-4">
                {idealFor.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Same-Day</div>
                <div className="text-gray-500 text-sm">Delivery Available</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Flexible</div>
                <div className="text-gray-500 text-sm">Rental Periods</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Flat-Rate</div>
                <div className="text-gray-500 text-sm">No Hidden Fees</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary">Fully</div>
                <div className="text-gray-500 text-sm">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Size Recommendations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Size Recommendations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What Size Dumpster Do You Need for Moving?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The right dumpster size depends on how much you are clearing out. Here are our
              recommendations for common moving scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((dumpster) => (
              <Link
                key={dumpster.size}
                href={dumpster.href}
                className={`group rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all ${
                  dumpster.size === '15'
                    ? 'bg-primary text-white ring-4 ring-primary/20'
                    : 'bg-white'
                }`}
              >
                {dumpster.size === '15' && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Most Popular for Moving
                  </span>
                )}
                <div
                  className={`text-4xl font-black mb-2 ${
                    dumpster.size === '15' ? 'text-white' : 'text-primary'
                  }`}
                >
                  {dumpster.size}{' '}
                  <span className={`text-xl ${dumpster.size === '15' ? 'text-white/70' : 'text-gray-400'}`}>
                    yard
                  </span>
                </div>
                <h3
                  className={`font-bold mb-2 ${dumpster.size === '15' ? 'text-white' : 'text-secondary'}`}
                >
                  {dumpster.name}
                </h3>
                <p className={`text-sm mb-2 ${dumpster.size === '15' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.dimensions}
                </p>
                <p className={`text-sm mb-4 ${dumpster.size === '15' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.size === '10'
                    ? 'Best for: 1-2 room cleanouts, small apartments, single garage'
                    : dumpster.size === '15'
                      ? 'Best for: Whole house declutter, 2-3 bedroom homes, downsizing'
                      : 'Best for: Large estate cleanouts, 4+ bedroom homes, full house purge'}
                </p>
                <span
                  className={`inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all ${
                    dumpster.size === '15' ? 'text-white' : 'text-primary'
                  }`}
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Simple Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Moving Dumpster Rental Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transparent, flat-rate pricing with no hidden fees. Your rental includes delivery,
              pickup, and disposal.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-6 py-4 font-bold">Dumpster Size</th>
                    <th className="text-left px-6 py-4 font-bold">Dimensions</th>
                    <th className="text-left px-6 py-4 font-bold">Weight Included</th>
                    <th className="text-left px-6 py-4 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-bold text-primary">10 Yard</td>
                    <td className="px-6 py-4 text-gray-600">12&apos; L x 7.5&apos; W x 3.6&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 1 ton</td>
                    <td className="px-6 py-4 text-gray-600">Small cleanouts, 1-2 rooms</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-primary/5">
                    <td className="px-6 py-4 font-bold text-primary">15 Yard</td>
                    <td className="px-6 py-4 text-gray-600">14&apos; L x 7.5&apos; W x 4.5&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 1.5 tons</td>
                    <td className="px-6 py-4 text-gray-600">Whole house declutter</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-primary">20 Yard</td>
                    <td className="px-6 py-4 text-gray-600">14&apos; L x 7.5&apos; W x 5.8&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 2 tons</td>
                    <td className="px-6 py-4 text-gray-600">Large estate cleanouts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-4">
              Call{' '}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-bold hover:underline">
                {BUSINESS.phone}
              </a>{' '}
              or{' '}
              <a
                href="https://app.icans.ai/customer-portal/904dumpster/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                book online
              </a>{' '}
              for current pricing and availability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Moving Dumpster Rental FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-secondary text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Related Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Helpful Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Simplify Your Move?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book your moving dumpster online now. Same-day delivery available throughout
            Jacksonville. Declutter your home and start fresh.
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
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              'Dumpsters for Moving Projects',
              'Moving dumpster rental in Jacksonville FL. Declutter before moving, whole house cleanouts, and junk removal for your move. Same-day delivery available.',
              true
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Dumpster Rental', url: 'https://www.904dumpster.com' },
              {
                name: 'Dumpsters for Moving Projects',
                url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-moving-projects',
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
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
