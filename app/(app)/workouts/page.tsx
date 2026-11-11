import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Workouts",
};

export default function WorkoutsPage() {
  return (
    <PlaceholderPage
      title="Workouts"
      description="Plan and log training sessions — coming in a later milestone."
    />
  );
}
