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
    weekend: 'Sat-Sun 8AM-5PM',
  },
} as const

// =============================================================================
// SERVICES MEGA MENU STRUCTURE
// =============================================================================

// Column A: By Size
export const SERVICES_BY_SIZE = [
  { label: '10 Yard', href: '/10-yard-dumpster-rental', description: 'Small cleanouts & minor projects' },
  { label: '15 Yard', href: '/15-yard-dumpster-rental', description: 'Medium projects & roofing' },
  { label: '20 Yard', href: '/20-yard-dumpster-rental', description: 'Large renovations & construction' },
  { label: 'Size Guide', href: '/dumpster-size-guide', description: 'Find your perfect size' },
] as const

// Column B: By Project
export const SERVICES_BY_PROJECT = [
  { label: 'Residential', href: '/residential-dumpster-rental', description: 'Homeowner projects' },
  { label: 'Construction', href: '/construction-dumpster-rental', description: 'Job site waste removal' },
  { label: 'Commercial', href: '/commercial-dumpster-rental', description: 'Business waste service' },
  { label: 'Demolition', href: '/demolition-services-jacksonville', description: 'Professional demo services' },
] as const

// Column C: By User
export const SERVICES_BY_USER = [
  { label: 'Homeowners', href: '/residential-dumpster-rental', description: 'DIY projects & cleanouts' },
  { label: 'Contractors', href: '/construction-dumpster-rental', description: 'Job site service' },
  { label: 'Businesses', href: '/commercial-dumpster-rental', description: 'Commercial accounts' },
  { label: 'Junk Removal', href: '/junk-removal-jacksonville', description: 'Full-service hauling' },
] as const

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
    dimensions: "12' L x 8' W x 3.5' H",
    capacity: '10 cubic yards',
    weight: 'Up to 2 tons',
    truckLoads: '3 pickup truck loads',
    ideal: ['Small home cleanouts', 'Garage cleanouts', 'Minor renovation projects', 'Small landscaping projects'],
    description: 'Perfect for small home cleanouts and minor renovation projects.',
  },
  {
    size: '15',
    name: '15 Yard Dumpster',
    slug: '15-yard-dumpster-rental',
    href: '/15-yard-dumpster-rental',
    dimensions: "16' L x 8' W x 4' H",
    capacity: '15 cubic yards',
    weight: 'Up to 3 tons',
    truckLoads: '5 pickup truck loads',
    ideal: ['Roofing projects', 'Medium cleanouts', 'Kitchen/bathroom remodels', 'Deck removal'],
    description: 'Great for roofing projects and medium-sized cleanouts.',
  },
  {
    size: '20',
    name: '20 Yard Dumpster',
    slug: '20-yard-dumpster-rental',
    href: '/20-yard-dumpster-rental',
    dimensions: "22' L x 8' W x 4.5' H",
    capacity: '20 cubic yards',
    weight: 'Up to 4 tons',
    truckLoads: '7 pickup truck loads',
    ideal: ['Large renovation projects', 'Construction jobs', 'Estate cleanouts', 'Commercial projects'],
    description: 'Ideal for large renovation projects and construction jobs.',
  },
] as const