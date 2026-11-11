/**
 * Server Supabase client (Server Components, Server Actions, Route Handlers).
 * Cookie getAll / setAll only — never legacy get/set/remove helpers.
 */

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabaseEnv } from "@/lib/supabase/env";

export async function createClient() {
  const env = getSupabaseEnv();
  if (!env.ok) {
    throw new Error(env.error);
  }

  const cookieStore = await cookies();

  return createServerClient(env.url, env.publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet, _headers) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Called from a Server Component — Proxy refreshes sessions.
        }
      },
    },
  });
}
