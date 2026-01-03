import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User, Phone } from 'lucide-react'
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  getBlogPostBySlug,
  getAllBlogSlugs,
  getCategoryBySlug,
  getRecentPosts,
} from '@/data/blog'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: '404 - Post Not Found' }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://www.904dumpster.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

// Convert markdown-like content to HTML
function formatContent(content: string): string {
  return content
    .split('\n')
    .map((line) => {
      // Headers
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl md:text-3xl font-black text-secondary mt-12 mb-6">${line.slice(3)}</h2>`
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl md:text-2xl font-bold text-secondary mt-8 mb-4">${line.slice(4)}</h3>`
      }
      // Bold text
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-secondary">$1</strong>')
      // List items
      if (line.startsWith('- ')) {
        return `<li class="flex items-start gap-3 mb-2"><span class="text-primary mt-1.5">•</span><span>${line.slice(2)}</span></li>`
      }
      if (line.match(/^\d+\.\s/)) {
        const text = line.replace(/^\d+\.\s/, '')
        return `<li class="flex items-start gap-3 mb-2"><span class="text-primary font-semibold">${line.match(/^\d+/)?.[0]}.</span><span>${text}</span></li>`
      }
      // Regular paragraphs
      if (line.trim()) {
        return `<p class="text-gray-600 text-lg leading-relaxed mb-4">${line}</p>`
      }
      return ''
    })
    .join('\n')
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const category = getCategoryBySlug(post.category)
  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug)

  // Generate Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: '904 Dumpster - Dumpster Rental Jacksonville',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.904dumpster.com/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 lg:px-6">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">{post.title}</span>
          </nav>

          {category && (
            <span className="inline-block bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              {category.name}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-primary rounded-2xl p-6 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">Need a Dumpster?</h3>
                <p className="text-white/80 mb-6">
                  Same-day delivery available throughout Jacksonville and Northeast Florida.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-secondary hover:text-white transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Recent Posts */}
              {recentPosts.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-6">Recent Articles</h3>
                  <div className="space-y-6">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="block group"
                      >
                        <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                          {recentPost.title}
                        </h4>
                        <span className="text-sm text-gray-500">{recentPost.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Categories</h3>
                <div className="space-y-3">
                  {BLOG_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog#${cat.slug}`}
                      className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get a dumpster delivered to your Jacksonville property as soon as today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Schema Markup - Breadcrumb (critical for site hierarchy) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.904dumpster.com' },
              { name: 'Blog', url: 'https://www.904dumpster.com/blog' },
              { name: post.title, url: `https://www.904dumpster.com/blog/${post.slug}` },
            ])
          ),
        }}
      />
    </div>
  )
}
