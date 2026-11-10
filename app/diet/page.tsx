import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Diet / Nutrition",
};

export default function DietPage() {
  return (
    <PlaceholderPage
      title="Diet / Nutrition"
      description="Log meals, macros, and daily nutrition — coming in a later milestone."
    />
  );
}
