import { Flame, Sparkles } from "lucide-react";

import type { DashboardSample } from "@/types/dashboard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toPercent } from "@/lib/utils";

interface StreakCardProps {
  gamification: DashboardSample["gamification"];
  workout: DashboardSample["todayWorkout"];
}

export function StreakCard({ gamification, workout }: StreakCardProps) {
  const levelFloorXp = gamification.xp;
  const levelCeilingXp = gamification.xp + gamification.xpToNextLevel;
  const towardNext = toPercent(levelFloorXp, levelCeilingXp);

  return (
    <Card className="border-border/70 bg-card/80 shadow-none">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="font-heading text-lg">Momentum</CardTitle>
          <Badge variant="secondary" className="gap-1 font-medium">
            <Flame className="size-3.5 text-tone-workout" aria-hidden />
            {gamification.streakDays}-day streak
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Level {gamification.level} · {gamification.levelLabel}
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="size-3.5 text-primary" aria-hidden />
              {gamification.xp.toLocaleString()} XP
            </span>
            <span className="text-muted-foreground">
              {gamification.xpToNextLevel} XP to next level
            </span>
          </div>
          <Progress value={towardNext} className="h-2" />
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Today&apos;s workout
          </p>
          <p className="mt-1 font-heading text-base font-semibold">
            {workout.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {workout.durationMinutes} min · {workout.status}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
