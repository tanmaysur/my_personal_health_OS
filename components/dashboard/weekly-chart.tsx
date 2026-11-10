"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { WeeklyActivityPoint } from "@/types/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WeeklyChartProps {
  data: WeeklyActivityPoint[];
}

export function WeeklyChart({ data }: WeeklyChartProps) {
  return (
    <Card className="border-border/70 bg-card/80 shadow-none">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Weekly activity</CardTitle>
        <p className="text-sm text-muted-foreground">
          Sample calories and workout count for the last 7 days
        </p>
      </CardHeader>
      <CardContent className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              yAxisId="kcal"
              tickLine={false}
              axisLine={false}
              width={40}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              yAxisId="workouts"
              orientation="right"
              tickLine={false}
              axisLine={false}
              width={28}
              allowDecimals={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "var(--muted)", opacity: 0.45 }}
              contentStyle={{
                borderRadius: "0.75rem",
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--card-foreground)",
                fontSize: 12,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar
              yAxisId="kcal"
              dataKey="calories"
              name="Calories"
              fill="var(--chart-1)"
              radius={[6, 6, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              yAxisId="workouts"
              dataKey="workouts"
              name="Workouts"
              fill="var(--chart-2)"
              radius={[6, 6, 0, 0]}
              maxBarSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
