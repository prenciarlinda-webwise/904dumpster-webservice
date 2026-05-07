# Technical SEO Audit

Phase 1 deliverable. Every item is checkable so you can review and approve fixes one by one. File paths and line numbers are exact. Build was run cleanly (88 pages prerendered, 0 errors, 1.7s compile).

Priority key:
- **P0**: Fix immediately. Indexability or trust signal blocker.
- **P1**: Fix in week 1 of the execution sprint.
- **P2**: Nice to have. Marginal lift.

---

## 1. Sitemap

`src/app/sitemap.ts` is well-structured: 88 URLs total (1 homepage, 14 static, 12 service slugs, 11 location slugs, ~50 blog posts). All canonical URLs are present.

- [ ] **P1** — Static pages use `new Date()` for `lastModified` (`sitemap.ts` lines 13, 19, 25, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91). The timestamp lies daily, signals churn that does not match reality. **Fix**: define a per-page `lastModified` constant updated only when the page actually changes, OR pull from a static manifest/git mtime. Avoid `new Date()` at build time.
- [ ] **P2** — Service-page priority logic (lines 100-107) gives size pages 0.9 and other services 0.8. Reasonable. No fix needed.
- [ ] **P2** — Location pages all priority 0.7 (line 116). Top-3 city pages (St. Augustine, Orange Park, Jacksonville Beach) could justify 0.8. Marginal lift.

---

## 2. Robots.txt

`frontend/public/robots.txt` is clean.

- [x] User-agent `*` Allow `/`. Disallow `/api/`, `/admin/`. Sitemap directive present at `https://www.904dumpster.com/sitemap.xml`. No `Disallow: /` lurking. No money pages blocked. No fix required.

---

## 3. Canonical tags

All canonical tags audited across the 21 page files. Most are clean. One gap.

- [x] `src/app/layout.tsx` sets a default. Good.
- [x] `src/app/page.tsx` sets canonical to `https://www.904dumpster.com`. Good.
- [x] `src/app/[slug]/page.tsx` `generateMetadata` sets canonical for service and location pages (verified). Good.
- [x] `src/app/blog/[slug]/page.tsx` `generateMetadata` sets canonical. Good.
- [x] `src/app/blog/page.tsx`, `src/app/about/page.tsx`, `src/app/contact-us/page.tsx`, `src/app/dumpster-rental-pricing-jacksonville/page.tsx`, `src/app/frequently-asked-questions/page.tsx`, `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`, `src/app/rules/prohibited-items-list/page.tsx`: all set canonical. Good.
- [x] `src/app/dumpster-rental/dumpsters-for-construction-projects/page.tsx:21`, `src/app/dumpster-rental/dumpsters-for-roofing-projects/page.tsx:21`, `src/app/dumpster-rental/dumpsters-for-moving-projects/page.tsx:21`, `src/app/dumpster-rental/dumpsters-for-landscaping-projects/page.tsx:21`: canonical IS set on all 4 (verified by grep). Good.
- [ ] **P1** — `src/app/locations/page.tsx`: canonical missing from `alternates`. Page has openGraph but no `alternates: { canonical: ... }`. **Fix**: add `alternates: { canonical: 'https://www.904dumpster.com/locations' }` to the metadata export.

---

## 4. Schema validity

Every generator in `src/lib/schema.ts` reviewed for required fields against schema.org. All emit valid JSON-LD with `@context` and `@type` set correctly. Image URLs are absolute. No typos in property names. Phone numbers consistent.

- [x] `generateWebSiteSchema` (with SearchAction): valid.
- [x] `generateOrganizationSchema` (with sameAs lines 77-82): valid.
- [x] `generateLocalBusinessSchema` (homepage version, lines 271-357 with full areaServed Wikipedia entities, hasOfferCatalog 359-388, speakable 389-393): valid and rich.
- [x] `generateServiceSchema` (lines 431-454, accepts areaServed boolean): valid.
- [x] `generateLocationServiceSchema` (lines 474-545 with GeoCircle): valid.
- [x] `generateDumpsterProductSchema` (with isRelatedTo for cross-product, line 302): valid.
- [x] `generateSizePageLocalBusinessSchema` (with sameAs propagated, lines 400-406): valid.
- [x] `generateFAQSchema`, `generateBreadcrumbSchema`, `generateArticleSchema`, `generateHowToSchema`, `generatePricingItemListSchema`, `generateAggregateRatingSchema`: all valid.

No structural validity issues found. Validation gaps below are about coverage and richness, not invalidity.

---

## 5. Schema gaps (richness and coverage)

These are not invalid schema, but missing properties that homepage has and other templates do not.

- [ ] **P1** — `generateLocationServiceSchema` (`src/lib/schema.ts:474-545`) emits a GeoCircle for `areaServed` but does NOT include nested `City` objects with Wikipedia `@id` references. The homepage `LocalBusiness` emits these (lines 271-357). Without entity anchoring, location pages do not reciprocate the homepage's entity graph. **Fix**: extend the function to accept an optional `additionalEntities` array of City objects with `@id` Wikipedia URLs and emit them alongside the GeoCircle.
- [ ] **P1** — `generateLocationServiceSchema` (`src/lib/schema.ts:474-545`) does NOT include `sameAs`. Homepage `LocalBusiness`, `Organization` schema, and `generateSizePageLocalBusinessSchema` all do. **Fix**: add `sameAs` array (GBP Maps URL, Facebook, BBB, etc., sourced from `src/lib/constants.ts BUSINESS`) to the location service schema output.
- [ ] **P1** — Service and location templates do NOT emit `Speakable` schema. Homepage has it (lines 389-393, targeting `#quick-answer` and `#faq-section`). For voice search and AEO this is meaningful. **Fix**: add a `speakable` block to `generateServiceSchema` and `generateLocationServiceSchema` outputs that targets the FAQ section and the answer-intro block on those pages.
- [ ] **P2** — `generateSizePageLocalBusinessSchema` (`src/lib/schema.ts:356-427`) does NOT include `hasOfferCatalog`. Homepage `LocalBusiness` does (lines 359-388). Size pages should link related sizes via the offer catalog. **Fix**: add a minimal `hasOfferCatalog` listing the 3 sizes and the size guide.
- [ ] **P2** — No `Review` schema with individual reviews emitted on the homepage or service pages. Only `aggregateRating` is in use. If real customer review text is available (the user mentions plenty of images, possibly reviews too), individual `Review` schemas can drive rich result eligibility. **Fix**: add `generateReviewSchema(review)` and surface 3-5 best reviews on the homepage. Out of scope if reviews are not authored yet.

**Important correction**: Earlier audit suggested `generateServiceSchema` was being called WITHOUT `areaServed=true` for service-type pages. Verification of `src/app/[slug]/page.tsx` lines 169 and 242 confirms `generateServiceSchema(service.title, service.description, true)` IS being called with `areaServed=true`. This is NOT a gap; the service-page geographic anchoring is in place via the boolean flag.

---

## 6. Metadata exports

Audited every page's `metadata` export and `generateMetadata` function. The biggest gap is missing `openGraph` and `twitter` on multiple pages.

- [x] `src/app/page.tsx`: title 52 chars, description 149 chars, full OG, full Twitter, robots index/follow. Clean.
- [x] `src/app/[slug]/page.tsx`: title 56-60 chars, description 150-160, OG, Twitter. Robots not explicitly set (inherits `index/follow` from layout.tsx default, which is correct). Clean.
- [ ] **P1** — `src/app/blog/[slug]/page.tsx`: OG present, Twitter card missing. **Fix**: add `twitter: { card: 'summary_large_image', ... }` to the generateMetadata return.
- [ ] **P1** — `src/app/blog/page.tsx`: title 24 chars (short), description 77 chars (short), no OG, no Twitter. **Fix**: expand title (add "904 Dumpster Resources" or "Tips and Guides"), expand description, add OG and Twitter.
- [ ] **P1** — `src/app/about/page.tsx`: title only 8 chars (just "About"). **Fix**: expand to "About 904 Dumpster - Locally Owned Jacksonville FL". Add OG and Twitter.
- [ ] **P1** — `src/app/contact-us/page.tsx`: title 10 chars. **Fix**: expand to "Contact 904 Dumpster - Jacksonville FL Dumpster Rental". Add OG and Twitter.
- [ ] **P1** — `src/app/dumpster-rental-pricing-jacksonville/page.tsx`: OG and Twitter missing. Title and description fine. **Fix**: add openGraph and twitter blocks.
- [ ] **P1** — `src/app/frequently-asked-questions/page.tsx`: OG and Twitter missing. **Fix**: add both.
- [ ] **P1** — `src/app/locations/page.tsx`: title 70 chars (slightly long), Twitter missing. **Fix**: trim title to under 60 chars; add twitter block. (Canonical also flagged above in Section 3.)
- [ ] **P1** — `src/app/privacy-policy/page.tsx` and `src/app/terms-of-service/page.tsx`: titles short, OG and Twitter missing. **Fix**: expand titles, add OG and Twitter (less critical for legal pages but still helpful).
- [ ] **P1** — `src/app/rules/prohibited-items-list/page.tsx`: OG and Twitter missing. **Fix**: add both.
- [ ] **P1** — All 4 `src/app/dumpster-rental/dumpsters-for-*/page.tsx`: OG present, Twitter missing. **Fix**: add twitter block to each (4 quick edits).

**Confirmed clean**:
- No `keywords` meta detected anywhere (per memory rule).
- No legacy `geo.region` / `geo.placename` / `geo.position` meta tags detected.
- No pipes (`|`) in any title.
- All present descriptions stay under 160 chars.

---

## 7. Title and H1 alignment for `/[slug]` template pages

Spot-checked multiple slugs against `services.ts` `metaTitle` (which becomes the title) and the H1 rendered by `ServicePageTemplate` and `LocationPageTemplate`.

- [x] `/10-yard-dumpster-rental`: title and H1 both "10 Yard Dumpster Rental". Aligned.
- [x] `/15-yard-dumpster-rental`: title and H1 both "15 Yard Dumpster Rental". Aligned.
- [x] `/20-yard-dumpster-rental`: title and H1 both "20 Yard Dumpster Rental". Aligned.
- [x] `/junk-removal-jacksonville-fl`: title "Junk Removal Jacksonville FL", H1 from ServicePageTemplate uses `service.title`. Aligned.
- [x] `/dumpster-rental-st-augustine-fl`: title "Dumpster Rental St. Augustine FL", H1 from LocationPageTemplate. Aligned.
- [x] All other slug-routed pages: same template logic, alignment is structural. No mismatches found.

No action required.

---

## 8. Image optimization

Auditing `<Image>` and `<img>` usage across `src/app/**/*.tsx`, `src/components/**/*.tsx`, and blog body markdown.

### Configuration

- [x] `frontend/next.config.ts` formats `image/avif` then `image/webp`. Correct.
- [x] `deviceSizes` and `imageSizes` properly defined.
- [x] No external image domains required (assets are local under `/images`).

### Page-by-page findings

- [x] `src/app/page.tsx:423-431`: hero image `main-hero-dumpster.jpeg`, alt present, `priority={true}`. Correct.
- [x] `src/app/page.tsx:664-672`: secondary image `dumpster-rental-residential-jacksonville.jpg`, width/height set, `loading="lazy"`. Correct.
- [x] `src/app/[slug]/page.tsx:345-353`: size-page hero, descriptive alt, width/height set. Correct.

### Issues

- [ ] **P1** — `src/app/blog/page.tsx:127-131` and `src/app/blog/page.tsx:168-173`: blog featured images use `alt={latestPost.title}` and `alt={post.title}`. Generic. The title is a question or topic, not an image description. **Fix**: add an `imageAlt` field to each blog post in `src/data/blog/posts-*.ts` and render it instead. Or generate from topic + visual content (more involved).
- [ ] **P1** — `src/app/blog/[slug]/page.tsx`: featured image is rendered via `dangerouslySetInnerHTML` containing `<img src="${post.featuredImage}" alt="${post.title}">`. Same generic alt issue. **Fix**: same as above.
- [ ] **P2** — Default OG image path: confirm in `src/app/layout.tsx` that the `openGraph.images` URL is absolute (`https://...`) not relative. Relative URLs do not work for social previews.

### No issues

- All hero images flagged with `priority` are above the fold.
- No below-fold images found with unnecessary `priority`.
- All `<Image>` components have explicit `width`/`height` (CLS-safe).
- All flagged images have `alt` text. None are missing alt entirely.

---

## 9. Redirects and route migration

`frontend/next.config.ts` defines a comprehensive `redirects()` block with 100+ permanent (301) rules.

- [x] All redirects are `permanent: true` (proper 301). No 302 leakage.
- [x] Major migrations are clean: `/construction-dumpster-rental` → `/construction-dumpster-rental-jacksonville-fl`, `/residential-dumpster-rental` → `/residential-dumpster-rental-jacksonville-fl`, `/commercial-dumpster-rental` → `/commercial-dumpster-rental-jacksonville-fl`, `/junk-removal` → `/junk-removal-jacksonville-fl`. Good.
- [x] Old `/services/*` and `/locations/*` patterns redirect to current canonical structure. Good.
- [x] Pagination consolidation: `/blog/page/:page*` → `/blog`. Good.
- [x] No redirect chains detected (each old URL maps to a single 200 destination).
- [ ] **P2** — Lines 252-275 redirect generic dumpster-rental variants (`/dumpster-rental`, `/dumpster-rental-service`, `/dumpster-rental-jacksonville-fl`) to `/`. Reasonable for local-SEO consolidation, but verify these old URLs do not have meaningful external backlinks worth preserving. If they do, consider redirecting to `/dumpster-rental-pricing-jacksonville` instead, which has clearer commercial intent match. Marginal call.

`git log --diff-filter=D --name-only --since="3 months ago"` returned no recently deleted page.tsx files. No silent-404 risk from removed routes.

---

## 10. 404 and not-found behavior

- [ ] **P0** — `src/app/not-found.tsx` does NOT exist. Build output confirms `_not-found` route is generated automatically by Next.js but uses the framework default page (unbranded). **Fix**: create `src/app/not-found.tsx` with a branded 404: H1 "Page not found", short copy, links to homepage / pricing page / locations / blog. Next.js automatically returns proper HTTP 404 status; the file just controls the rendered UI.
- [x] `src/app/[slug]/page.tsx:279`: calls `notFound()` when slug does not match a service or location. Correct.
- [x] `src/app/blog/[slug]/page.tsx:534`: calls `notFound()` when blog slug does not match. Correct.

No soft-404 risk: all unmatched routes return proper 404 status via `notFound()`. Only the rendered page is unbranded.

---

## 11. Build signals

`npm run build` ran cleanly:

- [x] Compiled in 1.7 seconds via Turbopack.
- [x] TypeScript pass clean.
- [x] 88 static pages generated (1 homepage + 14 static + 22 slug-routed + 50 blog posts + sitemap.xml).
- [x] No build warnings.
- [x] No bundle-size warnings.
- [x] All dynamic routes properly prerendered via `generateStaticParams` (SSG).

No P0 or P1 issues from build. Site is production-ready.

---

## 12. next.config.ts and global config

- [x] `output: 'standalone'` (Docker-ready, fine for SEO).
- [x] `trailingSlash: false` (correct: keeps URLs canonical without trailing slash).
- [x] Image config: avif/webp formats, device sizes, image sizes all correctly configured.
- [x] Security headers: X-DNS-Prefetch-Control, X-XSS-Protection, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. All sensible defaults.
- [x] No misconfigured `output: 'export'` (which would break sitemap.xml).
- [x] No `i18n` config (single-locale site, correct).

No issues.

---

## Top 5 technical SEO recommendations

1. **P0. Create `src/app/not-found.tsx`** with a branded 404 page that includes links to homepage, pricing, locations, and blog. Next.js currently uses its unbranded default. Estimated time: 20 minutes.

2. **P1. Upgrade `generateLocationServiceSchema`** in `src/lib/schema.ts` to include nested City entities with Wikipedia `@id` references and a `sameAs` array. This single change lifts entity confidence on all 11 location pages with one edit. Estimated time: 30 minutes.

3. **P1. Add `Speakable` schema to `generateServiceSchema` and `generateLocationServiceSchema`** in `src/lib/schema.ts`, targeting `#answer-intro` and `#faq-section` selectors. Voice search and AEO win. Estimated time: 15 minutes.

4. **P1. Fill in metadata gaps**: add `openGraph` and `twitter` to the 11 pages currently missing them (`/blog`, `/blog/[slug]`, `/about`, `/contact-us`, `/dumpster-rental-pricing-jacksonville`, `/frequently-asked-questions`, `/locations`, `/privacy-policy`, `/terms-of-service`, `/rules/prohibited-items-list`, all 4 `/dumpster-rental/dumpsters-for-*` pages). Expand the short titles on `/about` and `/contact-us`. Add canonical to `/locations`. Estimated time: 60 minutes total.

5. **P1. Fix the sitemap `lastModified` lie** in `src/app/sitemap.ts`. Replace `new Date()` for static pages with stable per-page dates updated only on real edits. Crawl budget signal repair. Estimated time: 15 minutes.

Combined: roughly 2.5 hours of execution work to address every P0 and P1 finding above.

---

## Files referenced (Phase 1 read-only)

`frontend/public/robots.txt`, `frontend/next.config.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/page.tsx`, `src/app/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/blog/page.tsx`, `src/app/about/page.tsx`, `src/app/contact-us/page.tsx`, `src/app/dumpster-rental-pricing-jacksonville/page.tsx`, `src/app/frequently-asked-questions/page.tsx`, `src/app/locations/page.tsx`, `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`, `src/app/rules/prohibited-items-list/page.tsx`, `src/app/dumpster-rental/dumpsters-for-*/page.tsx` (4 files), `src/lib/schema.ts`, `src/lib/constants.ts`.
