import StatsCard from "./stats-card";
import {
  CalendarDays,
  Users,
  IndianRupee,
} from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatsCard
        title="Today's Bookings"
        value="18"
        icon={CalendarDays}
      />

      <StatsCard
        title="Customers"
        value="96"
        icon={Users}
      />

      <StatsCard
        title="Revenue"
        value="₹18,400"
        icon={IndianRupee}
      />
    </div>
  );
}