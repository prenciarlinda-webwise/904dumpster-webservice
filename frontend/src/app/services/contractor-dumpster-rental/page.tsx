import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Contractor Dumpster Rental Jacksonville FL | Pro Services',
  description:
    'Contractor dumpster rental in Jacksonville FL. Reliable service, volume discounts, and priority scheduling for construction professionals. Call (904) 240-5598.',
  keywords: [
    'contractor dumpster rental jacksonville',
    'construction company dumpster',
    'builder dumpster service',
    'professional dumpster rental',
    'contractor roll off jacksonville',
  ],
}

export default function ContractorDumpsterPage() {
  return (
    <ServicePageTemplate
      title="Contractor Dumpster Rental"
      description="Reliable dumpster service built for construction professionals. We understand that downtime costs money – that's why we offer priority scheduling, volume discounts, and on-time delivery guaranteed."
      features={[
        'Volume discounts for regular customers',
        'Priority scheduling for contractors',
        'On-time delivery guaranteed',
        'Dedicated account manager',
        'Multiple dumpsters for large sites',
        'Flexible billing options',
        'Same-day swap-outs available',
      ]}
      idealFor={[
        'General Contractors',
        'Roofing Companies',
        'Remodeling Contractors',
        'Demolition Crews',
        'Landscaping Companies',
        'Property Flippers',
        'Commercial Builders',
        'Restoration Companies',
      ]}
      pricing={{
        startingAt: '$325',
        includes: [
          'Delivery & Pickup',
          'Volume pricing available',
          'Flexible rental periods',
          'Priority scheduling',
        ],
      }}
      relatedServices={[
        {
          title: 'Construction Dumpsters',
          href: '/services/construction-dumpster-rental',
          description: 'Heavy-duty containers for construction debris.',
        },
        {
          title: 'Roofing Dumpsters',
          href: '/services/roofing-dumpster-rental',
          description: 'Specialized service for roofing contractors.',
        },
        {
          title: '20 Yard Dumpster',
          href: '/services/20-yard-dumpster-rental',
          description: 'Maximum capacity for large job sites.',
        },
      ]}
    />
  )
}
