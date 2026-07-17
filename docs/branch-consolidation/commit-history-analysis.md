# Commit History Analysis — drmom-website

Full reachable history was walked with `git log --all --diff-filter=D
--summary` and `git log --all --diff-filter=A --name-only` to find every
file ever added or removed on any branch.

## Deletions found (all reachable history)

| File | Deleted in | Reason (from commit evidence) | Disposition |
|---|---|---|---|
| `src/pages/Profile/Profile.jsx` | `f3ded0e` (main) | Same commit adds a real, working `/dashboard` destination as part of making auth genuinely functional. Commit message explicitly documents the auth rework. | **Confirmed intentional supersession** — not restored. |
| `test.txt` | `3a7709c` | Trivial scratch file, root of repo, no code reference anywhere. | Not a feature. Ignored. |

No other files were ever deleted on any reachable branch. There is no
evidence of an orphaned/lost page anywhere in this repository's history.

## Key feature-introduction commits

| Commit | Branch | What it did |
|---|---|---|
| `398c712` (merge) | main | Merged an earlier `New-Features` state into main via PR #2 |
| `f3ded0e` | main | Made login/signup call the real backend (previously `Login.jsx` faked success with a `setTimeout`); added working Google SSO redirect flow; added a real `/dashboard` route, replacing the deleted `Profile.jsx`. Commit message documents this was pre-existing broken behavior, not something the New-Features merge introduced. |
| `8cbc508` | main | Fixed video playback to launch from a Chapter rather than a nonexistent standalone Lesson entity |
| `b2cab5e` | main | Added course-first browsing (`/courses`, `/courses/:courseSlug`), made `/classes` a redirect to `/courses` while keeping `/classes/:classId` mounted for existing links |
| `b61202c`, `3ccb744` | New-Features | Added Privacy Policy, Terms of Use, Refund Policy pages + real footer links to them; upgraded ScrollToTop from a route-reset-only no-op into a working floating button; navbar background tweak |
| `f4132e6`, `c891803` | Updated | Real Instagram/Twitter brand SVG icons; simplified footer "Platform" links (four labels that all pointed at the same `/classes` route, collapsed to one "Courses" link); two-column FAQ layout + new FAQ entry; full Dashboard rebuild (main's version was an explicit placeholder) |

## Regression check

No commit on any branch reintroduces a bug that a later commit had fixed.
The two Guru-authored branches (`New-Features`, `Updated`) never touch
`utils/auth.js` or `utils/api.js`, so none of main's auth/session fixes
were at risk of being clobbered by a naive merge — this was verified
explicitly rather than assumed.
