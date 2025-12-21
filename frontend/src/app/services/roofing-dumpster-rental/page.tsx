import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Rental Jacksonville FL | Shingle Disposal',
  description:
    'Roofing dumpster rental in Jacksonville FL. Heavy-duty containers for shingle tear-offs and roofing debris. Roofer discounts. Same-day delivery. Call (904) 240-5598.',
  keywords: [
    'roofing dumpster rental jacksonville',
    'shingle disposal dumpster',
    'roofing debris removal',
    'roofer dumpster rental',
    'roof tear off dumpster',
  ],
}

export default function RoofingDumpsterPage() {
  return (
    <ServicePageTemplate
      title="Roofing Dumpster Rental"
      description="Specialized roll-off dumpsters built to handle heavy roofing materials. Our 15-yard dumpster is the most popular choice for roofing projects, holding up to 25 squares of shingles with room to spare."
      features={[
        'Built for heavy roofing materials',
        '15-yard holds up to 25 squares of shingles',
        'Reinforced containers for shingle weight',
        'Strategic placement for easy loading',
        'Same-day delivery for emergency repairs',
        'Volume discounts for roofing contractors',
        'Flexible scheduling around weather',
      ]}
      idealFor={[
        'Shingle Tear-Offs',
        'Re-Roofing Projects',
        'Storm Damage Repair',
        'Commercial Roofing',
        'Metal Roofing',
        'Flat Roof Replacement',
        'Gutter Replacement',
        'Roofing Contractors',
      ]}
      pricing={{
        startingAt: '$350',
        includes: [
          'Delivery & Pickup',
          'Up to 3 tons disposal',
          '7-day rental period',
          'Roofer pricing available',
        ],
      }}
      relatedServices={[
        {
          title: '15 Yard Dumpster',
          href: '/services/15-yard-dumpster-rental',
          description: 'Most popular size for roofing projects.',
        },
        {
          title: 'Contractor Services',
          href: '/services/contractor-dumpster-rental',
          description: 'Special rates for roofing professionals.',
        },
        {
          title: 'Construction Dumpsters',
          href: '/services/construction-dumpster-rental',
          description: 'For larger roofing and construction projects.',
        },
      ]}
    />
  )
}
