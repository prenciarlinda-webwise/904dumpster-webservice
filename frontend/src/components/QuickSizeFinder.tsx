'use client'

import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Truck,
  CheckCircle2,
  Home,
  HardHat,
  Building2,
  Trash2,
  Hammer,
  TreePine,
  RotateCcw
} from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

// Project types with recommended dumpster sizes
const PROJECT_TYPES = [
  {
    id: 'cleanout',
    icon: Home,
    label: 'Home Cleanout',
    description: 'Garage, attic, or basement',
    recommended: '10',
    alt: '15',
  },
  {
    id: 'renovation',
    icon: Hammer,
    label: 'Renovation',
    description: 'Kitchen, bathroom, flooring',
    recommended: '15',
    alt: '20',
  },
  {
    id: 'roofing',
    icon: Building2,
    label: 'Roofing Project',
    description: 'Shingle removal & replacement',
    recommended: '15',
    alt: '20',
  },
  {
    id: 'construction',
    icon: HardHat,
    label: 'Construction',
    description: 'New build or major remodel',
    recommended: '20',
    alt: '15',
  },
  {
    id: 'yard',
    icon: TreePine,
    label: 'Yard Waste',
    description: 'Landscaping & tree debris',
    recommended: '10',
    alt: '15',
  },
  {
    id: 'junk',
    icon: Trash2,
    label: 'Junk Removal',
    description: 'General debris & trash',
    recommended: '10',
    alt: '15',
  },
]

const DUMPSTER_INFO: Record<string, { price: string; dimensions: string; capacity: string }> = {
  '10': {
    price: '$275',
    dimensions: "12' L × 8' W × 3.5' H",
    capacity: '3-4 pickup truck loads',
  },
  '15': {
    price: '$325',
    dimensions: "16' L × 8' W × 4' H",
    capacity: '5-6 pickup truck loads',
  },
  '20': {
    price: '$375',
    dimensions: "22' L × 8' W × 4.5' H",
    capacity: '7-8 pickup truck loads',
  },
}

type ViewState = 'select' | 'result'

export function QuickSizeFinder() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [viewState, setViewState] = useState<ViewState>('select')

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    setViewState('result')
  }

  const handleReset = () => {
    setSelectedProject(null)
    setViewState('select')
  }

  const project = PROJECT_TYPES.find(p => p.id === selectedProject)
  const recommended = project ? DUMPSTER_INFO[project.recommended] : null

  // Result View - Show recommendation
  if (viewState === 'result' && project && recommended) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-secondary mb-2">
            We Recommend
          </h2>
          <p className="text-gray-500">Based on your {project.label.toLowerCase()} project</p>
        </div>

        {/* Recommendation Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-4xl font-black">{project.recommended}</span>
              <span className="text-white/80 ml-1">Yard Dumpster</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{recommended.price}</div>
              <div className="text-white/60 text-sm">Starting price</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{recommended.dimensions}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{recommended.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>5-day rental included</span>
            </div>
          </div>
        </div>

        {/* Alternative Size */}
        <p className="text-center text-gray-500 text-sm mb-4">
          Need more space? Consider our{' '}
          <span className="font-semibold text-primary">{project.alt}-yard</span> option
        </p>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now: {BUSINESS.phone}
          </a>

          <a
            href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Book Online Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="w-full mt-4 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          Start over
        </button>
      </div>
    )
  }

  // Default Select View
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Find Your Size</h2>
        <p className="text-gray-500">What type of project are you working on?</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {PROJECT_TYPES.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectSelect(project.id)}
            className="group text-left p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <project.icon className="w-6 h-6 text-primary mb-2" />
            <div className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors">
              {project.label}
            </div>
            <div className="text-gray-400 text-xs">{project.description}</div>
          </button>
        ))}
      </div>

      {/* Quick Call CTA */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-center text-gray-500 text-sm mb-3">Not sure? We&apos;ll help you choose</p>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          <Phone className="w-5 h-5" />
          {BUSINESS.phone}
        </a>
      </div>

      {/* Mini Trust Signals */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Shield className="w-4 h-4" /> Licensed
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> 7 Days/Week
        </span>
        <span className="flex items-center gap-1">
          <Truck className="w-4 h-4" /> Same-Day
        </span>
      </div>
    </div>
  )
}
