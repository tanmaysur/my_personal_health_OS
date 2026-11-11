import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/auth/logout-button";
import { Header } from "@/components/layout/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Profile / Settings",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <Header
        title="Profile / Settings"
        description="Account details for your VITAL session."
      />
      <Card className="max-w-lg border-border/60">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Nutrition and hydration preferences arrive in a later milestone.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Email
            </p>
            <p className="mt-1 text-sm text-foreground">{user.email}</p>
          </div>
          <LogoutButton variant="outline" className="w-fit" />
        </CardContent>
      </Card>
    </div>
  );
}
