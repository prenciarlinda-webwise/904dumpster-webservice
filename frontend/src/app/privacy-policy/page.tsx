import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy Policy - 904 Dumpster',
  description:
    'Privacy policy for 904 Dumpster. Learn how we collect, use, and protect your personal information when you use our dumpster rental services.',
  keywords: [],
  alternates: {
    canonical: 'https://www.904dumpster.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Privacy Policy', url: 'https://www.904dumpster.com/privacy-policy' },
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
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white">Privacy Policy</h1>
          <p className="text-white/70 mt-4">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              904 Dumpster (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our dumpster rental services.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Information We Collect
            </h2>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">
              Personal Information
            </h3>
            <p className="text-gray-600 mb-4">
              When you request a quote or book a dumpster rental, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Delivery address</li>
              <li>Billing address</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mt-8 mb-4">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Geographic location (city/region level)</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Process and fulfill your dumpster rental orders</li>
              <li>Communicate with you about your order, delivery, and pickup</li>
              <li>Send you quotes and respond to inquiries</li>
              <li>Process payments</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>
                <strong>Service providers:</strong> Companies that help us deliver our services
                (payment processors, delivery partners)
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law or to protect our rights
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a merger, acquisition, or
                sale of assets
              </li>
            </ul>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to improve your experience on our
              website. Cookies are small files stored on your device that help us remember your
              preferences and understand how you use our site. You can control cookies through
              your browser settings.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement reasonable security measures to protect your personal information from
              unauthorized access, disclosure, or destruction. However, no internet transmission
              is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise these rights, contact us at{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
                {BUSINESS.email}
              </a>
              .
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Third-Party Links
            </h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices of these external sites. We encourage you to review their
              privacy policies.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to individuals under 18 years of age. We do not
              knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. The updated version will be
              indicated by the &quot;Last updated&quot; date at the top of this page. We encourage you to
              review this policy periodically.
            </p>

            <h2 className="text-2xl font-black text-secondary mt-12 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please
              contact us:
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
