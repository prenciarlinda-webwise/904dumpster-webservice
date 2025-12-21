import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Property Management Dumpster Rental Jacksonville FL | Turnover Service',
  description:
    'Property management dumpster rental in Jacksonville FL. Fast turnarounds for rental turnovers, evictions, and property maintenance. Call (904) 240-5598.',
  keywords: [
    'property management dumpster jacksonville',
    'rental turnover dumpster',
    'eviction cleanout dumpster',
    'apartment complex dumpster',
    'property manager waste service',
  ],
}

export default function PropertyManagementPage() {
  return (
    <ServicePageTemplate
      title="Property Management Dumpster Rental"
      description="Fast, reliable dumpster service for property managers and landlords. We understand the urgency of rental turnovers and provide quick turnaround times to get your units ready for new tenants."
      features={[
        'Fast turnaround for rental turnovers',
        'Same-day delivery for urgent cleanouts',
        'Volume pricing for multiple properties',
        'Recurring service available',
        'Flexible scheduling around tenant moves',
        'All sizes for any property type',
        'Commercial and residential properties',
      ]}
      idealFor={[
        'Rental Turnovers',
        'Eviction Cleanouts',
        'Apartment Complexes',
        'HOA Cleanup Events',
        'Property Renovations',
        'Storage Unit Cleanouts',
        'Foreclosure Cleanups',
        'Multi-Unit Properties',
      ]}
      pricing={{
        startingAt: '$275',
        includes: [
          'Delivery & Pickup',
          'Volume pricing available',
          'Flexible rental periods',
          'Priority scheduling',
        ],
      }}
      relatedServices={[
        {
          title: 'Junk Removal',
          href: '/services/junk-removal-jacksonville',
          description: 'Full-service cleanout for left-behind items.',
        },
        {
          title: 'Home Cleanouts',
          href: '/services/home-cleanout-dumpster-rental',
          description: 'Complete cleanout solutions for properties.',
        },
        {
          title: '15 Yard Dumpster',
          href: '/services/15-yard-dumpster-rental',
          description: 'Perfect size for most rental turnovers.',
        },
      ]}
    />
  )
}
