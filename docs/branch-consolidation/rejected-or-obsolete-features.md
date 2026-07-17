# Rejected or Obsolete Features — drmom-website

Per the consolidation rules, nothing is dropped without evidence. Two
items from `Updated` were reviewed and **not** adopted:

## 1. Footer payment trust badges removed

`Updated` (`f4132e6`/`c891803`) comments out the entire payment-badges
block in `Footer.jsx`: Visa/Mastercard/UPI/Net-Banking/Razorpay icons, the
"Safe & secure payments" line, and the "256-bit" lock-icon line.

- **Evidence for removal:** none. Commit message is "updated code" on
  both commits — no reasoning given anywhere in the branch.
- **Evidence against removal:** these are static, non-interactive trust
  signals (no `href`, no `onClick`) shown near a purchase-adjacent footer
  area on a site that does take payments (`/payment` route exists and is
  fully wired). Removing them with no documented reason risks silently
  dropping a legitimate trust/conversion element.
- **Decision:** kept main's version. If the team genuinely doesn't
  support all five payment methods shown, that's a real bug in main worth
  fixing with a proper commit explaining which methods are actually live
  — but that's a product decision this consolidation shouldn't make
  unilaterally based on an unexplained comment-out.

## 2. About page team member social links removed

`Updated` (`c891803`) comments out the `team-card__links` block (LinkedIn
"in"/Twitter "tw" icons) on the About page team cards.

- **Evidence for removal:** none given. Note these links do point nowhere
  functional today (`href="#!"` placeholders on both `main` and
  `Updated`), so removing them doesn't break a working feature — but it
  also isn't a fix for anything, since the placeholders were already
  inert.
- **Decision:** kept main's version, for consistency with the payment
  badges call above (same author, same unexplained pattern, low
  confidence either way) and because it's genuinely cosmetic either way.
  Flagged for the team to make a real call: either wire the `href="#!"`
  links to real profiles, or remove them with a commit message that says
  so.

## Not obsolete, but time-boxed backend dependency

`Dashboard.jsx`'s subject-progress, badges, and leaderboard data
(`SUBJECTS`, `BADGES`, `LEADERBOARD` constants) are hardcoded, not
fetched. This was adopted (main's alternative was an explicit "coming
soon" placeholder, so the rebuilt Dashboard is strictly more complete as
a UI), but it should not be mistaken for live data. See
compatibility-analysis.md and the `6f853b7` commit message.

## Nothing else was rejected

Every other unique piece of content found across all three branches'
history (three legal pages, ScrollToTop upgrade, navbar tweak, footer
icon/link improvements, Contact FAQ improvements, Dashboard rebuild) was
adopted. No page, route, or component was found deleted anywhere in
history without a documented, evidence-backed reason (see
commit-history-analysis.md).
