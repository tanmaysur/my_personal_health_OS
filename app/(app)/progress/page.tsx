import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Progress",
};

export default function ProgressPage() {
  return (
    <PlaceholderPage
      title="Progress"
      description="See trends across nutrition, training, and recovery — coming later."
    />
  );
}
