// Location data for service area schema generation

export interface Location {
  city: string
  state: string
  county: string
  geo: {
    latitude: number
    longitude: number
  }
  slug: string
}

export const LOCATIONS: Location[] = [
  // Duval County - Jacksonville Core
  {
    city: 'Jacksonville',
    state: 'FL',
    county: 'Duval',
    geo: { latitude: 30.3322, longitude: -81.6557 },
    slug: 'jacksonville',
  },
  {
    city: 'Jacksonville Beach',
    state: 'FL',
    county: 'Duval',
    geo: { latitude: 30.2947, longitude: -81.3931 },
    slug: 'jacksonville-beach',
  },
  {
    city: 'Atlantic Beach',
    state: 'FL',
    county: 'Duval',
    geo: { latitude: 30.3344, longitude: -81.3981 },
    slug: 'atlantic-beach',
  },
  {
    city: 'Neptune Beach',
    state: 'FL',
    county: 'Duval',
    geo: { latitude: 30.3108, longitude: -81.3964 },
    slug: 'neptune-beach',
  },

  // St. Johns County
  {
    city: 'St. Augustine',
    state: 'FL',
    county: 'St. Johns',
    geo: { latitude: 29.8947, longitude: -81.3145 },
    slug: 'st-augustine',
  },
  {
    city: 'Ponte Vedra Beach',
    state: 'FL',
    county: 'St. Johns',
    geo: { latitude: 30.2397, longitude: -81.3856 },
    slug: 'ponte-vedra',
  },

  // Clay County
  {
    city: 'Orange Park',
    state: 'FL',
    county: 'Clay',
    geo: { latitude: 30.1661, longitude: -81.7065 },
    slug: 'orange-park',
  },
  {
    city: 'Middleburg',
    state: 'FL',
    county: 'Clay',
    geo: { latitude: 30.0688, longitude: -81.8604 },
    slug: 'middleburg',
  },

  // Nassau County
  {
    city: 'Fernandina Beach',
    state: 'FL',
    county: 'Nassau',
    geo: { latitude: 30.6699, longitude: -81.4626 },
    slug: 'fernandina-beach',
  },
  {
    city: 'Yulee',
    state: 'FL',
    county: 'Nassau',
    geo: { latitude: 30.6319, longitude: -81.5926 },
    slug: 'yulee',
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug)
}
