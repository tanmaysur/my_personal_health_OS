# VITAL — Personal Health OS

VITAL is a personal health operating system for nutrition, water, workouts, progress, goals, and light gamification.

**Milestone 1** — Next.js shell, navigation, mock dashboard.

**Milestone 2** — Supabase client (publishable key only).

**Milestone 3** — Email/password auth with cookie sessions (`@supabase/ssr` + Next.js `proxy.ts`).

## Stack

- **Next.js** (App Router) + **React** + **TypeScript** (strict)
- **Supabase Auth** via `@supabase/supabase-js` + `@supabase/ssr`
- **Tailwind CSS** + **shadcn/ui**
- **Recharts** for the sample weekly chart
- **npm** for packages

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill SITE_URL + Supabase URL + publishable key
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — unauthenticated visits redirect to `/login`.

### Supabase Auth dashboard settings (required)

In project **healthOS** (org **HealthOS**):

1. **Authentication → URL Configuration**
   - Site URL: `http://localhost:3000` (match `NEXT_PUBLIC_SITE_URL`)
   - Redirect URLs: `http://localhost:3000/auth/confirm` only (no wildcards; add production URL later)
2. **Authentication → Providers → Email** enabled
3. Keep **Confirm email** enabled to exercise the verification flow

### Auth routes

| Path | Purpose |
| ---- | ------- |
| `/login` | Sign in |
| `/signup` | Create account |
| `/verify-email` | Post-signup confirmation prompt |
| `/forgot-password` | Request reset email |
| `/reset-password` | Set a new password (after email link) |
| `/auth/confirm` | Email link callback (code / token exchange) |

Verify API: [http://localhost:3000/api/supabase/health](http://localhost:3000/api/supabase/health)

### Useful scripts

| Command           | What it does              |
| ----------------- | ------------------------- |
| `npm run dev`     | Start local development   |
| `npm run build`   | Production build          |
| `npm run start`   | Serve the production build|
| `npm run lint`    | Run ESLint                |

## Project map (learner-friendly)

```
app/(app)/            # Protected dashboard routes (shell)
app/(auth)/           # Login / signup / reset pages
app/auth/confirm/     # Email confirmation callback
app/api/supabase/     # Health check
proxy.ts              # Session refresh + auth redirects (Next.js 16)
components/auth/      # Auth forms + logout
components/layout/    # App shell: sidebar, mobile nav, header
components/dashboard/ # Dashboard cards + weekly chart
lib/auth/             # Server actions + error mapping
lib/supabase/         # Browser + server clients, proxy helper
lib/mock/             # SAMPLE dashboard data
```

Mental model:

1. **Auth gate** (`proxy.ts`) — refresh cookies, redirect guests/users
2. **UI** (`app/(app)`, `components/`) — dashboard after login
3. **Mock data** (`lib/mock/`) — still sample numbers until tables arrive

## Design notes

- Brand **VITAL** appears in the desktop sidebar, mobile header, and auth screens
- Light-first teal/mint theme via CSS variables in `app/globals.css`
- Mock dashboard content is labeled **Sample data**

## Out of scope for this auth milestone

OAuth providers, database tables / RLS, service-role keys in the frontend, nutrition/hydration features.

## License

Private / personal project unless otherwise stated.
