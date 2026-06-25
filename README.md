# Dr Mom 2.0 — Student/Parent Website

The public-facing React frontend for the **Dr Mom 2.0** online course platform for school students (LKG–Grade 5). Parents and students browse courses, buy access via Razorpay, and watch video lessons served through Bunny CDN.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite 5 |
| Routing | React Router DOM 6 |
| Auth | httpOnly cookie sessions (managed by backend) |
| Payments | Razorpay Checkout SDK (dynamically loaded) |
| Video | Bunny Stream iframe embed (signed tokens) |
| Deployment | Nginx in Docker |

---

## Pages

| Route | Description | Auth |
|---|---|---|
| `/` | Home — hero, class grid, testimonials, stats | Public |
| `/about` | About page — team and mission | Public |
| `/classes` | All class levels | Public |
| `/classes/:classId` | Course catalog + video list for a class | Public |
| `/contact` | Contact form | Public |
| `/login` | Login / Register | Public |
| `/payment` | Razorpay checkout flow | Auth |
| `/profile` | User profile, enrollments, order history | Auth |

---

## Setup

### Prerequisites
- Node.js 18+
- Backend API running (see `drmombackend`)

### Local development

```bash
npm install
```

Create `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:28100/api
```

```bash
npm run dev
# Opens at http://localhost:5173
```

### Production build

```bash
VITE_API_BASE_URL=https://api.yourdomain.com/api npm run build
```

### Docker (production)

```bash
docker build -t drmom-website .
docker run -d --name drmom-website -p 80:80 drmom-website
```

---

## Project Structure

```
src/
├── components/
│   ├── BookLoader/         # Animated page-load splash screen
│   ├── BottomNav/          # Mobile bottom navigation bar
│   ├── ClassCard/          # Class level card component
│   ├── Footer/             # Site footer
│   ├── LoadingSpinner/     # Generic loading indicator
│   ├── Navbar/             # Top navigation with auth state
│   ├── ParticleBackground/ # Animated particle canvas
│   ├── ScrollToTop/        # Auto-scroll on route change
│   ├── SubscriptionCard/   # Pricing/plan display card
│   └── VideoCard/          # Lesson card with Bunny player
├── data/
│   └── index.js            # Static marketing copy (STATS, TESTIMONIALS, TEAM)
├── pages/
│   ├── About/              # About page
│   ├── Classes/            # Class listing page
│   ├── Contact/            # Contact form
│   ├── Home/               # Landing page
│   ├── Login/              # Login + register
│   ├── Payment/            # Razorpay checkout
│   ├── Profile/            # User profile + history
│   └── VideoContent/       # Course content browser
├── styles/
│   └── global.css          # Design tokens and global styles
├── utils/
│   ├── api.js              # Fetch wrapper with httpOnly cookie auth + token refresh interceptor
│   └── auth.js             # Login, register, logout, stored-user helpers
├── App.jsx                 # Route definitions + startup session validation
└── main.jsx
```

---

## Authentication Flow

1. User logs in → backend sets `accessToken` + `refreshToken` as `httpOnly` cookies
2. `api.js` automatically refreshes the access token on `401` responses
3. If refresh fails (deleted/deactivated account, expired refresh token), user is redirected to `/login`
4. On app startup, `App.jsx` calls `GET /api/auth/me` to validate the stored session is still active

---

## Payment Flow

1. User clicks "Pay" on `/payment` with a `courseId`
2. Frontend calls `POST /api/payments/orders` — backend creates a Razorpay order
3. Razorpay Checkout SDK opens (loaded dynamically)
4. On payment success, frontend calls `POST /api/payments/verify` with the Razorpay response
5. Backend verifies the HMAC signature and grants course access
6. User is redirected to the course content

---

## Video Playback Flow

1. User clicks play on a lesson card
2. Frontend calls `GET /api/courses/lessons/:lessonId/playback`
3. Backend checks course purchase status, returns a **signed** Bunny CDN embed URL
4. URL is valid for 1 hour and includes a token (`?token=...&expires=...`)
5. Bunny's player enforces token authentication on the video stream

---

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL | `https://api.yourdomain.com/api` |

---

## Deployment Checklist

- [ ] Set `VITE_API_BASE_URL` to real domain before `npm run build`
- [ ] HTTPS must be enabled — Razorpay checkout won't load on HTTP
- [ ] Backend `COOKIE_SECURE=true` required for cookies to work over HTTPS
- [ ] Backend `CORS_ORIGIN` must include this site's domain
