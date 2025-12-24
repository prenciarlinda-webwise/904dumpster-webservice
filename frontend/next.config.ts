import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

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

  // Redirects for SEO
// Redirects for SEO - The 904 Power Strategy
  async redirects() {
    return [
      // --- PRODUCT HUB CONSOLIDATION ---
      { source: '/everything-you-need-to-know-about-10-yard-dumpster-rental', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/10-yard-dumpster-rental-jacksonville-fl', destination: '/10-yard-dumpster-rental', permanent: true },
      { source: '/rentals/10-yard-dumpster', destination: '/10-yard-dumpster-rental', permanent: true },
      // Removed self-redirect that caused ERR_TOO_MANY_REDIRECTS

      { source: '/15', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/15-yard-dumpster-rental-a-practical-solution-for-your-cleanup-projects', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/rentals/15-yard-dumpster', destination: '/15-yard-dumpster-rental', permanent: true },
      { source: '/15-yard-dumpster-rental-yulee-fl', destination: '/15-yard-dumpster-rental', permanent: true },

      { source: '/20-yard-dumpster-rental-guide', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/a-complete-guide-to-20-yard-dumpster-rental', destination: '/20-yard-dumpster-rental', permanent: true },
      { source: '/rentals/20-yard-dumpster', destination: '/20-yard-dumpster-rental', permanent: true },

      // --- SIZE GUIDE MERGE ---
      { source: '/dumpster-size-guideline', destination: '/dumpster-size-guide', permanent: true },
      { source: '/understanding-roll-off-dumpster-sizes-for-jacksonville-projects-2', destination: '/dumpster-size-guide', permanent: true },
      { source: '/10-yard-vs-20-yard-dumpster-jacksonville', destination: '/dumpster-size-guide', permanent: true },
      { source: '/10-yard-dumpster-vs-20-yard-dumpster-rental-choosing-the-right-size-for-your', destination: '/dumpster-size-guide', permanent: true },
      { source: '/what-size-dumpster-jacksonville', destination: '/dumpster-size-guide', permanent: true },

      // --- LOCATION HUB CONSOLIDATION ---
      { source: '/dumpster-rental-in-st-augustine-fl-your-guide-to-easy-and-affordable-waste-solutions', destination: '/dumpster-rental-st-augustine-fl', permanent: true },
      { source: '/roll-off-dumpster-rental-st-augustine', destination: '/dumpster-rental-st-augustine-fl', permanent: true },
      { source: '/dumpster-rental-in-st-augustine', destination: '/dumpster-rental-st-augustine-fl', permanent: true },

      { source: '/dumpster-rental-middleburg-fl-ultimate-guide-easy-waste-removal', destination: '/dumpster-rental-middleburg-fl', permanent: true },
      { source: '/dumpster-rental-in-middleburg-fl-your-complete-guide', destination: '/dumpster-rental-middleburg-fl', permanent: true },

      { source: '/dumpster-rental-in-neptune-beach-fl', destination: '/dumpster-rental-neptune-beach-fl', permanent: true },
      { source: '/dumpster-rental-in-neptune-beach-fl-2', destination: '/dumpster-rental-neptune-beach-fl', permanent: true },

      { source: '/trash-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/rent-a-dumpster-in-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/10-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },
      { source: '/20-yard-dumpster-rental-atlantic-beach-fl', destination: '/dumpster-rental-atlantic-beach-fl', permanent: true },

      { source: '/reliable-dumpster-rental-ponte-vedra-beach-fl', destination: '/dumpster-rental-ponte-vedra-fl', permanent: true },

      // --- SERVICE HUB CONSOLIDATION ---
      { source: '/commercial-dumpster-rental-guide', destination: '/commercial-dumpster-rental', permanent: true },
      { source: '/commercial-dumpster-rentals-jacksonville', destination: '/commercial-dumpster-rental', permanent: true },

      { source: '/construction-dumpster-rental-your-ultimate-guide-to-hassle-free-cleanup', destination: '/construction-dumpster-rental', permanent: true },
      { source: '/construction-dumpster-rental-fleming-island-fl', destination: '/construction-dumpster-rental', permanent: true },

      { source: '/residential-dumpster-rentals-made-easy-a-complete-overview', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/residential-dumpster-rental-jacksonville-home-cleanup', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/residential-dumpster-rental-jacksonville', destination: '/residential-dumpster-rental', permanent: true },

      { source: '/reliable-junk-removal-services', destination: '/junk-removal-jacksonville', permanent: true },
      { source: '/dumpster-vs-junk-removal-jacksonville', destination: '/junk-removal-jacksonville', permanent: true },

      // --- PRICING & CLEANUP ---
      { source: '/dumpster-rental-prices-in-jacksonville-cost-breakdown', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental-pricing-guide', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/how-much-is-a-dumpster-rental', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/affordable-dumpster-rental-jacksonville-fl', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },
      { source: '/cheap-dumpster-rental-near-me', destination: '/dumpster-rental-pricing-jacksonville', permanent: true },

      // --- THE "THIN CONTENT" DRAIN (Protecting DR by sending back to home) ---
      { source: '/local-dumpster-rental-how-to-choose-the-right-service-for-your-project', destination: '/', permanent: true },
      { source: '/thinking-about-renting-a-dumpster-heres-everything-you-should-know', destination: '/', permanent: true },
      { source: '/904-dumpster-directories', destination: '/', permanent: true },
      { source: '/shop', destination: '/', permanent: true },
      { source: '/website-and-seo', destination: '/', permanent: true },

      // --- 404 FIXES (Dec 2024) ---
      { source: '/services', destination: '/', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/dumpster-rental/dumpsters-for-property-owners', destination: '/residential-dumpster-rental', permanent: true },
      { source: '/dumpster-rental/dumpsters-for-home-cleanouts', destination: '/residential-dumpster-rental', permanent: true },
    ]
  },
}

export default nextConfig