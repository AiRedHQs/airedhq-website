# AiRedHQ Website Improvement Plan — Critical Issues

**Audience:** Codex / developer implementing changes  
**Website:** `https://www.airedhq.com`  
**Prepared:** 30 July 2026  
**Goal:** Achieve 90+ where practical in Lighthouse Performance, Accessibility, Best Practices, and SEO on both desktop and mobile, while improving real user experience and search visibility.

> [!IMPORTANT]
> **Existing functionality must not change.** No route, form, navigation behavior, user flow, animation, visual design, content meaning, integration, analytics, or deployment behavior may be removed or materially changed unless the owner gives explicit approval.
>
> **Create a backup and rollback point before every implementation batch.**
>
> **Stop before implementation whenever a change may alter design, layout, animation, image appearance, text, branding, caching behavior, security behavior, or a third-party integration. Explain the impact to the owner and obtain approval first.**

---

## 1. Baseline evidence reviewed

### Lighthouse/PageSpeed results supplied by the owner

| Area | Result | Interpretation |
|---|---:|---|
| Performance | 41 | Low, but the local run was contaminated by browser extensions |
| Accessibility | 96 | Strong |
| Best Practices | 96 | Strong |
| SEO | 92 | Strong; one clear link-text failure |
| First Contentful Paint | 0.7 s | Good |
| Largest Contentful Paint | 1.6 s | Acceptable |
| Speed Index | 2.0 s | Moderate |
| Total Blocking Time | 1,080 ms | Poor in this run |
| Cumulative Layout Shift | 0.505 | Poor and confirmed as a real page issue |
| Document/TTFB latency | about 1,390 ms | High |
| Image-delivery saving | about 457 KiB | Material opportunity |
| Missing image cache lifetime | about 511 KiB | Material repeat-visit opportunity |
| Render-blocking requests | about 60 ms | Small |
| First-party unused JavaScript estimate | about 126.8 KiB | Worth profiling |
| DOM elements | 519 | Acceptable; not an optimization target |
| DOM depth | 12 | Acceptable |
| Forced reflow | about 45–58 ms | Small compared with other problems |

### Repository evidence

The connected repository is:

`AiRedHQs/airedhq-130f3f52` on branch `main`

The connected repository currently appears to be a **Vite + React + TypeScript + React Router + Lovable** project:

- `package.json` uses `vite`, not Next.js.
- `README.md` describes a Lovable deployment.
- `vite.config.ts` exists.
- No standard root `wrangler.toml`, `wrangler.jsonc`, `next.config.js`, `next.config.mjs`, or `open-next.config.ts` was found.
- No standard `public/_headers` or `public/_redirects` file was found.
- The live performance report shows `/_next/image` and `/_next/static/chunks/...`, which are Next.js-style production assets.
- The connected repository contains older page structure and metadata that do not match the current live homepage.

**This mismatch must be resolved before Codex changes production code.**

---

# Mandatory execution contract

Apply this contract to **every task below**.

1. **Functionality preservation:** Existing functionality must not change.
2. **Backup first:** Create a Git tag, backup branch, build artifact, and Cloudflare deployment rollback reference before editing.
3. **Correct source only:** Do not edit until the exact repository, branch, commit, build command, Worker, and custom domain/route serving production are proven.
4. **No direct production edits:** Use a dedicated branch and a preview/staging deployment.
5. **Impact analysis first:** Record expected benefits, possible regressions, affected pages, affected components, and rollback steps before coding.
6. **Owner approval:** Obtain approval before any visible or behavioral change.
7. **Small batches:** Implement one issue or tightly related group at a time.
8. **Measure each batch:** Run a clean build, tests, clean Lighthouse, PageSpeed Insights, console checks, route checks, and visual comparison.
9. **Do not chase browser-extension findings:** Buyhatke and Adobe Acrobat extension code is not website code.
10. **No score guarantee:** Optimize for stable user experience and valid engineering practices; do not use hacks that merely manipulate a score.

---

## C-001 — Prove the production source of truth

**Why this is critical:** Codex could make correct changes in the connected repository and still have no effect on the live website, or could replace the current site with an older design.

**Evidence:** The connected GitHub repository is Vite/Lovable, while the live report contains Next.js assets. The owner believes production is served by a Cloudflare Worker.

**Functionality protection:** No code or Cloudflare configuration may be changed during this discovery task.

### Required investigation

1. In Cloudflare, open **Workers & Pages → the Worker serving `www.airedhq.com` → Deployments / Domains & Routes**.
2. Record:
   - Worker name
   - Worker type: Custom Domain, Route, or proxy in front of another origin
   - Production domain and route patterns
   - Active deployment/version ID
   - Deployment timestamp
   - Build source and integration
   - Git repository, branch, and commit SHA
   - Build command and output directory
   - Framework adapter, including OpenNext if present
   - Wrangler configuration location
3. Check Cloudflare DNS for both `airedhq.com` and `www.airedhq.com`.
4. Check GitHub deployment/webhook settings and Actions workflows.
5. Compare the production page text and a unique asset filename against the repository build.
6. Add a harmless build identifier to a preview only, never production, to prove which source generates the current site.
7. Produce a one-page “Production Source Map” before proceeding.

### Stop conditions

Stop and ask the owner when:

- The active Worker is not linked to the connected repository.
- The Worker proxies another origin.
- The production source is in Lovable, Vercel, another GitHub repository, or a local-only project.
- The current live code cannot be reproduced locally.
- The connected Vite repository is an obsolete version.

### Acceptance criteria

- The exact production repository and commit are known.
- The production build can be reproduced.
- A preview deployment matches the current website.
- The owner confirms the correct source.
- No live functionality or appearance has changed.

### Rollback

Not applicable because this is investigation only.

---

## C-002 — Create complete backups and a tested rollback path

**Why this is critical:** Performance and security changes can unexpectedly affect routing, animations, images, forms, or Cloudflare delivery.

**Functionality protection:** The backup process must not alter the active production deployment.

### Required backup package

Before each implementation batch:

1. Create a protected branch, for example:
   - `backup/pre-performance-2026-07-30`
2. Create an annotated Git tag from the exact active production commit.
3. Record the active Cloudflare Worker version ID and deployment ID.
4. Export or copy:
   - Wrangler configuration
   - Worker routes/custom domains
   - Environment-variable names, without exposing secret values
   - Cache Rules
   - Redirect Rules/Bulk Redirect lists
   - Transform Rules
   - HSTS settings
   - DNS records for apex and `www`
5. Save the current production build artifact when available.
6. Capture full-page screenshots at desktop and mobile widths.
7. Save baseline Lighthouse/PageSpeed reports.
8. Prove that a preview can be rolled back.
9. Document the emergency rollback command/process and responsible person.

### Acceptance criteria

- Git rollback is possible.
- Cloudflare rollback is possible.
- The rollback procedure has been tested on preview/staging.
- No secret values are placed in the repository or documentation.
- No functionality or visual design has changed.

---

## C-003 — Establish a clean, trustworthy performance baseline

**Why this is critical:** The supplied local Lighthouse report includes large amounts of JavaScript from Buyhatke and Adobe Acrobat browser extensions. Optimizing against those results would waste effort and could damage the site.

**Functionality protection:** This is measurement only. Do not change code.

### Required test method

Run both:

1. **PageSpeed Insights**
   - Desktop
   - Mobile
   - At least three runs each
2. **Chrome Lighthouse**
   - Incognito or a clean Chrome profile
   - All extensions disabled
   - No DevTools extensions
   - Production URL
   - Desktop and mobile
   - At least three runs each

Also run a clean browser Performance trace with:

- Layout Shift Regions
- Web Vitals
- Main-thread tasks
- Network requests
- Screenshots
- Coverage for first-party JavaScript and CSS

### Record separately

- First-party website work
- Cloudflare/analytics work
- Third-party website integrations
- Browser-extension work

### Do not report as website defects

- `chrome-extension://...` files
- Buyhatke scripts
- Adobe Acrobat scripts
- Extension-generated unused JavaScript
- `ERR_BLOCKED_BY_CLIENT` caused by a blocker, unless reproduced in a clean profile

### Acceptance criteria

- A median result from three clean runs is recorded.
- The clean report contains no browser-extension resources.
- Desktop and mobile baselines are stored.
- No functionality or design has changed.

---

## C-004 — Fix stale URLs, duplicate URLs, and indexing hygiene

**Why this is critical:** Old `.html` pages and duplicate URL variants can confuse visitors and search engines, split ranking signals, and expose outdated content.

**Functionality protection:** Current routes and user journeys must continue working. Redirect only when the old and new pages are truly equivalent.

### Required pre-implementation audit

1. Export indexed and discovered URLs from Google Search Console.
2. Crawl the website and collect:
   - Existing live routes
   - Redirecting routes
   - 404 routes
   - `.html` routes
   - Query-string variants
   - `www` and non-`www`
   - HTTP and HTTPS
   - URLs present in the sitemap
   - URLs linked internally
3. Create an owner-reviewable redirect map:
   - Old URL
   - Correct new URL
   - Reason
   - Expected status
   - Risk
4. Do not redirect unrelated old pages to the homepage.

### Known candidates to verify

- `/about.html` → `/about`
- `/index.html` → `/`
- Any old service `.html` pages → their exact current equivalent
- `http://...` → canonical HTTPS URL
- Non-preferred host → preferred canonical host

### Important rule for `/#contact`

A URL fragment such as `#contact` is handled by the browser and is normally not sent to the server. Do not create a Cloudflare server redirect for the fragment itself.

Instead:

- Find and update links that still point to `/#contact`.
- Prefer `/contact` when the intended destination is the current contact page.
- If preserving an old in-page contact section is required, propose an `id="contact"` compatibility anchor and obtain owner approval before changing page behavior.

### Implementation location

After C-001 confirms the deployment:

- For Cloudflare Worker static assets, use `_redirects` only when the request is actually served as a static asset.
- For requests handled by Worker/SSR code, implement redirects in the application/Worker response path.
- Cloudflare Redirect Rules or Bulk Redirects may be used when they are the verified source of truth.
- Do not create competing redirect systems.

### SEO follow-up

- Sitemap must contain only canonical, indexable, 200-status URLs.
- Canonical tags must point to the final URL.
- Internal links must point directly to final URLs.
- Keep verified permanent redirects long-term.
- Request validation/reindexing in Search Console after release.

### Approval gate

The owner must approve the complete redirect map before implementation.

### Acceptance criteria

- Every approved old URL returns one permanent redirect hop to the correct current page.
- No redirect chain or loop.
- No unrelated homepage redirects.
- Internal links no longer use old URLs.
- Sitemap has only final URLs.
- Current functionality and navigation remain unchanged.

### Rollback

Remove or revert the specific redirect batch and restore the previous route configuration.

---

## C-005 — Fix production console errors and broken assets

**Why this is critical:** Console errors can indicate broken code, harm Best Practices, hide real defects, and reduce trust.

**Evidence supplied:**

- `/apple-icon.png` returned 404.
- An inline script reported `ReferenceError: __name is not defined`.
- Cloudflare Insights showed `ERR_BLOCKED_BY_CLIENT`, which may be caused by a browser extension/blocker.

**Functionality protection:** Fix errors without removing analytics, features, integrations, or metadata unless the owner approves removal.

### Required steps

1. Reproduce all errors in a clean browser profile.
2. Add a valid `apple-icon.png` or correct the metadata reference.
   - Use the approved AiRedHQ brand asset.
   - Preserve the logo design.
   - Do not substitute a new logo without approval.
3. Locate the source of `__name is not defined`.
   - Check build output, inline scripts, minification/transpilation, Worker HTML rewriting, and injected analytics.
   - Fix the source, not the generated bundle by hand.
4. Recheck Cloudflare Insights in a clean browser.
5. Treat blocker-caused analytics errors as non-site failures if the site continues to function.
6. Confirm there are no missing source maps, icons, manifests, fonts, or images.

### Approval gate

Approval is required if the fix changes analytics, tracking, branding, or any script integration.

### Acceptance criteria

- No first-party console errors in a clean run.
- No 404 for declared icons or metadata assets.
- Analytics behavior is unchanged unless approved.
- Best Practices is retested.
- No functionality or design has changed.

---

## C-006 — Reduce Cumulative Layout Shift from 0.505 to 0.10 or lower

**Why this is critical:** Content visibly moves after loading. This can cause users to lose their place or click the wrong item. CLS carries 25% of the Lighthouse Performance score.

**Evidence supplied:** Lighthouse identifies the footer as the unstable element with a shift score of 0.505.

**Important interpretation:** The footer may be the element that moved, not the root cause. Content above it may be changing height.

**Functionality protection:** Preserve the current layout, animations, content, breakpoints, and user flows. Do not remove or materially alter an animation without owner approval.

### Impact analysis before coding

Use a clean Chrome Performance recording to identify the exact shift event and the element that changed size immediately before the footer moved. Check:

- Hero/product images
- Responsive image wrappers
- Logo wrappers
- Fonts and fallback font metrics
- Hydration/client-only sections
- Carousels or tab content
- Late-added banners
- Navigation height
- Content hidden or inserted after JavaScript runs
- Animations that change layout properties
- Server-rendered markup differing from client markup

### Safe fixes that should not change design

- Reserve image space with correct width/height or aspect-ratio.
- Reserve stable minimum heights for asynchronous sections.
- Keep server and client markup dimensions consistent.
- Preload critical fonts and use compatible fallback metrics.
- Animate `transform` and `opacity`, not width, height, top, left, margin, or padding.
- Avoid inserting content above already-rendered content.
- Ensure placeholders use the final component dimensions.
- Prevent responsive source changes from altering aspect ratio.
- Keep navigation and footer dimensions stable.

### Approval-required changes

- Removing an animation
- Changing animation duration or sequence
- Changing visible spacing or section height
- Changing typography
- Changing image crops
- Hiding content
- Reordering sections

### Acceptance criteria

- Clean Lighthouse CLS ≤ 0.10 on desktop and mobile.
- No visible jump during throttled reload.
- Footer and sections remain visually identical after load.
- All animations and features still work.
- Visual regression screenshots match the approved baseline.

### Rollback

Revert the component/CSS batch and restore the previous build if any visible regression occurs.

---

## C-007 — Reduce document latency and Time to First Byte

**Why this is critical:** The document response took about 1,390 ms, and Lighthouse estimated about 1,140 ms savings. The browser cannot begin useful page work until the main document arrives.

**Functionality protection:** Do not cache personalized, authenticated, form-submission, preview, or user-specific responses. Do not serve stale content or change page behavior.

### Required diagnosis

After the production Worker is identified:

1. Determine whether the homepage is:
   - Static generated
   - Server-rendered
   - Proxied to another origin
   - Generated by Lovable/Vercel/another host
2. Inspect Cloudflare Worker analytics/logs for:
   - CPU time
   - Subrequest duration
   - Origin latency
   - Cache status
   - Error/retry paths
3. Record response headers:
   - `CF-Cache-Status`
   - `Cache-Control`
   - `CDN-Cache-Control`
   - `Cloudflare-CDN-Cache-Control`
   - `Server-Timing`, if available
4. Check for unnecessary API/data requests before rendering.
5. Check whether the marketing homepage can be generated at build time.
6. Check whether Worker HTML rewriting or multiple Worker chains add latency.

### Potential fixes, subject to impact review

- Static-generate public marketing pages.
- Cache public HTML at the Cloudflare edge only when it is safe.
- Use separate browser and edge TTLs.
- Remove unnecessary synchronous Worker subrequests.
- Move non-critical work out of the response path.
- Avoid chaining Workers unless required.
- Use stale-while-revalidate only when content freshness rules are defined.
- Keep contact forms and dynamic endpoints uncached.

### Approval gate

Owner approval is required before changing HTML caching, content freshness, Worker routing, origin routing, or deployment architecture.

### Acceptance criteria

- Median document TTFB is ≤ 800 ms; aim for ≤ 500 ms where architecture allows.
- No stale or personalized content is cached.
- Forms, navigation, SEO metadata, and analytics behave exactly as before.
- Cache purge and rollback procedures are documented.

---

## C-008 — Fix image sizing, image delivery, caching, and LCP priority

**Why this is critical:** Lighthouse estimates about 457 KiB of image savings and reports about 511 KiB of image responses without useful cache lifetimes.

**Functionality protection:** Image meaning, crop, composition, color, transparency, and visual quality must remain unchanged. The owner has allowed invisible optimization, but visible changes require approval.

### Assets explicitly identified in the report

- GoBazaar interface: source about `1692 × 929`, displayed about `553 × 304`
- GoBazaar logo: source about `2000 × 1000`, displayed about `72 × 36`
- AiRedHQ product-suite image: source about `1536 × 1024`, displayed about `715 × 477`
- hiARed dashboard: source about `1536 × 1024`, displayed about `715 × 477`
- AiRedHQ logo: source about `2000 × 1000`, displayed about `72 × 36`
- hiARed logo: source about `720 × 240`, displayed about `126 × 42`

### Required implementation

1. Preserve original source files in version control or backup storage.
2. Generate responsive variants close to actual display widths.
3. Use correct `sizes` values for responsive images.
4. Keep width/height or aspect ratio explicit to prevent CLS.
5. Use modern formats only when visual comparison confirms no visible degradation.
6. Use small dedicated logo assets instead of downloading multi-megapixel logos for tiny slots.
7. Do not lazy-load the LCP/hero image.
8. Apply the framework’s current LCP preload/high-priority mechanism.
   - In current Next.js versions, inspect whether `preload` is the correct API.
   - Use `fetchpriority="high"` only where supported and appropriate.
9. If Next.js image optimization is confirmed:
   - Verify Cloudflare OpenNext/Cloudflare Images integration.
   - Configure appropriate optimized-image cache TTL.
   - Forward the `Accept` header through any proxy/CDN path.
10. Cache fingerprinted static assets for a long duration with `immutable`.
11. Use versioned or hashed names so changed images invalidate safely.
12. Do not apply long immutable caching to unversioned assets that may change.

### Visual approval test

For every changed image:

- Compare before/after at 100% and 200% zoom.
- Compare transparency and edges.
- Compare desktop and mobile crops.
- Confirm no change to color or contrast.
- Ask for owner approval if any difference is visible.

### Acceptance criteria

- Image-delivery warning is removed or materially reduced.
- Correct responsive image is selected at each viewport.
- LCP image is discovered immediately and prioritized.
- Image responses have safe cache headers.
- CLS remains ≤ 0.10.
- The design looks unchanged.

---

## C-009 — Reduce Total Blocking Time without removing functionality

**Why this is critical:** TBT carries 30% of the Lighthouse Performance score. The supplied run showed 1,080 ms, but much of the report was polluted by browser extensions.

**Clean-run interpretation required:**

- Extension unused JavaScript must be ignored.
- Supplied first-party unused JavaScript estimate was about 126.8 KiB.
- Supplied first-party long tasks totaled about 385 ms.
- Do not assume the website itself is responsible for the full 1,080 ms.

**Functionality protection:** Do not remove features, navigation, forms, tracking, animations, or interactions merely to improve a score.

### Required profiling

1. Complete C-003 first.
2. Use a production build and clean Performance trace.
3. Map long tasks to source files using source maps.
4. Identify:
   - Components hydrated on initial load
   - Large client components
   - Animation loops
   - Expensive effects
   - Event listeners
   - Carousels/tabs
   - Third-party website scripts
   - Unused providers and dependencies
5. Separate work required above the fold from below-the-fold work.

### Safe optimization approaches

- Dynamically import below-the-fold interactive components.
- Defer non-critical scripts.
- Split route/component bundles.
- Remove only code proven unused by the current production source.
- Avoid creating large objects or repeated calculations during initial render.
- Move non-visual work to idle time where browser support/fallback is safe.
- Pause off-screen animation work.
- Reduce hydration boundaries where supported by the actual framework.
- Keep server-renderable content out of unnecessary client components.
- Batch state updates and DOM reads/writes.
- Preserve analytics consent and event behavior.

### Approval-required changes

- Removing or changing animation
- Changing interaction timing
- Removing a library that affects behavior
- Delaying a feature that users currently see immediately
- Changing tracking or analytics
- Changing content rendering strategy if SEO output could differ

### Acceptance criteria

- Clean TBT ≤ 200 ms where practical on desktop and mobile lab runs.
- No feature or interaction is missing.
- No analytics event is lost.
- No visible animation or timing change without approval.
- All routes and forms pass regression testing.

---

## C-010 — Add security headers through a staged, approval-controlled rollout

**Why this is critical:** The report identified no enforced CSP, HSTS, COOP, or Trusted Types protections. These settings can improve security but can also break scripts, images, forms, popups, authentication, embeds, or analytics if applied too aggressively.

**Functionality protection:** Security headers must not break any existing feature, asset, integration, or user flow.

### Mandatory staging order

#### Phase A — Inventory only

- List all scripts, styles, fonts, images, frames, APIs, forms, analytics, and external domains.
- Identify inline scripts/styles and generated nonces/hashes.
- Identify popup, OAuth, payment, video, map, and embedded-content behavior.
- Confirm all apex and subdomain traffic supports HTTPS.

#### Phase B — Report-only CSP

- Deploy `Content-Security-Policy-Report-Only`.
- Collect violations in preview/staging and production sampling.
- Do not enforce until false positives are resolved.
- Do not use a broad policy simply to make the warning disappear.

#### Phase C — Safe baseline headers

Test and add suitable values for:

- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- Framing protection through CSP `frame-ancestors` and/or compatible fallback
- Other headers supported by the application

#### Phase D — HSTS

- Confirm HTTPS is permanent.
- Start with a conservative max-age.
- Do not enable `includeSubDomains` until every subdomain is verified.
- Do not enable `preload` without explicit owner approval and documented consequences.

#### Phase E — COOP / Trusted Types

- Test popup/integration behavior.
- Introduce only when compatible.
- Trusted Types requires a deliberate application-level plan; do not force it as a score hack.

### Implementation location

- If responses are generated by Worker/SSR code, set headers on the Worker response.
- Use `_headers` only for responses actually served as static assets.
- Keep one clear source of truth.

### Approval gate

The owner must approve:

- CSP enforcement
- HSTS max-age
- `includeSubDomains`
- HSTS preload
- COOP enforcement
- Trusted Types enforcement

### Acceptance criteria

- No broken scripts, styles, images, forms, analytics, popups, or embeds.
- CSP violations are understood.
- HSTS prerequisites are documented.
- Security headers are verified on all relevant responses.
- Rollback is immediate and tested.

---

## C-011 — Fix non-descriptive product links

**Why this is critical:** Lighthouse SEO is 92 because three product links use the same generic text, “Learn More,” for different destinations. Accessibility also reports that identical links have different purposes.

**Affected destinations:**

- `/products/hiared`
- `/products/gobazaar`
- `/products/yojiq`

**Functionality protection:** The destination, click behavior, visual style, spacing, and animation must remain unchanged.

### Preferred no-design-change approach

Keep the visible words “Learn More” and add meaningful screen-reader/semantic text so the accessible link name becomes:

- “Learn more about hiARed”
- “Learn more about GoBazaar”
- “Learn more about YojIQ”

Use an `sr-only` suffix or another framework-appropriate accessible-name solution. Verify that Lighthouse uses the resulting accessible name.

### Approval gate

If the visible button/link wording or width must change, obtain owner approval first.

### Acceptance criteria

- SEO score reaches 100 for the audited page if no other failure appears.
- Accessibility link-purpose audit passes.
- Visual appearance and functionality are unchanged.

---

## C-012 — Correct brand identity, public links, and placeholder company data

**Why this is critical:** The live website’s GitHub link points to `github.com/airedhq`, an unrelated organization associated with `aired.gg`. This creates a significant trust problem.

The connected repository also contains placeholder values in `src/config/site.ts`, including a `+1 (555)` phone number and “San Francisco, CA.” These may not be in the current production source, but they must not be published accidentally.

**Functionality protection:** Do not replace external links or company details without owner confirmation.

### Required audit

1. Verify every public social link:
   - GitHub
   - LinkedIn
   - YouTube
   - Any X/Twitter link
2. Confirm the correct public GitHub destination.
   - The private source repository is owned by `AiRedHQs`.
   - Do not expose a private repository unless the owner explicitly approves.
3. If there is no approved public GitHub profile, remove or hide the GitHub link only after owner approval.
4. Search the production source for:
   - `555`
   - `San Francisco`
   - placeholder emails
   - Lovable default OG images
   - old brand claims
5. Verify legal name, contact email, privacy email, and location before publishing.
6. Ensure Organization structured data and visible footer data agree.

### Approval gate

All public identity, contact, social-link, or legal-data changes require owner approval.

### Acceptance criteria

- No public link leads to an unrelated brand.
- No placeholder company data is exposed.
- Social links, metadata, and structured data are consistent.
- Existing functionality remains unchanged.

---

## C-013 — Release and regression gate

No critical change may reach production until all conditions pass.

### Build and code

- Clean install succeeds.
- Production build succeeds.
- Lint/type checks/tests succeed.
- No secrets or generated build artifacts are committed accidentally.
- Bundle changes are reviewed.

### Functional regression

Test every current user flow:

- Header navigation
- Mobile navigation
- Product navigation
- Solution and industry pages
- Contact/start-project flow
- Forms and validation
- Footer links
- Social links
- Legal pages
- 404 behavior
- Analytics/events
- Animations and interactive sections
- Keyboard navigation

### SEO regression

- 200 status for current pages
- Approved redirects
- Canonicals
- robots.txt
- sitemap
- metadata
- structured data
- internal links
- no accidental `noindex`

### Performance regression

Run clean PageSpeed and Lighthouse:

- Desktop and mobile
- Three runs each
- Record medians
- CLS ≤ 0.10
- TBT ≤ 200 ms where practical
- LCP ≤ 2.5 s
- No extension resources

### Visual regression

Compare approved desktop/mobile screenshots for:

- Layout
- Typography
- Spacing
- Images
- Crops
- Colors
- Animations
- Hover/focus states

### Deployment

- Deploy preview first.
- Owner approves visible/behavioral changes.
- Use a gradual or controlled production rollout when available.
- Monitor Worker logs and errors.
- Keep immediate rollback ready.

---

# Expected critical-path order

1. C-001 Production source of truth  
2. C-002 Backup and rollback  
3. C-003 Clean baseline  
4. C-004 Redirect/index plan  
5. C-005 Console and broken assets  
6. C-006 CLS  
7. C-007 TTFB/document latency  
8. C-008 Images/cache/LCP  
9. C-009 TBT/main thread  
10. C-010 Security headers  
11. C-011 Descriptive links  
12. C-012 Brand identity  
13. C-013 Release gate  

---

# Official references

- Cloudflare Workers: Next.js/OpenNext deployment  
  https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- Cloudflare Workers static-asset headers  
  https://developers.cloudflare.com/workers/static-assets/headers/
- Cloudflare Workers static-asset redirects  
  https://developers.cloudflare.com/workers/static-assets/redirects/
- Cloudflare Workers versions and deployments  
  https://developers.cloudflare.com/workers/versions-and-deployments/
- Cloudflare HSTS guidance  
  https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/
- Cloudflare security-header example  
  https://developers.cloudflare.com/workers/examples/security-headers/
- Next.js Image component  
  https://nextjs.org/docs/pages/api-reference/components/image
- Lighthouse performance scoring  
  https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- Lighthouse Total Blocking Time  
  https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time
- Google URL migration and redirects  
  https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
