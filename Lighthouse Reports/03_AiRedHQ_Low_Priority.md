# AiRedHQ Website Improvement Plan — Low Priority and Ongoing Work

**Audience:** Codex / developer implementing changes  
**Website:** `https://www.airedhq.com`  
**Prepared:** 30 July 2026  
**Start only after:** Critical and medium-priority work is stable.

> [!IMPORTANT]
> **Existing functionality must not change.** Back up before every batch. Do not make visible, animation, content, integration, routing, or security changes without impact analysis and owner approval.

---

# What not to spend time on now

The supplied report contains several items that are not meaningful website problems:

- **DOM size:** 519 elements, depth 12, and 19 children are acceptable.
- **Browser-extension JavaScript:** Buyhatke and Adobe Acrobat code is not part of the website.
- **Extension minification warnings:** Do not attempt to fix them.
- **WebMCP/Agentic Browsing not-applicable checks:** No action unless AiRedHQ intentionally builds WebMCP tools.
- **Third-party extension main-thread time:** Ignore after confirming it disappears in a clean profile.
- **Features marked “Newly Available” or “Limited Availability”:** These are not automatically defects; test fallbacks before changing anything.

---

# Mandatory execution contract

For every low-priority task:

- Use the confirmed production source only.
- Create a backup and preview deployment.
- Preserve functionality and design.
- Explain impact before implementation.
- Get approval for visible or behavioral changes.
- Verify clean desktop/mobile results.
- Roll back any regression.

---

## L-001 — Remove small legacy JavaScript transforms only when safe

**Evidence:** Lighthouse estimated about 13.8–14 KiB of legacy JavaScript.

**Priority interpretation:** This is small and will not be the difference between 41 and 90.

**Functionality protection:** Browser support must not be reduced without owner approval.

### Required approach

- Confirm the warning in a clean run.
- Review the supported-browser policy.
- Update build targets only when real audience support is known.
- Do not remove polyfills required by supported browsers.
- Test modern and minimum-supported browsers.

### Acceptance criteria

- No browser compatibility regression.
- Small bundle reduction is documented.
- No functionality or design change.

---

## L-002 — Monitor DOM growth; do not redesign to reduce it

**Simple explanation:** The DOM is the browser’s list of page building blocks. Your current total of 519 is not excessive.

**Functionality protection:** Do not delete content, simplify components, or change the design merely to lower the DOM number.

### Ongoing rule

- Alert only if page DOM grows substantially.
- Avoid deeply nested wrappers when creating new components.
- Reuse semantic elements.
- Keep accessibility landmarks.
- Do not flatten structures that animations/layout depend upon without testing and approval.

### Acceptance criteria

- No unnecessary new wrappers.
- Existing page remains unchanged.

---

## L-003 — Review browser compatibility and graceful fallbacks

**Evidence:** The report lists features such as `requestIdleCallback`, `scrollend`, relative colors, masks, backdrop-filter, and text wrapping with varying browser availability.

**Functionality protection:** The current visual experience must remain intact in supported browsers.

### Required approach

- Define supported browsers and versions.
- Test key pages in Chrome, Safari, Firefox, and Edge.
- Ensure content remains readable if a decorative feature is unsupported.
- Provide fallbacks for:
  - backdrop filters
  - masks
  - newer color functions
  - scroll event helpers
  - idle callbacks
- Do not replace a working modern feature solely because Lighthouse lists availability status.

### Approval gate

Visible fallback changes require owner approval.

### Acceptance criteria

- Core content and navigation work in supported browsers.
- Decorative differences are acceptable and documented.
- No functionality regression.

---

## L-004 — Revisit small CSS and reflow opportunities after major fixes

**Evidence:**

- Render-blocking CSS saving about 60 ms.
- Forced reflow about 45–58 ms.

These are small relative to TTFB, CLS, image delivery, and clean first-party TBT.

**Functionality protection:** No style or animation regression is allowed.

### Required approach

- Re-profile after critical and medium work.
- Close these items only if they remain measurable.
- Avoid complex build changes for negligible savings.
- Prefer maintainability over a tiny synthetic score gain.

### Acceptance criteria

- Any optimization produces a measured benefit.
- No visible or functional change.

---

## L-005 — Refine icons, manifest, and social preview metadata

**Evidence:** The manifest request itself is small. The broken Apple icon is a critical fix, but broader metadata polish can follow later.

**Functionality protection:** Branding must not change without approval.

### Optional improvements

- Verify favicon sizes.
- Verify Apple touch icon.
- Verify web manifest name, short name, icons, colors, and scope.
- Verify Open Graph and social images.
- Remove old Lovable default social images from the actual production source.
- Test sharing previews.

### Approval gate

All branding image changes require owner approval.

### Acceptance criteria

- Correct previews and icons.
- No brand inconsistency.
- No page-functionality change.

---

## L-006 — Publish high-quality expert content for long-term visibility

**Purpose:** Lighthouse SEO can reach 100 while the site still has limited organic visibility. Search visibility also depends on useful content, reputation, links, and user intent.

**Functionality protection:** Existing product and service pages must not be rewritten without owner approval.

### Suggested content areas

- Evaluating RAG systems before production
- Explainable AI in recruitment
- Privacy-first personal-finance design
- Architecture for hyperlocal discovery platforms
- WebXR versus native VR
- Designing multi-role SaaS permissions
- Cloudflare Workers/edge architecture lessons, when based on real experience

### Quality rules

- Use real expertise and verifiable examples.
- Do not invent customers, metrics, reviews, or results.
- Link articles naturally to relevant pages.
- Add article structured data.
- Review every article for accuracy and brand tone.
- Prioritize quality over publishing volume.

### Approval gate

Owner/content approval is required before publication.

### Acceptance criteria

- Useful, original content.
- Clear internal links.
- No unsupported claims.
- No impact on existing functionality.

---

## L-007 — Gradually strengthen case-study evidence

**Purpose:** Improve trust and conversion over time.

**Functionality protection:** Do not change product claims or case-study facts without approval.

### Add only verified evidence

- Dated milestones
- Screenshots/demos
- Approved quotes
- Test methodology
- Performance measurements
- Architecture decisions
- Before/after workflow comparisons

### Acceptance criteria

- Every claim has an internal source/approval.
- No invented metrics.
- Existing layout remains unchanged unless approved.

---

## L-008 — Routine quarterly maintenance

Every quarter:

- Crawl all routes.
- Check redirects and 404s.
- Check Search Console.
- Check sitemap/canonical consistency.
- Run clean PageSpeed desktop/mobile.
- Check real-user Core Web Vitals when enough data exists.
- Review Cloudflare Worker errors and latency.
- Audit dependency/security updates.
- Review bundle growth.
- Verify public social/contact links.
- Verify legal-page dates.
- Test forms and analytics.
- Test rollback procedure.
- Update `docs/production-deployment.md`.

**Functionality protection:** Maintenance must not silently change user behavior.

---

# Completion rule

Low-priority work is complete when it improves maintainability, compatibility, or long-term visibility **without distracting from the critical performance, indexing, deployment, and security work**.
