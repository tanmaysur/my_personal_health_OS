export interface NavItem {
  title: string;
  href: string;
  /** Lucide icon name key used by the shell */
  icon:
    | "layout-dashboard"
    | "utensils"
    | "droplets"
    | "dumbbell"
    | "trending-up"
    | "target"
    | "user-cog";
  description: string;
}
