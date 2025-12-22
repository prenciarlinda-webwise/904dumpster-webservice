import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { BLOG_CATEGORIES, BLOG_POSTS, getBlogPostsByCategory } from '@/data/blog'
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Blog',
  description:
    'Dumpster rental tips, home improvement guides, and Jacksonville waste disposal information.',
  alternates: {
    canonical: 'https://www.904dumpster.com/blog',
  },
}

export default function BlogPage() {
  const blogCollectionSchema = generateBlogCollectionSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Blog', url: 'https://www.904dumpster.com/blog' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Dumpster Rental <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert tips, guides, and local insights to help you tackle your next project in
            Jacksonville and Northeast Florida.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts by Category */}
      {BLOG_CATEGORIES.map((category) => {
        const posts = getBlogPostsByCategory(category.slug)
        if (posts.length === 0) return null

        return (
          <section
            key={category.slug}
            id={category.slug}
            className="py-20 lg:py-28 bg-white even:bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className="mb-12">
                <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  {category.name}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                  {category.description}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Now that you have the knowledge, let us help you with the dumpster. Same-day delivery
            available throughout Jacksonville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9042405598"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
            >
              Call (904) 240-5598
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
