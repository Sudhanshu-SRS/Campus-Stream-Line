import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { mockSettings } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

export default function Settings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    applicationsOpen: mockSettings.applicationsOpen,
    deadline: new Date(mockSettings.deadline),
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  const handleToggleApplications = (checked) => {
    setSettings((prev) => ({ ...prev, applicationsOpen }));
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage admission settings</p>
      </div>

      {/* Application Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>Control the admission process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="applications-open" className="text-base">
                Applications Open
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow new applications to be submitted
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Switch
                  id="applications-open"
                  checked={settings.applicationsOpen}
                />
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-card">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    {settings.applicationsOpen
                      ? "Close Applications?"
                      : "Open Applications?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {settings.applicationsOpen
                      ? "This will prevent new applications from being submitted. Existing applications will not be affected."
                      : "This will allow new applications to be submitted."}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      handleToggleApplications(!settings.applicationsOpen)
                    }
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="space-y-2">
            <Label className="text-base">Application Deadline</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Set the last date for accepting applications
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full sm:w-[280px] justify-start text-left font-normal",
                    !settings.deadline && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {settings.deadline
                    ? format(settings.deadline, "PPP")
                    : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-popover" align="start">
                <Calendar
                  mode="single"
                  selected={settings.deadline}
                  onSelect={(date) =>
                    date && setSettings((prev) => ({ ...prev, deadline }))
                  }
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Status Indicator */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "h-3 w-3 rounded-full",
                settings.applicationsOpen
                  ? "bg-status-accepted"
                  : "bg-status-rejected",
              )}
            />
            <span className="text-sm">
              Applications are currently{" "}
              <span className="font-medium">
                {settings.applicationsOpen ? "OPEN" : "CLOSED"}
              </span>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg">
          Save Settings
        </Button>
      </div>
    </div>
  );
}
