import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const appointments = [
  {
    customer: "Rahul",
    service: "Haircut",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    customer: "Priya",
    service: "Facial",
    time: "1:00 PM",
    status: "Confirmed",
  },
  {
    customer: "Aman",
    service: "Hair Spa",
    time: "4:00 PM",
    status: "Pending",
  },
];

export default function AppointmentTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={`${appointment.customer}-${appointment.time}`}>
                <TableCell>{appointment.customer}</TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}