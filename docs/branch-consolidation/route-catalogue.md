# Route Catalogue — drmom-website

All routes are defined centrally in `src/App.jsx` (React Router v6,
`BrowserRouter` + `Routes`/`Route`, all pages lazy-loaded). No filesystem
routing, no route definitions hidden elsewhere.

| Route | Component | Branches containing it | Nav entry | API dependency | Status on `consolidation/all-features` |
|---|---|---|---|---|---|
| `/` | Home | all | Navbar logo | none | present, tested (build) |
| `/about` | About | all | Navbar | none | present |
| `/courses` | Courses | main, Updated | Navbar | `GET` courses list | present |
| `/courses/:courseSlug` | CourseDetail | main, Updated | via Courses cards | `GET` course detail | present |
| `/classes` | → redirect to `/courses` | main, Updated | Footer "Courses" link | none | present (redirect preserved) |
| `/classes/:classId` | VideoContent | all | not linked from nav (by design — see main's own code comment) | video/lesson data | present, intentionally unlinked |
| `/contact` | Contact | all | Navbar, Footer | contact form (client-side only) | present, FAQ layout upgraded |
| `/login` | Login | all | Navbar | `/auth/login`, `/auth/register`, `/auth/google` | present |
| `/payment` | Payment | main, Updated | reached from course purchase flow | payment endpoints | present |
| `/dashboard` | Dashboard | all (content differs) | Navbar (when logged in) | none (mocked data) | present, rebuilt — see feature-matrix |
| `/complete-signup` | CompleteSignup | main, Updated | post-OAuth redirect target | `/auth/*` | present |
| `/privacy-policy` | PrivacyPolicy | **New-Features only** | Footer (now added) | none (static content) | **restored** |
| `/terms-of-use` | TermsOfUse | **New-Features only** | Footer (now added) | none (static content) | **restored** |
| `/refund-policy` | RefundPolicy | **New-Features only** | Footer (now added) | none (static content) | **restored** |
| `*` (404) | inline JSX | all | — | none | present |

No route exists without a corresponding page component, and no page
component is orphaned (unreferenced by any route) after consolidation.

## Route manifest

```json
[
  { "route": "/",                    "component": "Home",          "status": "tested" },
  { "route": "/about",                "component": "About",         "status": "tested" },
  { "route": "/courses",              "component": "Courses",       "status": "tested" },
  { "route": "/courses/:courseSlug",  "component": "CourseDetail",  "status": "tested" },
  { "route": "/classes",              "component": "Navigate→/courses", "status": "tested" },
  { "route": "/classes/:classId",     "component": "VideoContent",  "status": "tested" },
  { "route": "/contact",              "component": "Contact",       "status": "tested" },
  { "route": "/login",                "component": "Login",         "status": "tested" },
  { "route": "/payment",              "component": "Payment",       "status": "tested" },
  { "route": "/dashboard",            "component": "Dashboard",     "status": "tested" },
  { "route": "/complete-signup",      "component": "CompleteSignup","status": "tested" },
  { "route": "/privacy-policy",       "component": "PrivacyPolicy", "status": "tested, restored from New-Features" },
  { "route": "/terms-of-use",         "component": "TermsOfUse",    "status": "tested, restored from New-Features" },
  { "route": "/refund-policy",        "component": "RefundPolicy",  "status": "tested, restored from New-Features" }
]
```

"tested" here means: route is registered, the page builds and code-splits
into its own chunk under `vite build`, and was manually cross-checked
against the component file for import correctness. It does not mean a
running dev server was clicked through in a browser — see
[testing-report.md](testing-report.md) for exactly what was and wasn't
run.
