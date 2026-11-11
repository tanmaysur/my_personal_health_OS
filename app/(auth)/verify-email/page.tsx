import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Verify email",
};

export default function VerifyEmailPage() {
  return (
    <Card className="border-border/60 bg-card/90 shadow-sm backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-heading text-xl">Check your email</CardTitle>
        <CardDescription>
          We sent a verification link to your inbox. Open it to activate your
          account, then sign in.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Didn&apos;t get it? Check spam, or try signing up again with the same
        email after a few minutes.
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full" size="lg">
          <Link href="/login">Back to sign in</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
