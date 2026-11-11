/** Map Supabase Auth errors to short, user-facing messages. Never leak raw internals. */

const GENERIC = "Something went wrong. Please try again.";

export function mapAuthError(message: string | undefined): string {
  const raw = (message ?? "").toLowerCase();

  if (!raw) return GENERIC;
  if (raw.includes("invalid login credentials")) {
    return "Invalid email or password.";
  }
  if (raw.includes("email not confirmed")) {
    return "Please confirm your email before signing in.";
  }
  if (raw.includes("user already registered")) {
    return "Unable to create an account with that email. Try signing in or resetting your password.";
  }
  if (raw.includes("password should be at least")) {
    return "Password must be at least 6 characters.";
  }
  if (
    raw.includes("rate limit") ||
    raw.includes("too many") ||
    raw.includes("over_email_send_rate_limit") ||
    raw.includes("over_request_rate_limit")
  ) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (raw.includes("unable to validate email")) {
    return "Please enter a valid email address.";
  }
  if (raw.includes("same password") || raw.includes("should be different")) {
    return "Choose a password you have not used recently.";
  }

  return GENERIC;
}
