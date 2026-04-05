import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQ | Jacksonville FL Questions & Answers',
  description:
    'Frequently asked questions about dumpster rental in Jacksonville FL. Dumpster sizes, dimensions, pricing, what you can throw away, permits, delivery areas, and more.',
  keywords: [
    'dumpster rental faq',
    'dumpster rental questions',
    'how to rent a dumpster jacksonville',
    'dumpster rental answers',
    'how big is a 10 yard dumpster',
    'how big is a 15 yard dumpster',
    'how big is a 20 yard dumpster',
    'how much does a dumpster rental cost',
    'what is a roll off dumpster',
    'can you put a mattress in a dumpster',
    'do you need a permit for a dumpster',
    'what items cannot go in a dumpster',
    'same day dumpster delivery jacksonville',
  ],
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
          'Ordering is easy! Book online at our website for instant scheduling - just select your dumpster size, enter your delivery address, and choose your preferred delivery date. You\'ll get instant confirmation and can manage your rental online. Same-day delivery available when you book before noon.',
      },
      {
        question: 'How quickly can you deliver a dumpster?',
        answer:
          'We offer same-day delivery for orders placed before noon throughout Jacksonville and Northeast Florida. Orders placed after noon are typically delivered the next business day. During peak seasons, we recommend booking 1-2 days in advance.',
      },
      {
        question: 'Do you deliver dumpsters on the same day?',
        answer:
          'Yes! We offer same-day dumpster delivery in Jacksonville when you book before noon. Simply order online or call us, and we will have a dumpster at your location the same day. Orders placed after noon are typically delivered the following business day. Same-day availability may vary during peak seasons.',
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
          'The right size depends on your project. Our 10-yard dumpster works well for small cleanouts and single-room projects. The 15-yard is our most popular for home renovations and roofing. The 20-yard handles large renovations, construction, and estate cleanouts. Check out our Size Guide to find the perfect fit for your project.',
      },
      {
        question: 'What are the dimensions of your dumpsters?',
        answer:
          'Our 10-yard dumpster is 12 feet long x 7.5 feet wide x 3.6 feet high. The 15-yard is 14 feet x 7.5 feet x 4.5 feet. The 20-yard is 14 feet x 7.5 feet x 5.8 feet. All dumpsters are 7.5 feet wide to fit in standard driveways.',
      },
      {
        question: 'How much weight can I put in the dumpster?',
        answer:
          'Weight limits vary by size: 10-yard holds up to 1 ton, 15-yard holds up to 1.5 tons, and 20-yard holds up to 2 tons. Heavy materials like concrete can reach weight' +
            ' limits before filling the container.',
      },
      {
        question: 'How big is a 10-yard dumpster?',
        answer:
          'A 10-yard dumpster measures 12 feet long x 7.5 feet wide x 3.6 feet high. It holds 10 cubic yards of debris, which is roughly equivalent to 3 pickup truck loads. This size is ideal for small cleanouts, single-room renovations, and garage cleanups. Visit our 10-yard dumpster rental page for more details and to book online.',
      },
      {
        question: 'How big is a 15-yard dumpster?',
        answer:
          'A 15-yard dumpster measures 14 feet long x 7.5 feet wide x 4.5 feet high. It holds 15 cubic yards of debris, equivalent to about 5 pickup truck loads. This is our most popular size for home renovations, roofing projects, and medium-sized cleanouts. Visit our 15-yard dumpster rental page to learn more.',
      },
      {
        question: 'How big is a 20-yard dumpster?',
        answer:
          'A 20-yard dumpster measures 14 feet long x 7.5 feet wide x 5.8 feet high. It holds 20 cubic yards of debris, equivalent to about 7 pickup truck loads. This is our largest size, perfect for major renovations, construction projects, and estate cleanouts. Visit our 20-yard dumpster rental page for pricing and availability.',
      },
      {
        question: 'How much weight can a dumpster hold?',
        answer:
          'Weight limits depend on the dumpster size. Our 10-yard dumpster holds up to 1 ton (2,000 lbs), the 15-yard holds up to 1.5 tons (3,000 lbs), and the 20-yard holds up to 2 tons (4,000 lbs). Heavy materials like concrete, brick, and dirt can reach weight limits quickly, even if the dumpster is not full. Overage charges apply if the weight limit is exceeded.',
      },
      {
        question: 'How do I choose the right dumpster size?',
        answer:
          'Choosing the right dumpster size depends on your project type and the amount of debris. For small cleanouts, bathroom remodels, or garage cleanups, a 10-yard dumpster is usually sufficient. For kitchen renovations, roofing projects, or multiple-room cleanouts, the 15-yard is our most popular choice. For large construction projects, whole-home renovations, or estate cleanouts, go with the 20-yard. When in doubt, size up. It is more cost-effective than renting a second dumpster. Check our dumpster size guide for project-specific recommendations.',
      },
      {
        question: 'What is a roll-off dumpster?',
        answer:
          'A roll-off dumpster is an open-top waste container that is delivered and picked up by a special roll-off truck. The truck rolls the dumpster off the back onto your driveway or designated area. Roll-off dumpsters are the standard type used for residential and commercial cleanouts, renovations, and construction projects. They come in various sizes, and we offer 10-yard, 15-yard, and 20-yard roll-off dumpsters to fit any project.',
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
          'Our Duval County pricing starts at $299 for a 10-yard dumpster (3-day rental), $349 for a 15-yard, and $399 for a 20-yard (5-day rentals). Pricing varies by service area. Additional days are $15/day. There are no hidden fees.',
      },
      {
        question: 'How much does a dumpster rental cost?',
        answer:
          'Dumpster rental costs in Jacksonville (Duval County) range from $299 to $399 depending on size. Our 10-yard dumpster is $299 with a 3-day rental, the 15-yard is $349, and the 20-yard is $399, both with 5-day rentals. Pricing varies for Clay, St. Johns, Nassau, and other service areas. Every rental includes delivery, pickup, and disposal up to the weight limit. Extensions are available at $15 per additional day. There are no hidden fees, fuel surcharges, or environmental charges.',
      },
      {
        question: 'What is included in the rental price?',
        answer:
          'Our all-inclusive pricing covers delivery, the rental period (3 days for 10-yard, 5 days for 15 and 20-yard), pickup, and disposal up to the weight limit. There are no fuel surcharges, environmental fees, or other hidden costs.',
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
        question: 'What items cannot go in a dumpster?',
        answer:
          'Items that cannot go in a dumpster include hazardous waste such as chemicals, pesticides, and solvents. Other prohibited items are tires, car batteries, oil-based paint, propane tanks, medical waste, asbestos, and electronics containing mercury. Appliances with refrigerants like refrigerators and air conditioners require professional refrigerant removal before disposal. When in doubt, call us and we will let you know if your items are accepted.',
      },
      {
        question: 'Can you put a mattress in a dumpster?',
        answer:
          'Yes, you can put a mattress in a dumpster in most cases. Mattresses, box springs, and bed frames are all accepted in our dumpsters. They can take up a lot of space due to their size, so we recommend placing mattresses flat on the bottom of the dumpster first, then stacking other debris on top. For multiple mattresses, a 15-yard or 20-yard dumpster is recommended.',
      },
      {
        question: 'Can you put furniture in a dumpster?',
        answer:
          'Yes, most household furniture can go in a dumpster. Couches, tables, chairs, desks, dressers, bookshelves, bed frames, and cabinets are all accepted. We recommend breaking down large furniture pieces when possible to maximize space. If you are doing a full home or estate cleanout with lots of furniture, our 20-yard dumpster gives you the most room.',
      },
      {
        question: 'Can I put concrete or brick in the dumpster?',
        answer:
          'Yes, but in limited amounts. Concrete and masonry are very heavy and can quickly reach weight limits. We recommend a 10-yard dumpster filled no more than 1/4 full with concrete. For large concrete jobs, ask about our heavy debris pricing.',
      },
      {
        question: 'Can you throw concrete in a dumpster?',
        answer:
          'Yes, you can throw concrete in a dumpster. We offer concrete disposal dumpsters specifically for heavy materials like concrete, brick, block, and stone. Because concrete is extremely heavy, weight limits are reached quickly, so a 10-yard dumpster should be filled no more than 1/4 full with concrete. For large concrete removal projects such as driveway or patio demolition, contact us about our heavy debris pricing for the most cost-effective option.',
      },
      {
        question: 'Can you throw paint in a dumpster?',
        answer:
          'It depends on the type of paint. Latex (water-based) paint can go in a dumpster, but it must be completely dried out first. You can dry latex paint by removing the lid and letting it air dry, or by mixing in cat litter or sawdust to absorb the liquid. Oil-based paint is considered hazardous waste and cannot go in a dumpster. It must be taken to a household hazardous waste collection facility. Empty, dry paint cans are always accepted.',
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
        question: 'How long can you rent a dumpster?',
        answer:
          'Our 10-yard dumpster includes a 3-day rental period, and our 15 and 20-yard dumpsters include a 5-day rental period. If you need more time, extensions are available at just $15 per additional day. There is no maximum rental period, so you can keep the dumpster for as long as your project requires. Just let us know before your rental period ends so we can extend it for you.',
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
      {
        question: 'Can you park a dumpster on the street?',
        answer:
          'In most cases, you can place a dumpster on the street, but you may need a permit from the City of Jacksonville or your local municipality. Permit requirements vary by location. When placed on the street, the dumpster must not block traffic, fire hydrants, or sidewalks. We recommend placing the dumpster in your driveway whenever possible to avoid permit requirements and potential issues. If street placement is your only option, contact your local public works department for permit information.',
      },
    ],
  },
  {
    category: 'Service Area & Disposal',
    questions: [
      {
        question: 'What areas do you serve?',
        answer:
          'We serve Jacksonville and all of Northeast Florida including St. Augustine, Clay County, Orange Park, Fleming Island, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Fernandina Beach, Yulee, and surrounding communities. Whether you are in Duval County, St. Johns County, Clay County, or Nassau County, we deliver dumpsters to your location. Visit our service areas page for a full list of cities and neighborhoods we cover.',
      },
      {
        question: 'Where does trash go after it is picked up?',
        answer:
          'After your dumpster is picked up, the contents are transported to a licensed transfer station or landfill facility in Northeast Florida. At the transfer station, materials are sorted. Recyclable items like metal, concrete, and wood are separated for recycling whenever possible. Non-recyclable waste is sent to an approved landfill for safe, environmentally compliant disposal. We are committed to responsible waste management and divert as much material from landfills as possible.',
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
            Ready to Book Your Dumpster?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book online now for instant scheduling and confirmation. Same-day delivery available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.icans.ai/customer-portal/904dumpster/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              Book Online Now
              <ArrowRight className="w-6 h-6" />
            </a>
            <Link
              href="/dumpster-size-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Check Size Guidelines
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
