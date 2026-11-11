/**
 * Lightweight Supabase connectivity check (no tables required).
 */

import { getSupabaseClient } from "@/lib/supabase/client";
import { getSupabaseEnv } from "@/lib/supabase/env";

export type SupabaseVerifySuccess = {
  ok: true;
  message: string;
  projectUrl: string;
};

export type SupabaseVerifyFailure = {
  ok: false;
  message: string;
  missing?: string[];
};

export type SupabaseVerifyResult = SupabaseVerifySuccess | SupabaseVerifyFailure;

export async function verifySupabaseConnection(): Promise<SupabaseVerifyResult> {
  const env = getSupabaseEnv();
  if (!env.ok) {
    return {
      ok: false,
      message: env.error,
      missing: env.missing,
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      ok: false,
      message:
        "Supabase client could not be created despite valid credentials.",
    };
  }

  try {
    const { error } = await supabase.auth.getSession();

    if (error) {
      return {
        ok: false,
        message: "Supabase reachable but auth probe failed.",
      };
    }

    return {
      ok: true,
      message: "Supabase connection verified.",
      projectUrl: env.url,
    };
  } catch {
    return {
      ok: false,
      message: "Failed to reach Supabase.",
    };
  }
}
