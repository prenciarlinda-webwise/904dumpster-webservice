import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Terms of Service - 904 Dumpster',
  description:
    'Terms of service for 904 Dumpster rental services. Review our rental agreement, policies, and conditions for dumpster rental in Jacksonville FL.',
  keywords: [],
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
          <p className="text-white/70 mt-4">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using the
              services provided by 904 Dumpster (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By renting a dumpster
              from us, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              1. Rental Agreement
            </h2>
            <p className="text-gray-600 mb-4">
              By placing an order for dumpster rental services, you enter into a rental agreement
              with 904 Dumpster. This agreement includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>The quoted price for your rental</li>
              <li>The rental period (standard 5 days unless otherwise agreed)</li>
              <li>Delivery and pickup dates</li>
              <li>Dumpster size selected</li>
              <li>Delivery address</li>
              <li>Any special instructions or conditions</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              2. Pricing and Payment
            </h2>
            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Base Pricing</h3>
            <p className="text-gray-600 mb-4">
              Our quoted prices include delivery, standard rental period (5 days), pickup, and
              disposal up to the included weight limit. Prices are subject to change without
              notice, but your quote is locked in once confirmed.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Additional Charges</h3>
            <p className="text-gray-600 mb-4">Additional charges may apply for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>
                <strong>Weight overage:</strong> $75 per additional ton over the included weight
                limit
              </li>
              <li>
                <strong>Extended rental:</strong> $10 per day beyond the standard rental period
              </li>
              <li>
                <strong>Prohibited items:</strong> Fees for removal of prohibited materials found
                in the dumpster
              </li>
              <li>
                <strong>Dry runs:</strong> If delivery is not possible due to access issues not
                disclosed at booking
              </li>
              <li>
                <strong>Relocation:</strong> If you request the dumpster be moved after initial
                placement
              </li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Payment Terms</h3>
            <p className="text-gray-600 mb-6">
              Payment is due upon delivery or pickup, as agreed at booking. We accept major
              credit cards, debit cards, and checks. Returned checks are subject to a $35 fee.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              3. Customer Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Provide accurate delivery address and contact information</li>
              <li>Ensure the delivery location is accessible for our trucks</li>
              <li>Clear the placement area of vehicles, debris, and obstructions</li>
              <li>Not overload the dumpster beyond the fill line</li>
              <li>Not place prohibited items in the dumpster</li>
              <li>Not move the dumpster once placed</li>
              <li>Keep the area around the dumpster clear during the rental period</li>
              <li>Ensure the dumpster remains on your property unless otherwise agreed</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              4. Prohibited Items
            </h2>
            <p className="text-gray-600 mb-4">
              The following items are prohibited from being placed in our dumpsters:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Hazardous materials (paints, chemicals, solvents, oils)</li>
              <li>Batteries</li>
              <li>Tires</li>
              <li>Electronics</li>
              <li>Appliances containing refrigerants (unless properly evacuated)</li>
              <li>Medical waste</li>
              <li>Asbestos</li>
              <li>Pressurized containers</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You are responsible for any costs associated with the removal and proper disposal
              of prohibited items found in the dumpster. See our{' '}
              <Link href="/rules/prohibited-items-list" className="text-primary hover:underline">
                Prohibited Items page
              </Link>{' '}
              for a complete list.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              5. Delivery and Pickup
            </h2>
            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Delivery</h3>
            <p className="text-gray-600 mb-6">
              We will deliver the dumpster to the location you specify. You do not need to be
              present for delivery, but you must provide clear instructions for placement. We
              will place the dumpster as close to your preferred location as safely possible,
              but final placement is at the driver&apos;s discretion based on safety and access.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Pickup</h3>
            <p className="text-gray-600 mb-6">
              Contact us to schedule pickup when you are finished or at the end of your rental
              period. We will pick up the dumpster within 24-48 hours of your request, subject
              to scheduling availability. You do not need to be present for pickup.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">Access</h3>
            <p className="text-gray-600 mb-6">
              Our trucks require adequate clearance for delivery and pickup. If access is
              blocked or conditions have changed since delivery, additional charges may apply.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              6. Property Damage
            </h2>
            <p className="text-gray-600 mb-6">
              We take precautions to protect your property, including placing boards under
              dumpster wheels. However, we are not responsible for damage to driveways,
              landscaping, or underground utilities that may occur during normal delivery and
              pickup operations. You are responsible for identifying the location of underground
              utilities and informing us of any property concerns.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              7. Liability Limitations
            </h2>
            <p className="text-gray-600 mb-6">
              904 Dumpster&apos;s liability is limited to the amount paid for the rental service.
              We are not responsible for indirect, incidental, or consequential damages. We are
              not liable for delays caused by weather, traffic, or other circumstances beyond
              our control.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              8. Cancellation Policy
            </h2>
            <p className="text-gray-600 mb-6">
              You may cancel your order without penalty if you provide at least 24 hours notice
              before the scheduled delivery. Cancellations made less than 24 hours before
              delivery may be subject to a cancellation fee. If a dumpster has been delivered,
              standard rental charges apply.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              9. Dispute Resolution
            </h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these Terms or our services shall be resolved through
              good-faith negotiation. If a resolution cannot be reached, disputes shall be
              settled through binding arbitration in Duval County, Florida, in accordance with
              Florida law.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              10. Modifications
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our services
              constitutes acceptance of any modified Terms.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              11. Governing Law
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms are governed by the laws of the State of Florida. Any legal action
              shall be brought in the courts of Duval County, Florida.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              12. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
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
