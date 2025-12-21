import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Jacksonville FL | Job Site Roll-Offs',
  description:
    'Construction dumpster rental in Jacksonville FL. Heavy-duty roll-off containers for job sites, renovations, and new builds. Contractor discounts. Call (904) 240-5598.',
  keywords: [
    'construction dumpster rental jacksonville',
    'job site dumpster rental',
    'contractor dumpster jacksonville fl',
    'renovation dumpster rental',
    'construction debris removal',
  ],
}

export default function ConstructionDumpsterPage() {
  return (
    <ServicePageTemplate
      title="Construction Dumpster Rental"
      description="Heavy-duty roll-off dumpsters designed for construction sites and renovation projects. We understand job site logistics and provide reliable, on-time service that keeps your project on schedule."
      features={[
        'Heavy-duty containers for construction debris',
        'On-time delivery and pickup guaranteed',
        'Flexible scheduling for project timelines',
        'High weight limits for heavy materials',
        'Volume discounts for contractors',
        'Multiple dumpsters available for large sites',
        'Same-day service available',
      ]}
      idealFor={[
        'New Construction',
        'Home Renovations',
        'Commercial Build-Outs',
        'Demolition Projects',
        'Drywall & Lumber',
        'Flooring Removal',
        'Framing Debris',
        'General Construction',
      ]}
      pricing={{
        startingAt: '$350',
        includes: [
          'Delivery & Pickup',
          'Up to 4 tons disposal',
          '7-14 day rental period',
          'Contractor pricing available',
        ],
      }}
      relatedServices={[
        {
          title: 'Contractor Services',
          href: '/services/contractor-dumpster-rental',
          description: 'Special pricing and service for construction professionals.',
        },
        {
          title: 'Demolition Services',
          href: '/services/demolition-services-jacksonville',
          description: 'Professional demolition with debris removal included.',
        },
        {
          title: '20 Yard Dumpster',
          href: '/services/20-yard-dumpster-rental',
          description: 'Our largest size for big construction projects.',
        },
      ]}
    />
  )
}
