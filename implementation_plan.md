# QuickFix — Production Web Application Implementation Plan

QuickFix is a home repair marketplace for Tier-2/3 Indian cities connecting customers with verified local technicians. This plan covers the full-stack application using **Next.js 14 (App Router)** on the frontend and **NestJS** on the backend, with mock integrations for Razorpay, Google Maps, Firebase, OpenAI, and AWS S3.

---

## User Review Required

> [!IMPORTANT]
> This is a **large, multi-day project**. To deliver a polished, demo-ready product in one session, the following scope decisions have been made:
> - **Backend**: A runnable NestJS API will be scaffolded with all modules, routes, and mock business logic. No live database or external service connections—PostgreSQL schema DDL and integration stubs are included.
> - **Frontend**: All pages listed in the spec will be built with full UI, mocked data, and realistic interactions. No live API calls—data is mocked in the component or via a mock API layer.
> - **Auth**: UI-complete OTP and Google login flows. No actual Firebase SDK calls wired.
> - **Maps/Tracking**: Google Maps Embed placeholders (no API key required for static embeds).
> - **AI Diagnosis**: Mock AI response UI—upload photo → simulated diagnosis → cost estimate.
> - **Payments**: Razorpay checkout UI mock—shows order summary and success/failure states.

> [!NOTE]
> All code is production-structured and follows the monorepo layout from the spec. Swapping mocks for real integrations is a drop-in replacement.

---

## Proposed Changes

### Root Structure

#### [NEW] Monorepo root (`c:\Users\graya\Desktop\QuickFix`)

```
QuickFix/
├── apps/
│   ├── web/          ← Next.js customer + public frontend
│   └── admin/        ← Next.js admin dashboard
├── services/
│   └── api/          ← NestJS backend
├── packages/
│   ├── ui/           ← Shared React components
│   └── types/        ← Shared TypeScript types
├── database/
│   └── schema.sql    ← PostgreSQL DDL
└── docs/
    └── README.md
```

---

### Frontend — `apps/web` (Next.js 14, TypeScript, Tailwind CSS)

**Brand Palette:**
| Token | Hex |
|---|---|
| Deep Navy | `#0A1628` |
| Electric Blue | `#2563EB` |
| Warm Orange | `#F97316` |
| Light BG | `#F8FAFC` |

**Pages:**

#### Public pages
- `/` — Landing: Hero with animated headline, CTA buttons, services grid, how-it-works steps, testimonials, trust badges
- `/about` — Company story, team, mission
- `/how-it-works` — Step-by-step animated flow
- `/services` — Service category cards with pricing ranges
- `/pricing` — Transparent pricing table
- `/contact` — Form + map embed
- `/help` — FAQ accordion

#### Customer pages (protected, role: customer)
- `/login` — OTP phone input + Google button
- `/dashboard` — Active bookings, quick actions, service history
- `/book` — 4-step wizard: select service → upload issue → AI diagnosis → schedule
- `/book/[bookingId]/track` — Live map tracking, status timeline, chat panel
- `/book/[bookingId]/payment` — Summary, Razorpay mock, success state
- `/history` — All bookings with filter/search
- `/profile` — Edit profile, addresses, notifications
- `/support` — Open tickets, new ticket form

#### Technician pages (protected, role: technician)
- `/technician/register` — Multi-step KYC onboarding
- `/technician/dashboard` — Availability toggle, earnings summary, rating
- `/technician/jobs` — Job request cards with accept/decline
- `/technician/jobs/[jobId]` — Active job detail, navigation, photo upload
- `/technician/earnings` — Payout history, commission breakdown
- `/technician/reviews` — Customer review list, rating breakdown

---

### Admin Dashboard — `apps/admin` (Next.js 14, standalone)

- `/` → Dashboard: KPI cards, revenue chart, live ops map, recent alerts
- `/users` — Table with search, status badges, actions
- `/technicians` — Approval queue, KYC review, verify/reject
- `/services` — Add/edit/delete service categories and items
- `/complaints` — Ticket list, assign, resolve
- `/pricing` — Rule editor: base fee, distance multiplier, surge toggles
- `/analytics` — Revenue trends (mock Recharts), heatmap, funnel
- `/reports` — Downloadable CSV mock

---

### Backend — `services/api` (NestJS, TypeScript)

**Modules:**
- `auth` — OTP send/verify, Google, JWT issue/refresh, role guard
- `users` — CRUD, address management
- `services` — Categories and service items
- `bookings` — Create, list, update, cancel; assignment logic mock
- `technicians` — Register, KYC, jobs, location update
- `diagnosis` — Photo upload endpoint, mock OpenAI response
- `payments` — Razorpay order creation, verify webhook (mock), refund
- `reviews` — Post review, get by technician
- `notifications` — FCM push (mock), in-app notification list
- `admin` — Dashboard stats, user/technician management, pricing rules, reports

---

### Database — `database/schema.sql`

Full PostgreSQL DDL for all 16+ tables from the spec:
`users`, `addresses`, `technicians`, `technician_skills`, `services`, `service_categories`, `bookings`, `booking_history`, `payments`, `commissions`, `reviews`, `notifications`, `support_tickets`, `documents`, `live_locations`, `pricing_rules`

---

## Verification Plan

### Automated Tests
> No automated test suite in scope for this session (project is scaffolded from scratch). Manual browser verification is the primary validation method.

### Manual Verification (Browser)

After running the dev servers:

**Frontend** (`cd apps/web && npm run dev` → http://localhost:3000):

1. **Landing page** — Visit `/`, scroll all sections, click CTA buttons
2. **Login flow** — Visit `/login`, enter phone number, click "Send OTP", enter mock OTP "123456", verify redirect to `/dashboard`
3. **Booking wizard** — Navigate to `/book`, complete all 4 steps, see AI diagnosis mock, reach confirmation
4. **Live tracking** — Click "Track" on a booking → see map embed and status timeline
5. **Payment** — Reach `/book/[id]/payment`, click "Pay Now", see success modal
6. **Technician flow** — Visit `/technician/register`, complete KYC steps
7. **Technician dashboard** — `/technician/dashboard`, toggle availability, view jobs

**Admin** (`cd apps/admin && npm run dev` → http://localhost:3001):

1. **Dashboard** — Visit `/`, check KPI cards and charts render
2. **Technician approval** — Visit `/technicians`, click "Approve" on a pending technician
3. **Pricing engine** — Visit `/pricing`, edit base price, save

**Backend** (`cd services/api && npm run start:dev` → http://localhost:3333):

1. `GET http://localhost:3333/api/v1/services` → returns JSON service list
2. `POST http://localhost:3333/api/v1/auth/send-otp` with `{"phone": "+919876543210"}` → returns `{success: true}`
