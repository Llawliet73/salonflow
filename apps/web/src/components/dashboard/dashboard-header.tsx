import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Manage appointments, customers and services from one place.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full border p-2 hover:bg-slate-100 transition">
          <Bell className="h-5 w-5" />
        </button>

        <Avatar>
          <AvatarFallback>MU</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}