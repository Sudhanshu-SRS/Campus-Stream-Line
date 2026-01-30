import { useState } from "react";
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
import { mockInstituteProfile } from "../data/mockData";
import { useToast } from "../hooks/use-toast";
import { Upload, Building2 } from "lucide-react";

export default function InstituteProfile() {
  const { toast } = useToast();
  const [profile, setProfile] = useState(mockInstituteProfile);

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Institute profile has been saved successfully.",
    });
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Institute Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your institute information
        </p>
      </div>

      {/* Basic Info */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            Primary details about your institute
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Logo Upload */}
            <div className="flex flex-col items-center gap-3">
              <div className="h-32 w-32 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted">
                {profile.logo ? (
                  <img
                    src={profile.logo}
                    alt="Logo"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <Building2 className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Logo
              </Button>
            </div>

            {/* Name and Location */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Institute Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">About Institute</Label>
            <Textarea
              id="about"
              value={profile.about}
              onChange={(e) => handleChange("about", e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Accreditation */}
      <Card>
        <CardHeader>
          <CardTitle>Accreditation & Ranking</CardTitle>
          <CardDescription>Official accreditation details </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="naac">NAAC Grade</Label>
              <Input
                id="naac"
                value={profile.naacGrade}
                onChange={(e) => handleChange("naacGrade", e.target.value)}
                placeholder="e.g., A++"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nirf">NIRF Ranking</Label>
              <Input
                id="nirf"
                type="number"
                value={profile.nirfRanking}
                onChange={(e) =>
                  handleChange("nirfRanking", parseInt(e.target.value) || 0)
                }
                placeholder="e.g., 15"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>How applicants can reach you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
