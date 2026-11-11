import { cn } from "@/lib/utils";

export function AuthFormMessage({
  error,
  success,
}: {
  error?: string;
  success?: string;
}) {
  if (!error && !success) return null;

  return (
    <div
      role={error ? "alert" : "status"}
      className={cn(
        "rounded-lg border px-3 py-2 text-sm",
        error
          ? "border-destructive/30 bg-destructive/10 text-destructive"
          : "border-primary/25 bg-primary/10 text-foreground",
      )}
    >
      {error ?? success}
    </div>
  );
}
