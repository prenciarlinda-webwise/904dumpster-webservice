import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Ensure consistent URLs without trailing slashes
  trailingSlash: false,

  // Enable image optimization
  images: {
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
      // SITEMAP & WORDPRESS ARTIFACTS
      // ========================================================================
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/.lsrecap/recaptcha', destination: '/', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/wishlist', destination: '/', permanent: true },
      { source: '/my-account', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
      { source: '/shop', destination: '/', permanent: true },

      // ========================================================================
      // BLOG & CONTENT
      // ========================================================================
      { source: '/blog/page/:page*', destination: '/blog', permanent: true },
      { source: '/category/waste-management-guidelines', destination: '/blog', permanent: true },
      { source: '/category/dumpster-rental-tips', destination: '/blog', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/best-time-to-rent-dumpster-jacksonville', destination: '/blog', permanent: true },
      { source: '/what-can-and-cannot-go-in-dumpster-jacksonville', destination: '/blog/what-cannot-go-in-dumpster', permanent: true },
      { source: '/what-can-and-cant-go-in-a-dumpster', destination: '/blog/what-cannot-go-in-dumpster', permanent: true },

      // ========================================================================
      // 10-YARD DUMPSTER
      // ========================================================================
      { source: '/rentals/10-yard-dumpster', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/product-category/10-yard-dumpster', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/everything-you-need-to-know-about-10-yard-dumpster-rental', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/10-yard-dumpster-rental-jacksonville-fl', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/10-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/tag/10-yard-dumpster-rental', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/tag/10-yard-dumpster-rental-in-jacksonville', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/small-dumpster-rentals-jacksonville', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/small-dumpster-rental-in-jacksonville-fl-a-homeowners-guide-to-clean-easy-waste', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/small-dumpster-rental-in-jacksonville-fl-a-homeowners-guide-to-clean-easy-waste-removal', destination: '/10-yard-dumpster-rental', permanent: true },

      // ========================================================================
      // 15-YARD DUMPSTER
      // ========================================================================
      { source: '/15', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/rentals/15-yard-dumpster', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/product-category/15-yard-dumpster', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/15-yard-dumpster-rental-a-practical-solution-for-your-cleanup-projects', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/15-yard-dumpster-rental-yulee-fl', destination: '/15-yard-dumpster-rental', permanent: true },

      // ========================================================================
      // 20-YARD DUMPSTER
      // ========================================================================
      { source: '/rentals/20-yard-dumpster', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/product-category/20-yard-dumpster', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/20-yard-dumpster-rental-guide', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/a-complete-guide-to-20-yard-dumpster-rental', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/20-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/tag/20-yard-dumpster-rental', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/large-dumpster-rental', destination: '/20-yard-dumpster-rental', permanent: true },

      // ========================================================================
      // SIZE GUIDE
      // ========================================================================
      { source: '/dumpster-size-guideline', destination: '/dumpster-size-guide', permanent: true },
      { source: '/product-category/dumpster-sizes', destination: '/dumpster-size-guide', permanent: true },
      { source: '/understanding-roll-off-dumpster-sizes-for-jacksonville-projects-2', destination: '/dumpster-size-guide', permanent: true },
      { source: '/10-yard-vs-20-yard-dumpster-jacksonville', destination: '/dumpster-size-guide', permanent: true },
      { source: '/10-yard-dumpster-vs-20-yard-dumpster-rental-choosing-the-right-size-for-your', destination: '/dumpster-size-guide', permanent: true },
      { source: '/what-size-dumpster-jacksonville', destination: '/dumpster-size-guide', permanent: true },
      { source: '/what-is-the-most-common-dumpster-rental', destination: '/dumpster-size-guide', permanent: true },
      { source: '/tag/what-size-dumpster-jacksonville', destination: '/dumpster-size-guide', permanent: true },
      { source: '/dumpster-bag-rental-guide', destination: '/dumpster-size-guide', permanent: true },
      { source: '/dumpster-bag-rental-bryceville-fl', destination: '/dumpster-size-guide', permanent: true },
      { source: '/tag/dumpster-bag-rental-in-bryceville', destination: '/', permanent: true },

      // ========================================================================
      // COMMERCIAL DUMPSTER
      // ========================================================================
      { source: '/commercial-dumpster-rental-guide', destination: '/commercial-dumpster-rental', permanent: true },
      { source: '/commercial-dumpster-rentals-jacksonville', destination: '/commercial-dumpster-rental', permanent: true },

      // ========================================================================
      // CONSTRUCTION DUMPSTER
      // ========================================================================
      { source: '/construction-dumpster-rental-your-ultimate-guide-to-hassle-free-cleanup', destination: '/construction-dumpster-rental', permanent: true },
      { source: '/construction-dumpster-rental-fleming-island-fl', destination: '/construction-dumpster-rental', permanent: true },
      { source: '/category/construction-cleanup-tips', destination: '/construction-dumpster-rental', permanent: true },
      { source: '/tag/construction-dumpster-rental', destination: '/construction-dumpster-rental', permanent: true },
      { source: '/post-construction-cleanup-checklist-what-to-do-before-returning-to-the-site', destination: '/construction-dumpster-rental', permanent: true },

      // ========================================================================
      // RESIDENTIAL DUMPSTER
      // ========================================================================
      { source: '/residential-dumpster-rentals-made-easy-a-complete-overview', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/residential-dumpster-rental-jacksonville-home-cleanup', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/residential-dumpster-rental-jacksonville', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/residential-dumpster-rental-guide', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/tag/residential-dumpster-rental', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/moving-cleanup-dumpster-jacksonville', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/tag/moving-cleanup-dumpster-jacksonville', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/jacksonville-spring-cleaning-dumpster', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/tag/jacksonville-spring-cleaning-with-a-dumpster', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/jacksonville-dumpster-rentals-storm-yard-cleanup', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/dumpster-rental/dumpsters-for-property-owners', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/dumpster-rental/dumpsters-for-home-cleanouts', destination: '/residential-dumpster-rental', permanent: true },

      // ========================================================================
      // JUNK REMOVAL
      // ========================================================================
      { source: '/junk-removal', destination: '/junk-removal-jacksonville', permanent: true },
      { source: '/reliable-junk-removal-services', destination: '/junk-removal-jacksonville', permanent: true },
      { source: '/dumpster-vs-junk-removal-jacksonville', destination: '/junk-removal-jacksonville', permanent: true },
      { source: '/tag/junk-removal-service', destination: '/junk-removal-jacksonville', permanent: true },

      // ========================================================================
      // DEMOLITION
      // ========================================================================
      { source: '/demolition-services', destination: '/demolition-services-jacksonville', permanent: true },

      // ========================================================================
      // PRICING
      // ========================================================================
      { source: '/dumpster-rental-prices-in-jacksonville-cost-breakdown', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental-pricing-guide', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/how-much-is-a-dumpster-rental', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental-jacksonville-fl', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/cheap-dumpster-rental-near-me', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/dumpster-rental-near-me-jacksonville', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-and-reliable-cheap-dumpster-rental-near-me-for-every-project', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/cheap-dumpster-rental-smart-ways-to-save-on-waste-disposal', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental-in-jacksonville-fl-everything-you-need-to-know', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/tag/cheap-dumpster-rental-near-me', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },

      // ========================================================================
      // LOCATION: ST. AUGUSTINE
      // ========================================================================
      { source: '/dumpster-rental-in-st-augustine-fl-your-guide-to-easy-and-affordable-waste-solutions', destination: '/dumpster-rental-st-augustine-fl', permanent: true },
      { source: '/roll-off-dumpster-rental-st-augustine', destination: '/dumpster-rental-st-augustine-fl', permanent: true },
      { source: '/dumpster-rental-in-st-augustine', destination: '/dumpster-rental-st-augustine-fl', permanent: true },
      { source: '/tag/dumpster-rental-in-st-augustine', destination: '/dumpster-rental-st-augustine-fl', permanent: true },

      // ========================================================================
      // LOCATION: MIDDLEBURG
      // ========================================================================
      { source: '/dumpster-rental-middleburg-fl-ultimate-guide-easy-waste-removal', destination: '/dumpster-rental-middleburg-fl', permanent: true },
      { source: '/dumpster-rental-in-middleburg-fl-your-complete-guide', destination: '/dumpster-rental-middleburg-fl', permanent: true },

      // ========================================================================
      // LOCATION: NEPTUNE BEACH
      // ========================================================================
      { source: '/dumpster-rental-in-neptune-beach-fl', destination: '/dumpster-rental-neptune-beach-fl', permanent: true },
      { source: '/dumpster-rental-in-neptune-beach-fl-2', destination: '/dumpster-rental-neptune-beach-fl', permanent: true },

      // ========================================================================
      // LOCATION: ATLANTIC BEACH
      // ========================================================================
      { source: '/trash-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/rent-a-dumpster-in-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/dumpster-now-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/tag/rent-a-dumpster-in-atlantic-beach', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },

      // ========================================================================
      // LOCATION: JACKSONVILLE BEACH
      // ========================================================================
      { source: '/your-ultimate-guide-to-dumpster-rental-in-jacksonville-beach-fl', destination: '/dumpster-rental-jacksonville-beach-fl', permanent: true },

      // ========================================================================
      // LOCATION: PONTE VEDRA
      // ========================================================================
      { source: '/reliable-dumpster-rental-ponte-vedra-beach-fl', destination: '/dumpster-rental-ponte-vedra-fl', permanent: true },
      { source: '/dumpster-rental-ponte-vedra-beach-fl', destination: '/dumpster-rental-ponte-vedra-fl', permanent: true },
      { source: '/tag/dumpster-rental-ponte-vedra-beach', destination: '/dumpster-rental-ponte-vedra-fl', permanent: true },

      // ========================================================================
      // LOCATION: GREEN COVE SPRINGS
      // ========================================================================
      { source: '/cheap-dumpster-rental-green-cove-spring-fl', destination: '/dumpster-rental-green-cove-springs-fl', permanent: true },

      // ========================================================================
      // LOCATION: FERNANDINA BEACH
      // ========================================================================
      { source: '/small-dumpster-rental-fernandina-beach-fl', destination: '/dumpster-rental-fernandina-beach-fl', permanent: true },
      { source: '/tag/small-dumpster-rental-in-fernandina-beach-fl', destination: '/dumpster-rental-fernandina-beach-fl', permanent: true },

      // ========================================================================
      // JACKSONVILLE GENERIC → HOME
      // ========================================================================
      { source: '/dumpster-rental', destination: '/', permanent: true },
      { source: '/dumpster-rental-service', destination: '/', permanent: true },
      { source: '/dumpster-rental-jacksonville-fl', destination: '/', permanent: true },
      { source: '/dumpster-rental-jacksonville-florida', destination: '/', permanent: true },
      { source: '/dumpster-rental/jacksonville-fl', destination: '/', permanent: true },
      { source: '/dumpster-service-jacksonville-fl', destination: '/', permanent: true },
      { source: '/dumpster-now-fast-reliable-dumpster-rental', destination: '/', permanent: true },
      { source: '/waste-management-dumpster-rental-in-jacksonville-fl', destination: '/', permanent: true },
      { source: '/why-dumpster-rental-is-a-smart-choice-for-your-cleanup-project', destination: '/', permanent: true },
      { source: '/jacksonville-roll-off-dumpster-rentals-tips-key-info', destination: '/', permanent: true },
      { source: '/dumpster-rental-in-jacksonville-fl-what-you-need-to-know', destination: '/', permanent: true },
      { source: '/roll-off-dumpster-rental-jacksonville-fl', destination: '/', permanent: true },
      { source: '/reliable-dumpster-for-rent-jacksonville-florida', destination: '/', permanent: true },
      { source: '/ultimate-guide-to-trash-dumpster-rental-in-jacksonville-fl', destination: '/', permanent: true },
      { source: '/trash-dumpster-rental-service-in-jacksonville-by-dumpster', destination: '/', permanent: true },
      { source: '/how-to-get-a-trash-dumpster-rental-in-jacksonville-fl', destination: '/', permanent: true },
      { source: '/your-guide-to-roll-off-dumpster-rental-in-jacksonville-fl', destination: '/', permanent: true },
      { source: '/dumpster-rental-in-jacksonville-fl-a-helpful-guide-for-homeowners-contractors', destination: '/', permanent: true },
      { source: '/local-dumpster-rental-how-to-choose-the-right-service-for-your-project', destination: '/', permanent: true },
      { source: '/thinking-about-renting-a-dumpster-heres-everything-you-should-know', destination: '/', permanent: true },
      { source: '/how-to-find-the-best-local-dumpster-rental-for-your-project', destination: '/', permanent: true },
      { source: '/904-dumpster-directories', destination: '/', permanent: true },
      { source: '/website-and-seo', destination: '/', permanent: true },
      { source: '/services', destination: '/', permanent: true },

      // ========================================================================
      // TAG PAGES → HOME
      // ========================================================================
      { source: '/tag/dumpster-now', destination: '/', permanent: true },
      { source: '/tag/dumpster-rental-in-jacksonville-florida', destination: '/', permanent: true },
      { source: '/tag/dumpster-service-jacksonville-fl', destination: '/', permanent: true },
      { source: '/tag/fl', destination: '/', permanent: true },
      { source: '/tag/roll-off-dumpster-rental-in-jacksonville-fl', destination: '/', permanent: true },
      { source: '/tag/roll-off-dumpster-rental-jacksonville-fl', destination: '/', permanent: true },

      // ========================================================================
      // LEGAL & UTILITY
      // ========================================================================
      { source: '/terms-and-conditions', destination: '/terms-of-service', permanent: true },
      { source: '/faq', destination: '/frequently-asked-questions', permanent: true },
      { source: '/how-dumpster-rental-works', destination: '/frequently-asked-questions', permanent: true },
    ]
  },
}

export default nextConfig