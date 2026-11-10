import type { NavItem } from "@/types/navigation";

/**
 * Single source of truth for shell navigation.
 * Add a route here and a matching `app/.../page.tsx` when you grow modules.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "layout-dashboard",
    description: "Today at a glance",
  },
  {
    title: "Diet / Nutrition",
    href: "/diet",
    icon: "utensils",
    description: "Meals and macros",
  },
  {
    title: "Water",
    href: "/water",
    icon: "droplets",
    description: "Hydration tracking",
  },
  {
    title: "Workouts",
    href: "/workouts",
    icon: "dumbbell",
    description: "Training sessions",
  },
  {
    title: "Progress",
    href: "/progress",
    icon: "trending-up",
    description: "Trends over time",
  },
  {
    title: "Goals",
    href: "/goals",
    icon: "target",
    description: "Targets and streaks",
  },
  {
    title: "Profile / Settings",
    href: "/profile",
    icon: "user-cog",
    description: "Account preferences",
  },
];

export function getNavItemByHref(href: string): NavItem | undefined {
  return NAV_ITEMS.find((item) => item.href === href);
}
