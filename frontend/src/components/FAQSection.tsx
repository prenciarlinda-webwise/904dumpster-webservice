'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden"
        >
          <button
            onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <h3 className="font-bold text-secondary text-lg pr-4">{faq.question}</h3>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                expandedFaq === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
