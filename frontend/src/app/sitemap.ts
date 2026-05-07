import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/data/services'
import { getAllLocationSlugs } from '@/data/locations'
import { getPublishedPosts } from '@/data/blog'

const BASE_URL = 'https://www.904dumpster.com'

// Per-page lastModified dates. Bump these when the page's content actually changes,
// not on every build. Avoids signaling daily churn to crawlers when nothing changed.
const PAGE_LAST_MODIFIED: Record<string, string> = {
  home: '2026-05-07',
  about: '2026-04-15',
  contactUs: '2026-04-15',
  locations: '2026-05-07',
  pricing: '2026-05-07',
  faq: '2026-05-01',
  blog: '2026-05-07',
  projectsConstruction: '2026-04-15',
  projectsRoofing: '2026-04-15',
  projectsMoving: '2026-04-15',
  projectsLandscaping: '2026-04-15',
  prohibitedItems: '2026-03-15',
  privacy: '2026-01-15',
  terms: '2026-01-15',
  servicesDefault: '2026-05-07',
  locationsDefault: '2026-05-07',
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with their priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(PAGE_LAST_MODIFIED.home),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(PAGE_LAST_MODIFIED.about),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(PAGE_LAST_MODIFIED.contactUs),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(PAGE_LAST_MODIFIED.locations),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental-pricing-jacksonville`,
      lastModified: new Date(PAGE_LAST_MODIFIED.pricing),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/frequently-asked-questions`,
      lastModified: new Date(PAGE_LAST_MODIFIED.faq),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(PAGE_LAST_MODIFIED.blog),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental/dumpsters-for-construction-projects`,
      lastModified: new Date(PAGE_LAST_MODIFIED.projectsConstruction),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental/dumpsters-for-roofing-projects`,
      lastModified: new Date(PAGE_LAST_MODIFIED.projectsRoofing),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental/dumpsters-for-moving-projects`,
      lastModified: new Date(PAGE_LAST_MODIFIED.projectsMoving),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental/dumpsters-for-landscaping-projects`,
      lastModified: new Date(PAGE_LAST_MODIFIED.projectsLandscaping),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rules/prohibited-items-list`,
      lastModified: new Date(PAGE_LAST_MODIFIED.prohibitedItems),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(PAGE_LAST_MODIFIED.privacy),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(PAGE_LAST_MODIFIED.terms),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic service pages (dumpster sizes, junk removal, demolition, etc.)
  const serviceSlugs = getAllServiceSlugs()
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => {
    // Higher priority for dumpster size pages
    const isDumpsterSize = slug.match(/^\d+-yard-dumpster-rental$/)
    return {
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(PAGE_LAST_MODIFIED.servicesDefault),
      changeFrequency: 'weekly' as const,
      priority: isDumpsterSize ? 0.9 : 0.8,
    }
  })

  // Dynamic location pages
  const locationSlugs = getAllLocationSlugs()
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(PAGE_LAST_MODIFIED.locationsDefault),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog posts with actual published/updated dates (only published ones)
  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages]
}