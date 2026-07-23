import DashboardHeader from "./dashboard-header";
import DashboardStats from "./dashboard-stats";
import AppointmentTable from "../tables/appointment-table";

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardStats />

      <AppointmentTable />
    </div>
  );
}