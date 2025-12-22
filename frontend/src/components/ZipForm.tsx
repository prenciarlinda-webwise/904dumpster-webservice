'use client'

import { useState } from 'react'
import { Phone, ArrowRight, Shield, Clock, Truck, CheckCircle2, MapPin } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

// ZIP codes we service in Northeast Florida
// Duval County (Jacksonville area)
const DUVAL_ZIPS = [
  '32202', '32203', '32204', '32205', '32206', '32207', '32208', '32209', '32210',
  '32211', '32212', '32214', '32216', '32217', '32218', '32219', '32220', '32221',
  '32222', '32223', '32224', '32225', '32226', '32227', '32228', '32229', '32231',
  '32232', '32233', '32234', '32235', '32236', '32237', '32238', '32239', '32240',
  '32241', '32244', '32245', '32246', '32247', '32250', '32254', '32255', '32256',
  '32257', '32258', '32266', '32277',
]

// St. Johns County
const ST_JOHNS_ZIPS = [
  '32033', '32080', '32081', '32082', '32084', '32086', '32092', '32095', '32259',
]

// Clay County
const CLAY_ZIPS = [
  '32003', '32006', '32043', '32065', '32067', '32068', '32073', '32079', '32234',
]

// Nassau County
const NASSAU_ZIPS = [
  '32009', '32011', '32034', '32046', '32097',
]

const SERVED_ZIPS = [...DUVAL_ZIPS, ...ST_JOHNS_ZIPS, ...CLAY_ZIPS, ...NASSAU_ZIPS]

type FormState = 'input' | 'success' | 'not-served'

export function ZipForm() {
  const [zipCode, setZipCode] = useState('')
  const [formState, setFormState] = useState<FormState>('input')

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault()

    if (zipCode.length !== 5) return

    if (SERVED_ZIPS.includes(zipCode)) {
      setFormState('success')
    } else {
      setFormState('not-served')
    }
  }

  const handleGetQuote = () => {
    window.location.href = `/contact-us?zip=${zipCode}`
  }

  const handleReset = () => {
    setZipCode('')
    setFormState('input')
  }

  // Success State - We service this area!
  if (formState === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary mb-2">Great News!</h2>
          <p className="text-gray-600">
            We deliver to <span className="font-semibold text-primary">{zipCode}</span>!
          </p>
          <p className="text-gray-500 text-sm mt-1">Same-day delivery often available.</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGetQuote}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
          >
            Get My Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now: {BUSINESS.phone}
          </a>
        </div>

        <button
          onClick={handleReset}
          className="w-full mt-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          Check a different ZIP code
        </button>
      </div>
    )
  }

  // Not Served State - Outside service area
  if (formState === 'not-served') {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary mb-2">Let&apos;s Check!</h2>
          <p className="text-gray-600">
            <span className="font-semibold">{zipCode}</span> may be on the edge of our service area.
          </p>
          <p className="text-gray-500 text-sm mt-1">Call us to confirm - we may still be able to help!</p>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call to Confirm: {BUSINESS.phone}
          </a>

          <button
            onClick={handleGetQuote}
            className="w-full bg-gray-100 hover:bg-gray-200 text-secondary font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Request Quote Anyway
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={handleReset}
          className="w-full mt-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          Try a different ZIP code
        </button>
      </div>
    )
  }

  // Default Input State
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Get a Free Quote</h2>
        <p className="text-gray-500">Check if we service your area</p>
      </div>

      <form onSubmit={handleZipCheck} className="space-y-4">
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
            placeholder="e.g., 32246"
            className="w-full px-4 py-4 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            maxLength={5}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>

        <button
          type="submit"
          disabled={zipCode.length !== 5}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
        >
          Check Availability
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-center text-gray-500 text-sm mb-4">Or call us directly</p>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          <Phone className="w-5 h-5" />
          {BUSINESS.phone}
        </a>
      </div>

      {/* Mini Trust Signals */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Shield className="w-4 h-4" /> Licensed
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> 7 Days/Week
        </span>
        <span className="flex items-center gap-1">
          <Truck className="w-4 h-4" /> Same-Day
        </span>
      </div>
    </div>
  )
}
