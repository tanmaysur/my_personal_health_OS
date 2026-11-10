/**
 * Shared className helper.
 * Re-exports `cn` from the official shadcn package (clsx + tailwind-merge).
 */
export { cn } from "cn";

/** Clamp a ratio into a 0–100 percentage for progress UI */
export function toPercent(value: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((value / goal) * 100));
}
