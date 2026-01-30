import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { mockApplications } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";

export default function ScheduleInterview() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({
    applicantId: "",
    date: null,
    time: "",
    mode: "offline",
    notes: "",
  });

  const pendingApplicants = mockApplications.filter(
    (app) => app.status === "pending" || app.status === "in-review",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicant = mockApplications.find((a) => a.id === form.applicantId);

    toast({
      title: "Interview Scheduled",
      description: `Interview scheduled for ${applicant?.studentName}.`,
    });

    navigate("/interviews");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/interviews")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Schedule Interview
          </h1>
          <p className="text-muted-foreground">
            Set up an interview or counselling session
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Interview Details</CardTitle>
            <CardDescription>Fill in the interview information</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Applicant */}
            <div className="space-y-2">
              <Label>Select Applicant</Label>
              <Select
                value={form.applicantId}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, applicantId: value }))
                }
              >
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Choose an applicant" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  {pendingApplicants.map((app) => (
                    <SelectItem key={app.id} value={app.id}>
                      {app.studentName} – {app.course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date & Time */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !form.date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {form.date ? format(form.date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-popover"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={form.date}
                      onSelect={(date) =>
                        setForm((prev) => ({ ...prev, date }))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            {/* Mode */}
            <div className="space-y-2">
              <Label>Mode</Label>
              <Select
                value={form.mode}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, mode: value }))
                }
              >
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="offline">Offline (In-Person)</SelectItem>
                  <SelectItem value="online">Online (Video Call)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }))
                }
                placeholder="Add any notes or instructions..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/interviews")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!form.applicantId || !form.date || !form.time}
          >
            Schedule Interview
          </Button>
        </div>
      </form>
    </div>
  );
}
