"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/layout/sidebar";
import { NAV_ICONS } from "@/components/layout/nav-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-14 items-center justify-between border-b border-border/80 bg-card/70 px-4 backdrop-blur-md lg:hidden">
      <Link href="/" className="flex items-center gap-2.5">
        <BrandMark className="size-8 rounded-lg" />
        <span className="font-heading text-base font-semibold tracking-[0.18em] text-primary">
          VITAL
        </span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open navigation">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[min(100%,20rem)] bg-sidebar p-0">
          <SheetHeader className="border-b border-sidebar-border px-5 py-4 text-left">
            <SheetTitle className="font-heading tracking-[0.18em] text-sidebar-primary">
              VITAL
            </SheetTitle>
            <p className="text-xs text-muted-foreground">Personal Health OS</p>
          </SheetHeader>
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
