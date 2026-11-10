import {
  Droplets,
  Dumbbell,
  LayoutDashboard,
  Target,
  TrendingUp,
  UserCog,
  Utensils,
  type LucideIcon,
} from "lucide-react";

import type { NavItem } from "@/types/navigation";

export const NAV_ICONS: Record<NavItem["icon"], LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  utensils: Utensils,
  droplets: Droplets,
  dumbbell: Dumbbell,
  "trending-up": TrendingUp,
  target: Target,
  "user-cog": UserCog,
};
