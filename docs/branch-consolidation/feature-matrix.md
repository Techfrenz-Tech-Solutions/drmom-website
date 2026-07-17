# Feature Matrix — drmom-website

| Feature | `main` | `New-Features` | `Updated` | Consolidated decision |
|---|---|---|---|---|
| Homepage | ✅ | ✅ (stale) | ✅ | keep main |
| Course catalogue / course detail | ✅ | ❌ (removed, predates rewrite) | ✅ | keep main |
| Classes browsing (legacy) | redirect only | ✅ full page, linked in nav | redirect only | keep main's redirect (course-first is the deliberate replacement, documented in code comment) |
| Login / registration | ✅ real backend calls | stale (fake `setTimeout`) | ✅ | keep main |
| Google authentication | ✅ real OAuth redirect flow | ❌ | ✅ (inherited from main) | keep main |
| Student dashboard | ✅ explicit placeholder | n/a | ✅ full rebuild | **adopt Updated's rebuild**; mock data flagged as backend dependency |
| Video playback (chapter-based) | ✅ | stale (lesson-based) | ✅ | keep main |
| Profile management | ❌ (superseded by Dashboard) | ✅ (`Profile.jsx`, superseded) | ❌ | keep main (deliberate supersession, see commit-history-analysis.md) |
| Password reset | via FAQ only | — | ✅ FAQ entry added | adopt Updated |
| Search / filters | not present on any branch | — | — | not present anywhere — no gap to close |
| Payment flow | ✅ | stale | ✅ | keep main |
| Error page (404) | ✅ | ✅ | ✅ | keep main |
| Responsive nav | ✅ | ✅ + always-visible bg | ✅ | **adopt New-Features'** navbar bg tweak |
| Footer — legal links (Privacy/Terms/Refund) | ❌ (dead `#!` links) | ✅ real pages + links | ❌ | **restored from New-Features** |
| Footer — social icons | ✅ generic icons | unchanged | ✅ real Instagram/Twitter brand SVGs | adopt Updated |
| Footer — platform links | 4 labels → same route | unchanged | 1 deduplicated "Courses" link | adopt Updated (de-dup, not a feature loss — all 4 pointed at the same page) |
| Footer — payment trust badges (Visa/Mastercard/UPI/NetBanking/Razorpay, "256-bit secure") | ✅ shown | unchanged | commented out, **no rationale given** | **kept from main** — see rejected-or-obsolete-features.md |
| About — team social links | ✅ shown (non-functional `href="#!"` placeholders) | unchanged | commented out, **no rationale given** | **kept from main** — see rejected-or-obsolete-features.md |
| Static content pages | Home/About only | + Privacy/Terms/Refund | Home/About only | **all four now present** |
| Contact / support form | ✅ single-column FAQ | unchanged | ✅ two-column FAQ + new entry | adopt Updated |
| Scroll-to-top button | mounted, but renders nothing (scroll-reset only) | ✅ full working button | unchanged | **adopt New-Features** |

## Features found in code but not exposed in the UI

None found — every component under `src/pages` and `src/components` that
isn't a shared layout piece (`Navbar`, `Footer`, `BottomNav`,
`ScrollToTop`, `BookLoader`, `LoadingSpinner`, `Icon`, `ClassCard`,
`ParticleBackground`) is reachable from a route.
