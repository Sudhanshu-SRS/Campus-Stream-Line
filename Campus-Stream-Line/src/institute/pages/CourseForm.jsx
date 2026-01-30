import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { mockCourses } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export default function CourseForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const isEditing = !!id;

  const [form, setForm] = useState({
    name: "",
    duration: "",
    fees: "",
    intake: "",
    eligibility: "",
    isOpen: true,
  });

  useEffect(() => {
    if (isEditing) {
      const course = mockCourses.find((c) => c.id === id);
      if (course) {
        setForm({
          name: course.name,
          duration: course.duration,
          fees: course.fees.toString(),
          intake: course.intake.toString(),
          eligibility: course.eligibility,
          isOpen: course.isOpen,
        });
      }
    }
  }, [id, isEditing]);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: isEditing ? "Course Updated" : "Course Created",
      description: `${form.name} has been ${isEditing ? "updated" : "added"} successfully.`,
    });
    navigate("/courses");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/courses")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {isEditing ? "Edit Course" : "Add New Course"}
          </h1>
          <p className="text-muted-foreground">
            {isEditing
              ? "Update course details"
              : "Create a new course program"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
            <CardDescription>Fill in the course information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Course Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g., B.Tech Computer Science"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={form.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                  placeholder="e.g., 4 Years"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fees">Fees (per year)</Label>
                <Input
                  id="fees"
                  type="number"
                  value={form.fees}
                  onChange={(e) => handleChange("fees", e.target.value)}
                  placeholder="e.g., 150000"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="intake">Intake Capacity</Label>
              <Input
                id="intake"
                type="number"
                value={form.intake}
                onChange={(e) => handleChange("intake", e.target.value)}
                placeholder="e.g., 60"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eligibility">Eligibility Criteria</Label>
              <Textarea
                id="eligibility"
                value={form.eligibility}
                onChange={(e) => handleChange("eligibility", e.target.value)}
                placeholder="e.g., 10+2 with PCM, minimum 60%"
                rows={3}
                required
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="isOpen">Open for Applications</Label>
                <p className="text-sm text-muted-foreground">
                  Allow students to apply for this course
                </p>
              </div>
              <Switch
                id="isOpen"
                checked={form.isOpen}
                onCheckedChange={(checked) => handleChange("isOpen", checked)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/courses")}
          >
            Cancel
          </Button>
          <Button type="submit">
            {isEditing ? "Update Course" : "Create Course"}
          </Button>
        </div>
      </form>
    </div>
  );
}
