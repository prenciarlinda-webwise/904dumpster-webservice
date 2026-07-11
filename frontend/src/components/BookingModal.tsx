'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export const BOOKING_EVENT = 'open-booking-modal'

// Modal-based booking CTAs (BookingTrigger) never navigate to an <a href="...app.icans.ai...">
// link, so the generic anchor-click listener in GTMTracking.tsx can't see them. Push the same
// booking_click event here so modal triggers are tracked identically to plain booking links.
export function openBookingModal(linkText?: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'booking_click',
    click_location: window.location.pathname,
    link_text: linkText || 'Book Now (modal)',
  })
  window.dispatchEvent(new Event(BOOKING_EVENT))
}

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setHasLoaded(true)
    }
    window.addEventListener(BOOKING_EVENT, handler)
    return () => window.removeEventListener(BOOKING_EVENT, handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflowX = document.documentElement.style.overflowX
    const viewport = document.querySelector('meta[name="viewport"]')
    const prevViewport = viewport?.getAttribute('content') ?? null
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflowX = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflowX = prevHtmlOverflowX
      if (viewport && prevViewport !== null) {
        // Force a viewport reset so any pinch-zoom applied inside the iframe
        // is cleared when returning to the underlying page (Samsung Internet leak).
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=1',
        )
        requestAnimationFrame(() => {
          viewport.setAttribute('content', prevViewport)
        })
      }
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-200 ${
        open
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full h-full md:h-[92vh] md:max-w-5xl md:mx-4 bg-white md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
          <h2 className="text-base md:text-lg font-bold text-secondary">
            Book Your Dumpster Rental
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close booking"
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-secondary hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 bg-white">
          {hasLoaded && (
            <iframe
              src="https://app.icans.ai/customer-portal/904dumpster/book/"
              title="Dumpster Booking"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="w-full h-full border-0"
            />
          )}
        </div>
      </div>
    </div>
  )
}
