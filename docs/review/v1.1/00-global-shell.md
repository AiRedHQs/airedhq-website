# Global Shell Review

Route scope: all routes

Status: Awaiting approval

## Changed

- Reduced the mobile header from 65px to 57px while retaining the 64px desktop header.
- Gave the mobile header a stable near-black surface, subtle border, blur and restrained shadow so it does not merge with page artwork.
- Reduced the mobile menu trigger to a consistent 40px touch target with clearer contrast.
- Moved the full-screen mobile drawer outside the animated header using a document-level portal. This fixes the drawer being trapped inside the header's transformed stacking context.
- Added safe-area padding, independent vertical scrolling and overscroll containment to the mobile drawer.
- Reduced the drawer's initial vertical spacing while retaining large, touch-friendly navigation links.
- Added `min-width: 0` containment to the application shell and shared container.
- Added 20px horizontal padding from 390px upward while retaining 16px on narrower phones.
- Added shared signature, editorial and document display scales for page-by-page adoption. These classes do not change page typography until each page is reviewed.
- Constrained raster media, video and canvas elements to their containing width.

## Not changed

- No page hero, section, copy, product image or footer composition was changed.
- Desktop navigation layout and height remain unchanged.
- No Cloudflare deployment command was run.

## Verified

- Android-width shell checks: 360, 384, 390, 412 and 430px.
- Mobile header descendants remain within the viewport at every checked width.
- Full-screen drawer width and height match the viewport.
- Drawer background is opaque and background scrolling is locked.
- Desktop header verified at 1440 x 900.
- `npm test`: 11 tests passed.
- TypeScript: passed.
- Targeted ESLint: passed.
- Production build: passed; 100 static pages generated.
- Browser console: no errors during shell verification.

## Review note

The page-specific mobile overflow visible in Version 1.0 remains intentionally unchanged. It will be corrected one route at a time after this Global Shell batch is approved.
