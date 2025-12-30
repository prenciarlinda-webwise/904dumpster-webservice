'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Truck } from 'lucide-react'
import { DELIVERY_LOCATIONS, getAreaSummary, TOTAL_DELIVERIES } from '@/data/deliveryLocations'

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Approximate coordinates for Jacksonville ZIP codes
// These are neighborhood centers, not exact addresses (for privacy)
const ZIP_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // Beach communities
  '32233': { lat: 30.3350, lng: -81.3983 }, // Atlantic Beach
  '32250': { lat: 30.2832, lng: -81.3962 }, // Jacksonville Beach
  '32266': { lat: 30.3119, lng: -81.3967 }, // Neptune Beach
  '32082': { lat: 30.2396, lng: -81.3857 }, // Ponte Vedra Beach
  '32081': { lat: 30.1500, lng: -81.4000 }, // Ponte Vedra/Nocatee

  // St. Johns County
  '32092': { lat: 29.9500, lng: -81.4500 }, // St. Augustine area

  // Clay County
  '32073': { lat: 30.1663, lng: -81.7065 }, // Orange Park
  '32065': { lat: 30.1000, lng: -81.7500 }, // Orange Park/Fleming Island

  // Jacksonville - Southside
  '32246': { lat: 30.2400, lng: -81.5500 }, // Baymeadows/Southside
  '32256': { lat: 30.2200, lng: -81.5200 }, // Deerwood/Southpoint
  '32217': { lat: 30.2100, lng: -81.6000 }, // Mandarin North
  '32223': { lat: 30.1500, lng: -81.6000 }, // Mandarin
  '32224': { lat: 30.2700, lng: -81.5000 }, // Southpoint
  '32216': { lat: 30.2800, lng: -81.6000 }, // San Jose

  // Jacksonville - East/Beaches area
  '32225': { lat: 30.3000, lng: -81.4500 }, // Intracoastal West
  '32207': { lat: 30.2900, lng: -81.6400 }, // San Marco/Lakewood
  '32211': { lat: 30.3200, lng: -81.6000 }, // Arlington South

  // Jacksonville - North/West
  '32277': { lat: 30.3600, lng: -81.6200 }, // Arlington
  '32208': { lat: 30.3800, lng: -81.6800 }, // Northside
  '32206': { lat: 30.3500, lng: -81.6500 }, // Downtown/Springfield
  '32209': { lat: 30.3500, lng: -81.7000 }, // Westside
  '32210': { lat: 30.2800, lng: -81.7500 }, // Westside/Ortega
  '32221': { lat: 30.3200, lng: -81.7800 }, // Argyle
  '32254': { lat: 30.3400, lng: -81.7200 }, // Westside
  '32218': { lat: 30.4200, lng: -81.6500 }, // North Jacksonville
  '32219': { lat: 30.4000, lng: -81.7500 }, // Northwest
  '32220': { lat: 30.3500, lng: -81.8000 }, // Westside
  '32226': { lat: 30.4500, lng: -81.5500 }, // Yellow Bluff/North
  '32205': { lat: 30.3100, lng: -81.7000 }, // Riverside/Avondale
  '32259': { lat: 30.0800, lng: -81.5500 }, // St. Johns County
}

// Add slight randomization to prevent pins from stacking
function getCoordinatesForZip(zip: string, index: number): { lat: number; lng: number } {
  const base = ZIP_COORDINATES[zip] || { lat: 30.3322, lng: -81.6557 }
  // Add small random offset (roughly 0.5 mile radius)
  const latOffset = (Math.random() - 0.5) * 0.015
  const lngOffset = (Math.random() - 0.5) * 0.015
  return {
    lat: base.lat + latOffset,
    lng: base.lng + lngOffset,
  }
}

interface DeliveryMapProps {
  filterArea?: string // Optional: filter to show only specific area
  height?: string
  showStats?: boolean
}

export default function DeliveryMap({
  filterArea,
  height = '500px',
  showStats = true
}: DeliveryMapProps) {
  const [isClient, setIsClient] = useState(false)
  const [L, setL] = useState<typeof import('leaflet') | null>(null)

  useEffect(() => {
    setIsClient(true)
    // Import Leaflet dynamically to avoid SSR issues
    import('leaflet').then((leaflet) => {
      setL(leaflet.default)
    })
  }, [])

  // Filter locations if area is specified
  const locations = filterArea
    ? DELIVERY_LOCATIONS.filter((loc) => loc.area === filterArea)
    : DELIVERY_LOCATIONS

  // Get area summary for stats
  const areaSummary = getAreaSummary()

  // Jacksonville center coordinates
  const center: [number, number] = filterArea
    ? [30.3322, -81.5557] // Slightly east for filtered view
    : [30.3322, -81.6557] // Jacksonville center

  const zoom = filterArea ? 11 : 10

  if (!isClient || !L) {
    // Loading state
    return (
      <div
        className="bg-gray-100 rounded-3xl flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <Truck className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-gray-500">Loading delivery map...</p>
        </div>
      </div>
    )
  }

  // Create custom icon
  const customIcon = L.divIcon({
    className: 'custom-delivery-marker',
    html: `<div style="
      background-color: #E85D04;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })

  return (
    <div className="space-y-6">
      {/* Stats Bar */}
      {showStats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="text-3xl font-black text-primary">{TOTAL_DELIVERIES}+</div>
            <div className="text-gray-500 text-sm">Deliveries</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="text-3xl font-black text-primary">{areaSummary.length}</div>
            <div className="text-gray-500 text-sm">Neighborhoods</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="text-3xl font-black text-primary">4</div>
            <div className="text-gray-500 text-sm">Counties</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="text-3xl font-black text-primary">Same Day</div>
            <div className="text-gray-500 text-sm">Delivery</div>
          </div>
        </div>
      )}

      {/* Map */}
      <div className="rounded-3xl overflow-hidden shadow-lg" style={{ height }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location, index) => {
            const coords = getCoordinatesForZip(location.zip, index)
            return (
              <Marker
                key={`${location.address}-${index}`}
                position={[coords.lat, coords.lng]}
                icon={customIcon}
              >
                <Popup>
                  <div className="text-center p-1">
                    <div className="font-bold text-secondary">{location.city}</div>
                    <div className="text-sm text-gray-500">{location.zip} area</div>
                    <div className="text-xs text-primary mt-1">Delivered {location.month} 2024</div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>

      {/* Area Legend */}
      {showStats && !filterArea && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {areaSummary.slice(0, 10).map((area) => (
            <div
              key={area.area}
              className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-secondary text-sm">{area.displayName}</div>
                <div className="text-xs text-gray-500">{area.count} deliveries</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
