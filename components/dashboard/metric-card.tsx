import type { DailyMetric } from "@/types/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn, toPercent } from "@/lib/utils";

const TONE_BAR: Record<DailyMetric["tone"], string> = {
  nutrition: "[&_[data-slot=progress-indicator]]:bg-tone-nutrition",
  water: "[&_[data-slot=progress-indicator]]:bg-tone-water",
  workout: "[&_[data-slot=progress-indicator]]:bg-tone-workout",
  goals: "[&_[data-slot=progress-indicator]]:bg-tone-goals",
  neutral: "",
};

const TONE_DOT: Record<DailyMetric["tone"], string> = {
  nutrition: "bg-tone-nutrition",
  water: "bg-tone-water",
  workout: "bg-tone-workout",
  goals: "bg-tone-goals",
  neutral: "bg-muted-foreground",
};

interface MetricCardProps {
  metric: DailyMetric;
  className?: string;
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const percent = toPercent(metric.value, metric.goal);

  return (
    <Card className={cn("border-border/70 bg-card/80 shadow-none", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span
            className={cn("size-2 rounded-full", TONE_DOT[metric.tone])}
            aria-hidden
          />
          {metric.label}
        </CardTitle>
        <span className="text-xs text-muted-foreground">{percent}%</span>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="font-heading text-2xl font-semibold tracking-tight">
          {metric.value.toLocaleString()}
          <span className="ml-1 text-sm font-normal text-muted-foreground">
            / {metric.goal.toLocaleString()} {metric.unit}
          </span>
        </p>
        {/* Intentional motion #2: progress fill uses CSS transition from Progress */}
        <Progress value={percent} className={cn("h-2", TONE_BAR[metric.tone])} />
        <p className="text-xs text-muted-foreground">{metric.hint}</p>
      </CardContent>
    </Card>
  );
}
