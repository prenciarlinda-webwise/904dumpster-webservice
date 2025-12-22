import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Truck,
  Clock,
  Shield,
  Award,
  Heart,
  MapPin,
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateAboutPageSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about 904 Dumpster, Jacksonville\'s local family-owned dumpster rental company serving Northeast Florida.',
  alternates: {
    canonical: 'https://www.904dumpster.com/about',
  },
}

export default function AboutPage() {
  const aboutSchema = generateAboutPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'About Us', url: 'https://www.904dumpster.com/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About <span className="text-primary">904 Dumpster</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Your local, trusted dumpster rental company serving Jacksonville and Northeast
              Florida. We are committed to making waste disposal simple, affordable, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Built on Service, Driven by Community
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  904 Dumpster was founded with a simple mission: provide Jacksonville homeowners
                  and contractors with reliable, affordable dumpster rental service backed by
                  genuine customer care.
                </p>
                <p>
                  We noticed that many dumpster rental companies treated customers as transactions
                  rather than neighbors. Hidden fees, unreliable delivery times, and poor
                  communication were the norm. We knew there had to be a better way.
                </p>
                <p>
                  Today, 904 Dumpster serves thousands of customers across Northeast Florida,
                  from Jacksonville Beach to St. Augustine, Orange Park to Ponte Vedra. Our
                  commitment remains the same: transparent pricing, reliable service, and treating
                  every customer like a neighbor.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-8">Why We Are Different</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary mb-1">Locally Owned & Operated</div>
                    <p className="text-gray-600">
                      We live and work in Jacksonville. This is our community too.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary mb-1">No Hidden Fees Ever</div>
                    <p className="text-gray-600">
                      The price we quote is the price you pay. Period.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary mb-1">Reliable Scheduling</div>
                    <p className="text-gray-600">
                      We show up when we say we will. Your time matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary mb-1">Real People, Real Service</div>
                    <p className="text-gray-600">
                      Call us and talk to a real person who can help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">5000+</div>
              <div className="text-white/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
              <div className="text-white/70">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">Same-Day</div>
              <div className="text-white/70">Delivery Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">7 Days</div>
              <div className="text-white/70">A Week Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Integrity</h3>
              <p className="text-gray-600">
                We do what we say we will do. Honest pricing, reliable service, and straightforward
                communication are the foundations of our business.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Reliability</h3>
              <p className="text-gray-600">
                Your project depends on us showing up on time. We take that responsibility
                seriously and work hard to exceed your expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Community</h3>
              <p className="text-gray-600">
                Jacksonville is our home. We are committed to serving our neighbors and
                contributing to the community that has supported us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                Serving All of Northeast Florida
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                From the beaches to the suburbs, we provide dumpster rental service throughout
                Jacksonville and surrounding communities. Our local knowledge means efficient
                delivery and pickup, no matter where your project is located.
              </p>
              <ul className="space-y-3">
                {[
                  'Jacksonville & all Duval County',
                  'Jacksonville Beach, Neptune Beach, Atlantic Beach',
                  'Ponte Vedra Beach & Nocatee',
                  'St. Augustine & St. Johns County',
                  'Orange Park, Middleburg & Clay County',
                  'Fleming Island & Green Cove Springs',
                ].map((area, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment to You</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Prompt Response</div>
                    <p className="text-white/70 text-sm">
                      We answer calls and respond to quotes quickly because we know your time is
                      valuable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">On-Time Delivery</div>
                    <p className="text-white/70 text-sm">
                      When we schedule a delivery time, we stick to it. Your project timeline
                      matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Clean Equipment</div>
                    <p className="text-white/70 text-sm">
                      Our dumpsters are well-maintained and presentable. We respect your property.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Fair Pricing</div>
                    <p className="text-white/70 text-sm">
                      Competitive rates with no surprises. We believe in earning your business
                      honestly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            See why thousands of Jacksonville homeowners and contractors choose 904 Dumpster.
            Get a free quote today.
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
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
