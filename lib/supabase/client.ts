/**
 * Browser Supabase client (Client Components).
 * Uses cookie-based sessions via @supabase/ssr — publishable key only.
 */

import { createBrowserClient } from "@supabase/ssr";

import { getSupabaseEnv } from "@/lib/supabase/env";

export function createClient() {
  const env = getSupabaseEnv();
  if (!env.ok) {
    throw new Error(env.error);
  }

  return createBrowserClient(env.url, env.publishableKey);
}

/**
 * Returns a browser client, or `null` when credentials are missing.
 */
export function getSupabaseClient() {
  const env = getSupabaseEnv();
  if (!env.ok) {
    return null;
  }

  return createBrowserClient(env.url, env.publishableKey);
}
