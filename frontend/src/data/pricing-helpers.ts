import pricing from './pricing.json'

type CountyKey = keyof typeof pricing.counties
type DumpsterSize = '10-yard' | '15-yard' | '20-yard'

// Get pricing for a specific county
export function getCountyPricing(county: string) {
  const key = county.toLowerCase().replace(/\s+/g, '-') as CountyKey
  return pricing.counties[key] || pricing.counties[pricing.defaultCounty as CountyKey]
}

// Get dumpster data for a specific county and size
export function getDumpsterPricing(county: string, size: DumpsterSize) {
  const countyData = getCountyPricing(county)
  return countyData.dumpsters[size as keyof typeof countyData.dumpsters] || null
}

// Get available sizes for a county (Duval has 10-yard, others don't)
export function getAvailableSizes(county: string): DumpsterSize[] {
  const countyData = getCountyPricing(county)
  return Object.keys(countyData.dumpsters) as DumpsterSize[]
}

// Map location county names to pricing county keys
export function getCountyKey(county: string, city?: string): string {
  const normalized = county.toLowerCase().replace(/\s+/g, '-')
  // Special cases where city-level pricing differs from county
  if (city?.toLowerCase() === 'st. augustine' || city?.toLowerCase() === 'st augustine') return 'st-augustine'
  if (city?.toLowerCase() === 'macclenny') return 'macclenny'
  if (city?.toLowerCase() === 'starke') return 'starke'
  // County-level mapping
  if (normalized === 'st.-johns' || normalized === 'st-johns') return 'st-johns'
  if (normalized === 'baker') return 'macclenny'
  if (normalized === 'bradford') return 'starke'
  return normalized
}

// Default (Duval County) pricing for homepage and generic pages
export const defaultPricing = pricing.counties.duval
export const priceValidUntil = pricing.priceValidUntil

export default pricing
