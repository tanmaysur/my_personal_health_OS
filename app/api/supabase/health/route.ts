import { NextResponse } from "next/server";

import { verifySupabaseConnection } from "@/lib/supabase/verify";

/**
 * GET /api/supabase/health
 * Connection check — details are reduced in production.
 */
export async function GET() {
  const result = await verifySupabaseConnection();
  const isProd = process.env.NODE_ENV === "production";

  if (!result.ok) {
    return NextResponse.json(
      isProd
        ? { ok: false, message: "Supabase unavailable." }
        : {
            ok: false,
            message: result.message,
            missing: result.missing,
          },
      { status: 503 },
    );
  }

  return NextResponse.json(
    isProd
      ? { ok: true, message: "Supabase connection verified." }
      : result,
    { status: 200 },
  );
}
