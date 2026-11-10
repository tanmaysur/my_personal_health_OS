import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="animate-vital-rise">
      <Header title={title} description={description} />
      <Card className="border-dashed bg-card/70 shadow-none">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Coming soon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            This module is scaffolded for Milestone 1. Logging forms, charts, and
            Supabase persistence arrive in later milestones.
          </p>
          <p>Use the sidebar (or mobile menu) to return to the mock dashboard.</p>
        </CardContent>
      </Card>
    </div>
  );
}
