import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, XCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Prohibited Items - What Cannot Go in a Dumpster',
  description:
    'Learn what items are not allowed in dumpsters. Hazardous materials, electronics, tires, and more require special disposal. Jacksonville dumpster rental guidelines.',
  keywords: [
    'prohibited items dumpster',
    'what cannot go in a dumpster',
    'dumpster restrictions',
    'hazardous waste disposal jacksonville',
  ],
  alternates: {
    canonical: 'https://www.904dumpster.com/rules/prohibited-items-list',
  },
}

export default function ProhibitedItemsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Resources', url: 'https://www.904dumpster.com/frequently-asked-questions' },
    { name: 'Prohibited Items', url: 'https://www.904dumpster.com/rules/prohibited-items-list' },
  ])

  const prohibitedCategories = [
    {
      title: 'Hazardous Materials',
      icon: AlertTriangle,
      color: 'red',
      items: [
        'Paint (latex or oil-based)',
        'Paint thinners and solvents',
        'Motor oil and automotive fluids',
        'Gasoline, diesel, and other fuels',
        'Pesticides and herbicides',
        'Pool chemicals',
        'Cleaning chemicals in liquid form',
        'Acids and corrosives',
      ],
      disposal:
        'Take to Duval County Household Hazardous Waste facility or schedule a special pickup through COJ.',
    },
    {
      title: 'Batteries',
      icon: AlertTriangle,
      color: 'red',
      items: [
        'Car batteries (lead-acid)',
        'Lithium-ion batteries',
        'Rechargeable batteries',
        'Industrial batteries',
        'Alkaline batteries (large quantities)',
      ],
      disposal:
        'Auto parts stores accept car batteries. Electronics retailers accept rechargeable batteries. Many home improvement stores have battery recycling.',
    },
    {
      title: 'Pressurized Containers',
      icon: AlertTriangle,
      color: 'red',
      items: [
        'Propane tanks (any size)',
        'Compressed gas cylinders',
        'Fire extinguishers',
        'Aerosol cans with contents',
        'Helium tanks',
      ],
      disposal:
        'Propane tanks can be exchanged at many retailers. Fire extinguishers and compressed gas cylinders require specialized recycling.',
    },
    {
      title: 'Electronics (E-Waste)',
      icon: XCircle,
      color: 'yellow',
      items: [
        'Televisions',
        'Computer monitors',
        'Desktop and laptop computers',
        'Printers and copiers',
        'Cell phones and tablets',
        'DVD players and gaming consoles',
      ],
      disposal:
        'Best Buy offers free electronics recycling. Many Office Depot locations accept computers and printers. Check for local e-waste collection events.',
    },
    {
      title: 'Appliances with Refrigerants',
      icon: XCircle,
      color: 'yellow',
      items: [
        'Refrigerators',
        'Freezers',
        'Air conditioners (window and central)',
        'Dehumidifiers',
        'Water coolers',
        'Mini fridges',
      ],
      disposal:
        'These appliances CAN be accepted if a certified technician has removed the refrigerants and you have documentation. Otherwise, contact an appliance recycler or scrap metal dealer.',
    },
    {
      title: 'Tires',
      icon: XCircle,
      color: 'yellow',
      items: [
        'Car tires',
        'Truck tires',
        'Motorcycle tires',
        'Bicycle tires (large quantities)',
        'Tires on rims',
      ],
      disposal:
        'Tire retailers typically accept old tires for a fee. Some landfills have separate tire collection. Check with local recycling facilities.',
    },
    {
      title: 'Medical & Biological Waste',
      icon: AlertTriangle,
      color: 'red',
      items: [
        'Syringes and needles (sharps)',
        'Prescription medications',
        'Medical equipment',
        'Biohazardous materials',
        'Blood and body fluids',
      ],
      disposal:
        'Pharmacies accept unused medications. Sharps containers should be taken to designated medical waste facilities. Contact your doctor or hospital for guidance.',
    },
    {
      title: 'Other Prohibited Items',
      icon: XCircle,
      color: 'yellow',
      items: [
        'Asbestos-containing materials',
        'Fluorescent light bulbs and tubes',
        'Mercury thermometers',
        'Hot water heaters (some locations)',
        'Railroad ties',
        'Toxic substances',
      ],
      disposal:
        'These items require specialized handling. Contact your local waste management authority for proper disposal options.',
    },
  ]

  const acceptedItems = [
    'Household furniture',
    'Mattresses and box springs',
    'Appliances (without refrigerants)',
    'Carpeting and padding',
    'Wood and lumber',
    'Drywall and plaster',
    'Roofing materials (shingles)',
    'Concrete and brick (limited quantities)',
    'Yard waste and landscaping debris',
    'General household junk',
    'Clothing and textiles',
    'Cardboard and paper',
    'Plastic items',
    'Metal items',
    'Toys and sporting goods',
    'Kitchen items (non-hazardous)',
  ]

  return (
    <>
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

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/frequently-asked-questions" className="hover:text-white">
              Resources
            </Link>
            <span>/</span>
            <span className="text-white">Prohibited Items</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Prohibited <span className="text-primary">Items</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Certain items cannot be disposed of in dumpsters due to safety and environmental
            regulations. Review this list before loading your dumpster.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-center gap-4 text-white">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-center font-medium">
              Placing prohibited items in a dumpster may result in additional fees and delays.
              When in doubt, call us first!
            </p>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Not Allowed
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              Items That Cannot Go in the Dumpster
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {prohibitedCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.title}
                  className={`rounded-2xl p-8 border-2 ${
                    category.color === 'red'
                      ? 'border-red-200 bg-red-50'
                      : 'border-yellow-200 bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        category.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          category.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{category.title}</h3>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-secondary text-sm">
                          How to dispose:
                        </span>
                        <p className="text-gray-600 text-sm mt-1">{category.disposal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What IS Accepted */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Accepted Items
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
              What CAN Go in the Dumpster
            </h2>
            <p className="text-gray-600 text-lg">
              Most common household and construction debris is accepted.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5">
            <div className="grid sm:grid-cols-2 gap-4">
              {acceptedItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-secondary mb-2">Note About Heavy Materials</h4>
                <p className="text-gray-600">
                  Concrete, brick, and soil are accepted but in limited quantities due to weight.
                  These materials are very heavy and can quickly reach weight limits. We recommend
                  filling no more than 1/4 of a 10-yard dumpster with heavy materials. Call us for
                  guidance on disposing of large amounts of concrete or masonry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Not Sure About an Item?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            When in doubt, give us a call before throwing it in the dumpster. We are happy to
            help you determine the proper disposal method.
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
              href="/frequently-asked-questions"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              View FAQ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
