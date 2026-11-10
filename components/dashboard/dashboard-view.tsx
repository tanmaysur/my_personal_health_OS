import { GoalsPanel } from "@/components/dashboard/goals-panel";
import { MetricCard } from "@/components/dashboard/metric-card";
import { StreakCard } from "@/components/dashboard/streak-card";
import { WeeklyChart } from "@/components/dashboard/weekly-chart";
import { Header } from "@/components/layout/header";
import type { DashboardSample } from "@/types/dashboard";

interface DashboardViewProps {
  data: DashboardSample;
}

export function DashboardView({ data }: DashboardViewProps) {
  return (
    <div>
      <Header
        title={`Good day, ${data.userDisplayName}`}
        description={`${data.generatedAtLabel}. Your Health OS overview — mock data until Supabase is connected.`}
        showSampleBadge={data.isSampleData}
      />

      <section
        className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Daily metrics"
      >
        {data.metrics.map((metric, index) => {
          const delayClass =
            index === 0
              ? ""
              : index === 1
                ? "animate-vital-rise-delay-1"
                : index === 2
                  ? "animate-vital-rise-delay-2"
                  : "animate-vital-rise-delay-3";

          return (
            <MetricCard
              key={metric.id}
              metric={metric}
              className={`animate-vital-rise ${delayClass}`.trim()}
            />
          );
        })}
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <div className="animate-vital-rise animate-vital-rise-delay-1 lg:col-span-3">
          <WeeklyChart data={data.weeklyActivity} />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="animate-vital-rise animate-vital-rise-delay-2">
            <StreakCard
              gamification={data.gamification}
              workout={data.todayWorkout}
            />
          </div>
          <div className="animate-vital-rise animate-vital-rise-delay-3">
            <GoalsPanel goals={data.goals} />
          </div>
        </div>
      </section>
    </div>
  );
}
