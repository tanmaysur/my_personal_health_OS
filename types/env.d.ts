/**
 * Public env vars available to Next.js (browser + server).
 * Values come from `.env.local` (see `.env.example`).
 */
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
    /** Canonical site origin for auth email redirects (no trailing slash). */
    NEXT_PUBLIC_SITE_URL?: string;
  }
}
