import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Goals",
};

export default function GoalsPage() {
  return (
    <PlaceholderPage
      title="Goals"
      description="Set targets, track streaks, and level up — coming in a later milestone."
    />
  );
}
