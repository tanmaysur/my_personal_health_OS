/**
 * Shared dashboard types.
 * Keep these UI-agnostic so later Supabase rows can map into the same shapes.
 */

export type MetricTone = "nutrition" | "water" | "workout" | "goals" | "neutral";

export interface DailyMetric {
  id: string;
  label: string;
  value: number;
  goal: number;
  unit: string;
  tone: MetricTone;
  /** Short helper text shown under the metric */
  hint: string;
}

export interface WeeklyActivityPoint {
  /** Short weekday label, e.g. "Mon" */
  day: string;
  calories: number;
  workouts: number;
  waterMl: number;
}

export interface GoalSummary {
  id: string;
  title: string;
  progress: number; // 0–100
  dueLabel: string;
}

export interface GamificationSummary {
  streakDays: number;
  xp: number;
  level: number;
  levelLabel: string;
  xpToNextLevel: number;
}

export interface DashboardSample {
  /** Always true for Milestone 1 — reminds learners this is not live data */
  isSampleData: true;
  generatedAtLabel: string;
  userDisplayName: string;
  metrics: DailyMetric[];
  weeklyActivity: WeeklyActivityPoint[];
  goals: GoalSummary[];
  gamification: GamificationSummary;
  todayWorkout: {
    title: string;
    durationMinutes: number;
    status: "scheduled" | "completed" | "skipped";
  };
}
