import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "VITAL — Personal Health OS",
    template: "%s · VITAL",
  },
  description:
    "VITAL is a personal Health OS for nutrition, water, workouts, progress, and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
