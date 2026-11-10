import type { GoalSummary } from "@/types/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GoalsPanelProps {
  goals: GoalSummary[];
}

export function GoalsPanel({ goals }: GoalsPanelProps) {
  return (
    <Card className="border-border/70 bg-card/80 shadow-none">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Active goals</CardTitle>
        <p className="text-sm text-muted-foreground">Sample targets for this week</p>
      </CardHeader>
      <CardContent className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium leading-snug">{goal.title}</p>
              <span className="shrink-0 text-xs text-muted-foreground">
                {goal.dueLabel}
              </span>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <p className="text-xs text-muted-foreground">{goal.progress}% complete</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
