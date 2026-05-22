import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateSiteNavigationSchema,
} from '@/lib/schema'
import GTMTracking from '@/components/GTMTracking'

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
    'Dumpster rental in Jacksonville FL from $299. Local roll-off containers for home cleanouts, construction & roofing. Same-day delivery. Book online!',
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
      'Dumpster rental in Jacksonville FL from $299. Local roll-off containers for home cleanouts, construction & roofing. Same-day delivery.',
    images: [
      {
        url: '/images/main-hero-dumpster.jpeg',
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
    images: ['/images/main-hero-dumpster.jpeg'],
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
  // FIXED: Use relative canonical so each page gets its correct URL
  // Before: hardcoded to homepage which prevented sub-pages from ranking
  alternates: {
    canonical: './',
  },
  manifest: '/manifest.json',
}

// Explicit viewport for mobile-first indexing: themed URL bar, allow accessibility zoom
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#22C05D',
  colorScheme: 'light',
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
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N923ZHZ6');`}</Script>
        {/* End Google Tag Manager */}
        <link rel="icon" href="/images/904-dumpsters-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/904-dumpsters-logo.png" />
        {/* Preconnect to third-party origins used in the critical mobile path */}
        <link rel="preconnect" href="https://app.icans.ai" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://app.icans.ai" />
        <link rel="preconnect" href="https://cdn.trustindex.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.trustindex.io" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        {/* Leaflet CSS is now imported inside DeliveryMap.tsx so it only loads
            on pages that actually render the delivery map (location pages),
            not on every route. Removes render-blocking CSS from homepage. */}
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
        {/* Trustindex review widget loader */}
        <Script
          id="trustindex-loader"
          src="https://cdn.trustindex.io/loader-cert.js?3d9fd6b71f1498299d366bc6e24"
          strategy="lazyOnload"
        />
      </head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N923ZHZ6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GTMTracking />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}