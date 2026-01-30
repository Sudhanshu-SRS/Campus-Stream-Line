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

import { Textarea } from "../components/ui/textarea";

import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { mockAnnouncements, mockCourses } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export default function AnnouncementForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const isEditing = !!id;

  const [form, setForm] = useState({
    title: "",
    content: "",
    target: "all",
    isPublished: false,
  });

  useEffect(() => {
    if (isEditing) {
      const announcement = mockAnnouncements.find((a) => a.id === id);
      if (announcement) {
        setForm({
          title: announcement.title,
          content: announcement.content,
          target: announcement.target,
          isPublished: announcement.status === "published",
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
      title: isEditing ? "Announcement Updated" : "Announcement Created",
      description: `"${form.title}" has been ${isEditing ? "updated" : "created"} successfully.`,
    });
    navigate("/announcements");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/announcements")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {isEditing ? "Edit Announcement" : "New Announcement"}
          </h1>
          <p className="text-muted-foreground">
            {isEditing
              ? "Update announcement details"
              : "Create a new announcement"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Announcement Details</CardTitle>
            <CardDescription>
              Fill in the announcement information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter announcement title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={form.content}
                onChange={(e) => handleChange("content", e.target.value)}
                placeholder="Write your announcement content..."
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="target">Target Audience</Label>
              <Select
                value={form.target}
                onValueChange={(value) => handleChange("target", value)}
              >
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="all">All Applicants</SelectItem>
                  {mockCourses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="isPublished">Publish Immediately</Label>
                <p className="text-sm text-muted-foreground">
                  Make this announcement visible to applicants
                </p>
              </div>
              <Switch
                id="isPublished"
                checked={form.isPublished}
                onCheckedChange={(checked) =>
                  handleChange("isPublished", checked)
                }
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/announcements")}
          >
            Cancel
          </Button>
          <Button type="submit">
            {isEditing ? "Update Announcement" : "Create Announcement"}
          </Button>
        </div>
      </form>
    </div>
  );
}
