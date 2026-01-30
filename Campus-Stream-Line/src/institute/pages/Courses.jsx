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
import { Switch } from "../components/ui/switch";
import { mockCourses } from "../data/mockData";
import { Plus, Edit, Trash2, Users, Clock, IndianRupee } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { useToast } from "../hooks/use-toast";

export default function Courses() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [courses, setCourses] = useState(mockCourses);
  const [deleteId, setDeleteId] = useState(null);

  const handleToggleVisibility = (id) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, isOpen: !course.isOpen } : course,
      ),
    );
    toast({
      title: "Course Updated",
      description: "Course visibility has been changed.",
    });
  };

  const handleDelete = () => {
    if (deleteId) {
      setCourses((prev) => prev.filter((course) => course.id !== deleteId));
      toast({
        title: "Course Deleted",
        description: "The course has been removed.",
        variant: "destructive",
      });
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Courses & Programs
          </h1>
          <p className="text-muted-foreground">Manage your offered courses</p>
        </div>
        <Button onClick={() => navigate("/courses/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {course.eligibility}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={course.isOpen}
                    onCheckedChange={() => handleToggleVisibility(course.id)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{course.intake} seats</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                  <IndianRupee className="h-4 w-4" />
                  <span>₹{course.fees.toLocaleString()}/year</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    course.isOpen
                      ? "bg-status-accepted/20 text-status-accepted"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {course.isOpen ? "Open for Applications" : "Closed"}
                </span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(`/courses/edit/${course.id}`)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteId(course.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                {course.applicationsCount} applications received
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Course</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this course? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
