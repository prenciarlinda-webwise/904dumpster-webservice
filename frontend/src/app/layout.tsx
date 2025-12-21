import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.904dumpster.com'),
  title: {
    default: '904 Dumpster Rental Jacksonville | Affordable Roll-Off Bins FL',
    template: '%s | 904 Dumpster',
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
  authors: [{ name: '904 Dumpster' }],
  creator: '904 Dumpster',
  publisher: '904 Dumpster',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.904dumpster.com',
    siteName: '904 Dumpster',
    title: '904 Dumpster Rental Jacksonville | Affordable Roll-Off Bins FL',
    description:
      'Fast, local dumpster rental in Jacksonville & Northeast Florida. 10, 15, & 20 yard roll-off containers for home cleanouts, construction, and roofing.',
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
    title: '904 Dumpster Rental Jacksonville | Affordable Roll-Off Bins FL',
    description:
      'Fast, local dumpster rental in Jacksonville & NE Florida. 10, 15, & 20 yard roll-off containers. Book online!',
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
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://www.904dumpster.com',
  },
}

// JSON-LD Schema for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.904dumpster.com',
  name: '904 Dumpster',
  description:
    'Professional dumpster rental and waste management services in Jacksonville, FL. Same-day delivery available for residential and commercial projects.',
  url: 'https://www.904dumpster.com',
  telephone: '(904) 240-5598',
  email: 'info@904dumpster.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32246',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.3322,
    longitude: -81.6557,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 30.3322,
      longitude: -81.6557,
    },
    geoRadius: '50000',
  },
  serviceArea: [
    { '@type': 'City', name: 'Jacksonville', addressRegion: 'FL' },
    { '@type': 'City', name: 'St. Augustine', addressRegion: 'FL' },
    { '@type': 'City', name: 'Orange Park', addressRegion: 'FL' },
    { '@type': 'City', name: 'Ponte Vedra Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Fernandina Beach', addressRegion: 'FL' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dumpster Rental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '10 Yard Dumpster Rental',
          description: 'Perfect for small home cleanouts and minor renovation projects',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '15 Yard Dumpster Rental',
          description: 'Great for roofing projects and medium cleanouts',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '20 Yard Dumpster Rental',
          description: 'Ideal for large renovation projects and construction jobs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Junk Removal',
          description: 'Full-service junk removal for residential and commercial properties',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Demolition Services',
          description: 'Professional demolition services including permits and cleanup',
        },
      },
    ],
  },
  sameAs: [
    // Add social media URLs here
    // 'https://www.facebook.com/904dumpster',
    // 'https://www.instagram.com/904dumpster',
  ],
}

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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