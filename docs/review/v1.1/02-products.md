# Products Page Review

Route: `/products`

Status: Awaiting approval

## Changed

- Restored the official hiARed, GoBazaar and YojIQ logo assets in every product section.
- Used the approved purple hiARed wordmark, the transparent GoBazaar wordmark and the dark-background YojIQ wordmark without redrawing or recolouring them.
- Replaced the plain text product links with bordered, product-coloured CTA buttons.
- Added gradual colour-fill, border, lift and arrow movement hover states to all three product CTAs.
- Retained visible keyboard focus rings and minimum touch-friendly button height.
- Corrected the GoBazaar desktop grid so its map visual occupies the large visual column while its copy remains anchored in the right column.
- Increased GoBazaar's perceived visual size to compensate for its wider source aspect ratio.
- Balanced the visual wrappers across hiARed, GoBazaar and YojIQ on mobile, tablet and desktop.
- Preserved all existing product descriptions, routes, hero copy and section ordering.

## Verified

- `360 x 844`
- `390 x 844`
- `412 x 844`
- `768 x 1024`
- `1440 x 900`
- No horizontal page overflow or clipped text, links, logos or product visuals.
- All three CTAs resolve to their respective product routes.
- No browser console errors or warnings.
- Prettier, ESLint, TypeScript and the production build pass.

## Review Artifacts

- `C:\Users\sw\OneDrive\Documents\AiRedHQ\review-artifacts\v1.1\products\after-hiared-desktop.png`
- `C:\Users\sw\OneDrive\Documents\AiRedHQ\review-artifacts\v1.1\products\after-gobazaar-desktop.png`
- `C:\Users\sw\OneDrive\Documents\AiRedHQ\review-artifacts\v1.1\products\after-yojiq-desktop.png`
- `C:\Users\sw\OneDrive\Documents\AiRedHQ\review-artifacts\v1.1\products\after-mobile-full.png`

## Deployment

No Cloudflare deployment was run. The changes remain local on `codex/v1.1-local-review` and are not committed pending approval.
