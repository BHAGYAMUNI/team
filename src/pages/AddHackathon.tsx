import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Globe } from "lucide-react";

const AddHackathon = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    location: "",
    isOnline: false,
    website: "",
    categories: "",
    prizes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Hackathon data:", formData);
    // For now, we'll just navigate back to the hackathon board
    navigate("/hackathons");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-black">Add New Hackathon</h1>
            <Button
              variant="outline"
              onClick={() => navigate("/hackathons")}
            >
              Back to Hackathons
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <Label htmlFor="name" className="text-black">Hackathon Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 bg-white"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-black">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="mt-1 bg-white"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate" className="text-black">Start Date</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="endDate" className="text-black">End Date</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="registrationDeadline" className="text-black">Registration Deadline</Label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="registrationDeadline"
                  name="registrationDeadline"
                  type="date"
                  value={formData.registrationDeadline}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-black">Location</Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="website" className="text-black">Website URL</Label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="categories" className="text-black">Categories (comma-separated)</Label>
              <Input
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                required
                className="mt-1 bg-white"
                placeholder="e.g., Web, Mobile, AI, Blockchain"
              />
            </div>

            <div>
              <Label htmlFor="prizes" className="text-black">Prizes (comma-separated)</Label>
              <Input
                id="prizes"
                name="prizes"
                value={formData.prizes}
                onChange={handleChange}
                required
                className="mt-1 bg-white"
                placeholder="e.g., $10,000, Laptop, Internship"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isOnline"
                name="isOnline"
                checked={formData.isOnline}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <Label htmlFor="isOnline" className="text-black">This is an online hackathon</Label>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="gradient-bg">
                Add Hackathon
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHackathon; 