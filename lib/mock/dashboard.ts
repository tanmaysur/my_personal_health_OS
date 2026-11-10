import type { DashboardSample } from "@/types/dashboard";

/**
 * SAMPLE DATA ONLY — Milestone 1
 * --------------------------------
 * This module powers the dashboard until Supabase is wired.
 * Later: replace imports of this file with `lib/data/` queries.
 * Do not put secrets or real personal health data here.
 */
export const DASHBOARD_SAMPLE: DashboardSample = {
  isSampleData: true,
  generatedAtLabel: "Sample day · Mon 10 Nov",
  userDisplayName: "Tanmay",
  metrics: [
    {
      id: "calories",
      label: "Calories",
      value: 1680,
      goal: 2200,
      unit: "kcal",
      tone: "nutrition",
      hint: "520 kcal remaining",
    },
    {
      id: "water",
      label: "Water",
      value: 1800,
      goal: 3000,
      unit: "ml",
      tone: "water",
      hint: "1.2 L to go",
    },
    {
      id: "workout",
      label: "Active minutes",
      value: 35,
      goal: 45,
      unit: "min",
      tone: "workout",
      hint: "Strength block scheduled",
    },
    {
      id: "protein",
      label: "Protein",
      value: 112,
      goal: 150,
      unit: "g",
      tone: "goals",
      hint: "On pace for dinner",
    },
  ],
  weeklyActivity: [
    { day: "Mon", calories: 2100, workouts: 1, waterMl: 2800 },
    { day: "Tue", calories: 1950, workouts: 0, waterMl: 2400 },
    { day: "Wed", calories: 2300, workouts: 1, waterMl: 3100 },
    { day: "Thu", calories: 1800, workouts: 1, waterMl: 2600 },
    { day: "Fri", calories: 2200, workouts: 0, waterMl: 2900 },
    { day: "Sat", calories: 2500, workouts: 1, waterMl: 3200 },
    { day: "Sun", calories: 1680, workouts: 1, waterMl: 1800 },
  ],
  goals: [
    {
      id: "g1",
      title: "Hit protein target 5 days this week",
      progress: 60,
      dueLabel: "This week",
    },
    {
      id: "g2",
      title: "Complete 4 strength sessions",
      progress: 75,
      dueLabel: "This week",
    },
    {
      id: "g3",
      title: "Average 3 L water daily",
      progress: 40,
      dueLabel: "This month",
    },
  ],
  gamification: {
    streakDays: 7,
    xp: 1240,
    level: 4,
    levelLabel: "Steady Builder",
    xpToNextLevel: 260,
  },
  todayWorkout: {
    title: "Upper body strength",
    durationMinutes: 45,
    status: "scheduled",
  },
};

/** Convenience helper — later this becomes an async data-access call */
export function getDashboardSample(): DashboardSample {
  return DASHBOARD_SAMPLE;
}
