import { BlogPost, BlogCategory } from './types'
import { BLOG_CATEGORIES } from './categories'
import { BLOG_POSTS } from './all-posts'

/**
 * Returns all posts that should be visible on the site.
 * At build time, filters out drafts and posts scheduled for the future.
 * The cron rebuild is what makes scheduled posts go live.
 */
export function getPublishedPosts(): BlogPost[] {
  const now = new Date()
  return BLOG_POSTS.filter((post) => {
    if (post.status === 'draft') return false
    if (post.status === 'scheduled') {
      return new Date(post.publishedDate) <= now
    }
    return true // 'published' always shows
  })
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return getPublishedPosts().map((post) => post.slug)
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.category === categorySlug)
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug)
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return getPublishedPosts()
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count)
}

/**
 * Get related posts for a given post.
 * Checks relatedSlugs first, falls back to same-category sorted by date.
 */
export function getRelatedPosts(post: BlogPost, count: number = 3): BlogPost[] {
  const published = getPublishedPosts().filter((p) => p.slug !== post.slug)

  // Check manual relatedSlugs first
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    const manual = post.relatedSlugs
      .map((slug) => published.find((p) => p.slug === slug))
      .filter((p): p is BlogPost => p !== undefined)
    if (manual.length >= count) return manual.slice(0, count)
    // Fill remaining with same-category posts
    const remaining = published
      .filter((p) => p.category === post.category && !manual.some((m) => m.slug === p.slug))
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    return [...manual, ...remaining].slice(0, count)
  }

  // Fallback: same category, sorted by date
  const sameCategory = published
    .filter((p) => p.category === post.category)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  if (sameCategory.length >= count) return sameCategory.slice(0, count)

  // Fill with recent posts from other categories
  const otherPosts = published
    .filter((p) => p.category !== post.category)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  return [...sameCategory, ...otherPosts].slice(0, count)
}
