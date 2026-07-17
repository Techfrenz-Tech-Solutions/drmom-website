# Consolidation Plan — drmom-website

Written before implementation, based on the branch/commit/route/feature
analysis in this folder. Base: `main` (`b2cab5e`), on branch
`consolidation/all-features`.

| # | Item | Decision | Source | Destination file(s) | Risk | Test method |
|---|---|---|---|---|---|---|
| 1 | Privacy Policy / Terms of Use / Refund Policy pages | Restore (copy as-is, self-contained) | New-Features `b61202c` | `src/pages/{PrivacyPolicy,TermsOfUse,RefundPolicy}/*` | Low — static content, no shared deps | build |
| 2 | Routes + lazy imports for the 3 legal pages | Reimplement manually onto main's current `App.jsx` (not a merge — New-Features' App.jsx is stale) | New-Features `b61202c` (adapted) | `src/App.jsx` | Low | build |
| 3 | Footer legal links (real hrefs, drop dead `#!` links) | Adopt | New-Features `b61202c` | `src/components/Footer/Footer.jsx` | Low | build |
| 4 | ScrollToTop upgrade (functional button) | Adopt verbatim | New-Features `3ccb744` | `src/components/ScrollToTop/*` | Low — already mounted in App.jsx | build |
| 5 | Navbar always-visible background | Adopt | New-Features `3ccb744` | `src/components/Navbar/Navbar.css` | Low, cosmetic | build |
| 6 | Footer social icons (real brand SVGs) | Adopt | Updated `f4132e6` | `src/components/Footer/Footer.jsx` | Low | build |
| 7 | Footer "Platform" link de-duplication | Adopt (4 identical-destination links → 1) | Updated `f4132e6` | `src/components/Footer/Footer.jsx` | Low | build |
| 8 | Footer payment trust badges removal | **Reject** — no rationale in commit message, removes a trust signal | Updated `f4132e6`/`c891803` | n/a | — | — |
| 9 | About.jsx team social links removal | **Reject** — same pattern, no rationale | Updated `c891803` | n/a | — | — |
| 10 | Contact FAQ two-column layout + new entry | Adopt | Updated `f4132e6` | `src/pages/Contact/{Contact.jsx,Contact.css}` | Low | build |
| 11 | Dashboard full rebuild | Adopt, document mocked data as backend dependency | Updated `f4132e6` | `src/pages/Dashboard/{Dashboard.jsx,Dashboard.css}` | Medium — hardcoded demo data must not be mistaken for live data | build + documentation |

Implementation order followed: shared infra/routing first (items 1–5),
then independent page-level polish (items 6–11), committed as separate,
reviewable commits rather than one large diff — see
[implementation-decisions.md](implementation-decisions.md) for the actual
commit list.
