'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS } from '@/lib/constants'

const HERO_REVIEWS = [
  {
    name: 'Neemy Michel',
    text: 'Very professional and on time. Great customer service. I will definitely use 904 Dumpster again.',
    date: '2 weeks ago',
  },
  {
    name: 'Paul Yarger',
    text: 'By far the best dumpster service I\'ve used yet. Dumpsters were in great shape, empty when dropped, and the price was very good!',
    date: '1 month ago',
  },
  {
    name: 'Sarah Phillips',
    text: 'Fast and efficient service. Excellent price will use again highly recommended.',
    date: '3 weeks ago',
  },
  {
    name: 'Dalton Guinn',
    text: 'Excellent service, super nice company, shows up every time when expected which is really needed when managing a project.',
    date: '1 month ago',
  },
  {
    name: 'Redi Tufa',
    text: 'Great, reliable dumpster service! Always on time with delivery and pickup, fair pricing, and excellent communication.',
    date: '2 months ago',
  },
  {
    name: 'e bixi',
    text: 'I use 904 dumpsters for two of my projects, they delivered on time both drop off and pick up. Best on market.',
    date: '1 month ago',
  },
  {
    name: 'Kevin',
    text: 'Very quick service and Dionis was very communicative and very helpful. Would definitely recommend and order again.',
    date: '1 month ago',
  },
  {
    name: 'Velibor Ivanic',
    text: 'Great company to work with. Professional, on time, and best price in Jax.',
    date: '2 months ago',
  },
]

export function HeroReviewSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % HERO_REVIEWS.length)
      }, 4000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + HERO_REVIEWS.length) % HERO_REVIEWS.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % HERO_REVIEWS.length)
  }

  const review = HERO_REVIEWS[current]

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div>
            <div className="text-white font-bold text-sm">Google Reviews</div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-black text-lg">{REVIEWS.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/60 text-xs">({REVIEWS.count})</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 text-white/70" />
          </button>
          <button
            onClick={handleNext}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* Review */}
      <div className="min-h-[100px]">
        <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
              {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{review.name}</div>
              <div className="text-white/50 text-xs">{review.date}</div>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {HERO_REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrent(index)
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === current ? 'bg-primary w-4' : 'bg-white/30'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://share.google/8FN6WMqaK4dfkkuCn"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-white/60 text-xs mt-4 hover:text-white/80 transition-colors"
      >
        Read all {REVIEWS.count} reviews on Google
      </a>
    </div>
  )
}
