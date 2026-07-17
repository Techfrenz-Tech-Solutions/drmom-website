# Implementation Decisions — drmom-website

Actual commits landed on `consolidation/all-features` (base: `main`
`b2cab5e`), in order:

1. **`6b0c2d2`** — `feat: restore Privacy Policy, Terms of Use, Refund Policy pages from New-Features`
   Copied `PrivacyPolicy/`, `TermsOfUse/`, `RefundPolicy/` from
   `origin/New-Features` byte-for-byte (self-contained, no shared-file
   edits needed inside those directories). Hand-edited `App.jsx` to add
   lazy imports + 3 routes onto main's *current* route table — did not
   take New-Features' `App.jsx`, which predates course-first browsing,
   Dashboard, CompleteSignup, and the Google-OAuth-redirect session-sync
   fetch fallback. Hand-edited `Footer.jsx` to point the existing
   "Privacy Policy"/"Terms of Use" labels (previously dead `#!` links) at
   the new routes and add a "Refund Policy" link, replacing the
   redundant "Student Login" footer link (Login is already reachable from
   the Navbar in 3 places).

2. **`ae65e32`** — `feat: enable functional scroll-to-top button`
   Overwrote `ScrollToTop.jsx` with New-Features' version and added the
   companion `ScrollToTop.css`. No `App.jsx` change required — the
   component was already mounted (main's version just always returned
   `null` after doing its route-change scroll reset). Bundled the
   Navbar.css always-visible-background tweak from the same source commit
   since it's a one-file, no-dependency cosmetic change.

3. **`93ec778`** — `feat: two-column FAQ layout and password-reset FAQ entry`
   Full file replace of `Contact.jsx`/`Contact.css` from
   `origin/Updated`. Verified no other part of `Contact.jsx` changed
   (single concern, diff was FAQ-section-only).

4. **`6f853b7`** — `feat: build out Student Dashboard (was an explicit placeholder)`
   Full file replace of `Dashboard.jsx` + new `Dashboard.css` from
   `origin/Updated`. Commit message explicitly calls out that
   `SUBJECTS`/`BADGES`/`LEADERBOARD` are still hardcoded arrays with no
   fetch call — this is tracked as an open backend dependency, not hidden.

## Deliberately not implemented (see rejected-or-obsolete-features.md)

- `Updated`'s comment-out of the Footer payment trust badges and the
  About.jsx team social links — both are unexplained ("updated code")
  removals with no evidence they're wrong, so main's versions were kept.

## Attribution

All non-trivial ports retain a `Source: origin/<branch> (<hash>)` line in
their commit body, per the consolidation rules, so `git blame`/`git log`
on this branch stays traceable back to the original author's work even
though the commits were hand-written rather than cherry-picked (a direct
cherry-pick wasn't possible for the App.jsx-touching changes because of
the architectural divergence explained above).
