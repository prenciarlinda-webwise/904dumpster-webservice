import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateSiteNavigationSchema,
} from '@/lib/schema'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.904dumpster.com'),
  title: {
    default: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
    template: '%s - 904 Dumpster',
  },
  description:
    'Fast, local dumpster rental in Jacksonville & Northeast Florida. 10, 15, & 20 yard roll-off containers for home cleanouts, construction, and roofing. Book online!',
  keywords: [
    'dumpster rental jacksonville fl',
    'roll off dumpster jacksonville fl',
    'affordable dumpster rental near me',
    '904 dumpster rental',
    'jacksonville dumpster rental',
    'dumpster rental jacksonville',
    'small dumpster rental jacksonville fl',
    'dumpster rental jacksonville beach fl',
    'dumpster rental prices jacksonville fl',
    'jacksonville fl dumpster rental',
    'roll off dumpster rental jacksonville fl',
    'affordable dumpster rental jacksonville fl',
  ],
  authors: [{ name: '904 Dumpster - Dumpster Rental Jacksonville' }],
  creator: '904 Dumpster - Dumpster Rental Jacksonville',
  publisher: '904 Dumpster - Dumpster Rental Jacksonville',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.904dumpster.com',
    siteName: '904 Dumpster - Dumpster Rental Jacksonville',
    title: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
    description:
      'Affordable dumpster rental in Jacksonville FL. 10, 15, & 20 yard roll-off containers. Same-day delivery available.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '904 Dumpster - Dumpster Rental Jacksonville FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Jacksonville FL - 904 Dumpster',
    description:
      'Affordable dumpster rental in Jacksonville FL. Same-day delivery available.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // IMPORTANT: Add your Google Search Console verification code here
    // Get this from GSC > Settings > Ownership verification > HTML tag
    google: 'ADD_YOUR_GSC_VERIFICATION_CODE_HERE',
    // yandex: 'your-yandex-verification-code',
  },
  // FIXED: Use relative canonical so each page gets its correct URL
  // Before: hardcoded to homepage which prevented sub-pages from ranking
  alternates: {
    canonical: './',
  },
}

// Global JSON-LD Schemas for rich results and AI indexing
// Note: LocalBusiness is applied ONLY on Homepage (main office) and NOT globally
// Location pages use Service schema with areaServed to avoid confusing Google
const webSiteSchema = generateWebSiteSchema()
const organizationSchema = generateOrganizationSchema()
const siteNavigationSchema = generateSiteNavigationSchema()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/images/904-dumpsters-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/904-dumpsters-logo.png" />
        {/* WebSite Schema - For sitelinks search box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {/* Organization Schema - For knowledge panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* SiteNavigation Schema - For AI indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </head>
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}