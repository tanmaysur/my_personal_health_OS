import Link from "next/link";

import { BrandMark } from "@/components/layout/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center px-4 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.94_0.04_180)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_oklch(0.93_0.03_200)_0%,_transparent_50%)]"
      />
      <div className="relative z-10 flex w-full max-w-md flex-col gap-8">
        <Link href="/login" className="flex flex-col items-center gap-3 text-center">
          <BrandMark className="size-12 rounded-2xl" />
          <div>
            <p className="font-heading text-2xl font-semibold tracking-[0.2em] text-primary">
              VITAL
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Personal Health OS
            </p>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
}
