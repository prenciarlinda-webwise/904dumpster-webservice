import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { getPublishedPosts } from '@/data/blog'
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Dumpster Rental Blog',
  description:
    'Dumpster rental tips, home improvement guides, and Jacksonville waste disposal information.',
  keywords: [
    'dumpster rental tips',
    'waste disposal guides',
    'home cleanout tips',
    'jacksonville dumpster blog',
  ],
  alternates: {
    canonical: 'https://www.904dumpster.com/blog',
  },
}

// Sort all published posts by date, newest first
function getAllPostsSorted() {
  return getPublishedPosts().sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
}

export default function BlogPage() {
  const blogCollectionSchema = generateBlogCollectionSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.904dumpster.com' },
    { name: 'Blog', url: 'https://www.904dumpster.com/blog' },
  ])

  const posts = getAllPostsSorted()
  const latestPost = posts[0]
  const remainingPosts = posts.slice(1)

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
              <Link href="/" className="hover:text-white" title="904 Dumpster Home">
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

        {/* Featured / Latest Post */}
        {latestPost && (
          <section className="py-12 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <article className="group bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 w-fit">
                      Latest
                    </span>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(latestPost.publishedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {latestPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${latestPost.slug}`} title={latestPost.title}>{latestPost.title}</Link>
                    </h2>

                    <p className="text-gray-600 mb-6 line-clamp-3">{latestPost.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {latestPost.tags.slice(0, 3).map((tag) => (
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
                      href={`/blog/${latestPost.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all w-fit"
                      title={latestPost.title}
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right - Featured Image */}
                  <div className="relative bg-gradient-to-br from-secondary to-secondary/80 min-h-[250px] md:min-h-0">
                    {latestPost.featuredImage ? (
                      <Image
                        src={latestPost.featuredImage}
                        alt={latestPost.title}
                        title={latestPost.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full p-12">
                        <div className="text-center text-white">
                          <div className="text-6xl font-black text-primary mb-2">904</div>
                          <div className="text-lg font-bold text-white/80">Dumpster Blog</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-secondary">
                All Articles
              </h2>
              <p className="text-gray-500 mt-2">
                {remainingPosts.length} more article{remainingPosts.length !== 1 ? 's' : ''} to explore
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
                >
                  {post.featuredImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        title={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
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
                      <Link href={`/blog/${post.slug}`} title={post.title}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
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
                      title={post.title}
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300"
                title="Book a Dumpster Rental Online"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:9042405598"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
                title="Call 904 Dumpster"
              >
                Call (904) 240-5598
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
