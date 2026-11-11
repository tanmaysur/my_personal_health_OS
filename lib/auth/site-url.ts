/**
 * Trusted site origin for Supabase email redirect URLs.
 * Prefer NEXT_PUBLIC_SITE_URL — never trust Host / X-Forwarded-* alone.
 */

const DEV_FALLBACK = "http://localhost:3000";

export function getTrustedSiteOrigin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    try {
      const url = new URL(configured);
      if (url.protocol === "http:" || url.protocol === "https:") {
        return url.origin;
      }
    } catch {
      // fall through
    }
  }

  if (process.env.NODE_ENV !== "production") {
    return DEV_FALLBACK;
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set to your canonical site origin in production.",
  );
}
