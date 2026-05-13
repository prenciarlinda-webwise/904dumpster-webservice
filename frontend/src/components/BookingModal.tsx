'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export const BOOKING_EVENT = 'open-booking-modal'

export function openBookingModal() {
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-200 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
