// Delivery locations data - addresses where 904 Dumpster has delivered
// Used for social proof and local SEO signals

export interface DeliveryLocation {
  address: string
  city: string
  state: string
  zip: string
  area: string // Neighborhood/area name for grouping
  coordinates?: {
    lat: number
    lng: number
  }
  month?: string // When the delivery was made
}

// Organized by area for easy filtering on location pages
export const DELIVERY_LOCATIONS: DeliveryLocation[] = [
  // ============================================
  // ATLANTIC BEACH (32233)
  // ============================================
  { address: '416 Irex Rd', city: 'Atlantic Beach', state: 'FL', zip: '32233', area: 'atlantic-beach', month: 'May' },
  { address: '427 Sargo Rd', city: 'Atlantic Beach', state: 'FL', zip: '32233', area: 'atlantic-beach', month: 'May' },
  { address: '591 Selva Lakes Circle', city: 'Atlantic Beach', state: 'FL', zip: '32233', area: 'atlantic-beach', month: 'May' },
  { address: '1121 Linkside Ct East', city: 'Atlantic Beach', state: 'FL', zip: '32233', area: 'atlantic-beach', month: 'May' },
  { address: '1833 Tierra Verde Drive', city: 'Atlantic Beach', state: 'FL', zip: '32233', area: 'atlantic-beach', month: 'July' },

  // ============================================
  // PONTE VEDRA BEACH (32082)
  // ============================================
  { address: '164 Bear Pen Rd', city: 'Ponte Vedra Beach', state: 'FL', zip: '32082', area: 'ponte-vedra', month: 'May' },
  { address: '81 Ponte Vedra Blvd', city: 'Ponte Vedra Beach', state: 'FL', zip: '32082', area: 'ponte-vedra', month: 'July' },

  // ============================================
  // PONTE VEDRA (32081)
  // ============================================
  { address: '385 Daniel Park Circle', city: 'Ponte Vedra', state: 'FL', zip: '32081', area: 'ponte-vedra', month: 'June' },
  { address: '385 Daniel Park Circle', city: 'Ponte Vedra', state: 'FL', zip: '32081', area: 'ponte-vedra', month: 'July' },

  // ============================================
  // ORANGE PARK (32073, 32065)
  // ============================================
  { address: '2598 Paces Ferry Rd N', city: 'Orange Park', state: 'FL', zip: '32073', area: 'orange-park', month: 'May' },
  { address: '2598 Paces Ferry Rd N', city: 'Orange Park', state: 'FL', zip: '32073', area: 'orange-park', month: 'June' },
  { address: '767 Blanding Blvd Suite 104', city: 'Orange Park', state: 'FL', zip: '32065', area: 'orange-park', month: 'June' },
  { address: '1318 Akron Oaks Dr', city: 'Orange Park', state: 'FL', zip: '32065', area: 'orange-park', month: 'June' },

  // ============================================
  // JACKSONVILLE BEACH (32250)
  // ============================================
  { address: '106 N 6th Street', city: 'Jacksonville Beach', state: 'FL', zip: '32250', area: 'jacksonville-beach', month: 'May' },
  { address: '1408 Sunset Dr', city: 'Jacksonville Beach', state: 'FL', zip: '32250', area: 'jacksonville-beach', month: 'July' },

  // ============================================
  // ST. AUGUSTINE (32092)
  // ============================================
  { address: '2000 N Cranbrook Ave', city: 'St. Augustine', state: 'FL', zip: '32092', area: 'st-augustine', month: 'June' },

  // ============================================
  // JACKSONVILLE - BAYMEADOWS/SOUTHSIDE (32246)
  // ============================================
  { address: '10960 Eniwetok Dr', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'April' },
  { address: '1900 Kusaie Drive', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'April' },
  { address: '10320 Driftwood Rd', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'May' },
  { address: '1902 Willesdon Dr E', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'May' },
  { address: '2991 Pescara Dr', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'July' },
  { address: '1851 BrookView Drive South', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'July' },
  { address: '12785 Maricopa Way', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'July' },
  { address: '11582 Wynnfield Lakes Circle', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'July' },
  { address: '2551 Bentshire Drive', city: 'Jacksonville', state: 'FL', zip: '32246', area: 'jacksonville-southside', month: 'July' },

  // ============================================
  // JACKSONVILLE - INTRACOASTAL WEST (32225)
  // ============================================
  { address: '1387 Pink Panther Dr', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'April' },
  { address: '1631 Bearskin Ln', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'April' },
  { address: '1630 Mariah Ann Ct', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'April' },
  { address: '11657 Brush Ridge Circle North', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'May' },
  { address: '13308 Santorini Dr', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'June' },
  { address: '10668 Beverly Nalle Rd', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'June' },
  { address: '1631 Bearskin Ln', city: 'Jacksonville', state: 'FL', zip: '32225', area: 'jacksonville-intracoastal', month: 'July' },

  // ============================================
  // JACKSONVILLE - SAN MARCO/LAKEWOOD (32207)
  // ============================================
  { address: '4325 St Augustine Rd #4', city: 'Jacksonville', state: 'FL', zip: '32207', area: 'jacksonville-san-marco', month: 'April' },
  { address: '2750 Glen Mawr Rd', city: 'Jacksonville', state: 'FL', zip: '32207', area: 'jacksonville-san-marco', month: 'May' },
  { address: '3557 Dillion St', city: 'Jacksonville', state: 'FL', zip: '32207', area: 'jacksonville-san-marco', month: 'June' },
  { address: '2750 Glen Mawr Rd', city: 'Jacksonville', state: 'FL', zip: '32207', area: 'jacksonville-san-marco', month: 'June' },
  { address: '2151 Larchmont Road', city: 'Jacksonville', state: 'FL', zip: '32207', area: 'jacksonville-san-marco', month: 'July' },

  // ============================================
  // JACKSONVILLE - ARLINGTON (32277)
  // ============================================
  { address: '3809 Chetwood Ave', city: 'Jacksonville', state: 'FL', zip: '32277', area: 'jacksonville-arlington', month: 'April' },
  { address: '2870 Yellow Pine Drive', city: 'Jacksonville', state: 'FL', zip: '32277', area: 'jacksonville-arlington', month: 'May' },
  { address: '3350 Shauna Oaks Dr', city: 'Jacksonville', state: 'FL', zip: '32277', area: 'jacksonville-arlington', month: 'July' },
  { address: '5050 Rivebrook Court', city: 'Jacksonville', state: 'FL', zip: '32277', area: 'jacksonville-arlington', month: 'July' },

  // ============================================
  // JACKSONVILLE - MANDARIN (32223)
  // ============================================
  { address: '1759 Rising Oaks Dr', city: 'Jacksonville', state: 'FL', zip: '32223', area: 'jacksonville-mandarin', month: 'May' },
  { address: '4041 Clearwater Oaks Dr', city: 'Jacksonville', state: 'FL', zip: '32223', area: 'jacksonville-mandarin', month: 'July' },
  { address: '3050 Sawyer Ridge Ct', city: 'Jacksonville', state: 'FL', zip: '32223', area: 'jacksonville-mandarin', month: 'July' },

  // ============================================
  // JACKSONVILLE - DEERWOOD/SOUTHPOINT (32256)
  // ============================================
  { address: '8153 Middle Fork Way', city: 'Jacksonville', state: 'FL', zip: '32256', area: 'jacksonville-deerwood', month: 'April' },
  { address: '7749 Hunters Grove Road', city: 'Jacksonville', state: 'FL', zip: '32256', area: 'jacksonville-deerwood', month: 'May' },

  // ============================================
  // JACKSONVILLE - RIVERSIDE/AVONDALE (32205)
  // ============================================
  { address: '1538 Parrish Place', city: 'Jacksonville', state: 'FL', zip: '32205', area: 'jacksonville-riverside', month: 'May' },
  { address: '4845 Louisa Terr', city: 'Jacksonville', state: 'FL', zip: '32205', area: 'jacksonville-riverside', month: 'July' },
  { address: '716 Locust St', city: 'Jacksonville', state: 'FL', zip: '32205', area: 'jacksonville-riverside', month: 'July' },

  // ============================================
  // JACKSONVILLE - WESTSIDE (32210, 32254, 32209, 32221)
  // ============================================
  { address: '7945 103rd Street Suite 17', city: 'Jacksonville', state: 'FL', zip: '32210', area: 'jacksonville-westside', month: 'April' },
  { address: '3965 Blazing Star Rd W', city: 'Jacksonville', state: 'FL', zip: '32210', area: 'jacksonville-westside', month: 'July' },
  { address: '5420 Old Kings Rd', city: 'Jacksonville', state: 'FL', zip: '32254', area: 'jacksonville-westside', month: 'May' },
  { address: '3036 Commonwealth Ave', city: 'Jacksonville', state: 'FL', zip: '32254', area: 'jacksonville-westside', month: 'June' },
  { address: '2270 W 11th St', city: 'Jacksonville', state: 'FL', zip: '32209', area: 'jacksonville-westside', month: 'April' },
  { address: '2365 McQuade St', city: 'Jacksonville', state: 'FL', zip: '32209', area: 'jacksonville-westside', month: 'July' },
  { address: '9108 Castlerock Dr', city: 'Jacksonville', state: 'FL', zip: '32221', area: 'jacksonville-westside', month: 'April' },
  { address: '8265 Colville St', city: 'Jacksonville', state: 'FL', zip: '32220', area: 'jacksonville-westside', month: 'July' },

  // ============================================
  // JACKSONVILLE - NORTHSIDE (32208, 32206, 32218, 32219, 32226)
  // ============================================
  { address: '7215 Buffalo Ave', city: 'Jacksonville', state: 'FL', zip: '32208', area: 'jacksonville-northside', month: 'April' },
  { address: '9527 Priory Avenue', city: 'Jacksonville', state: 'FL', zip: '32208', area: 'jacksonville-northside', month: 'July' },
  { address: '15 E 25th Street', city: 'Jacksonville', state: 'FL', zip: '32206', area: 'jacksonville-northside', month: 'April' },
  { address: '2163 Armsdale Road', city: 'Jacksonville', state: 'FL', zip: '32218', area: 'jacksonville-northside', month: 'July' },
  { address: '7428 John F Kennedy Dr E', city: 'Jacksonville', state: 'FL', zip: '32219', area: 'jacksonville-northside', month: 'July' },
  { address: '15288 Yellow Bluff Rd', city: 'Jacksonville', state: 'FL', zip: '32226', area: 'jacksonville-northside', month: 'June' },
  { address: '15446 Cape Drive South', city: 'Jacksonville', state: 'FL', zip: '32226', area: 'jacksonville-northside', month: 'July' },

  // ============================================
  // JACKSONVILLE - SOUTHPOINT/BAYMEADOWS (32224, 32217, 32216)
  // ============================================
  { address: '3621 Annapolis Way', city: 'Jacksonville', state: 'FL', zip: '32224', area: 'jacksonville-southpoint', month: 'July' },
  { address: '13757 Chauny Rd', city: 'Jacksonville', state: 'FL', zip: '32224', area: 'jacksonville-southpoint', month: 'June' },
  { address: '8425 San Martarro Dr E', city: 'Jacksonville', state: 'FL', zip: '32217', area: 'jacksonville-southpoint', month: 'April' },
  { address: '1953 West Rd', city: 'Jacksonville', state: 'FL', zip: '32216', area: 'jacksonville-southpoint', month: 'April' },
  { address: '6048 Bartram Rd S', city: 'Jacksonville', state: 'FL', zip: '32216', area: 'jacksonville-southpoint', month: 'May' },
  { address: '2702 Laten Ln', city: 'Jacksonville', state: 'FL', zip: '32216', area: 'jacksonville-southpoint', month: 'July' },
  { address: '6002 Chevy Drive', city: 'Jacksonville', state: 'FL', zip: '32216', area: 'jacksonville-southpoint', month: 'July' },

  // ============================================
  // JACKSONVILLE - OTHER (32211, 32259)
  // ============================================
  { address: '5931 Saxony Woods Ln', city: 'Jacksonville', state: 'FL', zip: '32211', area: 'jacksonville-other', month: 'April' },
  { address: '720 E Dorchester Dr', city: 'Jacksonville', state: 'FL', zip: '32259', area: 'jacksonville-other', month: 'June' },
]

// Helper function to get locations by area
export function getLocationsByArea(area: string): DeliveryLocation[] {
  return DELIVERY_LOCATIONS.filter(loc => loc.area === area)
}

// Helper function to get location count by area
export function getLocationCountByArea(area: string): number {
  return DELIVERY_LOCATIONS.filter(loc => loc.area === area).length
}

// Get unique areas with counts
export function getAreaSummary(): { area: string; count: number; displayName: string }[] {
  const areaCounts = DELIVERY_LOCATIONS.reduce((acc, loc) => {
    acc[loc.area] = (acc[loc.area] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const areaDisplayNames: Record<string, string> = {
    'atlantic-beach': 'Atlantic Beach',
    'ponte-vedra': 'Ponte Vedra',
    'orange-park': 'Orange Park',
    'jacksonville-beach': 'Jacksonville Beach',
    'st-augustine': 'St. Augustine',
    'jacksonville-southside': 'Southside/Baymeadows',
    'jacksonville-intracoastal': 'Intracoastal West',
    'jacksonville-san-marco': 'San Marco/Lakewood',
    'jacksonville-arlington': 'Arlington',
    'jacksonville-mandarin': 'Mandarin',
    'jacksonville-deerwood': 'Deerwood/Southpoint',
    'jacksonville-riverside': 'Riverside/Avondale',
    'jacksonville-westside': 'Westside',
    'jacksonville-northside': 'Northside',
    'jacksonville-southpoint': 'Baymeadows/San Jose',
    'jacksonville-other': 'Greater Jacksonville',
  }

  return Object.entries(areaCounts)
    .map(([area, count]) => ({
      area,
      count,
      displayName: areaDisplayNames[area] || area,
    }))
    .sort((a, b) => b.count - a.count)
}

// Map area slugs to location page slugs for linking
export const AREA_TO_LOCATION_PAGE: Record<string, string | null> = {
  'atlantic-beach': 'dumpster-rental-atlantic-beach-fl',
  'ponte-vedra': 'dumpster-rental-ponte-vedra-fl',
  'orange-park': 'dumpster-rental-orange-park-fl',
  'jacksonville-beach': 'dumpster-rental-jacksonville-beach-fl',
  'st-augustine': 'dumpster-rental-st-augustine-fl',
  'jacksonville-southside': null, // No dedicated page, links to homepage
  'jacksonville-intracoastal': null,
  'jacksonville-san-marco': null,
  'jacksonville-arlington': null,
  'jacksonville-mandarin': null,
  'jacksonville-deerwood': null,
  'jacksonville-riverside': null,
  'jacksonville-westside': null,
  'jacksonville-northside': null,
  'jacksonville-southpoint': null,
  'jacksonville-other': null,
}

// Total delivery count
export const TOTAL_DELIVERIES = DELIVERY_LOCATIONS.length
