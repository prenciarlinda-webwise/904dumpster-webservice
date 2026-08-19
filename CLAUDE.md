# 904 Dumpster Web Service

## Git workflow

Commit directly to `main`. Do not create feature branches or PRs for this
project — deployment pulls straight from `origin main` (see README.md), so a
branch just adds an unnecessary merge step for a single-developer workflow.

## Working in this codebase

- Blog posts (`frontend/src/data/blog/posts-*.ts`) cross-reference each other
  heavily via `relatedSlugs` arrays and in-body markdown links. Before
  deleting or renaming a post's `slug`, grep the entire `blog/` directory for
  that slug first — a single post can be referenced 50+ times across other
  files. If you do delete/rename one, add a 301 redirect in
  `frontend/next.config.ts` and mass-replace every reference to the new slug,
  then re-check for accidental self-references it may have introduced.
- After editing any `.ts` data file or `next.config.ts`, run
  `npx tsc --noEmit -p .` from `frontend/`. Before considering a larger change
  done, run `npm run build` (also from `frontend/`) — it catches issues a
  typecheck alone won't.
- Location pages (`frontend/src/data/locations.ts`) and service pages
  (`frontend/src/data/services.ts`) both render through
  `frontend/src/app/[slug]/page.tsx`. Both have a `faqs` array that emits
  `FAQPage` schema when present — a page with zero FAQs has zero SERP-feature
  eligibility (People Also Ask, AI Overview), worth checking on any page
  audit.
