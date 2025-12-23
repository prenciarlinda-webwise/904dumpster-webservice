'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronRight, MapPin, Wrench, BookOpen, ArrowRight } from 'lucide-react'
import {
  BUSINESS,
  NAV_LINKS,
  SERVICES_MAIN,
  SERVICES_BY_SIZE,
  SERVICES_APPROPRIATE_FOR,
  LOCATIONS_JAX_CORE,
  LOCATIONS_ST_JOHNS,
  LOCATIONS_CLAY_NASSAU,
  RESOURCES,
} from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Only use transparent header on homepage
  const isHomePage = pathname === '/'
  const useTransparentHeader = isHomePage && !scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveMenu(null)
  }

  const toggleSubmenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <>
      {/* Floating Call Button - Mobile */}
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/30 hover:scale-110 transition-transform duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          useTransparentHeader
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
        }`}
      >
        {/* Top Bar - Desktop (only on homepage, before scroll) */}
        {isHomePage && (
          <div
            className={`hidden lg:block transition-all duration-500 overflow-hidden ${
              scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
            }`}
          >
            <div className="bg-secondary/95 backdrop-blur-sm text-white py-2.5">
              <div className="max-w-7xl mx-auto px-6 flex justify-center items-center text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>{BUSINESS.hours.weekday}</span>
                  <span className="text-gray-500">|</span>
                  <span>{BUSINESS.hours.weekend}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/904-dumpsters-logo.png"
                alt="904 Dumpster - Dumpster Rental Jacksonville"
                width={180}
                height={50}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Horizontal */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => ('hasMegaMenu' in link || 'hasDropdown' in link) ? setActiveMenu(link.label) : null}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2.5 font-medium transition-all duration-300 rounded-full ${
                      useTransparentHeader
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                    {('hasMegaMenu' in link || 'hasDropdown' in link) && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeMenu === link.label ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Services Mega Menu */}
                  {link.label === 'Services' && activeMenu === 'Services' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                      <div className="w-[800px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 border-b border-gray-100">
                          <div className="text-xl font-bold text-secondary">Our Services</div>
                          <p className="text-gray-500 text-sm mt-1">Find the perfect dumpster for your project</p>
                        </div>
                        <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
                          {/* Services */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <Wrench className="w-4 h-4 text-primary" />
                              </div>
                              Services
                            </div>
                            <ul className="space-y-1">
                              {SERVICES_MAIN.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-1">
                                      <span className="font-semibold text-secondary group-hover/item:text-primary transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="block text-xs text-gray-400 mt-0.5">{item.description}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dumpster Sizes */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <Wrench className="w-4 h-4 text-primary" />
                              </div>
                              Dumpster Sizes
                            </div>
                            <ul className="space-y-1">
                              {SERVICES_BY_SIZE.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-1">
                                      <span className="font-semibold text-secondary group-hover/item:text-primary transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="block text-xs text-gray-400 mt-0.5">{item.description}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Appropriate For */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <Wrench className="w-4 h-4 text-primary" />
                              </div>
                              Appropriate For
                            </div>
                            <ul className="space-y-1">
                              {SERVICES_APPROPRIATE_FOR.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-1">
                                      <span className="font-semibold text-secondary group-hover/item:text-primary transition-colors">
                                        {item.label}
                                      </span>
                                      <span className="block text-xs text-gray-400 mt-0.5">{item.description}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Locations Mega Menu */}
                  {link.label === 'Locations' && activeMenu === 'Locations' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                      <div className="w-[700px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 border-b border-gray-100">
                          <div className="text-xl font-bold text-secondary">Service Areas</div>
                          <p className="text-gray-500 text-sm mt-1">Proudly serving the greater Jacksonville area</p>
                        </div>
                        <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
                          {/* Jacksonville Core */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <MapPin className="w-4 h-4 text-primary" />
                              </div>
                              Jacksonville
                            </div>
                            <ul className="space-y-1">
                              {LOCATIONS_JAX_CORE.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="font-medium text-gray-600 group-hover/item:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* St. Johns & South */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <MapPin className="w-4 h-4 text-primary" />
                              </div>
                              St. Johns
                            </div>
                            <ul className="space-y-1">
                              {LOCATIONS_ST_JOHNS.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="font-medium text-gray-600 group-hover/item:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Clay & Nassau */}
                          <div className="p-6">
                            <div className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <div className="p-1.5 bg-primary/10 rounded-lg">
                                <MapPin className="w-4 h-4 text-primary" />
                              </div>
                              Clay & Nassau
                            </div>
                            <ul className="space-y-1">
                              {LOCATIONS_CLAY_NASSAU.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="group/item flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="font-medium text-gray-600 group-hover/item:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 border-t border-gray-100">
                          <Link
                            href="/locations"
                            className="flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                          >
                            View All Service Areas
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resources Dropdown */}
                  {link.label === 'Resources' && activeMenu === 'Resources' && (
                    <div className="absolute top-full right-0 pt-4">
                      <div className="w-72 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                        <div className="p-2">
                          {RESOURCES.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              <div className="p-2 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                                <BookOpen className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <span className="font-semibold text-secondary group-hover/item:text-primary transition-colors">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-gray-400 mt-0.5">{item.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Desktop CTA */}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="ml-6 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                useTransparentHeader ? 'text-white hover:bg-white/10' : 'text-secondary hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Menu Panel - Slides from right */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/images/904-dumpsters-logo.png"
              alt="904 Dumpster - Dumpster Rental Jacksonville"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-secondary hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-80px)] pb-32">
            <nav className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {'hasMegaMenu' in link || 'hasDropdown' in link ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.label)}
                        className="w-full flex items-center justify-between p-4 rounded-xl text-secondary font-semibold hover:bg-gray-50 transition-colors"
                      >
                        {link.label}
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            activeMenu === link.label ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      {/* Mobile Services Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          link.label === 'Services' && activeMenu === 'Services'
                            ? 'max-h-[1000px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-4 py-4">
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              Services
                            </div>
                            {SERVICES_MAIN.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              Dumpster Sizes
                            </div>
                            {SERVICES_BY_SIZE.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              Appropriate For
                            </div>
                            {SERVICES_APPROPRIATE_FOR.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Locations Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          link.label === 'Locations' && activeMenu === 'Locations'
                            ? 'max-h-[800px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-4 py-4">
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              Jacksonville Core
                            </div>
                            {LOCATIONS_JAX_CORE.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              St. Johns & South
                            </div>
                            {LOCATIONS_ST_JOHNS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">
                              Clay & Nassau
                            </div>
                            {LOCATIONS_CLAY_NASSAU.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Resources Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          link.label === 'Resources' && activeMenu === 'Resources'
                            ? 'max-h-[400px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-4 pl-4 border-l-2 border-primary/20 py-4">
                          {RESOURCES.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2.5 text-gray-600 hover:text-primary transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block p-4 rounded-xl text-secondary font-semibold hover:bg-gray-50 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-gray-100 mt-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-primary/25 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <p className="text-center text-gray-400 text-sm mt-3">
                {BUSINESS.hours.weekday}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className={isHomePage ? 'h-16 lg:h-32' : 'h-16 lg:h-20'} />
    </>
  )
}
