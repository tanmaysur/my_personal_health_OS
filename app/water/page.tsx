import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Water",
};

export default function WaterPage() {
  return (
    <PlaceholderPage
      title="Water"
      description="Track hydration against your daily goal — coming in a later milestone."
    />
  );
}
