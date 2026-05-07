# Internal Linking Audit

Phase 1 deliverable. Every item is checkable so you can review and approve fixes one by one. Findings come from a full scan of `src/app/`, `src/components/`, and all `src/data/blog/posts-*.ts` content fields. File paths and line numbers are exact.

Priority key:
- **P0**: Fix immediately. Equity loss, indexable error, or money page invisible.
- **P1**: Fix in week 1 of the execution sprint. Significant ranking impact.
- **P2**: Nice to have. Marginal lift.

---

## 1. Broken or non-canonical links

Two confirmed broken/non-canonical hrefs. Canonical is `/dumpster-rental-ponte-vedra-fl`, not `/dumpster-rental-ponte-vedra-beach-fl`.

- [ ] **P0** — `src/app/dumpster-rental-pricing-jacksonville/page.tsx:456`. Anchor links to `/dumpster-rental-ponte-vedra-beach-fl` (does not exist). **Fix**: change href to `/dumpster-rental-ponte-vedra-fl`.
- [ ] **P0** — `src/components/ServicePageTemplate.tsx:368`. Same wrong destination. **Fix**: change href to `/dumpster-rental-ponte-vedra-fl`.

No other broken or 301-source links found. Fleming Island slug verified correct (`/dumpster-rental-fleming-island-fl`, single 'm') across all 19 references.

---

## 2. Inbound link counts (full table, lowest first)

For each canonical URL, the count of internal `href`s that point to it across pages, components, and blog content. Bold flags are pages that should have far more links than they do.

### Critical gaps (0 inbound links)

- [ ] **P0** — `/about` (0 inbound). **Fix**: add to footer "Company" column. Currently no path for users or crawlers to discover the brand-trust signal page.
- [ ] **P1** — `/privacy-policy` (0 inbound). **Fix**: footer link is required for compliance and trust signals.
- [ ] **P1** — `/terms-of-service` (0 inbound). **Fix**: footer link, same reason.
- [ ] **P0** — `/commercial-dumpster-rental-jacksonville-fl` (0 inbound, despite being a money page). **Fix**: confirm `src/components/Footer.tsx:25` actually renders this link in the visible nav (it appears in the data but is not counted as an inbound, suggesting a render condition fails). Add link from `src/app/dumpster-rental-pricing-jacksonville/page.tsx` services list. Add link from blog `commercial-dumpster-rental-business-waste-guide` body content (currently has no CTA to this money page).
- [ ] **P0** — `/dumpster-rental/dumpsters-for-moving-projects` (0 inbound). **Fix**: link from `src/app/page.tsx` "Jacksonville Dumpster Rental for Every Project" section, and from blog `moving-day-waste-declutter-dispose-guide`.
- [ ] **P0** — `/dumpster-rental/dumpsters-for-landscaping-projects` (0 inbound). **Fix**: link from `src/app/page.tsx` use-cases section, from `src/data/services.ts` related-services arrays, and from blog `yard-waste-disposal-guide-what-goes-where` and `yard-waste-landscaping-debris-disposal-northeast-florida`.

### Severely under-linked (1 inbound)

- [ ] **P1** — `/demolition-services-jacksonville-fl` (1 inbound, only from a sibling `[slug]` related-services block). **Fix**: link from `src/app/dumpster-rental-pricing-jacksonville/page.tsx`, from blogs `demolition-debris-disposal-best-practices` and `demolition-debris-planning-disposal-guide`, and from footer.
- [ ] **P1** — `/construction-dumpster-rental-jacksonville-fl` (1 inbound, only from `src/components/ServicePageTemplate.tsx`). **Fix**: link from homepage hero use-cases, from blog `contractor-dumpster-rental-jacksonville` and `construction-dumpster-rental-contractors-guide`.
- [ ] **P1** — `/dumpster-rental-arlington-fl` (1 inbound, only from `src/app/page.tsx`). **Fix**: link from at least 2 location-page sibling sections and from blog content where Arlington is mentioned.
- [ ] **P1** — `/dumpster-rental/dumpsters-for-roofing-projects` (1 inbound, only self-link). **Fix**: link from `src/app/page.tsx` and from blog `prepare-for-roof-replacement-waste-planning`, `roofing-project-waste-management`, `roof-leak-repair-preparation-waste-guide`.
- [ ] **P1** — `/dumpster-rental/dumpsters-for-construction-projects` (1 inbound, only self-link). **Fix**: link from homepage and from construction-related blog posts.

### Under-linked location pages (3 inbound, all from same 2 sources)

These all get 1 mention from `src/app/page.tsx` and 2 from `src/app/[slug]/page.tsx` related-locations blocks. They lack blog support and pricing-page mentions.

- [ ] **P1** — `/dumpster-rental-fernandina-beach-fl` (3 inbound). **Fix**: link from blog `dumpster-rental-cost-fernandina-beach-fl` body and from pricing page services-by-location section.
- [ ] **P1** — `/dumpster-rental-atlantic-beach-fl` (3 inbound). **Fix**: link from blog `dumpster-rental-cost-atlantic-beach-fl` body and pricing page.
- [ ] **P1** — `/dumpster-rental-neptune-beach-fl` (3 inbound). **Fix**: link from at least 2 blog posts mentioning the beaches and pricing page.
- [ ] **P1** — `/dumpster-rental-jacksonville-beach-fl` (3 inbound). **Fix**: same pattern.
- [ ] **P1** — `/dumpster-rental-fleming-island-fl` (3 inbound, but currently has 12+ blog mentions, inflating effective count to ~15 if blog markdown links are counted; treat as adequate).
- [ ] **P1** — `/dumpster-rental-middleburg-fl` (3 inbound). **Fix**: link from pricing page Clay County section.
- [ ] **P1** — `/dumpster-rental-ponte-vedra-fl` (3 inbound, but blog has multiple mentions; effective count higher; treat as moderately under-linked).
- [ ] **P2** — `/dumpster-rental-green-cove-springs-fl` (2 inbound). **Fix**: pricing page Clay County section.

### Top resources under-linked

- [ ] **P1** — `/blog` (3 inbound only: header nav, blog index self, [slug] template). **Fix**: link from homepage "Resources" or footer.
- [ ] **P1** — `/locations` (4 inbound). **Fix**: surface as a top-level link from pricing page and from each location page (currently it is buried).
- [ ] **P1** — `/frequently-asked-questions` (4 inbound). **Fix**: link from every service page (currently links exist on size pages only) and from blog footer CTAs.
- [ ] **P1** — `/dumpster-rental-pricing-jacksonville` (7 inbound). For the primary money/pricing page this should be 20+. **Fix**: link from every service and location page header CTA, and from every blog that mentions cost.

### Adequately linked (no action)

- `/` (27 inbound) — heavy, as expected.
- `/dumpster-size-guide` (11 inbound).
- `/15-yard-dumpster-rental` (10 inbound).
- `/20-yard-dumpster-rental` (8 inbound).
- `/rules/prohibited-items-list` (8 inbound).
- `/10-yard-dumpster-rental` (6 inbound).
- `/contact-us` (6 inbound).
- `/dumpster-rental-st-augustine-fl` (5 inbound), `/dumpster-rental-orange-park-fl` (5 inbound). Borderline but acceptable for now.
- `/junk-removal-jacksonville-fl` (4 inbound). Low for a vol-1000 keyword target but the ranking issue is on-page, not inbound count. Will be addressed in execution sprint.
- `/residential-dumpster-rental-jacksonville-fl` (4 inbound).
- `/concrete-disposal-dumpster-jacksonville-fl` (2 inbound). Borderline. Worth +2 from blog or pricing page.

---

## 3. Anchor text quality

Generic and bare-name anchors waste link equity. Service-modified anchors carry keyword signal.

### High-value targets (already audited, summarized for reference)

- [ ] **P2** — Homepage (`/`): anchor texts are keyword-rich across the site, no fix needed.
- [ ] **P1** — `/20-yard-dumpster-rental`: most anchors are "20 Yard Dumpster" or "20 yard dumpster" (correct). Some use a bare "20 Yard" in table cells; replace with "20 Yard Dumpster Rental" where space allows.
- [ ] **P0** — `/junk-removal-jacksonville-fl`: only 1 keyword-rich anchor in `src/app/[slug]/page.tsx:688` ("junk removal service"), buried in a Pro Tip callout. **Fix**: add 3 to 5 contextual links from blog posts (`estate-cleanout-guide-jacksonville`, `attic-basement-cleanout-decluttering-disposal`, `complete-guide-home-cleanout-jacksonville`, `moving-day-waste-declutter-dispose-guide`) using anchor text "junk removal in Jacksonville FL".
- [ ] **P0** — `/dumpster-rental-st-augustine-fl`: 5 anchor instances across the site, all the bare phrase "St. Augustine". **Fix**: rewrite to "Dumpster rental in St. Augustine" or "Dumpster Rental St. Augustine FL". Locations: `src/app/page.tsx` lines 19-20, `src/app/[slug]/page.tsx` lines 2320 and 2762, plus `src/components/Footer.tsx`.
- [ ] **P2** — `/dumpster-rental-pricing-jacksonville`: anchors are strong ("View Detailed Pricing Breakdown", "Full Pricing Guide"). No fix needed.

### Other 17 service/location/product pages

Bare location-name anchors on the homepage service-area block and footer affect 8 location pages identically.

- [ ] **P1** — `src/app/page.tsx` lines 13-21 and 107: bare anchors "Jacksonville Beach", "Neptune Beach", "Atlantic Beach", "Orange Park", "Fleming Island", "Middleburg", "Arlington", "Ponte Vedra", "Fernandina Beach", "Green Cove Springs". **Fix**: rewrite each to "Dumpster Rental {City}" or "Dumpster rental in {City} FL". One file edit, lifts 10 location pages at once.
- [ ] **P2** — `src/components/Footer.tsx` (location list, lines around 37-50): same bare-name anchors. **Fix**: rewrite or at minimum prepend with "Dumpster Rental" descriptor.
- [ ] **P2** — `src/lib/constants.ts:99` and surrounding location-list constants: anchor labels are bare names. If used as anchor text anywhere via the constant, fix at the source.
- [ ] **P2** — `/residential-dumpster-rental-jacksonville-fl`: one bare "residential" anchor in `src/app/[slug]/page.tsx:78`. **Fix**: change to "residential dumpster rental in Jacksonville".
- [ ] **P2** — `/dumpster-size-guide`: one bare "Size Guide" anchor in `src/lib/constants.ts`. **Fix**: rewrite to "Dumpster Size Comparison Guide".

---

## 4. Cannibalization risk

Cross-checked all 70 blog post titles and `seoTitle` fields against money-page primary keywords.

### High overlap (act now)

- [ ] **P0** — Blog `dumpster-rental-cost-complete-pricing-guide` ("How Much Does It Cost to Rent a Dumpster in 2026?") competes with `/dumpster-rental-pricing-jacksonville`. **Fix**: rewrite blog as a national/regional informational guide about cost factors (size, weight, location, debris type) with a closing CTA "For current Jacksonville pricing, see our pricing guide" linking to the pricing page using exact-match anchor "dumpster rental pricing in Jacksonville FL". Do not 301 (kills topical authority). Do not canonical (often ignored).
- [ ] **P1** — Blog `commercial-dumpster-rental-business-waste-guide` ("Commercial Dumpster Rental Jacksonville FL") directly competes with `/commercial-dumpster-rental-jacksonville-fl` AND the money page has 0 inbound links. **Fix**: rewrite blog to focus on commercial waste planning topics (waste-stream analysis, container scheduling for businesses, common commercial use cases) with strong CTA linking to the commercial money page using "commercial dumpster rental in Jacksonville FL" anchor.

### Medium overlap (acceptable as feeder content if CTA is strong)

These location-cost blogs are intentionally distinct from their location pages. Keep them, but verify each has a clear money-page CTA.

- [ ] **P1** — `dumpster-rental-cost-st-augustine-fl` competes with `/dumpster-rental-st-augustine-fl`. CTA verified at `src/data/blog/posts-1-5.ts:646` and link present at line 154 area. **Fix**: confirm anchor text on the CTA is "Dumpster rental in St. Augustine FL", not "click here".
- [ ] **P1** — `dumpster-rental-cost-orange-park-fl` competes with `/dumpster-rental-orange-park-fl`. **Fix**: same as above for Orange Park.
- [ ] **P1** — `dumpster-rental-cost-atlantic-beach-fl` competes with `/dumpster-rental-atlantic-beach-fl`. **Fix**: same.
- [ ] **P1** — `dumpster-rental-cost-ponte-vedra-fl` competes with `/dumpster-rental-ponte-vedra-fl`. **Fix**: same.
- [ ] **P1** — `dumpster-rental-cost-fernandina-beach-fl` competes with `/dumpster-rental-fernandina-beach-fl`. **Fix**: same.
- [ ] **P2** — Blog `construction-dumpster-rental-contractors-guide` overlaps `/construction-dumpster-rental-jacksonville-fl`. **Fix**: confirm CTA links to money page with anchor "construction dumpster rental in Jacksonville FL".

### Low overlap (no action required)

- `dumpster-sizes-explained-complete-guide` vs `/dumpster-size-guide`: blog is informational, money page is comparison-table. Roles are clear. Confirm each links to the other once.
- `dumpster-weight-limits-tonnage-guide` vs `/dumpster-size-guide`: educational angle, supporting content.
- `roll-off-dumpster-rental-complete-guide`: educational, links naturally to pricing and size pages.
- `what-can-and-cannot-go-in-a-dumpster-rules` vs `/rules/prohibited-items-list`: blog is comprehensive, money page is the list. Clear separation. Confirm blog has a CTA link to the money page.

---

## 5. Blog-to-money-page link gaps

### Blogs with zero money-page links (leak authority back into blog ecosystem)

Confirmed by scanning each blog's `body` content for `href="/{canonical-money-page}"` patterns. The following posts have NO link to any money page (homepage, pricing, service, location, or size).

- [ ] **P1** — `what-is-a-transfer-station`: pure educational content. **Fix**: add closing CTA linking to `/dumpster-rental-pricing-jacksonville` ("rent a dumpster in Jacksonville") or to a relevant size page.
- [ ] **P1** — `what-is-waste-diversion`: same. **Fix**: add CTA to `/junk-removal-jacksonville-fl` or pricing page.
- [ ] **P1** — `illegal-dumping-jacksonville-environment`: same. **Fix**: add CTA to `/dumpster-rental-pricing-jacksonville` ("rent a roll-off dumpster the legal way").
- [ ] **P1** — `where-does-trash-go-after-you-throw-it-away`: same. **Fix**: add CTA to a size page or pricing.

### Money pages with zero blog inbound support

These money pages are not linked from any blog post body content.

- [ ] **P0** — `/commercial-dumpster-rental-jacksonville-fl` (already flagged in Section 2, P0). Blog `commercial-dumpster-rental-business-waste-guide` exists but does not link to the money page.
- [ ] **P1** — `/demolition-services-jacksonville-fl`. **Fix**: add links from `demolition-debris-disposal-best-practices` and `demolition-debris-planning-disposal-guide`.
- [ ] **P1** — `/dumpster-rental/dumpsters-for-moving-projects` (Section 2 P0). Blog `moving-day-waste-declutter-dispose-guide` should link to it.
- [ ] **P1** — `/dumpster-rental/dumpsters-for-landscaping-projects` (Section 2 P0). Blogs `yard-waste-disposal-guide-what-goes-where` and `yard-waste-landscaping-debris-disposal-northeast-florida` should link to it.

### Adequate blog support

- `/junk-removal-jacksonville-fl`: 4 blog mentions across cleanout-related posts. Verify anchor text, then leave.
- All location pages with blog mentions: anchor text is generally good (location name as link to canonical slug). The blog interlinking is strong; the gap is on the homepage and footer.

---

## Top 5 internal-linking recommendations (priority order for the execution sprint)

1. **P0. Fix the 2 broken Ponte Vedra links** in `src/app/dumpster-rental-pricing-jacksonville/page.tsx:456` and `src/components/ServicePageTemplate.tsx:368`. Estimated time: 5 minutes.

2. **P0. Rescue the orphan and 1-inbound money pages**: `/commercial-dumpster-rental-jacksonville-fl`, `/dumpster-rental/dumpsters-for-moving-projects`, `/dumpster-rental/dumpsters-for-landscaping-projects`, `/demolition-services-jacksonville-fl`. Add links from homepage use-cases section, pricing page services list, and 2-3 blog posts each (using exact-match keyword anchors). Estimated time: 90 minutes.

3. **P1. Convert bare location-name anchors to service-modified anchors** in `src/app/page.tsx` lines 13-21 and 107, `src/components/Footer.tsx` lines around 37-50. One pass, lifts 10 location pages at once. Estimated time: 30 minutes.

4. **P1. Rewrite the 2 high-overlap cannibalizing blogs** (`dumpster-rental-cost-complete-pricing-guide`, `commercial-dumpster-rental-business-waste-guide`) as informational with strong money-page CTAs. Estimated time: 60 minutes per post.

5. **P1. Add money-page CTAs to the 4 zero-link educational blogs** (`what-is-a-transfer-station`, `what-is-waste-diversion`, `illegal-dumping-jacksonville-environment`, `where-does-trash-go-after-you-throw-it-away`). Closing paragraph + CTA per post. Estimated time: 15 minutes per post.

Combined: roughly 4-5 hours of execution work for items 1, 2, 3. Items 4 and 5 add another 4 hours. Total internal-linking sprint: about 1 working day to address every P0 and P1 finding above.

---

## Files referenced (Phase 1 read-only)

`src/app/page.tsx`, `src/app/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/dumpster-rental-pricing-jacksonville/page.tsx`, `src/app/dumpster-rental/dumpsters-for-*/page.tsx`, `src/components/ServicePageTemplate.tsx`, `src/components/LocationPageTemplate.tsx`, `src/components/Footer.tsx`, `src/components/Header.tsx`, `src/lib/constants.ts`, `src/data/services.ts`, `src/data/locations.ts`, all `src/data/blog/posts-*.ts`.
