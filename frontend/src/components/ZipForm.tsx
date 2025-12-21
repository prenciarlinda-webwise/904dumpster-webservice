'use client'

import { useState } from 'react'
import { Phone, ArrowRight, Shield, Clock, Truck } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export function ZipForm() {
  const [zipCode, setZipCode] = useState('')

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/contact-us?zip=${zipCode}`
  }

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
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="e.g., 32246"
            className="w-full px-4 py-4 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            maxLength={5}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
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
