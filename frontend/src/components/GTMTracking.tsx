'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function GTMTracking() {
  const pathname = usePathname()

  // Track virtual page views on client-side route changes
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
    })
  }, [pathname])

  // Track clicks on phone, booking, and email links globally
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      window.dataLayer = window.dataLayer || []

      // Phone call clicks
      if (href.startsWith('tel:')) {
        window.dataLayer.push({
          event: 'phone_call_click',
          phone_number: href.replace('tel:', ''),
          click_location: pathname,
          link_text: target.textContent?.trim() || '',
        })
      }

      // Booking / checkout link clicks
      if (href.includes('app.icans.ai')) {
        window.dataLayer.push({
          event: 'booking_click',
          click_location: pathname,
          link_text: target.textContent?.trim() || '',
        })
      }

      // Email link clicks
      if (href.startsWith('mailto:')) {
        window.dataLayer.push({
          event: 'email_click',
          email_address: href.replace('mailto:', ''),
          click_location: pathname,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}
