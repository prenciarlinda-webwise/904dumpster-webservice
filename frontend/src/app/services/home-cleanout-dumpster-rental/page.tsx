import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Home Cleanout Dumpster Rental Jacksonville FL | Estate Cleanouts',
  description:
    'Dumpster rental for home cleanouts in Jacksonville FL. Perfect for estate cleanouts, garage purges, and decluttering. Same-day delivery. Call (904) 240-5598.',
  keywords: [
    'home cleanout dumpster rental jacksonville',
    'estate cleanout dumpster',
    'garage cleanout dumpster rental',
    'decluttering dumpster jacksonville',
    'house cleanout dumpster',
  ],
}

export default function HomeCleanoutPage() {
  return (
    <ServicePageTemplate
      title="Home Cleanout Dumpster Rental"
      description="Tackling a home cleanout project? Our roll-off dumpsters make it easy to clear out years of accumulated items from your garage, attic, basement, or entire home. We make the process simple and stress-free."
      features={[
        'Perfect for estate cleanouts and downsizing',
        'Easy-loading swing door for heavy items',
        'Flexible rental periods for large projects',
        'We handle all disposal and recycling',
        'Driveway-friendly delivery with boards',
        'Same-day delivery available',
        'All sizes available: 10, 15, and 20 yard',
      ]}
      idealFor={[
        'Estate Cleanouts',
        'Garage Cleanouts',
        'Attic Cleanouts',
        'Basement Cleanouts',
        'Downsizing',
        'Moving Prep',
        'Hoarding Cleanup',
        'Spring Cleaning',
      ]}
      pricing={{
        startingAt: '$275',
        includes: [
          'Delivery & Pickup',
          'Disposal fees included',
          '7-14 day rental period',
          'Driveway protection boards',
        ],
      }}
      relatedServices={[
        {
          title: 'Junk Removal',
          href: '/services/junk-removal-jacksonville',
          description: 'Let us do the heavy lifting. Full-service junk hauling.',
        },
        {
          title: 'Residential Dumpsters',
          href: '/services/residential-dumpster-rental',
          description: 'Homeowner-friendly service for any home project.',
        },
        {
          title: '10 Yard Dumpster',
          href: '/services/10-yard-dumpster-rental',
          description: 'Perfect size for most single-room cleanouts.',
        },
      ]}
    />
  )
}
