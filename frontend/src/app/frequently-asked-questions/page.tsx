import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQ',
  description:
    'Frequently asked questions about dumpster rental in Jacksonville FL. Sizes, pricing, delivery, and more.',
  alternates: {
    canonical: 'https://www.904dumpster.com/frequently-asked-questions',
  },
}

const faqs = [
  {
    category: 'Ordering & Delivery',
    questions: [
      {
        question: 'How do I order a dumpster?',
        answer:
          'Ordering is easy! Call us at (904) 240-5598 or fill out the contact form on our website. Let us know your delivery address, project type, and preferred dumpster size. We will confirm availability and schedule your delivery.',
      },
      {
        question: 'How quickly can you deliver a dumpster?',
        answer:
          'We offer same-day delivery for orders placed before noon throughout Jacksonville and Northeast Florida. Orders placed after noon are typically delivered the next business day. During peak seasons, we recommend booking 1-2 days in advance.',
      },
      {
        question: 'What information do you need to schedule delivery?',
        answer:
          'We need your delivery address, contact phone number, preferred delivery date, and dumpster size. It also helps to know your project type so we can recommend the best dumpster size for your needs.',
      },
      {
        question: 'Do you deliver on weekends?',
        answer:
          'Yes! We offer delivery and pickup service 7 days a week, including weekends. Weekend delivery is subject to availability, so we recommend scheduling in advance.',
      },
      {
        question: 'What if I need to change my delivery date?',
        answer:
          'No problem! Just call us as soon as you know you need to reschedule. We are flexible and will work with your timeline. There is no fee for rescheduling as long as you give us at least 24 hours notice.',
      },
    ],
  },
  {
    category: 'Dumpster Sizes',
    questions: [
      {
        question: 'What size dumpster do I need?',
        answer:
          'The right size depends on your project. Our 10-yard dumpster works well for small cleanouts and single-room projects. The 15-yard is our most popular for home renovations and roofing. The 20-yard handles large renovations, construction, and estate cleanouts. Call us and we will help you choose the right size.',
      },
      {
        question: 'What are the dimensions of your dumpsters?',
        answer:
          'Our 10-yard dumpster is 12 feet long x 8 feet wide x 3.5 feet high. The 15-yard is 16 feet x 8 feet x 4 feet. The 20-yard is 22 feet x 8 feet x 4.5 feet. All dumpsters are 8 feet wide to fit in standard driveways.',
      },
      {
        question: 'How much weight can I put in the dumpster?',
        answer:
          'Weight limits vary by size: 10-yard holds up to 2 tons (4,000 lbs), 15-yard holds up to 3 tons (6,000 lbs), and 20-yard holds up to 4 tons (8,000 lbs). Heavy materials like concrete can reach weight limits before filling the container.',
      },
      {
        question: 'What if I fill the dumpster before my rental period ends?',
        answer:
          'Just call us and we will schedule an early pickup or swap it out for an empty one. We are flexible and want to help your project run smoothly. Additional fees may apply for swap-outs.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        question: 'How much does it cost to rent a dumpster?',
        answer:
          'Our pricing starts at $275 for a 10-yard dumpster, $325 for a 15-yard, and $375 for a 20-yard. All prices include delivery, pickup, and a 5-day rental. Additional days are $15/day. There are no hidden fees.',
      },
      {
        question: 'What is included in the rental price?',
        answer:
          'Our all-inclusive pricing covers delivery, a 5-day rental period, pickup, and disposal up to the weight limit. There are no fuel surcharges, environmental fees, or other hidden costs.',
      },
      {
        question: 'Are there any additional fees I should know about?',
        answer:
          'The only additional fees are for exceeding the weight limit (charged per additional ton) or extending the rental beyond 5 days. We will always communicate any potential overage before pickup.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, debit cards, and checks. Payment is typically due upon delivery or pickup, depending on your preference.',
      },
      {
        question: 'Do you require a deposit?',
        answer:
          'We do not require a deposit for most residential rentals. Commercial accounts and extended rentals may require payment in advance.',
      },
    ],
  },
  {
    category: 'What Can Go in the Dumpster',
    questions: [
      {
        question: 'What can I put in the dumpster?',
        answer:
          'Most household and construction debris is accepted including furniture, appliances (with refrigerants removed), wood, drywall, roofing materials, concrete (limited amounts), yard waste, and general household junk.',
      },
      {
        question: 'What items are NOT allowed in the dumpster?',
        answer:
          'Prohibited items include hazardous materials (paint, chemicals, oil), batteries, tires, electronics, appliances with refrigerants (unless properly evacuated), medical waste, and asbestos. See our Prohibited Items page for a complete list.',
      },
      {
        question: 'Can I put concrete or brick in the dumpster?',
        answer:
          'Yes, but in limited amounts. Concrete and masonry are very heavy and can quickly reach weight limits. We recommend a 10-yard dumpster filled no more than 1/4 full with concrete. For large concrete jobs, ask about our heavy debris pricing.',
      },
      {
        question: 'Can I put yard waste in the dumpster?',
        answer:
          'Yes! Yard waste including grass, branches, bushes, and landscaping debris is accepted. Cut branches into manageable lengths and avoid mixing soil with other debris.',
      },
      {
        question: 'What about appliances?',
        answer:
          'Most appliances are accepted. However, refrigerators, freezers, and air conditioners contain refrigerants that must be professionally removed before disposal. We can accept these appliances with documentation showing refrigerants were properly evacuated.',
      },
    ],
  },
  {
    category: 'Rental Period & Pickup',
    questions: [
      {
        question: 'How long can I keep the dumpster?',
        answer:
          'Our standard rental period is 5 days, which is included in the base price. Need more time? We offer flexible extensions at a daily rate. Just let us know before your rental period ends.',
      },
      {
        question: 'How do I schedule pickup?',
        answer:
          'Call or text us at (904) 240-5598 when you are ready for pickup. We aim to pick up within 24-48 hours of your request. For scheduled pickups, we recommend calling at least one day in advance.',
      },
      {
        question: 'What if I need the dumpster for longer than 5 days?',
        answer:
          'No problem! Extended rentals are available at a daily rate. Just let us know in advance if you need more time. We are flexible and want to work with your project timeline.',
      },
      {
        question: 'Can I have the dumpster picked up early?',
        answer:
          'Absolutely! If you finish your project early, call us and we will schedule pickup as soon as possible. There is no penalty for early pickup.',
      },
    ],
  },
  {
    category: 'Placement & Access',
    questions: [
      {
        question: 'Where will the dumpster be placed?',
        answer:
          'We typically place dumpsters in driveways. If you prefer a different location, let us know when ordering. We will work with you to find the best spot that allows for safe delivery and pickup.',
      },
      {
        question: 'Will the dumpster damage my driveway?',
        answer:
          'We take precautions to protect your driveway. Our drivers place boards under the dumpster wheels to distribute weight and prevent damage. However, we recommend avoiding placement on newly poured concrete or decorative surfaces.',
      },
      {
        question: 'Do I need to be home for delivery or pickup?',
        answer:
          'No, you do not need to be home. Just let us know where you want the dumpster placed and ensure the area is clear. We will take care of the rest and contact you when delivery is complete.',
      },
      {
        question: 'What if I have a narrow driveway or tight access?',
        answer:
          'Our 10-yard dumpster is designed for tight spaces and fits in most residential driveways. Let us know about any access concerns when ordering and we will recommend the best solution.',
      },
      {
        question: 'Do I need a permit for a dumpster?',
        answer:
          'Permits are typically not required when the dumpster is placed on your private property (driveway). If you need to place the dumpster on the street or public right-of-way, a permit may be required from your city or county.',
      },
    ],
  },
]

// Flatten FAQs for schema
const allFaqs = faqs.flatMap((category) => category.questions)

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get answers to common questions about dumpster rental in Jacksonville. Cannot find
            what you are looking for? Give us a call!
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {faqs.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-primary"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqs.map((category, categoryIndex) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/\s+/g, '-')}
          className={`py-20 lg:py-28 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-12 text-center">
              {category.category}
            </h2>

            <div className="space-y-6">
              {category.questions.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-secondary mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            We are here to help! Give us a call and we will answer any questions you have about
            dumpster rental in Jacksonville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(allFaqs)) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'FAQ', url: 'https://www.904dumpster.com/frequently-asked-questions' },
            ])
          ),
        }}
      />
    </div>
  )
}
