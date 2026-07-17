# Branch Inventory — drmom-website

Repository root commit history is linear until 2026-07-03; no unrelated
histories, no rewritten history detected. `git fetch --all --tags --prune`
found **0 tags**.

| Branch | Tip commit | Tip date | Author | Merge-base with main | Ahead of main | Behind main | Status |
|---|---|---|---|---|---|---|---|
| `main` | `b2cab5e` | 2026-07-05 | Deepak Ganesh | — | — | — | Default branch, most architecturally current |
| `Updated` | `c891803` | 2026-07-17 | Guru | `b2cab5e` (= main tip) | 2 | 0 | Linear descendant of main — strict superset |
| `New-Features` | `b61202c` | 2026-07-03 | Guru | `3a7709c` | 2 | 4 | Diverged before main's course-first rewrite |

## `main`

Default branch. Authored primarily by Deepak Ganesh with well-documented,
reasoned commit messages (each explains what was broken and why the fix is
correct — e.g. `f3ded0e "fix(auth): make login/signup real, add working
Google SSO and a Dashboard destination"`). This is the architectural
baseline: course-first browsing, real authentication, Google SSO,
video-from-chapter playback.

## `Updated`

Contains `main` in its ancestry (0 commits behind — a true fast-forward
relationship), plus 2 additional commits by Guru, both messaged simply
"updated code" with no rationale. Net diff vs. main:
`Footer.jsx/css`, `About.jsx`, `Contact.jsx/css`, `Dashboard.jsx/css` — 689
insertions, 81 deletions across 7 files. Because it's a strict superset of
main, everything on it not explicitly rejected was safe to fast-forward
port.

## `New-Features`

Diverged from an ancestor of main (`3a7709c`) and was never rebased. Its
own `App.jsx` still reflects the pre-course-first architecture (no
`/courses`, no `/courses/:courseSlug`, no `/dashboard`, no
`/complete-signup`, and a since-removed defensive `fetch` fallback for
post-OAuth-redirect session sync). Taking this branch's `App.jsx` wholesale
would have regressed all of that. Its **unique, self-contained** value —
three legal pages and a ScrollToTop upgrade — was hand-ported onto main's
current `App.jsx` instead of merging.

## Cherry equivalence check

`git cherry origin/main origin/New-Features` confirmed both of
New-Features' unique commits are genuinely new content (not
already-applied-under-a-different-hash duplicates of anything on main).
