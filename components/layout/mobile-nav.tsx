"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/layout/sidebar";
import { NAV_ICONS } from "@/components/layout/nav-icons";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const titleId = useId();

  // Lock body scroll and allow Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="flex h-14 items-center justify-between border-b border-border/80 bg-card/70 px-4 backdrop-blur-md lg:hidden">
      <Link href="/" className="flex items-center gap-2.5">
        <BrandMark className="size-8 rounded-lg" />
        <span className="font-heading text-base font-semibold tracking-[0.18em] text-primary">
          VITAL
        </span>
      </Link>

      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="vital-mobile-drawer"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/25 backdrop-blur-[2px]"
            aria-label="Close navigation overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id="vital-mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col border-r border-sidebar-border bg-sidebar shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-sidebar-border px-5 py-4">
              <div>
                <p
                  id={titleId}
                  className="font-heading tracking-[0.18em] text-sidebar-primary"
                >
                  VITAL
                </p>
                <p className="text-xs text-muted-foreground">Personal Health OS</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>

            <nav className="flex flex-col gap-1 p-3" aria-label="Mobile">
              {NAV_ITEMS.map((item) => {
                const Icon = NAV_ICONS[item.icon];
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                  >
                    <Icon className="size-[18px]" aria-hidden />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
