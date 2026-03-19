import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User, Phone, BookOpen } from 'lucide-react'
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getCategoryBySlug,
  getRecentPosts,
  getRelatedPosts,
  getPublishedPosts,
} from '@/data/blog'
import type { BlogPost } from '@/data/blog'
import { BUSINESS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import BlogFAQ from '@/components/BlogFAQ'

// Interface for parsed FAQ items
interface FAQItem {
  question: string
  answer: string
}

// Contextual interlink card data
interface InterlinkCard {
  title: string
  description: string
  href: string
  label: string // e.g. "Dumpster Size", "Service", "Location", "Guide"
}

// Build contextual interlink sets based on category and tags
function getContextualInterlinks(post: BlogPost, allPosts: BlogPost[]): { set1: InterlinkCard[]; set2: InterlinkCard[] } {
  const cat = post.category
  const tags = post.tags.join(' ').toLowerCase()

  // Pool of service cards
  const serviceCards: InterlinkCard[] = [
    { title: '10 Yard Dumpster', description: 'From $275 — Small cleanouts, garage projects', href: '/10-yard-dumpster-rental', label: 'Dumpster Size' },
    { title: '15 Yard Dumpster', description: 'From $325 — Renovations, roofing, remodels', href: '/15-yard-dumpster-rental', label: 'Dumpster Size' },
    { title: '20 Yard Dumpster', description: 'From $375 — Large renovations, construction', href: '/20-yard-dumpster-rental', label: 'Most Popular' },
    { title: 'Junk Removal', description: 'We load it for you — Full-service hauling', href: '/junk-removal-jacksonville', label: 'Service' },
    { title: 'Construction Dumpster', description: 'Job site waste — Contractors welcome', href: '/construction-dumpster-rental', label: 'Service' },
    { title: 'Concrete Disposal', description: 'Heavy materials — Brick, block, asphalt', href: '/concrete-disposal-dumpster', label: 'Service' },
    { title: 'Demolition Services', description: 'Professional demo — Sheds, decks, interiors', href: '/demolition-services-jacksonville', label: 'Service' },
    { title: 'Dumpster Size Guide', description: 'Not sure which size? Compare all options', href: '/dumpster-size-guide', label: 'Guide' },
    { title: 'Pricing Guide', description: 'Transparent flat-rate pricing — No hidden fees', href: '/dumpster-rental-pricing-jacksonville', label: 'Pricing' },
  ]

  // Pool of location cards
  const locationCards: InterlinkCard[] = [
    { title: 'Orange Park', description: 'Serving Clay County homeowners & contractors', href: '/dumpster-rental-orange-park-fl', label: 'Location' },
    { title: 'St. Augustine', description: 'Same-day delivery in St. Johns County', href: '/dumpster-rental-st-augustine-fl', label: 'Location' },
    { title: 'Jacksonville Beach', description: 'Dumpster rental at the Beaches', href: '/dumpster-rental-jacksonville-beach-fl', label: 'Location' },
    { title: 'Ponte Vedra', description: 'Serving Ponte Vedra & Nocatee', href: '/dumpster-rental-ponte-vedra-fl', label: 'Location' },
    { title: 'Fleming Island', description: 'HOA-friendly dumpster placement', href: '/dumpster-rental-fleming-island-fl', label: 'Location' },
    { title: 'Fernandina Beach', description: 'Amelia Island & Nassau County', href: '/dumpster-rental-fernandina-beach-fl', label: 'Location' },
    { title: 'Middleburg', description: 'Land clearing & construction projects', href: '/dumpster-rental-middleburg-fl', label: 'Location' },
  ]

  // Pick blog post cards (different category, exclude self)
  const otherPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category !== cat)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6)
  const blogCards: InterlinkCard[] = otherPosts.map(p => ({
    title: p.title.length > 50 ? p.title.slice(0, 47) + '...' : p.title,
    description: p.excerpt.length > 80 ? p.excerpt.slice(0, 77) + '...' : p.excerpt,
    href: `/blog/${p.slug}`,
    label: 'Guide',
  }))

  // Use a deterministic seed from slug to pick consistent cards
  const seed = post.slug.length + post.slug.charCodeAt(0)

  // Set 1 (appears ~3 paragraphs in): Mix of 1 service + 1 guide/size + 1 location
  const svc1 = serviceCards[seed % serviceCards.length]
  const svc2 = serviceCards[(seed + 3) % serviceCards.length]
  const loc1 = locationCards[seed % locationCards.length]

  // Set 2 (appears ~6 paragraphs in): "You might also read" — 3 blog posts
  const blog1 = blogCards[0] || serviceCards[(seed + 1) % serviceCards.length]
  const blog2 = blogCards[1] || serviceCards[(seed + 2) % serviceCards.length]
  const blog3 = blogCards[2] || locationCards[(seed + 1) % locationCards.length]

  // Make sure set1 cards don't link to the current page's own service
  const set1 = [svc1, svc2, loc1].filter(c => !post.slug.includes(c.href.replace('/', '').replace('/blog/', '')))
  while (set1.length < 3) {
    set1.push(locationCards[(seed + set1.length + 2) % locationCards.length])
  }

  return {
    set1: set1.slice(0, 3),
    set2: [blog1, blog2, blog3],
  }
}

// Render an interlink card set as HTML
function renderInterlinkCards(cards: InterlinkCard[], heading: string): string {
  let html = `<div class="my-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">`
  html += `<h4 class="text-lg font-bold text-secondary mb-4">${heading}</h4>`
  html += `<div class="grid sm:grid-cols-3 gap-4">`
  cards.forEach(card => {
    html += `<a href="${card.href}" class="block group bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all no-underline">
      <span class="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full mb-2">${card.label}</span>
      <div class="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-1">${card.title}</div>
      <div class="text-sm text-gray-500">${card.description}</div>
    </a>`
  })
  html += `</div></div>`
  return html
}

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

// Convert markdown-like content to HTML with contextual interlink injection
function formatContent(content: string, interlinkSet1?: string, interlinkSet2?: string, featuredImageHtml?: string): string {
  const lines = content.split('\n')
  const result: string[] = []
  let inTable = false
  let tableRows: string[] = []
  let h2Count = 0
  let injectedSet1 = false
  let injectedSet2 = false
  let injectedImage = false

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    // Check if this is a table row (starts with |)
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      // Skip separator rows (|---|---|)
      if (line.includes('---')) {
        continue
      }

      if (!inTable) {
        inTable = true
        tableRows = []
      }
      tableRows.push(line)
      continue
    } else if (inTable) {
      // End of table, render it
      result.push(renderTable(tableRows))
      inTable = false
      tableRows = []
    }

    // Headers
    if (line.startsWith('## ')) {
      h2Count++

      // Inject featured image after the 1st H2
      if (h2Count === 2 && !injectedImage && featuredImageHtml) {
        result.push(featuredImageHtml)
        injectedImage = true
      }

      // Inject contextual interlink set 1 after the 2nd H2
      if (h2Count === 3 && !injectedSet1 && interlinkSet1) {
        result.push(interlinkSet1)
        injectedSet1 = true
      }

      // Inject "You might also read" set 2 after the 4th H2
      if (h2Count === 5 && !injectedSet2 && interlinkSet2) {
        result.push(interlinkSet2)
        injectedSet2 = true
      }

      line = line.slice(3)
      line = processInlineFormatting(line)
      result.push(`<h2 class="text-2xl md:text-3xl font-black text-secondary mt-12 mb-6">${line}</h2>`)
      continue
    }
    if (line.startsWith('### ')) {
      line = line.slice(4)
      line = processInlineFormatting(line)
      result.push(`<h3 class="text-xl md:text-2xl font-bold text-secondary mt-8 mb-4">${line}</h3>`)
      continue
    }

    // Process inline formatting (bold, links)
    line = processInlineFormatting(line)

    // List items
    if (lines[i].startsWith('- ')) {
      const listContent = line.replace(/^- /, '')
      result.push(`<li class="flex items-start gap-3 mb-2"><span class="text-primary mt-1.5">•</span><span>${listContent}</span></li>`)
      continue
    }
    if (lines[i].match(/^\d+\.\s/)) {
      const num = lines[i].match(/^\d+/)?.[0]
      const text = line.replace(/^\d+\.\s/, '')
      result.push(`<li class="flex items-start gap-3 mb-2"><span class="text-primary font-semibold">${num}.</span><span>${text}</span></li>`)
      continue
    }

    // Review blockquotes: > REVIEW: "Quote" - Name, Google Review
    if (lines[i].trim().startsWith('> REVIEW:')) {
      const reviewMatch = lines[i].trim().match(/^> REVIEW:\s*"([^"]+)"\s*-\s*(.+)$/)
      if (reviewMatch) {
        const quote = processInlineFormatting(reviewMatch[1])
        const attribution = reviewMatch[2].trim()
        result.push(`<blockquote class="my-8 border-l-4 border-primary bg-primary/5 rounded-r-xl p-6">
          <div class="flex gap-1 mb-3">${'<svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(5)}</div>
          <p class="text-gray-700 text-lg italic mb-3">"${quote}"</p>
          <cite class="text-sm font-semibold text-secondary not-italic">— ${attribution}</cite>
        </blockquote>`)
        continue
      }
    }

    // Video embeds: > VIDEO: URL "Caption text"
    if (lines[i].trim().startsWith('> VIDEO:')) {
      const videoMatch = lines[i].trim().match(/^> VIDEO:\s*(https?:\/\/\S+)\s*"([^"]*)"$/)
      if (videoMatch) {
        const url = videoMatch[1]
        const caption = videoMatch[2]
        let embedHtml = ''

        if (url.includes('tiktok.com')) {
          // TikTok embed
          const videoId = url.match(/video\/(\d+)/)?.[1] || ''
          embedHtml = `<div class="my-8 flex justify-center">
            <div class="w-full max-w-[400px]">
              <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}" style="max-width:400px;min-width:325px;">
                <section></section>
              </blockquote>
              <script async src="https://www.tiktok.com/embed.js"></script>
              ${caption ? `<p class="text-sm text-gray-500 text-center mt-3 italic">${processInlineFormatting(caption)}</p>` : ''}
            </div>
          </div>`
        } else if (url.includes('youtube.com/shorts') || url.includes('youtu.be')) {
          // YouTube Shorts / YouTube embed
          let videoId = ''
          if (url.includes('shorts/')) {
            videoId = url.split('shorts/')[1]?.split(/[?&]/)[0] || ''
          } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0] || ''
          } else if (url.includes('v=')) {
            videoId = url.split('v=')[1]?.split(/[?&]/)[0] || ''
          }
          embedHtml = `<div class="my-8 flex justify-center">
            <div class="w-full max-w-[400px]">
              <div class="relative w-full" style="padding-bottom:177.78%;">
                <iframe src="https://www.youtube.com/embed/${videoId}" class="absolute inset-0 w-full h-full rounded-xl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              ${caption ? `<p class="text-sm text-gray-500 text-center mt-3 italic">${processInlineFormatting(caption)}</p>` : ''}
            </div>
          </div>`
        } else if (url.includes('instagram.com')) {
          // Instagram Reel embed
          embedHtml = `<div class="my-8 flex justify-center">
            <div class="w-full max-w-[400px]">
              <blockquote class="instagram-media" data-instgrm-permalink="${url}" style="max-width:400px;min-width:326px;width:100%;"></blockquote>
              <script async src="https://www.instagram.com/embed.js"></script>
              ${caption ? `<p class="text-sm text-gray-500 text-center mt-3 italic">${processInlineFormatting(caption)}</p>` : ''}
            </div>
          </div>`
        }

        if (embedHtml) {
          result.push(embedHtml)
          continue
        }
      }
    }

    // Regular paragraphs
    if (line.trim()) {
      result.push(`<p class="text-gray-600 text-lg leading-relaxed mb-4">${line}</p>`)
    }
  }

  // Handle table at end of content
  if (inTable && tableRows.length > 0) {
    result.push(renderTable(tableRows))
  }

  // If content was short and cards weren't injected yet, add them at the end
  if (!injectedSet1 && interlinkSet1) {
    result.push(interlinkSet1)
  }
  if (!injectedSet2 && interlinkSet2) {
    result.push(interlinkSet2)
  }

  return result.join('\n')
}

// Process inline formatting: bold and links
function processInlineFormatting(text: string): string {
  // Links: [text](url)
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:text-secondary underline font-medium transition-colors">$1</a>'
  )
  // Bold text
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-secondary">$1</strong>')
  return text
}

// Check if a table is a "card-style" interlink table (empty headers, 1 body row with links)
function isCardTable(rows: string[]): boolean {
  if (rows.length !== 2) return false
  const parseRow = (row: string): string[] => row.split('|').slice(1, -1).map((cell) => cell.trim())
  const headerCells = parseRow(rows[0])
  // Card tables have empty header cells
  return headerCells.every((cell) => cell === '')
}

// Render card-style interlink table as visual cards
function renderCardTable(rows: string[]): string {
  const parseRow = (row: string): string[] => row.split('|').slice(1, -1).map((cell) => cell.trim())
  const cells = parseRow(rows[1]) // The actual content row

  let html = '<div class="grid sm:grid-cols-3 gap-4 my-8">'
  cells.forEach((cell) => {
    // Parse the markdown link: [**Title** - Price - Description](url)
    const linkMatch = cell.match(/\[(.+?)\]\((.+?)\)/)
    if (linkMatch) {
      const linkText = linkMatch[1]
      const url = linkMatch[2]
      // Split by " - " to get parts
      const parts = linkText.replace(/\*\*/g, '').split(' - ')
      const title = parts[0] || ''
      const price = parts[1] || ''
      const desc = parts[2] || ''

      html += `<a href="${url}" class="block group bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center no-underline">
        <div class="text-lg font-black text-secondary group-hover:text-primary transition-colors mb-1">${title}</div>
        <div class="text-primary font-bold text-lg mb-1">${price}</div>
        <div class="text-sm text-gray-500">${desc}</div>
      </a>`
    } else {
      const formattedCell = processInlineFormatting(cell)
      html += `<div class="bg-white rounded-xl p-5 border-2 border-gray-200 text-center">${formattedCell}</div>`
    }
  })
  html += '</div>'
  return html
}

// Render markdown table to HTML
function renderTable(rows: string[]): string {
  if (rows.length === 0) return ''

  // Check if this is a card-style interlink table
  if (isCardTable(rows)) {
    return renderCardTable(rows)
  }

  const parseRow = (row: string): string[] => {
    return row
      .split('|')
      .slice(1, -1) // Remove empty first and last elements
      .map((cell) => cell.trim())
  }

  const headerCells = parseRow(rows[0])
  const bodyRows = rows.slice(1)

  let html = '<div class="overflow-x-auto my-8"><table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">'

  // Header
  html += '<thead class="bg-secondary text-white"><tr>'
  headerCells.forEach((cell) => {
    const formattedCell = processInlineFormatting(cell)
    html += `<th class="text-left py-4 px-6 font-bold">${formattedCell}</th>`
  })
  html += '</tr></thead>'

  // Body
  html += '<tbody>'
  bodyRows.forEach((row, index) => {
    const cells = parseRow(row)
    const bgClass = index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
    html += `<tr class="${bgClass} border-b border-gray-200">`
    cells.forEach((cell) => {
      const formattedCell = processInlineFormatting(cell)
      html += `<td class="py-4 px-6 text-gray-700">${formattedCell}</td>`
    })
    html += '</tr>'
  })
  html += '</tbody></table></div>'

  return html
}

// Parse FAQs from content - looks for "## Frequently Asked Questions" section
function parseFAQs(content: string): { mainContent: string; faqs: FAQItem[]; afterFaqContent: string } {
  // Look for FAQ section header (case insensitive)
  const faqHeaderRegex = /^## Frequently Asked Questions/im
  const faqMatch = content.match(faqHeaderRegex)

  if (!faqMatch || faqMatch.index === undefined) {
    return { mainContent: content, faqs: [], afterFaqContent: '' }
  }

  // Split content at FAQ section
  const mainContent = content.slice(0, faqMatch.index).trim()
  const faqSection = content.slice(faqMatch.index + faqMatch[0].length).trim()

  // Parse individual FAQs (### Question format)
  const faqs: FAQItem[] = []
  const lines = faqSection.split('\n')
  let currentQuestion = ''
  let currentAnswer: string[] = []
  let afterFaqStartIndex = -1

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('### ')) {
      // Save previous FAQ if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: formatFAQAnswer(currentAnswer.join('\n')),
        })
      }
      currentQuestion = line.slice(4).trim()
      currentAnswer = []
    } else if (line.startsWith('## ')) {
      // New H2 section means end of FAQs - save the last FAQ and capture remaining content
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: formatFAQAnswer(currentAnswer.join('\n')),
        })
      }
      afterFaqStartIndex = i
      break
    } else if (currentQuestion) {
      currentAnswer.push(line)
    }
  }

  // Don't forget the last FAQ if no ## was found after
  if (afterFaqStartIndex === -1 && currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: formatFAQAnswer(currentAnswer.join('\n')),
    })
  }

  // Get content after FAQs (like "Related Guides" section)
  const afterFaqContent = afterFaqStartIndex >= 0 ? lines.slice(afterFaqStartIndex).join('\n') : ''

  return { mainContent, faqs, afterFaqContent }
}

// Format FAQ answer with inline formatting
function formatFAQAnswer(answer: string): string {
  return answer
    .split('\n')
    .map((line) => {
      if (!line.trim()) return ''
      line = processInlineFormatting(line)
      if (line.startsWith('- ')) {
        return `<li class="flex items-start gap-2 mb-1"><span class="text-primary">•</span><span>${line.slice(2)}</span></li>`
      }
      return `<p class="mb-2">${line}</p>`
    })
    .filter(Boolean)
    .join('')
}

// Generate FAQ Schema for SEO
function generateFAQSchema(faqs: FAQItem[]) {
  if (faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>/g, ''), // Strip HTML for schema
      },
    })),
  }
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
  const relatedPosts = getRelatedPosts(post, 3)
  const allPublished = getPublishedPosts()

  // Build contextual interlink cards
  const { set1, set2 } = getContextualInterlinks(post, allPublished)
  const interlinkSet1Html = renderInterlinkCards(set1, 'Explore Our Services')
  const interlinkSet2Html = renderInterlinkCards(set2, 'You Might Also Read')

  // Parse FAQs from content
  const { mainContent, faqs, afterFaqContent } = parseFAQs(post.content)

  // Generate Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage
      ? `https://www.904dumpster.com${post.featuredImage}`
      : 'https://www.904dumpster.com/images/904-dumpsters-logo.png',
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.904dumpster.com',
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
    keywords: post.tags.join(', '),
  }

  // Generate FAQ schema if FAQs exist
  const faqSchema = generateFAQSchema(faqs)

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
            <Link href="/" className="hover:text-white" title="904 Dumpster Home">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white" title="Dumpster Rental Blog">
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
            <a
              href="https://www.websiteandseoagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
              title={post.author}
            >
              <User className="w-4 h-4" />
              {post.author}
            </a>
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
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article>
              {/* Main article content (without FAQs) - featured image injected inside content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(
                  mainContent,
                  interlinkSet1Html,
                  interlinkSet2Html,
                  post.featuredImage ? `<div class="relative rounded-2xl overflow-hidden my-8" style="height:400px"><img src="${post.featuredImage}" alt="${post.title}" title="${post.title}" style="width:100%;height:100%;object-fit:cover" loading="lazy" /></div>` : undefined
                ) }}
              />

              {/* FAQ Accordion Section */}
              {faqs.length > 0 && <BlogFAQ faqs={faqs} />}

              {/* Content after FAQs (Related Guides, CTA, etc.) */}
              {afterFaqContent && (
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: formatContent(afterFaqContent) }}
                />
              )}

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

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-black text-secondary mb-6">
                    Related Articles
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors"
                        title={related.title}
                      >
                        <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-2">{related.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  title="Back to Blog"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar - Sticky */}
            <aside>
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Book Online CTA - Primary */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold text-white mb-3">Book Online Now</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Dumpster rentals from $275. Junk removal also available. Same-day delivery.
                  </p>
                  <a
                    href="https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-secondary hover:text-white transition-all w-full mb-3"
                    title="Book a Dumpster Rental Online"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Book a Dumpster
                  </a>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded-xl transition-all w-full"
                    title="Call 904 Dumpster"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS.phone}
                  </a>
                </div>

                {/* Our Services Quick Links */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary mb-4">Our Services</h3>
                  <div className="space-y-3">
                    <Link
                      href="/10-yard-dumpster-rental"
                      className="block group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                      title="10 Yard Dumpster Rental"
                    >
                      <div className="font-bold text-secondary group-hover:text-primary transition-colors">10 Yard Dumpster</div>
                      <div className="text-sm text-gray-500">Starting at $275 &bull; Small cleanouts</div>
                    </Link>
                    <Link
                      href="/15-yard-dumpster-rental"
                      className="block group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                      title="15 Yard Dumpster Rental"
                    >
                      <div className="font-bold text-secondary group-hover:text-primary transition-colors">15 Yard Dumpster</div>
                      <div className="text-sm text-gray-500">Starting at $325 &bull; Mid-size projects</div>
                    </Link>
                    <Link
                      href="/20-yard-dumpster-rental"
                      className="block group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                      title="20 Yard Dumpster Rental"
                    >
                      <div className="font-bold text-secondary group-hover:text-primary transition-colors">20 Yard Dumpster</div>
                      <div className="text-sm text-gray-500">Starting at $375 &bull; Large renovations</div>
                    </Link>
                    <Link
                      href="/junk-removal-jacksonville"
                      className="block group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                      title="Junk Removal Jacksonville"
                    >
                      <div className="font-bold text-secondary group-hover:text-primary transition-colors">Junk Removal</div>
                      <div className="text-sm text-gray-500">Full-service pickup &bull; We do the loading</div>
                    </Link>
                  </div>
                </div>

                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-secondary mb-4">Recent Articles</h3>
                    <div className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <Link
                          key={recentPost.slug}
                          href={`/blog/${recentPost.slug}`}
                          className="block group"
                          title={recentPost.title}
                        >
                          <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-1 text-sm">
                            {recentPost.title}
                          </h4>
                          <span className="text-xs text-gray-500">{recentPost.readTime}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* View All Articles */}
                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-secondary font-semibold py-3 px-6 rounded-2xl transition-all"
                  title="View All Blog Articles"
                >
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              title="Call 904 Dumpster"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              title="Contact 904 Dumpster for a Free Quote"
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

      {/* Schema Markup - FAQ (for People Also Ask & AI Overviews) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
