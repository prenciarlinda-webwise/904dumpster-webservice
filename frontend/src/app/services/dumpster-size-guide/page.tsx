import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, Ruler, Scale, Truck } from 'lucide-react'
import { BUSINESS, DUMPSTER_SIZES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dumpster Size Guide Jacksonville FL | Choose the Right Size',
  description:
    'Find the perfect dumpster size for your project. Compare 10, 15, and 20 yard roll-off containers. Free size consultation available. Call (904) 240-5598.',
  keywords: [
    'dumpster size guide',
    'what size dumpster do i need',
    'dumpster size comparison',
    'roll off dumpster sizes',
    'dumpster rental sizes jacksonville',
  ],
}

const SIZE_COMPARISONS = [
  {
    size: '10',
    name: '10 Yard',
    dimensions: "12' L × 8' W × 3.5' H",
    capacity: '10 cubic yards',
    weight: '2 tons (4,000 lbs)',
    truckLoads: '3 pickup truck loads',
    price: 'From $275',
    bestFor: [
      'Small garage cleanouts',
      'Single room renovation',
      'Small deck removal',
      'Concrete/dirt (small amounts)',
      'Minor landscaping debris',
    ],
    notIdeal: [
      'Whole house cleanouts',
      'Large construction projects',
      'Multiple room renovations',
    ],
  },
  {
    size: '15',
    name: '15 Yard',
    dimensions: "16' L × 8' W × 4' H",
    capacity: '15 cubic yards',
    weight: '3 tons (6,000 lbs)',
    truckLoads: '5 pickup truck loads',
    price: 'From $350',
    popular: true,
    bestFor: [
      'Roofing projects (up to 25 squares)',
      'Kitchen/bathroom remodel',
      'Medium estate cleanout',
      'Deck removal',
      'Flooring replacement',
    ],
    notIdeal: [
      'Very small projects',
      'Large construction debris',
      'Heavy concrete loads',
    ],
  },
  {
    size: '20',
    name: '20 Yard',
    dimensions: "22' L × 8' W × 4.5' H",
    capacity: '20 cubic yards',
    weight: '4 tons (8,000 lbs)',
    truckLoads: '7 pickup truck loads',
    price: 'From $425',
    bestFor: [
      'Large renovation projects',
      'Construction site debris',
      'Whole house cleanout',
      'Major landscaping',
      'Commercial projects',
    ],
    notIdeal: [
      'Small residential projects',
      'Limited driveway space',
      'Quick weekend cleanouts',
    ],
  },
]

export default function DumpsterSizeGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Size Guide</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Dumpster Size Guide
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Not sure which size you need? Use this guide to find the perfect dumpster for your project.
              Still unsure? Call us for a free consultation.
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Free Size Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <Ruler className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold">3 Sizes Available</div>
              <div className="text-white/70">10, 15, and 20 yard options</div>
            </div>
            <div className="text-white">
              <Scale className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold">2-4 Ton Limits</div>
              <div className="text-white/70">Weight included in price</div>
            </div>
            <div className="text-white">
              <Truck className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold">Same-Day Delivery</div>
              <div className="text-white/70">Call before noon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Compare Dumpster Sizes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each size is designed for specific types of projects. Find the one that fits your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SIZE_COMPARISONS.map((dumpster) => (
              <div
                key={dumpster.size}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl ${
                  dumpster.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {dumpster.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={`/images/${dumpster.size}-yard-dumpster.jpg`}
                    alt={`${dumpster.name} Dumpster`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-5xl font-black text-white">{dumpster.size}</span>
                    <span className="text-white/80 ml-2 text-xl">yard</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Specs */}
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dimensions:</span>
                      <span className="font-medium text-secondary">{dumpster.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-medium text-secondary">{dumpster.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weight Limit:</span>
                      <span className="font-medium text-secondary">{dumpster.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Equivalent:</span>
                      <span className="font-medium text-secondary">{dumpster.truckLoads}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="font-bold text-secondary mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      {dumpster.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-2xl font-black text-secondary mb-4">
                      {dumpster.price}
                    </div>
                    <Link
                      href={`/services/${dumpster.size}-yard-dumpster-rental`}
                      className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-colors ${
                        dumpster.popular
                          ? 'bg-primary hover:bg-primary/90 text-white'
                          : 'bg-secondary hover:bg-primary text-white'
                      }`}
                    >
                      Rent {dumpster.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Pro Tips for Choosing the Right Size
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'When in doubt, go bigger',
                description:
                  'It\'s better to have a little extra space than to need a second dumpster. The cost difference is usually minimal compared to ordering another delivery.',
              },
              {
                title: 'Consider the weight, not just volume',
                description:
                  'Heavy materials like concrete, dirt, and roofing shingles fill up weight limits faster than space. For heavy debris, you may need a smaller dumpster.',
              },
              {
                title: 'Think about access',
                description:
                  'Make sure you have enough space in your driveway or property for the dumpster size you choose. Our 10-yard fits in most spaces.',
              },
              {
                title: 'Ask about your specific project',
                description:
                  'Every project is different. Call us and describe what you\'re working on – we\'ll recommend the perfect size based on our experience.',
              },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5">
                <h3 className="font-bold text-secondary text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Still Not Sure Which Size?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Call us for a free consultation. We&apos;ll help you choose the perfect dumpster for your project.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
