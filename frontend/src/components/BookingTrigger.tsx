'use client'

import { ReactNode } from 'react'
import { openBookingModal } from './BookingModal'

type Props = {
  className?: string
  title?: string
  children: ReactNode
}

export default function BookingTrigger({ className, title, children }: Props) {
  return (
    <button
      type="button"
      title={title}
      onClick={() => openBookingModal(typeof children === 'string' ? children : title)}
      className={className}
    >
      {children}
    </button>
  )
}
