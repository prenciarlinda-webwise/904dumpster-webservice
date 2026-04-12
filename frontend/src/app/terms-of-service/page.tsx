import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Terms of Service - 904 Dumpster',
  description:
    'Terms of service for 904 Dumpster rental services. Review our rental agreement, policies, and conditions for dumpster rental in Jacksonville FL.',
  alternates: {
    canonical: 'https://www.904dumpster.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Terms of Service', url: 'https://www.904dumpster.com/terms-of-service' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white">Terms of Service</h1>
          <p className="text-white/70 mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-1">
                <strong>904 Dumpster</strong>
              </p>
              <p className="text-gray-600 mb-0">2797 Anniston Road, Jacksonville, FL 32246</p>
            </div>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Welcome
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re here to make your dumpster rental experience smooth and hassle-free, whether you&apos;re placing your order online, by phone, or via text. By partnering with us, you agree to these friendly guidelines to keep everything running smoothly.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Rental Period
            </h2>
            <p className="text-gray-600 mb-8">
              Your rental starts when the dumpster is delivered and wraps up on the scheduled pickup date we&apos;ve agreed on. Need a little extra time? Just let us know&mdash;extensions are usually no problem, depending on availability, and may come with a small additional fee.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Delivery and Pickup
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li>We&apos;ll work with you to find the perfect spot for your dumpster&mdash;just give us clear directions so we can place it where it&apos;s most convenient for you. We&apos;re not responsible for any property mishaps if the instructions lead us astray, but we&apos;ll do our best to keep things smooth.</li>
              <li>Please keep the area around the dumpster clear for drop-off and pickup. If something like overfilling or blocked access slows us down, there might be a small extra charge, but we&apos;ll keep you in the loop.</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Scheduling Access
            </h2>
            <p className="text-gray-600 mb-8">
              Let us know when you&apos;re ready for pickup&mdash;it&apos;s that simple! To help us out, please keep driveways wide open and free of parked cars or obstacles. If we need to make an extra trip due to access issues, a small fee may apply to keep things on track.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Using Your Dumpster
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li>The dumpster is all yours for disposing of the usual stuff (see below for what&apos;s okay). We&apos;d just ask that you don&apos;t move it from where we set it down&mdash;let us know if it needs a new spot, and we&apos;ll help out.</li>
              <li>Try to keep things below the fill line and within the weight limit we&apos;ll share with you. It&apos;s the best way to avoid any surprises with extra fees.</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Safety Practices
            </h2>
            <p className="text-gray-600 mb-8">
              For everyone&apos;s safety, please fill the dumpster up to the rim only&mdash;keeping debris from hanging over helps us all. If it&apos;s packed a bit too full, an overload fee may apply to cover the extra care needed, along with a per-day fee until it&apos;s ready for pickup.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Weight Limits
            </h2>
            <p className="text-gray-600 mb-4">
              Each dumpster has a weight range to keep things safe and simple. Here&apos;s what works best:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-4">
              <li>A <strong>10-yard dumpster</strong> comes with <strong>1 ton (2,000 lbs)</strong> included. If you go over, an overweight charge of $50&ndash;$100 per extra ton applies, depending on the area.</li>
              <li>A <strong>15-yard dumpster</strong> comes with <strong>1.5 tons (3,000 lbs)</strong> included, with the same overweight charge of $50&ndash;$100 per extra ton depending on the area.</li>
              <li>A <strong>20-yard dumpster</strong> comes with <strong>2 tons (4,000 lbs)</strong> included, with the same approach for any extra weight.</li>
              <li>A <strong>30-yard dumpster</strong> comes with <strong>3 tons (6,000 lbs)</strong> included, with the same approach for any extra weight.</li>
            </ul>
            <p className="text-gray-600 mb-8">
              We&apos;ll let you know the specifics when you book, so you can plan accordingly!
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              What to Toss (and What to Skip)
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to load up with general waste like household items, construction debris, or yard clippings&mdash;whatever fits your project! But here&apos;s a heads-up on what&apos;s better left out:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Hazardous stuff (like chemicals, asbestos, or medical waste)</li>
              <li>Flammable items (think gasoline, paint, or propane tanks)</li>
              <li>Electronics (like TVs or batteries)</li>
              <li>Tires (unless we&apos;ve okayed it beforehand)</li>
              <li>Appliances (unless we&apos;ve okayed it beforehand)</li>
              <li>Heavy materials like dirt, concrete, or bricks (let&apos;s chat if that&apos;s your plan)</li>
            </ul>
            <p className="text-gray-600 mb-8">
              Skipping these keeps everything safe and simple, but if something slips through, there could be an extra fee. No biggie&mdash;we&apos;ll sort it out together.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Fees and Payment
            </h2>
            <p className="text-gray-600 mb-8">
              By providing your credit card, you authorize us to charge it for the rental cost, delivery, and any additional fees that may apply. These could include charges if the dumpster exceeds the weight limit, contains restricted materials, isn&apos;t accessible for drop-off or pickup, or is overloaded past the fill line. We&apos;ll keep you posted if any extra costs come up!
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Payment Made Easy
            </h2>
            <p className="text-gray-600 mb-8">
              Reserve your dumpster with a debit or credit card&mdash;we&apos;ll keep it on file until everything&apos;s settled. If plans change and you cancel, a cancellation fee helps us adjust, but any difference from what you&apos;ve paid can be refunded or saved as a credit for future orders.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Permits and Permissions
            </h2>
            <p className="text-gray-600 mb-8">
              You&apos;re in charge of securing any necessary permits or approvals&mdash;like from your local government or homeowners&apos; association (HOA)&mdash;to have the dumpster placed where you need it. We&apos;re happy to drop it off wherever works best for you, but it&apos;s up to you to make sure all the right permissions are in place before we arrive!
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Taking Care of Things
            </h2>
            <p className="text-gray-600 mb-8">
              If the dumpster gets a little banged up beyond normal use, we&apos;d just ask you to cover the fix. On our end, we&apos;ll place and pick it up carefully, but if your driveway or lawn takes a hit because of where you asked us to put it, that&apos;s tough to avoid&mdash;though we&apos;ll always aim to keep your space in great shape.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Damage Care
            </h2>
            <p className="text-gray-600 mb-8">
              If something happens to the dumpster during your rental, let us know right away, and we&apos;ll work with you on any repair or replacement costs. On public property (like a street) requiring a permit, you&apos;ll need a new permit for each job site or order beyond the original timeframe. If theft, vandalism, or fire occurs, we&apos;ll team up to cover any costs&mdash;simple steps like securing the area can make a big difference.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Looking Ahead
            </h2>
            <p className="text-gray-600 mb-8">
              These terms apply to all your orders with us, whether by price, payment method, or address&mdash;keeping it consistent and easy!
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Local Rules
            </h2>
            <p className="text-gray-600 mb-8">
              Everything&apos;s guided by the state laws and whatever local guidelines apply. Pretty standard stuff to keep us all on the same page.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Questions about these terms? Reach out anytime:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2">
                <strong>904 Dumpster</strong>
              </p>
              <p className="text-gray-600">
                Email:{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
                  {BUSINESS.email}
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{' '}
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary hover:underline">
                  {BUSINESS.phone}
                </a>
              </p>
              <p className="text-gray-600">{BUSINESS.address}</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
