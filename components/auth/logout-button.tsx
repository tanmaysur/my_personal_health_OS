"use client";

import { useTransition } from "react";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";
import { cn } from "@/lib/utils";

export function LogoutButton({
  className,
  variant = "ghost",
  size = "sm",
  label = "Log out",
}: {
  className?: string;
  variant?: "ghost" | "outline" | "secondary";
  size?: "sm" | "default" | "lg";
  label?: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("gap-2", className)}
      disabled={pending}
      onClick={() => startTransition(() => signOut())}
    >
      <LogOut className="size-4" aria-hidden />
      {pending ? "Signing out…" : label}
    </Button>
  );
}
