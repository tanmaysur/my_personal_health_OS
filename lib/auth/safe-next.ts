/**
 * Hardened same-origin path validation for post-auth redirects.
 * Blocks protocol-relative, backslash, whitespace, and off-origin URL tricks.
 */

const MAX_LENGTH = 2048;

function decodeRepeatedly(value: string): string | null {
  let current = value;
  for (let i = 0; i < 3; i += 1) {
    try {
      const decoded = decodeURIComponent(current);
      if (decoded === current) return current;
      current = decoded;
    } catch {
      return null;
    }
  }
  return current;
}

/**
 * Returns a safe in-app path (pathname + optional search), or `fallback`.
 */
export function safeNextPath(raw: unknown, fallback = "/"): string {
  if (typeof raw !== "string" || raw.length === 0 || raw.length > MAX_LENGTH) {
    return fallback;
  }

  const decoded = decodeRepeatedly(raw.trim());
  if (!decoded) return fallback;

  if (!decoded.startsWith("/")) return fallback;
  if (decoded.startsWith("//") || decoded.startsWith("/\\")) return fallback;
  if (decoded.includes("\\")) return fallback;
  if (decoded.includes("\0")) return fallback;
  if (/[\s\r\n\t]/.test(decoded)) return fallback;
  if (decoded.includes("@")) return fallback;
  if (decoded.includes("://")) return fallback;

  try {
    const base = "http://safe.invalid";
    const resolved = new URL(decoded, base);
    if (resolved.origin !== base) return fallback;

    const path = `${resolved.pathname}${resolved.search}`;
    if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
      return fallback;
    }
    if (/[\s\r\n\t]/.test(path) || path.includes("@")) return fallback;

    return path;
  } catch {
    return fallback;
  }
}
