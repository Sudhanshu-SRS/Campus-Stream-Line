import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { StatusBadge } from "../components/StatusBadge";
import { mockApplications, mockCourses } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  GraduationCap,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { format } from "date-fns";

export default function ApplicationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();

  const application = mockApplications.find((app) => app.id === id);
  const course = mockCourses.find((c) => c.id === application?.courseId);

  const [status, setStatus] = useState(application?.status || "pending");

  if (!application) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Application not found</p>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus.replace("-", " ")}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/applications")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">
            Application Details
          </h1>
          <p className="text-muted-foreground">
            Application ID: {application.id}
          </p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Student Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Student Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">
                  {application.studentName}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{application.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{application.phone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Update application status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full bg-status-accepted hover:bg-status-accepted/90"
              onClick={() => handleStatusChange("accepted")}
              disabled={status === "accepted"}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Accept
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => handleStatusChange("rejected")}
              disabled={status === "rejected"}
            >
              <XCircle className="h-4 w-4 mr-2" />
              Reject
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleStatusChange("in-review")}
              disabled={status === "in-review"}
            >
              <Clock className="h-4 w-4 mr-2" />
              Mark Review
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Academic Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Previous Education
              </p>
              <p className="font-medium">{application.previousEducation}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Marks/Grade</p>
              <p className="font-medium">{application.marks}</p>
            </div>
          </CardContent>
        </Card>

        {/* Applied Course */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Applied Course
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Course Name</p>
              <p className="font-medium">{application.course}</p>
            </div>
            {course && (
              <>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fees</p>
                  <p className="font-medium">
                    ₹{course.fees.toLocaleString()}/year
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Eligibility</p>
                  <p className="font-medium">{course.eligibility}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Status History */}
      <Card>
        <CardHeader>
          <CardTitle>Status History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-4">
              {application.statusHistory.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium capitalize">
                      {item.status.replace("-", " ")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(item.date), "MMM dd, yyyy")}
                    </p>
                    {item.note && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
