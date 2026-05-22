'use client'

import dynamic from 'next/dynamic'

// Defer BookingModal off the initial bundle. ssr:false is required because the
// modal uses window.dispatchEvent and useEffect. Wrapping the dynamic import in
// a Client Component lets a Server Component page consume it under Next 16 +
// Turbopack, which forbids ssr:false directly from a Server Component.
const BookingModal = dynamic(() => import('./BookingModal'), { ssr: false })

export default function BookingModalLoader() {
  return <BookingModal />
}
