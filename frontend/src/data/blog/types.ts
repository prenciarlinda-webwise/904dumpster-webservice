export interface BlogCategory {
  slug: string
  name: string
  description: string
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
  content: string
  tags: string[]
  status: 'published' | 'scheduled' | 'draft'
  relatedSlugs?: string[]
}
