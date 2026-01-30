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
import { mockInterviews } from "../data/mockData";
import { Plus, Calendar, Clock, Video, MapPin, StickyNote } from "lucide-react";
import { format } from "date-fns";

export default function Interviews() {
  const navigate = useNavigate();
  const [interviews] = useState(mockInterviews);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Interviews & Counselling
          </h1>
          <p className="text-muted-foreground">
            Schedule and manage interviews
          </p>
        </div>
        <Button onClick={() => navigate("/interviews/schedule")}>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Interview
        </Button>
      </div>

      {/* Upcoming Interviews */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <Card key={interview.id}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {interview.applicantName}
                </CardTitle>
                <CardDescription>{interview.course}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {format(new Date(interview.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{interview.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {interview.mode === "online" ? (
                    <Video className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="capitalize">{interview.mode}</span>
                </div>
                {interview.notes && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                    <StickyNote className="h-4 w-4 mt-0.5" />
                    <span>{interview.notes}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {interviews.length === 0 && (
            <Card className="col-span-full">
              <CardContent className="py-8 text-center text-muted-foreground">
                No interviews scheduled
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
