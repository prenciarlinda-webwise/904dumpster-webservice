import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Concrete Disposal Dumpster Rental Jacksonville FL | Heavy Debris',
  description:
    'Concrete and heavy debris disposal in Jacksonville FL. Specialized dumpsters for concrete, brick, dirt, and stone. Weight-rated containers. Call (904) 240-5598.',
  keywords: [
    'concrete disposal dumpster jacksonville',
    'heavy debris dumpster rental',
    'concrete removal jacksonville fl',
    'brick disposal dumpster',
    'dirt removal dumpster',
  ],
}

export default function ConcreteDisposalPage() {
  return (
    <ServicePageTemplate
      title="Concrete & Heavy Debris Disposal"
      description="Specialized dumpster rental for concrete, brick, dirt, stone, and other heavy materials. Our containers are rated for heavy loads, and we have the trucks to haul them safely."
      features={[
        'Weight-rated containers for heavy materials',
        'Specialized disposal for concrete & masonry',
        '10-yard recommended for heavy debris',
        'Higher weight limits available',
        'Proper disposal at certified facilities',
        'Same-day delivery available',
        'Clear pricing for heavy materials',
      ]}
      idealFor={[
        'Concrete Removal',
        'Brick & Block',
        'Dirt & Soil',
        'Asphalt',
        'Stone & Gravel',
        'Foundation Demolition',
        'Driveway Removal',
        'Pool Demolition',
      ]}
      pricing={{
        startingAt: '$325',
        includes: [
          'Delivery & Pickup',
          'Up to 2 tons disposal',
          '7-day rental period',
          'Heavy debris rates apply',
        ],
      }}
      relatedServices={[
        {
          title: '10 Yard Dumpster',
          href: '/services/10-yard-dumpster-rental',
          description: 'Recommended size for concrete and heavy debris.',
        },
        {
          title: 'Demolition Services',
          href: '/services/demolition-services-jacksonville',
          description: 'Full demolition with concrete removal included.',
        },
        {
          title: 'Construction Dumpsters',
          href: '/services/construction-dumpster-rental',
          description: 'For mixed construction and concrete debris.',
        },
      ]}
    />
  )
}
