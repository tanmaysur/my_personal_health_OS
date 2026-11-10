# VITAL — Personal Health OS

VITAL is a personal health operating system for nutrition, water, workouts, progress, goals, and light gamification.

**Milestone 1** ships the app foundation: Next.js shell, navigation, and a mock dashboard. There is no auth or database yet.

## Stack

- **Next.js** (App Router) + **React** + **TypeScript** (strict)
- **Tailwind CSS** + **shadcn/ui**
- **Recharts** for the sample weekly chart
- **npm** for packages

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Optional: copy env template (empty in M1 — no secrets required)
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Command           | What it does              |
| ----------------- | ------------------------- |
| `npm run dev`     | Start local development   |
| `npm run build`   | Production build          |
| `npm run start`   | Serve the production build|
| `npm run lint`    | Run ESLint                |

## Project map (learner-friendly)

```
app/                  # Routes (pages) — Dashboard is `/`
components/layout/    # App shell: sidebar, mobile nav, header
components/dashboard/ # Dashboard cards + weekly chart
components/ui/        # shadcn primitives
lib/mock/             # SAMPLE data only (swap for Supabase later)
lib/navigation.ts     # Nav links used by the shell
types/                # Shared TypeScript types
```

Mental model:

1. **UI** (`app/`, `components/`) — what you see
2. **Mock data** (`lib/mock/`) — fake health numbers for M1
3. **Later** — `lib/data/` + Supabase with Row Level Security

## Design notes

- Brand **VITAL** appears in the desktop sidebar and mobile header
- Light-first teal/mint theme via CSS variables in `app/globals.css`
- Mock dashboard content is labeled **Sample data**

## Out of scope for Milestone 1

Auth, Supabase persistence, form libraries, AI features.

## License

Private / personal project unless otherwise stated.
