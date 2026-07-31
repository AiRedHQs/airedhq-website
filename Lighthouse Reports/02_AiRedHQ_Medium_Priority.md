# AiRedHQ Website Improvement Plan — Medium Priority

**Audience:** Codex / developer implementing changes  
**Website:** `https://www.airedhq.com`  
**Prepared:** 30 July 2026  
**Start only after:** Critical file tasks C-001, C-002, and C-003 are complete.

> [!IMPORTANT]
> **Existing functionality must not change.** Create a backup before every batch. Any visible change, animation change, layout change, content change, integration change, or security/caching behavior change requires impact analysis and owner approval before implementation.

---

# Mandatory execution contract

For every task:

- Work only in the confirmed production repository and deployment.
- Create a backup branch/tag and record the Cloudflare deployment version.
- Use preview/staging.
- Preserve functionality, design, content meaning, navigation, forms, analytics, and animations.
- Explain possible impact before implementation.
- Obtain owner approval for visible or behavioral changes.
- Implement in a small batch.
- Retest desktop/mobile in a clean browser and PageSpeed Insights.
- Roll back if any regression appears.

---

## M-001 — Improve low color contrast while preserving the design

**Evidence:** Accessibility score is 96. Lighthouse flagged low-contrast text in product-section labels, descriptive text, numbered labels, and the selected-collaborations heading. Classes shown include low-opacity white such as `text-white/42` and `text-white/34`.

**Simple impact:** Some text may be hard to read, especially on dim screens or for users with low vision.

**Functionality protection:** No layout, wording, font family, component behavior, or interaction may change.

### Required approach

1. Measure current foreground/background combinations.
2. Identify the smallest opacity/color adjustment that meets WCAG contrast.
3. Preserve the overall visual hierarchy.
4. Test dark-mode rendering, hover/focus states, desktop, and mobile.
5. Present before/after screenshots and exact color values to the owner.

### Approval gate

Because color is a visible design change, obtain owner approval before implementation.

### Acceptance criteria

- Accessibility contrast audit passes.
- Text remains visually aligned with the design system.
- No layout or functionality changes.
- Accessibility score remains ≥ 96 and aims for 100.

---

## M-002 — Reduce render-blocking CSS without destabilizing the design

**Evidence:** Lighthouse estimates about 60 ms from two CSS chunks.

**Priority interpretation:** This is a small saving. Do not use risky CSS extraction or inline large styles merely for the score.

**Functionality protection:** Tailwind classes, responsive behavior, animations, and component appearance must remain unchanged.

### Required approach

- Confirm the finding in a clean run.
- Remove CSS only when proven unused.
- Keep critical above-the-fold styles available immediately.
- Avoid flash of unstyled content.
- Avoid manually editing generated chunk files.
- Review font-loading CSS and imported global styles.
- If the production source is Next.js, use framework-supported CSS behavior.
- If the production source is Vite, evaluate route/component CSS splitting only after visual regression tests.

### Approval gate

Approval is required if CSS loading changes produce any visible loading transition.

### Acceptance criteria

- No flash or layout shift.
- No missing responsive style.
- No animation change.
- Render-blocking warning is reduced where practical.

---

## M-003 — Complete first-party JavaScript cleanup after profiling

**Evidence:** The supplied report estimates about 126.8 KiB of unused first-party JavaScript. This is separate from the much larger browser-extension code.

**Functionality protection:** Do not remove a provider, library, event handler, animation, or component unless its lack of use is proven in the confirmed production source.

### Required approach

1. Use clean Coverage and source maps.
2. Identify bundle ownership by component and route.
3. Prefer route/component splitting over manual bundle edits.
4. Dynamically load below-the-fold interactive components.
5. Review large icon imports and library-wide imports.
6. Review unused providers.
7. Review components marked client-side that can render without client JavaScript.
8. Remove dependencies only after:
   - repository-wide search
   - production build
   - full route testing
   - owner-impact review
9. Preserve analytics and event tracking.

### Connected-repository note

The connected Vite repository initializes TanStack Query even though the reviewed marketing pages appear static. This is an audit candidate only if that repository is proven to serve production. Do not remove it based solely on the current repository review.

### Approval gate

Approval is required for any behavior/timing or analytics change.

### Acceptance criteria

- First-party bundle decreases measurably.
- No route or interaction regression.
- No visual or animation change without approval.
- TBT improves in a clean run.

---

## M-004 — Reduce forced reflow and layout calculation work

**Evidence:** The report shows roughly 45–58 ms of forced reflow, associated with first-party chunks and some extension code.

**Simple impact:** JavaScript may ask the browser to measure and redraw the page more often than needed.

**Functionality protection:** Keep the same animation, scroll behavior, component sizes, and interaction timing unless approved.

### Required approach

- Reproduce in a clean Performance trace.
- Map the function call to source.
- Separate DOM reads from DOM writes.
- Avoid repeated `getBoundingClientRect`, `offset*`, or computed-style reads inside loops.
- Batch visual updates in animation frames.
- Use ResizeObserver/IntersectionObserver where appropriate and supported.
- Stop off-screen work.
- Do not optimize browser-extension calls.

### Approval gate

Any animation timing or interaction change requires approval.

### Acceptance criteria

- Forced reflow time is reduced.
- No visual or input regression.
- No new CLS.

---

## M-005 — Reduce LCP render delay without removing the hero experience

**Evidence:** LCP breakdown includes about 500 ms element render delay. The LCP image is discoverable and not lazy-loaded, but Lighthouse recommends applying high fetch priority/preload.

**Functionality protection:** The hero must retain the approved image, copy, layout, and animation unless the owner approves change.

### Required approach

- Confirm the exact LCP element in a clean run.
- Apply the framework’s supported preload/high-priority mechanism.
- Ensure critical CSS for the hero is available.
- Avoid hiding the LCP element behind an initial opacity of zero.
- Avoid client-only rendering for static hero content.
- Ensure fonts do not delay the hero heading.
- If an entrance animation delays paint, present options:
  - keep animation but paint image immediately
  - animate a wrapper that does not block initial visibility
  - change timing only with owner approval

### Acceptance criteria

- LCP remains ≤ 2.5 s and improves from the clean baseline.
- Hero looks and behaves the same unless approved.
- No new CLS.

---

## M-006 — Add and validate structured data

**Evidence:** Lighthouse lists structured data as a manual check rather than a confirmed failure.

**Visibility benefit:** Structured data helps search engines understand the company, site, breadcrumbs, articles, and products. It does not guarantee rich results.

**Functionality protection:** Structured data must describe visible, truthful content. It must not change page behavior.

### Recommended schema, only where accurate

- `Organization`
- `WebSite`
- `BreadcrumbList`
- `SoftwareApplication` for actual products when required fields are truthful
- `Article` for published blog posts
- `Service` only when it accurately represents the page

### Required approach

- Keep name, logo, URL, contact details, and social profiles consistent.
- Do not publish fake ratings, prices, reviews, customer counts, or launch status.
- Validate with Google’s Rich Results Test and Schema.org validator.
- Add tests to prevent malformed JSON-LD.

### Approval gate

Owner approval is required for all company, product, contact, or claim data.

### Acceptance criteria

- Valid structured data.
- No unsupported or misleading claims.
- No duplicate/conflicting organization identity.

---

## M-007 — Formalize sitemap, robots, canonical, and Search Console monitoring

**Evidence:**

- Lighthouse reports robots.txt and canonical as valid.
- The connected repository contains `public/robots.txt`.
- No `public/sitemap.xml` was found in that connected repository.
- The production source is unresolved.

**Functionality protection:** Do not block existing public pages or remove indexed pages without an approved SEO plan.

### Required approach

- Generate sitemap from the actual route source.
- Include only canonical, indexable, 200-status pages.
- Exclude redirects, 404s, preview/staging routes, and private pages.
- Reference the sitemap in robots.txt.
- Verify preferred host and canonical consistency.
- Submit sitemap in Search Console.
- Monitor:
  - indexed pages
  - duplicate/canonical selections
  - crawled-not-indexed
  - redirect errors
  - 404s
  - Core Web Vitals
  - queries and click-through rate

### Approval gate

Owner approval is required before removing/noindexing an existing page.

### Acceptance criteria

- Search Console accepts sitemap.
- No old `.html` URLs in sitemap.
- No accidental blocks.
- No functionality change.

---

## M-008 — Add Cloudflare observability and cache verification

**Purpose:** Make performance decisions using real Worker/origin evidence instead of guesswork.

**Functionality protection:** Logging must not expose sensitive data, form contents, tokens, or personal information.

### Required approach

- Enable or verify Workers Logs/observability.
- Log only safe operational data:
  - route
  - status
  - duration
  - cache status
  - deployment version
  - error category
- Do not log request bodies or confidential headers.
- Add timing around origin subrequests.
- Monitor CPU time and exceptions.
- Verify static cache HIT/MISS behavior.
- Verify browser cache headers separately from edge cache.
- Create alerts for error-rate or latency regression.

### Approval gate

Owner approval is required for any new external logging provider or retention policy.

### Acceptance criteria

- Slow paths can be identified.
- No personal or sensitive data is logged.
- Cache behavior is observable.
- No user-facing behavior changes.

---

## M-009 — Add automated performance and SEO quality gates

**Purpose:** Prevent future changes from returning the website to a low score.

**Functionality protection:** CI failures must not cause production to be bypassed or manually deployed without review.

### Required checks

On pull requests or preview deployments:

- Production build
- Type/lint/tests
- Broken-link check
- Route/status check
- Console-error check
- Lighthouse CI or equivalent clean-browser audit
- Bundle-size comparison
- Image-size check
- robots/canonical/sitemap check
- Structured-data validation
- Accessibility smoke test

### Suggested budgets

Budgets must be based on the clean baseline, then tightened:

- CLS ≤ 0.10
- LCP ≤ 2.5 s
- TBT ≤ 200 ms where practical
- No new first-party console errors
- No new 404 asset
- No unexplained bundle growth

### Approval gate

Owner approval is required before making a performance budget block urgent business releases; define an exception process.

### Acceptance criteria

- Pull requests display pass/fail evidence.
- No browser extensions in CI.
- Baseline artifacts are stored.
- Functionality is regression-tested.

---

## M-010 — Finalize legal and contact trust information

**Evidence from the live-site review:** Public legal pages previously displayed draft-like language and the contact experience lacked clearly verified company details. Reconfirm the current production state.

**Visibility benefit:** Clear identity and trustworthy legal/contact pages improve visitor confidence and conversion. This is not a direct Lighthouse score item.

**Functionality protection:** Contact forms and communication flows must continue working.

### Required approach

- Obtain legal/business-approved:
  - legal entity name
  - effective dates
  - governing jurisdiction
  - privacy contact
  - business contact
  - actual analytics/cookie practices
  - actual processors/integrations
- Remove internal drafting notes only after final approval.
- Ensure visible data, metadata, and structured data agree.
- Test all email/contact links.

### Approval gate

All legal wording and company details require owner/legal approval.

### Acceptance criteria

- No placeholder or internal drafting instructions.
- Contact methods work.
- No functionality or design change without approval.

---

## M-011 — Add reduced-motion support

**Purpose:** Users who have requested reduced motion should not be forced to view continuous or large animations.

**Functionality protection:** Default animation behavior for other users must remain unchanged unless approved.

### Required approach

- Audit all continuous, entrance, scroll, hover, and background animations.
- Add `prefers-reduced-motion` behavior.
- Disable or simplify only for users who request it.
- Ensure content remains visible and understandable.
- Do not remove default animations without approval.

### Approval gate

Owner approval is required because animation behavior changes for a user group.

### Acceptance criteria

- Reduced-motion users receive a stable experience.
- Default users see the existing animation.
- No content is hidden.
- No new layout shift.

---

## M-012 — Document the deployment and ownership model

**Purpose:** Prevent future confusion between Lovable, GitHub, Next.js, Vite, Cloudflare Workers, and any external origin.

**Functionality protection:** Documentation only.

### Required document

Create `docs/production-deployment.md` containing:

- Production repository
- Default/protected branches
- Framework and version
- Build command
- Cloudflare Worker name
- Wrangler config
- Custom domain/route
- Environment names
- Preview process
- Deploy process
- Rollback process
- Cache source of truth
- Redirect source of truth
- Header source of truth
- Sitemap source of truth
- Ownership/contact
- Last verified date

### Acceptance criteria

- A new developer can reproduce preview safely.
- No secret values are included.
- No functionality changes.

---

# Recommended medium-priority order

1. M-001 Contrast  
2. M-005 LCP render delay  
3. M-003 First-party JS cleanup  
4. M-004 Forced reflow  
5. M-002 CSS blocking  
6. M-007 Sitemap/Search Console  
7. M-006 Structured data  
8. M-008 Observability  
9. M-009 CI budgets  
10. M-010 Legal/contact trust  
11. M-011 Reduced motion  
12. M-012 Deployment documentation
