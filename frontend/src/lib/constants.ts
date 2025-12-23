// Business Information
// IMPORTANT: Name must match Google Business Profile exactly for Local Pack ranking
export const BUSINESS = {
  name: '904 Dumpster - Dumpster Rental Jacksonville',
  nameShort: '904 Dumpster', // For image alts and compact displays
  phone: '(904) 240-5598',
  phoneRaw: '9042405598',
  email: 'info@904dumpster.com',
  address: 'Jacksonville, FL 32246',
  hours: {
    weekday: 'Mon-Fri 8AM-7PM',
    weekend: 'Sat 8AM-5PM',
    sunday: 'Closed',
  },
} as const

// =============================================================================
// SERVICES MEGA MENU STRUCTURE
// =============================================================================

// Column A: Services (Main offerings)
export const SERVICES_MAIN = [
  { label: 'Dumpster Rental', href: '/residential-dumpster-rental', description: 'Roll-off containers for any project' },
  { label: 'Junk Removal', href: '/junk-removal-jacksonville', description: 'We do all the heavy lifting' },
  { label: 'Demolition Services', href: '/demolition-services-jacksonville', description: 'Professional demo services' },
] as const

// Column B: Dumpster Sizes
export const SERVICES_BY_SIZE = [
  { label: '10 Yard Dumpster', href: '/10-yard-dumpster-rental', description: 'Small cleanouts & garage projects' },
  { label: '15 Yard Dumpster', href: '/15-yard-dumpster-rental', description: 'Medium renovations & roofing' },
  { label: '20 Yard Dumpster', href: '/20-yard-dumpster-rental', description: 'Large projects & construction' },
  { label: 'Size Guide', href: '/dumpster-size-guide', description: 'Find your perfect size' },
] as const

// Column C: Appropriate For (Use cases)
export const SERVICES_APPROPRIATE_FOR = [
  { label: 'Homeowners', href: '/residential-dumpster-rental', description: 'DIY projects & cleanouts' },
  { label: 'Contractors', href: '/construction-dumpster-rental', description: 'Job site waste management' },
  { label: 'Businesses', href: '/commercial-dumpster-rental', description: 'Commercial waste solutions' },
  { label: 'Concrete & Heavy Debris', href: '/concrete-disposal-dumpster', description: 'Brick, stone & dirt removal' },
] as const

// Legacy exports for backwards compatibility
export const SERVICES_BY_PROJECT = SERVICES_MAIN
export const SERVICES_BY_USER = SERVICES_APPROPRIATE_FOR

// =============================================================================
// LOCATIONS MEGA MENU STRUCTURE
// =============================================================================

// Jacksonville Core
export const LOCATIONS_JAX_CORE = [
  { label: 'Jacksonville', href: '/' },
  { label: 'Jacksonville Beach', href: '/dumpster-rental-jacksonville-beach-fl' },
  { label: 'Atlantic Beach', href: '/dumpster-rental-atlantic-beach-fl' },
  { label: 'Neptune Beach', href: '/dumpster-rental-neptune-beach-fl' },
] as const

// St. Johns & South
export const LOCATIONS_ST_JOHNS = [
  { label: 'St. Augustine', href: '/dumpster-rental-st-augustine-fl' },
  { label: 'Ponte Vedra Beach', href: '/dumpster-rental-ponte-vedra-fl' },
] as const

// Clay & Nassau
export const LOCATIONS_CLAY_NASSAU = [
  { label: 'Orange Park', href: '/dumpster-rental-orange-park-fl' },
  { label: 'Middleburg', href: '/dumpster-rental-middleburg-fl' },
] as const

// =============================================================================
// RESOURCES DROPDOWN
// =============================================================================

export const RESOURCES = [
  { label: 'Blog', href: '/blog', description: 'Tips, guides & local info' },
  { label: 'Pricing Guide', href: '/dumpster-rental-pricing-jacksonville', description: 'Transparent pricing info' },
  { label: 'Prohibited Items', href: '/rules/prohibited-items-list', description: 'What we can\'t accept' },
  { label: 'FAQ', href: '/frequently-asked-questions', description: 'Common questions answered' },
] as const

// =============================================================================
// MAIN NAVIGATION
// =============================================================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Locations', href: '/locations', hasMegaMenu: true },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'Contact Us', href: '/contact-us' },
] as const

// =============================================================================
// FOOTER LINKS
// =============================================================================

export const FOOTER_SERVICES = [
  { label: '10 Yard Dumpster', href: '/10-yard-dumpster-rental' },
  { label: '15 Yard Dumpster', href: '/15-yard-dumpster-rental' },
  { label: '20 Yard Dumpster', href: '/20-yard-dumpster-rental' },
  { label: 'Junk Removal', href: '/junk-removal-jacksonville' },
  { label: 'Demolition Services', href: '/demolition-services-jacksonville' },
] as const

export const FOOTER_LOCATIONS = [
  { label: 'Jacksonville', href: '/' },
  { label: 'St. Augustine', href: '/dumpster-rental-st-augustine-fl' },
  { label: 'Orange Park', href: '/dumpster-rental-orange-park-fl' },
  { label: 'Ponte Vedra Beach', href: '/dumpster-rental-ponte-vedra-fl' },
  { label: 'Jacksonville Beach', href: '/dumpster-rental-jacksonville-beach-fl' },
] as const

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/frequently-asked-questions' },
  { label: 'Pricing', href: '/dumpster-rental-pricing-jacksonville' },
] as const

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
] as const

// =============================================================================
// DUMPSTER SIZE DATA
// =============================================================================

export const DUMPSTER_SIZES = [
  {
    size: '10',
    name: '10 Yard Dumpster',
    slug: '10-yard-dumpster-rental',
    href: '/10-yard-dumpster-rental',
    dimensions: "12' L x 7.5' W x 3.6' H",
    capacity: '10 cubic yards',
    weight: 'Up to 1.5 tons',
    truckLoads: '3 pickup truck loads',
    ideal: ['Small home cleanouts', 'Garage cleanouts', 'Minor renovation projects', 'Small landscaping projects'],
    description: 'Perfect for small home cleanouts and minor renovation projects.',
  },
  {
    size: '15',
    name: '15 Yard Dumpster',
    slug: '15-yard-dumpster-rental',
    href: '/15-yard-dumpster-rental',
    dimensions: "14' L x 7.5' W x 4.5' H",
    capacity: '15 cubic yards',
    weight: 'Up to 2 tons',
    truckLoads: '5 pickup truck loads',
    ideal: ['Roofing projects', 'Medium cleanouts', 'Kitchen/bathroom remodels', 'Deck removal'],
    description: 'Great for roofing projects and medium-sized cleanouts.',
  },
  {
    size: '20',
    name: '20 Yard Dumpster',
    slug: '20-yard-dumpster-rental',
    href: '/20-yard-dumpster-rental',
    dimensions: "14' L x 7.5' W x 5.8' H",
    capacity: '20 cubic yards',
    weight: 'Up to 2 tons',
    truckLoads: '7 pickup truck loads',
    ideal: ['Large renovation projects', 'Construction jobs', 'Estate cleanouts', 'Commercial projects'],
    description: 'Ideal for large renovation projects and construction jobs.',
  },
] as const