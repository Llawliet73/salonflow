import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AppointmentHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Appointments
        </h1>

        <p className="text-slate-500 mt-1">
          Manage all salon appointments.
        </p>
      </div>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        New Appointment
      </Button>
    </div>
  );
}