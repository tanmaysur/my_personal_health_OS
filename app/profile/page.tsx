import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Profile / Settings",
};

export default function ProfilePage() {
  return (
    <PlaceholderPage
      title="Profile / Settings"
      description="Account preferences and future auth settings — coming later."
    />
  );
}
