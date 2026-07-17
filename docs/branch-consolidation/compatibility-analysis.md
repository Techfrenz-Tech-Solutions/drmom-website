# Cross-Repository Compatibility Analysis — website ↔ admin-panel

Both repos were cloned and inspected together specifically to check this.
Findings:

## Aligned

| Domain concern | Website | Admin panel | Aligned? |
|---|---|---|---|
| API base URL | `import.meta.env.VITE_API_BASE_URL \|\| "/api"` | identical | ✅ same env var name, same fallback |
| Session mechanism | httpOnly cookie (`credentials: "include"` on every `fetch`) | identical | ✅ |
| 401 handling | `apiRequest` auto-calls `/auth/refresh` once, retries, then propagates | near-identical implementation | ✅ |
| Google SSO redirect param shape | `?mode=login\|signup`, error surfaced via `?google_error=` query param | admin has no Google SSO — see below | N/A |

## Divergent, but explainable and not fixed

1. **Local "am I logged in" flag naming.** Website stores a full user
   object under the `localStorage` key `doctor_mom_2_user`. Admin panel
   stores a bare `authToken` string under `localStorage.authToken`, used
   only for a client-side route gate (`ProtectedRoute`) — it is **not**
   sent as a bearer header anywhere in `admin/src/utils/api.js`; the real
   auth is the same httpOnly cookie both apps share. This is a naming
   difference in client-local UI state, not a functional conflict. Not
   changed, because unifying it would require touching both repos'
   login-success paths for a purely cosmetic gain.

2. **No Google SSO on the admin panel.** `admin/src/pages/Login.jsx` has
   no Google OAuth code path at all — admin accounts are plain
   email/password. This looks like a deliberate product decision (admin
   accounts aren't self-service signups) rather than a gap, but it's
   worth the team confirming explicitly since the website's Google SSO
   work (`f3ded0e`) was never mirrored here.

3. **Price representation.** Admin panel treats `priceInPaise` (integer,
   e.g. `29900`) as the canonical price field, with `paiseToRupees`/
   `rupeesToPaise` helpers (`admin/src/utils/adminData.js`) for display
   and editing. The website instead reads a pre-formatted `course.price`
   value directly (`{course.price}` in `Courses.jsx`/`CourseDetail.jsx`)
   and in `Payment.jsx` falls back to **hardcoded strings** like `"₹19"`
   and `"₹499"` when no plan is selected. This is consistent with a
   backend that formats price for display before sending it to the
   website while giving the admin panel the raw integer to edit — but
   that contract was not verifiable from the frontend code alone (no
   backend in this task's scope). **Flagged, not changed:** confirm with
   backend/API documentation that `course.price` really is
   backend-formatted and not a stale/mocked field, and that the
   `Payment.jsx` hardcoded fallbacks are intentional defaults rather than
   forgotten scaffolding.

## Not applicable here

Quiz/assessment data model, video/PDF chapter fields, and enrolment model
comparisons are admin-panel-authored concerns with no direct website-side
equivalent to compare against in this repo (the website doesn't render
quizzes or manage chapter media) — see the admin panel's own
`compatibility-analysis.md` for the admin-side half of this comparison.
