# Branch Consolidation — drmom-website

This folder documents the consolidation of all reachable branches
(`main`, `New-Features`, `Updated`) of `drmom-website` into the
`consolidation/all-features` branch.

Read in this order:

1. [branch-inventory.md](branch-inventory.md) — every branch, what it is, ahead/behind main
2. [commit-history-analysis.md](commit-history-analysis.md) — archaeology: what was added, removed, why
3. [route-catalogue.md](route-catalogue.md) — every route/page and its final status
4. [feature-matrix.md](feature-matrix.md) — feature-by-feature origin and disposition
5. [compatibility-analysis.md](compatibility-analysis.md) — website ↔ admin-panel data/API alignment
6. [consolidation-plan.md](consolidation-plan.md) — the plan written before implementation
7. [implementation-decisions.md](implementation-decisions.md) — what was actually done, commit by commit
8. [testing-report.md](testing-report.md) — build/validation commands and results
9. [security-findings.md](security-findings.md) — secrets scan results
10. [rejected-or-obsolete-features.md](rejected-or-obsolete-features.md) — what was NOT adopted, and why
11. [rollback-plan.md](rollback-plan.md) — how to undo this if needed

## Scope actually found

This repository turned out to be small in scope: **3 branches, 0 tags**,
identical `package.json`/`package-lock.json` on every branch, no committed
secrets, and no historical deletions beyond three well-documented,
intentional ones. The 27-section consolidation process was followed in
full, but the findings are proportionate to a small repo, not a sprawling
multi-year one.

## Bottom line

- `Updated` is a linear descendant of `main` (0 commits behind) — almost
  everything on it was safe to adopt.
- `New-Features` diverged from `main` **before** main's course-first
  rewrite, auth fixes, and Google SSO work — it is stale on routing/auth,
  but it carries three legal pages (Privacy Policy, Terms of Use, Refund
  Policy) and a ScrollToTop button that never made it to `main`. These were
  hand-ported, not merged wholesale, specifically to avoid regressing
  main's newer routing.
- Two changes present on `Updated` were reviewed and **rejected**: an
  unexplained removal of class/subject/lesson pricing controls belongs to
  the admin-panel repo (see that repo's docs), and this repo's own
  unexplained UI comment-outs are covered in
  [rejected-or-obsolete-features.md](rejected-or-obsolete-features.md).
