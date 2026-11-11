/**
 * Session refresh + auth redirects for Next.js Proxy.
 * Always return the response that carries refreshed cookies.
 */

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { getSupabaseEnv } from "@/lib/supabase/env";

const AUTH_PATHS = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

function isPublicPath(pathname: string): boolean {
  if (AUTH_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return true;
  }
  if (pathname.startsWith("/auth/")) return true;
  if (pathname.startsWith("/api/supabase/health")) return true;
  return false;
}

function isAuthOnlyPath(pathname: string): boolean {
  return (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password"
  );
}

/**
 * Copy refreshed Set-Cookie + cache headers onto a redirect response.
 * Uses raw Set-Cookie strings so httpOnly/secure/sameSite/maxAge are preserved.
 */
function copySessionCookies(
  from: NextResponse,
  to: NextResponse,
): NextResponse {
  const setCookies =
    typeof from.headers.getSetCookie === "function"
      ? from.headers.getSetCookie()
      : [];

  for (const cookie of setCookies) {
    to.headers.append("Set-Cookie", cookie);
  }

  // Fallback if getSetCookie is unavailable
  if (setCookies.length === 0) {
    from.cookies.getAll().forEach((cookie) => {
      to.cookies.set(cookie.name, cookie.value);
    });
  }

  for (const header of ["cache-control", "expires", "pragma"] as const) {
    const value = from.headers.get(header);
    if (value) to.headers.set(header, value);
  }
  return to;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const env = getSupabaseEnv();
  if (!env.ok) {
    // Allow health + auth pages to render their own missing-config errors.
    if (isPublicPath(request.nextUrl.pathname)) {
      return supabaseResponse;
    }
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const supabase = createServerClient(env.url, env.publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
        Object.entries(headers).forEach(([key, value]) => {
          supabaseResponse.headers.set(key, value);
        });
      },
    },
  });

  // Do not insert logic between createServerClient and getClaims().
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  const pathname = request.nextUrl.pathname;

  if (!user && !isPublicPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return copySessionCookies(supabaseResponse, NextResponse.redirect(url));
  }

  if (user && isAuthOnlyPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return copySessionCookies(supabaseResponse, NextResponse.redirect(url));
  }

  return supabaseResponse;
}
