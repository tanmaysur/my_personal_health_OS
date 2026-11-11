/**
 * Reads and validates public Supabase credentials.
 * Missing values return a structured error — never throw at import time.
 */

export type SupabaseEnvSuccess = {
  ok: true;
  url: string;
  publishableKey: string;
};

export type SupabaseEnvFailure = {
  ok: false;
  error: string;
  missing: string[];
};

export type SupabaseEnvResult = SupabaseEnvSuccess | SupabaseEnvFailure;

const URL_VAR = "NEXT_PUBLIC_SUPABASE_URL";
const KEY_VAR = "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY";

export function getSupabaseEnv(): SupabaseEnvResult {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ?? "";

  const missing: string[] = [];
  if (!url) missing.push(URL_VAR);
  if (!publishableKey) missing.push(KEY_VAR);

  if (missing.length > 0) {
    return {
      ok: false,
      missing,
      error: `Missing Supabase credentials: ${missing.join(", ")}. Copy .env.example to .env.local and fill in values from the Supabase dashboard (HealthOS / healthOS → Project Settings → API).`,
    };
  }

  return { ok: true, url, publishableKey };
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseEnv().ok;
}
