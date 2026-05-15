import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'export',

  // Ensure consistent URLs without trailing slashes
  trailingSlash: false,

  // Enable image optimization
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // ============================================================================
  // 904 DUMPSTER - COMPREHENSIVE REDIRECT MAP
  // Updated: January 3, 2026
  // Note: trailingSlash: false handles all trailing slash variations automatically
  // ============================================================================
  async redirects() {
    return [
      // ========================================================================
      // SLUG MIGRATIONS (localized service URLs - "/[service]-jacksonville-fl")
      // ========================================================================
      { source: '/construction-dumpster-rental', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/construction-dumpster-rental-jacksonville', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/residential-dumpster-rental', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/commercial-dumpster-rental', destination: '/commercial-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/concrete-disposal-dumpster', destination: '/concrete-disposal-dumpster-jacksonville-fl', statusCode: 301 },
      { source: '/junk-removal-jacksonville', destination: '/junk-removal-jacksonville-fl', statusCode: 301 },
      { source: '/demolition-services-jacksonville', destination: '/demolition-services-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // SITEMAP & WORDPRESS ARTIFACTS
      // ========================================================================
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/.lsrecap/recaptcha', destination: '/', statusCode: 301 },
      { source: '/cart', destination: '/', statusCode: 301 },
      { source: '/checkout', destination: '/', statusCode: 301 },
      { source: '/wishlist', destination: '/', statusCode: 301 },
      { source: '/my-account', destination: '/', statusCode: 301 },
      { source: '/feed', destination: '/', statusCode: 301 },
      { source: '/comments/feed', destination: '/', statusCode: 301 },
      { source: '/shop', destination: '/', statusCode: 301 },

      // ========================================================================
      // BLOG & CONTENT
      // ========================================================================
      { source: '/blog/page/:page*', destination: '/blog', statusCode: 301 },
      { source: '/category/waste-management-guidelines', destination: '/blog', statusCode: 301 },
      { source: '/category/dumpster-rental-tips', destination: '/blog', statusCode: 301 },
      { source: '/resources', destination: '/blog', statusCode: 301 },
      { source: '/best-time-to-rent-dumpster-jacksonville', destination: '/blog', statusCode: 301 },
      { source: '/what-can-and-cannot-go-in-dumpster-jacksonville', destination: '/blog/what-cannot-go-in-dumpster', statusCode: 301 },
      { source: '/what-can-and-cant-go-in-a-dumpster', destination: '/blog/what-cannot-go-in-dumpster', statusCode: 301 },

      // ========================================================================
      // 10-YARD DUMPSTER
      // ========================================================================
      { source: '/rentals/10-yard-dumpster', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/product-category/10-yard-dumpster', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/everything-you-need-to-know-about-10-yard-dumpster-rental', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/10-yard-dumpster-rental-jacksonville-fl', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/10-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
      { source: '/tag/10-yard-dumpster-rental', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/tag/10-yard-dumpster-rental-in-jacksonville', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/small-dumpster-rentals-jacksonville', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/small-dumpster-rental-in-jacksonville-fl-a-homeowners-guide-to-clean-easy-waste', destination: '/10-yard-dumpster-rental', statusCode: 301 },
      { source: '/small-dumpster-rental-in-jacksonville-fl-a-homeowners-guide-to-clean-easy-waste-removal', destination: '/10-yard-dumpster-rental', statusCode: 301 },

      // ========================================================================
      // 15-YARD DUMPSTER
      // ========================================================================
      { source: '/15', destination: '/15-yard-dumpster-rental', statusCode: 301 },
      { source: '/rentals/15-yard-dumpster', destination: '/15-yard-dumpster-rental', statusCode: 301 },
      { source: '/product-category/15-yard-dumpster', destination: '/15-yard-dumpster-rental', statusCode: 301 },
      { source: '/15-yard-dumpster-rental-a-practical-solution-for-your-cleanup-projects', destination: '/15-yard-dumpster-rental', statusCode: 301 },
      { source: '/15-yard-dumpster-rental-yulee-fl', destination: '/15-yard-dumpster-rental', statusCode: 301 },

      // ========================================================================
      // 20-YARD DUMPSTER
      // ========================================================================
      { source: '/rentals/20-yard-dumpster', destination: '/20-yard-dumpster-rental', statusCode: 301 },
      { source: '/product-category/20-yard-dumpster', destination: '/20-yard-dumpster-rental', statusCode: 301 },
      { source: '/20-yard-dumpster-rental-guide', destination: '/20-yard-dumpster-rental', statusCode: 301 },
      { source: '/a-complete-guide-to-20-yard-dumpster-rental', destination: '/20-yard-dumpster-rental', statusCode: 301 },
      { source: '/20-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
      { source: '/tag/20-yard-dumpster-rental', destination: '/20-yard-dumpster-rental', statusCode: 301 },
      { source: '/large-dumpster-rental', destination: '/20-yard-dumpster-rental', statusCode: 301 },

      // ========================================================================
      // SIZE GUIDE
      // ========================================================================
      { source: '/dumpster-size-guideline', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/product-category/dumpster-sizes', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/understanding-roll-off-dumpster-sizes-for-jacksonville-projects-2', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/10-yard-vs-20-yard-dumpster-jacksonville', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/10-yard-dumpster-vs-20-yard-dumpster-rental-choosing-the-right-size-for-your', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/what-size-dumpster-jacksonville', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/what-is-the-most-common-dumpster-rental', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/tag/what-size-dumpster-jacksonville', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/dumpster-bag-rental-guide', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/dumpster-bag-rental-bryceville-fl', destination: '/dumpster-size-guide', statusCode: 301 },
      { source: '/tag/dumpster-bag-rental-in-bryceville', destination: '/', statusCode: 301 },

      // ========================================================================
      // COMMERCIAL DUMPSTER
      // ========================================================================
      { source: '/commercial-dumpster-rental-guide', destination: '/commercial-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/commercial-dumpster-rentals-jacksonville', destination: '/commercial-dumpster-rental-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // CONSTRUCTION DUMPSTER
      // ========================================================================
      { source: '/construction-dumpster-rental-your-ultimate-guide-to-hassle-free-cleanup', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/construction-dumpster-rental-fleming-island-fl', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/category/construction-cleanup-tips', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/tag/construction-dumpster-rental', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/post-construction-cleanup-checklist-what-to-do-before-returning-to-the-site', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // RESIDENTIAL DUMPSTER
      // ========================================================================
      { source: '/residential-dumpster-rentals-made-easy-a-complete-overview', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/residential-dumpster-rental-jacksonville-home-cleanup', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/residential-dumpster-rental-jacksonville', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/residential-dumpster-rental-guide', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/tag/residential-dumpster-rental', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/moving-cleanup-dumpster-jacksonville', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/tag/moving-cleanup-dumpster-jacksonville', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/jacksonville-spring-cleaning-dumpster', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/tag/jacksonville-spring-cleaning-with-a-dumpster', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/jacksonville-dumpster-rentals-storm-yard-cleanup', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-property-owners', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-home-cleanouts', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-construction-projects', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-roofing-projects', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-moving-projects', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-rental/dumpsters-for-landscaping-projects', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // JUNK REMOVAL
      // ========================================================================
      { source: '/junk-removal', destination: '/junk-removal-jacksonville-fl', statusCode: 301 },
      { source: '/reliable-junk-removal-services', destination: '/junk-removal-jacksonville-fl', statusCode: 301 },
      { source: '/dumpster-vs-junk-removal-jacksonville', destination: '/junk-removal-jacksonville-fl', statusCode: 301 },
      { source: '/tag/junk-removal-service', destination: '/junk-removal-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // DEMOLITION
      // ========================================================================
      { source: '/demolition-services', destination: '/demolition-services-jacksonville-fl', statusCode: 301 },

      // ========================================================================
      // PRICING
      // ========================================================================
      { source: '/dumpster-rental-prices-in-jacksonville-cost-breakdown', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/affordable-dumpster-rental-pricing-guide', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/how-much-is-a-dumpster-rental', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/affordable-dumpster-rental-jacksonville-fl', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/cheap-dumpster-rental-near-me', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/dumpster-rental-near-me-jacksonville', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/affordable-and-reliable-cheap-dumpster-rental-near-me-for-every-project', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/cheap-dumpster-rental-smart-ways-to-save-on-waste-disposal', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/affordable-dumpster-rental', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/affordable-dumpster-rental-in-jacksonville-fl-everything-you-need-to-know', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
      { source: '/tag/cheap-dumpster-rental-near-me', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },

      // ========================================================================
      // LOCATION: ST. AUGUSTINE
      // ========================================================================
      { source: '/dumpster-rental-in-st-augustine-fl-your-guide-to-easy-and-affordable-waste-solutions', destination: '/dumpster-rental-st-augustine-fl', statusCode: 301 },
      { source: '/roll-off-dumpster-rental-st-augustine', destination: '/dumpster-rental-st-augustine-fl', statusCode: 301 },
      { source: '/dumpster-rental-in-st-augustine', destination: '/dumpster-rental-st-augustine-fl', statusCode: 301 },
      { source: '/tag/dumpster-rental-in-st-augustine', destination: '/dumpster-rental-st-augustine-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: MIDDLEBURG
      // ========================================================================
      { source: '/dumpster-rental-middleburg-fl-ultimate-guide-easy-waste-removal', destination: '/dumpster-rental-middleburg-fl', statusCode: 301 },
      { source: '/dumpster-rental-in-middleburg-fl-your-complete-guide', destination: '/dumpster-rental-middleburg-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: NEPTUNE BEACH
      // ========================================================================
      { source: '/dumpster-rental-in-neptune-beach-fl', destination: '/dumpster-rental-neptune-beach-fl', statusCode: 301 },
      { source: '/dumpster-rental-in-neptune-beach-fl-2', destination: '/dumpster-rental-neptune-beach-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: ATLANTIC BEACH
      // ========================================================================
      { source: '/trash-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
      { source: '/rent-a-dumpster-in-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
      { source: '/dumpster-now-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
      { source: '/tag/rent-a-dumpster-in-atlantic-beach', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: JACKSONVILLE BEACH
      // ========================================================================
      { source: '/your-ultimate-guide-to-dumpster-rental-in-jacksonville-beach-fl', destination: '/dumpster-rental-jacksonville-beach-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: PONTE VEDRA
      // ========================================================================
      { source: '/reliable-dumpster-rental-ponte-vedra-beach-fl', destination: '/dumpster-rental-ponte-vedra-fl', statusCode: 301 },
      { source: '/dumpster-rental-ponte-vedra-beach-fl', destination: '/dumpster-rental-ponte-vedra-fl', statusCode: 301 },
      { source: '/tag/dumpster-rental-ponte-vedra-beach', destination: '/dumpster-rental-ponte-vedra-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: GREEN COVE SPRINGS
      // ========================================================================
      { source: '/cheap-dumpster-rental-green-cove-spring-fl', destination: '/dumpster-rental-green-cove-springs-fl', statusCode: 301 },

      // ========================================================================
      // LOCATION: FERNANDINA BEACH
      // ========================================================================
      { source: '/small-dumpster-rental-fernandina-beach-fl', destination: '/dumpster-rental-fernandina-beach-fl', statusCode: 301 },
      { source: '/tag/small-dumpster-rental-in-fernandina-beach-fl', destination: '/dumpster-rental-fernandina-beach-fl', statusCode: 301 },

      // ========================================================================
      // JACKSONVILLE GENERIC → HOME
      // ========================================================================
      { source: '/dumpster-rental', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental-service', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental-jacksonville-florida', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental/jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/dumpster-service-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/dumpster-now-fast-reliable-dumpster-rental', destination: '/', statusCode: 301 },
      { source: '/waste-management-dumpster-rental-in-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/why-dumpster-rental-is-a-smart-choice-for-your-cleanup-project', destination: '/', statusCode: 301 },
      { source: '/jacksonville-roll-off-dumpster-rentals-tips-key-info', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental-in-jacksonville-fl-what-you-need-to-know', destination: '/', statusCode: 301 },
      { source: '/roll-off-dumpster-rental-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/reliable-dumpster-for-rent-jacksonville-florida', destination: '/', statusCode: 301 },
      { source: '/ultimate-guide-to-trash-dumpster-rental-in-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/trash-dumpster-rental-service-in-jacksonville-by-dumpster', destination: '/', statusCode: 301 },
      { source: '/how-to-get-a-trash-dumpster-rental-in-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/your-guide-to-roll-off-dumpster-rental-in-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/dumpster-rental-in-jacksonville-fl-a-helpful-guide-for-homeowners-contractors', destination: '/', statusCode: 301 },
      { source: '/local-dumpster-rental-how-to-choose-the-right-service-for-your-project', destination: '/', statusCode: 301 },
      { source: '/thinking-about-renting-a-dumpster-heres-everything-you-should-know', destination: '/', statusCode: 301 },
      { source: '/how-to-find-the-best-local-dumpster-rental-for-your-project', destination: '/', statusCode: 301 },
      { source: '/904-dumpster-directories', destination: '/', statusCode: 301 },
      { source: '/website-and-seo', destination: '/', statusCode: 301 },
      { source: '/services', destination: '/', statusCode: 301 },

      // ========================================================================
      // TAG PAGES → HOME
      // ========================================================================
      { source: '/tag/dumpster-now', destination: '/', statusCode: 301 },
      { source: '/tag/dumpster-rental-in-jacksonville-florida', destination: '/', statusCode: 301 },
      { source: '/tag/dumpster-service-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/tag/fl', destination: '/', statusCode: 301 },
      { source: '/tag/roll-off-dumpster-rental-in-jacksonville-fl', destination: '/', statusCode: 301 },
      { source: '/tag/roll-off-dumpster-rental-jacksonville-fl', destination: '/', statusCode: 301 },

      // ========================================================================
      // LEGAL & UTILITY
      // ========================================================================
      { source: '/terms-and-conditions', destination: '/terms-of-service', statusCode: 301 },
      { source: '/faq', destination: '/frequently-asked-questions', statusCode: 301 },
      { source: '/how-dumpster-rental-works', destination: '/frequently-asked-questions', statusCode: 301 },
          { source: '/book-online', destination: 'https://app.icans.ai/customer-portal/904dumpster/book/', statusCode: 301 },
  { source: '/locations/jacksonville-beach-fl', destination: '/dumpster-rental-jacksonville-beach-fl', statusCode: 301 },
  { source: '/locations/jacksonville-fl', destination: '/', statusCode: 301 },
  { source: '/locations/st-augustine-fl', destination: '/dumpster-rental-st-augustine-fl', statusCode: 301 },
  { source: '/locations/atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', statusCode: 301 },
  { source: '/locations/yulee-fl', destination: '/dumpster-rental-fernandina-beach-fl', statusCode: 301 },
  { source: '/services/10-yard-dumpster-rental-up-to-7-days', destination: '/10-yard-dumpster-rental', statusCode: 301 },
  { source: '/services/20-yard-dumpster-rental-up-to-7-days', destination: '/20-yard-dumpster-rental', statusCode: 301 },
  { source: '/services/15-yard-dumpster-rental-jacksonvile-fl', destination: '/15-yard-dumpster-rental', statusCode: 301 },
  { source: '/locations-dumpster-rental-jacksonville-fl-1', destination: '/locations', statusCode: 301 },
  { source: '/dumpster-rental-services', destination: '/', statusCode: 301 },
  { source: '/understanding-roll-off-dumpster-sizes-for-jacksonville-projects', destination: '/dumpster-size-guide', statusCode: 301 },
  { source: '/understanding-roll-off-dumpster-sizes-for-jacksonville-projects/', destination: '/dumpster-size-guide', statusCode: 301 },
  // WordPress author archives - redirect to about page
  { source: '/author/:slug*', destination: '/about', statusCode: 301 },

  // ========================================================================
  // LEGACY BLOG POST /feed VARIANTS & REMAINING 404s
  // ========================================================================
  { source: '/shop/feed', destination: '/', statusCode: 301 },
  { source: '/cheap-dumpster-rental-smart-ways-to-save-on-waste-disposal/feed', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
  { source: '/construction-dumpster-rental-your-ultimate-guide-to-hassle-free-cleanup/feed', destination: '/construction-dumpster-rental-jacksonville-fl', statusCode: 301 },
  { source: '/dumpster-rental-in-jacksonville-fl-what-you-need-to-know/feed', destination: '/', statusCode: 301 },
  { source: '/affordable-dumpster-rental-in-jacksonville-fl-everything-you-need-to-know/feed', destination: '/dumpster-rental-pricing-jacksonville', statusCode: 301 },
  { source: '/residential-dumpster-rentals-made-easy-a-complete-overview/feed', destination: '/residential-dumpster-rental-jacksonville-fl', statusCode: 301 },
  { source: '/how-to-prepare-for-dumpster-delivery-jacksonville', destination: '/frequently-asked-questions', statusCode: 301 },
  { source: '/dumpster-rental-in-jacksonville-fl-guide', destination: '/', statusCode: 301 },

  // Block API endpoint (or redirect to 404)
  { source: '/_api/:path*', destination: '/404', permanent: false },
    ]
  },
}

export default nextConfig
