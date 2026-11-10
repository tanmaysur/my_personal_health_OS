"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ICONS } from "@/components/layout/nav-icons";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/navigation";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar/80 backdrop-blur-md lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
        <BrandMark />
        <div className="leading-tight">
          <p className="font-heading text-lg font-semibold tracking-[0.18em] text-sidebar-primary">
            VITAL
          </p>
          <p className="text-[11px] text-muted-foreground">Personal Health OS</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Main">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICONS[item.icon];
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon
                className={cn(
                  "size-[18px] shrink-0 transition-transform duration-200",
                  !active && "group-hover:scale-105"
                )}
                aria-hidden
              />
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <p className="text-xs text-muted-foreground">
          Milestone 1 foundation · sample data only
        </p>
      </div>
    </aside>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path
          d="M12 3c.4 3.2 1.6 5.4 3.6 7.2C17.8 12.2 20 14 20 17.2 20 19.5 18.2 21 16 21c-1.5 0-2.7-.7-3.5-1.8C11.7 20.3 10.5 21 9 21c-2.2 0-4-1.5-4-3.8 0-3.2 2.2-5 4.4-6.8C11.4 8.4 12.6 6.2 12 3Z"
          fill="currentColor"
          opacity="0.95"
        />
      </svg>
    </span>
  );
}
