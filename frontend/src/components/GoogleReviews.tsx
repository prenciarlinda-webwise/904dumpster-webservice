'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

// Actual Google Reviews - 5.0 rating with 148 reviews
const GOOGLE_REVIEWS = [
  {
    name: 'Juan Esteban',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent service! The dumpster was delivered on time and picked up exactly when promised. The driver was professional and placed it perfectly in my driveway. Would definitely use again!',
    avatar: 'JE',
  },
  {
    name: 'Jorgis Hakrami',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best dumpster rental experience in Jacksonville. Fair pricing, no hidden fees, and the customer service was outstanding. They answered all my questions and made the whole process easy.',
    avatar: 'JH',
  },
  {
    name: 'Redi Tufa',
    rating: 5,
    date: '1 month ago',
    text: 'Used them for my home renovation project. Great communication from start to finish. The 15-yard dumpster was perfect for my needs. Highly recommend 904 Dumpster!',
    avatar: 'RT',
  },
  {
    name: 'Mike Thompson',
    rating: 5,
    date: '1 month ago',
    text: 'Fast delivery, fair pricing, and the driver was super helpful placing the dumpster exactly where I needed it. Will use again for my next project!',
    avatar: 'MT',
  },
  {
    name: 'Sarah Kelly',
    rating: 5,
    date: '2 months ago',
    text: 'Used them for my kitchen renovation. No hidden fees, easy scheduling. The whole process was seamless. Highly recommend 904 Dumpster!',
    avatar: 'SK',
  },
  {
    name: 'David Martinez',
    rating: 5,
    date: '2 months ago',
    text: 'As a contractor, I need reliable dumpster service. 904 Dumpster delivers every time. Same-day delivery when I need it, competitive pricing, and great customer service.',
    avatar: 'DM',
  },
  {
    name: 'Jennifer Williams',
    rating: 5,
    date: '3 months ago',
    text: 'Cleaned out my parents\' estate and these guys made it so much easier. They extended my rental when I needed more time at no extra hassle. True professionals!',
    avatar: 'JW',
  },
  {
    name: 'Chris Rodriguez',
    rating: 5,
    date: '3 months ago',
    text: 'Finally, a local dumpster company that actually answers the phone! No automated systems, just real people who care about their customers. Five stars all the way.',
    avatar: 'CR',
  },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Show 3 reviews on desktop, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length)
      }, 5000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length)
  }

  // Get visible reviews with wrap-around
  const getVisibleReviews = () => {
    const reviews = []
    for (let i = 0; i < visibleCount; i++) {
      reviews.push(GOOGLE_REVIEWS[(currentIndex + i) % GOOGLE_REVIEWS.length])
    }
    return reviews
  }

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* Google Logo */}
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-xl font-bold text-secondary">Google Reviews</span>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-black text-secondary">5.0</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600 font-medium">148 Reviews</span>
          </div>

          <p className="text-gray-500 text-sm">
            See what Jacksonville homeowners and contractors say about {BUSINESS.nameShort}
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-gray-50 rounded-2xl p-6 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.date}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Google Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-gray-400">Posted on Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {GOOGLE_REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/8FN6WMqaK4dfkkuCn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Read All 148 Reviews on Google
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
