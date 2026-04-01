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
  TreePine,
} from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpsters for Landscaping Projects Jacksonville FL - 904 Dumpster',
  description:
    'Landscaping dumpster rental in Jacksonville FL. Yard waste, tree trimming, sod removal, and landscape renovation debris disposal. Same-day delivery. Call (904) 240-5598.',
  keywords: [
    'landscaping dumpster',
    'landscape dumpster rental',
    'yard waste dumpster',
    'yard debris dumpster',
    'lawn waste disposal dumpster',
    'garden waste dumpster',
    'tree trimming dumpster jacksonville',
    'sod removal dumpster rental',
  ],
  alternates: {
    canonical: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-landscaping-projects',
  },
  openGraph: {
    title: 'Dumpsters for Landscaping Projects Jacksonville FL - 904 Dumpster',
    description:
      'Landscaping dumpster rental in Jacksonville FL. Yard waste and landscape debris disposal.',
    type: 'website',
    url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-landscaping-projects',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
  },
}

const features = [
  'Handles branches, limbs, stumps, and brush',
  'Perfect for sod, dirt, and soil removal',
  'Accepts leaves, grass clippings, and garden debris',
  'Great for fence and deck removal debris',
  'Fits in driveways for easy yard access',
  'Same-day and next-day delivery available',
  'Flexible rental periods for multi-day projects',
  'No need for multiple trips to the yard waste facility',
]

const idealFor = [
  'Tree Trimming & Removal',
  'Sod & Turf Removal',
  'Garden Bed Renovation',
  'Fence & Deck Removal',
  'Storm Debris Cleanup',
  'Yard Overgrowth Clearing',
  'Landscape Renovation',
  'Mulch & Soil Removal',
]

const faqs = [
  {
    question: 'What size dumpster do I need for a landscaping project?',
    answer:
      'For most residential landscaping projects like tree trimming or garden cleanups, a 10 yard dumpster works well. For larger projects like full yard renovations, sod removal across a large lawn, or multiple tree removals, a 15 or 20 yard dumpster is recommended. Keep in mind that yard waste can be bulky but lightweight, so you may need a larger size than you expect.',
  },
  {
    question: 'Can I put dirt and soil in a dumpster?',
    answer:
      'Yes, you can put dirt and soil in our dumpsters. However, dirt and soil are heavy materials. If you are disposing of a large amount of dirt, please call us to discuss weight limits and ensure you choose the right size dumpster for your project.',
  },
  {
    question: 'What types of yard waste can go in the dumpster?',
    answer:
      'You can dispose of branches, limbs, brush, leaves, grass clippings, sod, shrubs, small stumps, garden debris, old fencing, landscape timbers, pavers, and other common landscaping materials. Contact us if you are unsure about a specific material.',
  },
  {
    question: 'How long can I keep the dumpster for my landscaping project?',
    answer:
      'Our standard rental period gives you plenty of time for most landscaping projects. If your project spans multiple weekends or requires more time, extended rental periods are available at affordable daily rates.',
  },
  {
    question: 'Can I put tree stumps in a dumpster?',
    answer:
      'Small to medium tree stumps can go in our dumpsters. Very large stumps may exceed weight limits depending on their size. If you have large stumps to dispose of, call us and we can help you choose the right dumpster size and discuss any weight considerations.',
  },
  {
    question: 'Do you offer dumpsters for storm cleanup?',
    answer:
      'Absolutely. After storms, Jacksonville homeowners often need dumpsters for fallen branches, damaged fencing, and other storm debris. We offer same-day delivery when available so you can start your cleanup right away.',
  },
]

const relatedServices = [
  {
    title: 'Junk Removal',
    href: '/junk-removal-jacksonville',
    description: 'Let us haul away your yard waste and debris',
  },
  {
    title: '10 Yard Dumpster',
    href: '/10-yard-dumpster-rental',
    description: 'Perfect for small landscaping cleanups',
  },
  {
    title: '20 Yard Dumpster',
    href: '/20-yard-dumpster-rental',
    description: 'For large landscape renovations and tree work',
  },
]

const blogPosts = [
  {
    title: 'What Size Dumpster Do I Need?',
    href: '/blog/what-size-dumpster-do-i-need',
    description: 'A complete guide to choosing the right dumpster size',
  },
  {
    title: 'Yard Waste Disposal Guide',
    href: '/blog/yard-waste-disposal-guide',
    description: 'How to properly dispose of landscaping debris',
  },
  {
    title: 'Dumpster Rental Pricing Guide',
    href: '/blog/dumpster-rental-pricing-guide',
    description: 'Everything you need to know about dumpster costs',
  },
]

export default function DumpstersForLandscapingProjectsPage() {
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
              <span className="text-white">Dumpsters for Landscaping Projects</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpsters for Landscaping Projects in{' '}
              <span className="text-primary">Jacksonville, FL</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Yard waste, tree trimming debris, sod removal, and landscape renovation materials
              all need somewhere to go. Our roll-off dumpsters make landscaping cleanup fast and
              hassle-free.
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
              <TreePine className="w-5 h-5" />
              <span>Yard Waste Disposal</span>
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

      {/* Why You Need a Dumpster for Landscaping */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Yard Waste Made Easy
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Why You Need a Dumpster for Landscaping Projects
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Landscaping projects generate a surprising amount of debris. Whether you are
                trimming trees, pulling out old sod, clearing overgrown areas, or renovating your
                entire yard, the waste piles up fast. Branches, brush, dirt, old fencing, and
                landscape timbers can quickly overwhelm your regular trash service.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                A roll-off dumpster placed right in your driveway gives you a convenient spot to
                toss everything as you work. No more loading your truck and driving to the dump
                multiple times. Just fill the dumpster and we handle the rest, so you can focus
                on making your yard look great.
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
              What Size Dumpster Do You Need for Landscaping?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Yard waste can be bulky. Choose the right dumpster size based on the scope of your
              landscaping project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((dumpster) => (
              <Link
                key={dumpster.size}
                href={dumpster.href}
                className={`group rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all ${
                  dumpster.size === '10'
                    ? 'bg-primary text-white ring-4 ring-primary/20'
                    : 'bg-white'
                }`}
              >
                {dumpster.size === '10' && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Most Popular for Yard Work
                  </span>
                )}
                <div
                  className={`text-4xl font-black mb-2 ${
                    dumpster.size === '10' ? 'text-white' : 'text-primary'
                  }`}
                >
                  {dumpster.size}{' '}
                  <span className={`text-xl ${dumpster.size === '10' ? 'text-white/70' : 'text-gray-400'}`}>
                    yard
                  </span>
                </div>
                <h3
                  className={`font-bold mb-2 ${dumpster.size === '10' ? 'text-white' : 'text-secondary'}`}
                >
                  {dumpster.name}
                </h3>
                <p className={`text-sm mb-2 ${dumpster.size === '10' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.dimensions}
                </p>
                <p className={`text-sm mb-4 ${dumpster.size === '10' ? 'text-white/70' : 'text-gray-500'}`}>
                  {dumpster.size === '10'
                    ? 'Best for: Tree trimming, garden cleanups, small yard projects'
                    : dumpster.size === '15'
                      ? 'Best for: Sod removal, fence teardown, medium landscape renovations'
                      : 'Best for: Full yard overhauls, multiple tree removals, large renovations'}
                </p>
                <span
                  className={`inline-flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all ${
                    dumpster.size === '10' ? 'text-white' : 'text-primary'
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
              Landscaping Dumpster Rental Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transparent, flat-rate pricing with no hidden fees. Your rental includes delivery,
              pickup, and disposal of yard waste and landscaping debris.
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
                  <tr className="border-b border-gray-100 bg-primary/5">
                    <td className="px-6 py-4 font-bold text-primary">10 Yard</td>
                    <td className="px-6 py-4 text-gray-600">12&apos; L x 7.5&apos; W x 3.6&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 1 ton</td>
                    <td className="px-6 py-4 text-gray-600">Tree trimming, garden cleanup</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-bold text-primary">15 Yard</td>
                    <td className="px-6 py-4 text-gray-600">14&apos; L x 7.5&apos; W x 4.5&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 1.5 tons</td>
                    <td className="px-6 py-4 text-gray-600">Sod removal, fence teardown</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-primary">20 Yard</td>
                    <td className="px-6 py-4 text-gray-600">14&apos; L x 7.5&apos; W x 5.8&apos; H</td>
                    <td className="px-6 py-4 text-gray-600">Up to 2 tons</td>
                    <td className="px-6 py-4 text-gray-600">Full yard renovation</td>
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
              Landscaping Dumpster Rental FAQ
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
            Ready for Your Landscaping Project?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book your yard waste dumpster online now. Same-day delivery available throughout
            Jacksonville. Clean up your yard the easy way.
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
              'Dumpsters for Landscaping Projects',
              'Landscaping dumpster rental in Jacksonville FL. Yard waste, tree trimming, sod removal, and landscape renovation debris disposal. Same-day delivery available.',
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
                name: 'Dumpsters for Landscaping Projects',
                url: 'https://www.904dumpster.com/dumpster-rental/dumpsters-for-landscaping-projects',
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
