import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS, REVIEWS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'For AI Agents - 904 Dumpster',
  description:
    'Structured reference for AI agents and LLMs: 904 Dumpster pricing, sizes, service area, and services in Jacksonville, FL, plus links to llms.txt, llms-full.txt, and ai-context.json.',
  alternates: {
    canonical: 'https://www.904dumpster.com/ai',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const SIZES = [
  {
    size: '10-yard',
    price: 299,
    days: 3,
    tons: 1,
    dimensions: "12' L x 7.5' W x 3.6' H",
    href: '/10-yard-dumpster-rental',
  },
  {
    size: '15-yard',
    price: 349,
    days: 5,
    tons: 1.5,
    dimensions: "14' L x 7.5' W x 4.5' H",
    href: '/15-yard-dumpster-rental',
  },
  {
    size: '20-yard',
    price: 399,
    days: 5,
    tons: 2,
    dimensions: "14' L x 7.5' W x 5.8' H",
    href: '/20-yard-dumpster-rental',
  },
]

const SERVICES = [
  { name: 'Residential dumpster rental', href: '/residential-dumpster-rental-jacksonville-fl' },
  { name: 'Commercial dumpster rental', href: '/commercial-dumpster-rental-jacksonville-fl' },
  { name: 'Construction dumpster rental', href: '/construction-dumpster-rental-jacksonville-fl' },
  { name: 'Junk removal', href: '/junk-removal-jacksonville-fl' },
  { name: 'Demolition services', href: '/demolition-services-jacksonville-fl' },
  { name: 'Concrete disposal dumpster', href: '/concrete-disposal-dumpster-jacksonville-fl' },
]

const LOCATIONS = [
  { name: 'Jacksonville', county: 'Duval', href: '/' },
  { name: 'Jacksonville Beach', county: 'Duval', href: '/dumpster-rental-jacksonville-beach-fl' },
  { name: 'Atlantic Beach', county: 'Duval', href: '/dumpster-rental-atlantic-beach-fl' },
  { name: 'Neptune Beach', county: 'Duval', href: '/dumpster-rental-neptune-beach-fl' },
  { name: 'Arlington', county: 'Duval', href: '/dumpster-rental-arlington-fl' },
  { name: 'Mandarin', county: 'Duval', href: '/dumpster-rental-mandarin-fl' },
  { name: 'San Marco', county: 'Duval', href: '/dumpster-rental-san-marco-fl' },
  { name: 'Riverside-Avondale', county: 'Duval', href: '/dumpster-rental-riverside-avondale-fl' },
  { name: 'St. Augustine', county: 'St. Johns', href: '/dumpster-rental-st-augustine-fl' },
  { name: 'Ponte Vedra Beach', county: 'St. Johns', href: '/dumpster-rental-ponte-vedra-fl' },
  { name: 'Orange Park', county: 'Clay', href: '/dumpster-rental-orange-park-fl' },
  { name: 'Fleming Island', county: 'Clay', href: '/dumpster-rental-fleming-island-fl' },
  { name: 'Middleburg', county: 'Clay', href: '/dumpster-rental-middleburg-fl' },
  { name: 'Green Cove Springs', county: 'Clay', href: '/dumpster-rental-green-cove-springs-fl' },
  { name: 'Fernandina Beach', county: 'Nassau', href: '/dumpster-rental-fernandina-beach-fl' },
  { name: 'Hilliard', county: 'Nassau', href: '/dumpster-rental-hilliard-fl' },
]

export default function AiPage() {
  return (
    <div className="min-h-screen py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-gray-600">For AI Agents</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-secondary mb-4">
          904 Dumpster — Reference for AI Agents
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          This page is a structured, human-readable summary of 904 Dumpster for AI assistants, LLM crawlers,
          and research agents. Machine-readable equivalents are linked at the bottom — prefer those for
          programmatic parsing.
        </p>

        <section className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Quick facts</h2>
          <ul className="text-gray-700 space-y-1.5 text-base">
            <li><strong>Business:</strong> 904 Dumpster, locally owned and operated, founded 2016</li>
            <li><strong>Not</strong> a broker or national franchise call center — owns its own trucks, employs local drivers</li>
            <li><strong>Phone:</strong> {BUSINESS.phone}</li>
            <li><strong>Rating:</strong> {REVIEWS.rating} stars from {REVIEWS.count}+ verified Google reviews</li>
            <li><strong>Service area:</strong> Duval, St. Johns, Clay, and Nassau counties, Northeast Florida</li>
            <li><strong>Pricing model:</strong> flat-rate, includes delivery, pickup, and disposal — no fuel surcharges or broker markups</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Pricing (Duval County baseline)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wide">
                  <th className="py-2 pr-4">Size</th>
                  <th className="py-2 pr-4">Price</th>
                  <th className="py-2 pr-4">Rental period</th>
                  <th className="py-2 pr-4">Disposal included</th>
                  <th className="py-2 pr-4">Dimensions</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr key={s.size} className="border-b border-gray-100">
                    <td className="py-2 pr-4"><Link href={s.href} className="text-primary hover:underline">{s.size}</Link></td>
                    <td className="py-2 pr-4">${s.price}</td>
                    <td className="py-2 pr-4">{s.days} days</td>
                    <td className="py-2 pr-4">{s.tons} tons</td>
                    <td className="py-2 pr-4">{s.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            St. Johns, Clay, and Nassau counties run slightly higher due to delivery distance, and the 10-yard
            is not offered outside Duval County — see each{' '}
            <Link href="/locations" className="text-primary hover:underline">location&apos;s own page</Link>{' '}
            for its exact local rate. Extensions are $15/day; weight overage is $75/ton past the included allowance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Services</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-primary hover:underline">{s.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Service area — 16 dedicated location pages</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {LOCATIONS.map((l) => (
              <li key={l.href} className="text-gray-700">
                <Link href={l.href} className="text-primary hover:underline">{l.name}</Link>
                <span className="text-gray-400"> — {l.county} County</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Booking and contact</h2>
          <ul className="text-gray-700 space-y-1.5">
            <li><a href="https://app.icans.ai/customer-portal/904dumpster/book/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Book online</a></li>
            <li><Link href="/contact-us" className="text-primary hover:underline">Contact page</Link></li>
            <li><Link href="/frequently-asked-questions" className="text-primary hover:underline">Frequently asked questions</Link></li>
            <li><Link href="/rules/prohibited-items-list" className="text-primary hover:underline">Prohibited items list</Link></li>
          </ul>
        </section>

        <section className="p-6 bg-secondary rounded-xl">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Machine-readable versions</h2>
          <ul className="text-white/80 space-y-1.5">
            <li><a href="/llms.txt" className="text-white hover:underline">/llms.txt</a> — concise Markdown summary</li>
            <li><a href="/llms-full.txt" className="text-white hover:underline">/llms-full.txt</a> — expanded Markdown with full detail per page</li>
            <li><a href="/ai-context.json" className="text-white hover:underline">/ai-context.json</a> — structured JSON (pricing, service area, hours, sameAs, etc.)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
