import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental Jacksonville FL | Homeowner Service',
  description:
    'Residential dumpster rental in Jacksonville FL. Homeowner-friendly service for DIY projects, cleanouts, and renovations. Easy ordering. Call (904) 240-5598.',
  keywords: [
    'residential dumpster rental jacksonville',
    'homeowner dumpster rental',
    'diy dumpster rental jacksonville fl',
    'home project dumpster',
    'residential roll off',
  ],
}

export default function ResidentialDumpsterPage() {
  return (
    <ServicePageTemplate
      title="Residential Dumpster Rental"
      description="Homeowner-friendly dumpster rental service designed for DIY projects, home cleanouts, and renovations. We make renting a dumpster easy – no contractor license required, no complicated process."
      features={[
        'No contractor license needed',
        'Simple ordering process',
        'Driveway-safe delivery with boards',
        'Friendly drivers who care about your property',
        'Flexible rental periods for weekend projects',
        'All sizes available for any home project',
        'Same-day delivery available',
      ]}
      idealFor={[
        'DIY Home Projects',
        'Spring Cleaning',
        'Garage Cleanouts',
        'Landscaping Projects',
        'Moving/Downsizing',
        'Home Renovations',
        'Deck/Fence Removal',
        'Storm Cleanup',
      ]}
      pricing={{
        startingAt: '$275',
        includes: [
          'Delivery & Pickup',
          'Disposal fees included',
          '7-day rental period',
          'Driveway protection boards',
        ],
      }}
      relatedServices={[
        {
          title: 'Home Cleanouts',
          href: '/services/home-cleanout-dumpster-rental',
          description: 'Specialized service for cleanout projects.',
        },
        {
          title: '10 Yard Dumpster',
          href: '/services/10-yard-dumpster-rental',
          description: 'Most popular size for homeowner projects.',
        },
        {
          title: 'Junk Removal',
          href: '/services/junk-removal-jacksonville',
          description: 'Let us handle the heavy lifting for you.',
        },
      ]}
    />
  )
}
