import { DashboardView } from "@/components/dashboard/dashboard-view";
import { getDashboardSample } from "@/lib/mock/dashboard";

export default function DashboardPage() {
  const data = getDashboardSample();

  return <DashboardView data={data} />;
}
