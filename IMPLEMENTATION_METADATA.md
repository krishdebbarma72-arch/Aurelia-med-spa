# Metadata Implementation Plan — Lumière Medical Spa

Tracks what's been added to `app/layout.tsx` for SEO, social sharing, and
favicon coverage across platforms. Checked items are implemented and
verified in this codebase; unchecked items are known gaps or require
follow-up assets/decisions before they can be completed.

---

## 1. Core SEO metadata

- [x] `title` — set, includes brand + primary service + location
- [x] `description` — set, under 160 characters, includes physician name and location
- [x] `metadataBase` — set to the real production URL (`https://med-spa-lumiere-0r.vercel.app`), required for relative image paths in `openGraph`/`twitter` to resolve to absolute URLs
- [x] Removed leftover `generator: 'v0.app'` tag (scaffolding artifact, no reason to ship to production/client-facing demo)
- [ ] `keywords` — not set. Largely ignored by modern search engines (Google has not used it for ranking in years); low priority, can skip unless requested
- [ ] `robots` — not set. Defaults to indexable/followable, which is correct for a live marketing site. Add explicit `robots: { index: true, follow: true }` only if a future staging/preview deployment needs to be excluded from indexing

## 2. Open Graph (Facebook, LinkedIn, WhatsApp, iMessage, Slack, Discord embeds)

- [x] `openGraph.title`
- [x] `openGraph.description`
- [x] `openGraph.url`
- [x] `openGraph.siteName`
- [x] `openGraph.locale` — set to `en_US`
- [x] `openGraph.type` — set to `website`
- [x] `openGraph.images` — points to `/images/og-image.png`, 1200×630 (the OG-spec standard size; matches what Facebook/LinkedIn/Discord/Slack all expect for a full-size preview card without cropping)
- [x] `og-image.png` asset created — cropped/resized from the provided marketing banner, preserving the logo, headline, and physician photo (cropped the empty countertop space at the bottom rather than center-cropping, to avoid cutting the logo or face)

## 3. Twitter / X Cards

- [x] `twitter.card` — set to `summary_large_image` (full-width image card, matches the OG image)
- [x] `twitter.title`
- [x] `twitter.description`
- [x] `twitter.images` — reuses `/images/og-image.png`

## 4. Discord

- [ ] No separate metadata standard — Discord reads standard Open Graph tags directly. Section 2 covers this completely; no additional implementation needed.

## 5. Google (Search results, rich snippets)

- [x] Standard `title`/`description` (section 1) are what Google primarily uses for search result snippets
- [ ] `JSON-LD structured data` (Organization / LocalBusiness / MedicalBusiness schema) — **not implemented**. This is what enables Google to show rich results (star ratings, address, hours, phone number directly in search results) rather than a plain blue link. Meaningful upgrade for a real local-business launch, but requires real business data (verified address, hours, phone) rather than the placeholder `(480) 555-0197` currently in the demo. Recommend implementing once real business details are finalized, not before
- [ ] Google Search Console verification meta tag — not applicable until the site has a real, owned domain (not a `.vercel.app` preview URL) and is being actively submitted for indexing

## 6. Favicon / App Icons

- [x] `icon.svg` — replaced default v0/Vercel placeholder logo with the Lumière gold leaf mark (embedded as a base64 raster inside the SVG wrapper, since the source asset is a raster image, not a true vector; at favicon render sizes this is visually indistinguishable from a true vector and avoids introducing shape distortion from automated vector-tracing)
- [x] `icon-light-32x32.png` — regenerated from the leaf mark
- [x] `icon-dark-32x32.png` — regenerated from the leaf mark (same source asset used for both light/dark; the gold tone has sufficient contrast against both light and dark browser chrome, so no separate dark-specific recolor was needed)
- [x] `apple-icon.png` — regenerated at 180×180 (Apple's standard touch-icon size) for the iOS/iPadOS home-screen and Safari tab icon
- [ ] Android Chrome / PWA manifest icons (`manifest.json` with 192×192 / 512×512 icons) — not implemented. Only relevant if this becomes an installable PWA; not needed for a standard marketing site

## 7. Verification

- [x] `tsc --noEmit` passes with no errors after all metadata/icon changes
- [x] Production build (`next build`) compiles successfully
- [x] Confirmed via direct image inspection that `og-image.png` preserves all key banner content (logo, headline, feature icons, physician photo) after cropping to the 1200×630 OG spec
- [ ] **Not verified**: actual live rendering of share-link previews on Facebook/LinkedIn/Twitter/Discord/WhatsApp. These platforms cache OG metadata aggressively and often require submitting the URL to each platform's own debugger/cache-buster tool (e.g. Facebook Sharing Debugger, Twitter Card Validator, LinkedIn Post Inspector) after deploying, to force a fresh fetch. **Recommend doing this manually after the next deploy** — it cannot be verified from this development environment.

---

## Known follow-ups (not blockers, but worth tracking)

1. Once a custom domain replaces the `.vercel.app` preview URL, update `metadataBase` and every `openGraph.url`/`twitter` URL reference to match.
2. Once real business hours/address/phone are finalized, consider adding `MedicalBusiness` JSON-LD structured data for Google rich results (section 5).
3. Re-run each platform's link-preview debugger after every deploy where `og-image.png` or the title/description text changes — cached previews will otherwise keep showing stale content.
