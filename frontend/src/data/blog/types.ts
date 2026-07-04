export interface BlogCategory {
  slug: string
  name: string
  description: string
}

// A real-world entity (Wikipedia-grounded) for Article.about / Article.mentions.
// Lets individual posts override the site-wide generic entity list with ones
// that actually match the post's topic, for accurate AI/search entity grounding.
export interface BlogEntity {
  name: string
  type?: string // schema.org @type, defaults to 'Thing' if omitted ('Place' for locations)
  sameAs: string // canonical URL (Wikipedia) also used as @id
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: string
  author: string
  publishedDate: string
  updatedDate?: string
  readTime: string
  featuredImage?: string
  featuredImageAlt?: string
  content: string
  tags: string[]
  status: 'published' | 'scheduled' | 'draft'
  relatedSlugs?: string[]
  about?: BlogEntity[]
  mentions?: BlogEntity[]
}
