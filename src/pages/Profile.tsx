import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Mail, MapPin, Link as LinkIcon, Github, Calendar, X, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

// Mock user data
const mockUser = {
  id: "1",
  name: "Alex Johnson",
  bio: "Full-stack developer with 3 years of experience. Passionate about building innovative web applications and solving complex problems. Love participating in hackathons to challenge myself and meet like-minded developers.",
  avatar: "https://i.pravatar.cc/300?img=1",
  email: "alex.johnson@example.com",
  skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "GraphQL", "Jest"],
  techStack: ["MERN Stack", "Next.js", "Firebase", "AWS"],
  hackathonsInterest: ["HackMIT", "HackNY", "CalHacks", "PennApps"],
  location: "San Francisco, CA",
  website: "https://alexjohnson.dev",
  github: "alexjohnson",
  openToCollaborate: true,
  connections: 26,
  hackathonsCompleted: 7,
  createdAt: new Date("2023-01-15"),
};

// Mock hackathons data
const mockHackathons = [
  {
    id: "1",
    name: "Tech4Good Hackathon",
    description: "Build solutions to address environmental challenges",
    startDate: new Date("2025-05-15"),
    endDate: new Date("2025-05-17"),
    location: "San Francisco, CA",
    isOnline: false,
    status: "upcoming",
  },
  {
    id: "2",
    name: "Global Healthcare Hack",
    description: "Creating innovative healthcare solutions",
    startDate: new Date("2025-06-10"),
    endDate: new Date("2025-06-12"),
    location: "Online",
    isOnline: true,
    status: "interested",
  },
  {
    id: "3",
    name: "EcoHack 2024",
    description: "Sustainability focused projects",
    startDate: new Date("2024-10-22"),
    endDate: new Date("2024-10-24"),
    location: "Seattle, WA",
    isOnline: false,
    status: "past",
  },
];

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(mockUser);
  const [projects, setProjects] = useState<Array<{ name: string; files: File[] }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to the backend
    console.log("Saving profile:", editedUser);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillsChange = (value: string) => {
    setEditedUser(prev => ({
      ...prev,
      skills: value.split(',').map(skill => skill.trim())
    }));
  };

  const handleTechStackChange = (value: string) => {
    setEditedUser(prev => ({
      ...prev,
      techStack: value.split(',').map(tech => tech.trim())
    }));
  };

  const handleHackathonsInterestChange = (value: string) => {
    setEditedUser(prev => ({
      ...prev,
      hackathonsInterest: value.split(',').map(hackathon => hackathon.trim())
    }));
  };

  const handleFindTeammates = (hackathonId: string) => {
    navigate(`/hackathons/${hackathonId}/teammates`);
  };

  const handleViewDetails = (hackathonId: string) => {
    navigate(`/hackathons/${hackathonId}`);
  };

  const handleAddProject = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const projectName = prompt("Enter project name:");
      if (projectName) {
        setProjects(prev => [...prev, { name: projectName, files: Array.from(files) }]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-black">Name</Label>
                <Input
                  id="name"
                  value={editedUser.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="bio" className="text-black">Bio</Label>
                <Textarea
                  id="bio"
                  value={editedUser.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-black">Location</Label>
                <Input
                  id="location"
                  value={editedUser.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editedUser.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-black">Website</Label>
                <Input
                  id="website"
                  value={editedUser.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="github" className="text-black">GitHub Username</Label>
                <Input
                  id="github"
                  value={editedUser.github}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="skills" className="text-black">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={editedUser.skills.join(', ')}
                  onChange={(e) => handleSkillsChange(e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="techStack" className="text-black">Tech Stack (comma-separated)</Label>
                <Input
                  id="techStack"
                  value={editedUser.techStack.join(', ')}
                  onChange={(e) => handleTechStackChange(e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="hackathonsInterest" className="text-black">Interested Hackathons (comma-separated)</Label>
                <Input
                  id="hackathonsInterest"
                  value={editedUser.hackathonsInterest.join(', ')}
                  onChange={(e) => handleHackathonsInterestChange(e.target.value)}
                  className="mt-1 bg-white text-black border-gray-300"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="openToCollaborate"
                  checked={editedUser.openToCollaborate}
                  onChange={(e) => handleInputChange('openToCollaborate', e.target.checked)}
                  className="h-4 w-4 accent-black"
                />
                <Label htmlFor="openToCollaborate" className="text-black">Available for collaboration</Label>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
                className="border-white text-white hover:bg-[#655AC4] hover:border-[#655AC4]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveProfile}
                className="bg-white text-black hover:bg-[#655AC4] hover:text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Cover photo and profile section */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-hackathon-blue to-hackathon-purple"></div>
            
            <div className="absolute bottom-0 left-0 w-full transform translate-y-[70%] px-6 sm:px-8 flex flex-col sm:flex-row items-center sm:items-end gap-4">
              <img
                src={editedUser.avatar}
                alt={editedUser.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md object-cover"
              />
              
              <div className="sm:mb-4 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">{editedUser.name}</h1>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{editedUser.location}</span>
                </div>
              </div>
              
              <div className="sm:ml-auto sm:mb-4">
                <Button 
                  className="button-primary flex items-center gap-2"
                  onClick={handleEditProfile}
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile stats */}
          <div className="mt-20 px-6 sm:px-8 grid grid-cols-3 border-b border-gray-100">
            <div className="py-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{editedUser.connections}</p>
              <p className="text-sm text-muted-foreground">Connections</p>
            </div>
            <div className="py-4 text-center border-l border-r border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{editedUser.hackathonsCompleted}</p>
              <p className="text-sm text-muted-foreground">Hackathons</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{editedUser.skills.length}</p>
              <p className="text-sm text-muted-foreground">Skills</p>
            </div>
          </div>
          
          {/* Profile tabs */}
          <div className="px-6 sm:px-8 py-6 bg-white">
            <Tabs defaultValue="about" onValueChange={setActiveTab}>
              <TabsList className="mb-6 bg-[#f1f5f9]">
                <TabsTrigger value="about" className="text-[#64748b]">About</TabsTrigger>
                <TabsTrigger value="hackathons" className="text-[#64748b]">Hackathons</TabsTrigger>
                <TabsTrigger value="portfolio" className="text-[#64748b]">Portfolio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="animate-fade-in text-[#64748b]">
                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">Bio</h2>
                    <p className="text-gray-700">{editedUser.bio}</p>
                  </div>
                  
                  {/* Contact & Links */}
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">Contact & Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span>{editedUser.email}</span>
                      </div>
                      {editedUser.website && (
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-5 w-5 text-muted-foreground" />
                          <a href={editedUser.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Personal Website
                          </a>
                        </div>
                      )}
                      {editedUser.github && (
                        <div className="flex items-center gap-2">
                          <Github className="h-5 w-5 text-muted-foreground" />
                          <a href={`https://github.com/${editedUser.github}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {editedUser.github}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Skills & Tech Stack */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-black">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {editedUser.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-black">Tech Stack</h2>
                      <div className="flex flex-wrap gap-2">
                        {editedUser.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hackathon Interests */}
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">Interested in Hackathons</h2>
                    <div className="flex flex-wrap gap-2">
                      {editedUser.hackathonsInterest.map(hackathon => (
                        <span key={hackathon} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
                          {hackathon}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">Availability</h2>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      editedUser.openToCollaborate
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {editedUser.openToCollaborate
                        ? "Available for collaboration"
                        : "Not available for collaboration"}
                    </div>
                  </div>
                  
                  {/* Member since */}
                  <div className="text-sm text-muted-foreground">
                    Member since {formatDate(editedUser.createdAt)}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hackathons" className="animate-fade-in text-[#64748b]">
                <div className="space-y-6">
                  {/* Upcoming Hackathons */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-black">Upcoming Hackathons</h2>
                    {mockHackathons
                      .filter(h => h.status === "upcoming")
                      .map(hackathon => (
                        <div key={hackathon.id} className="hackathon-card mb-4 border-hackathon-blue bg-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg text-black">{hackathon.name}</h3>
                              <p className="text-sm text-gray-700 mb-2">{hackathon.description}</p>
                            </div>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {hackathon.isOnline ? "Online" : "In Person"}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                            </span>
                          </div>
                          
                          {!hackathon.isOnline && (
                            <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                              <MapPin className="h-4 w-4" />
                              <span>{hackathon.location}</span>
                            </div>
                          )}
                          
                          <div className="flex gap-2 mt-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="bg-white text-black hover:bg-[#655AC4] hover:text-white"
                              onClick={() => handleFindTeammates(hackathon.id)}
                            >
                              Find Teammates
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-[#655AC4] text-white hover:bg-[#655AC4]/90"
                              onClick={() => handleViewDetails(hackathon.id)}
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    
                    {mockHackathons.filter(h => h.status === "upcoming").length === 0 && (
                      <p className="text-muted-foreground">No upcoming hackathons found.</p>
                    )}
                  </div>
                  
                  {/* Interested In */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-black">Interested In</h2>
                    {mockHackathons
                      .filter(h => h.status === "interested")
                      .map(hackathon => (
                        <div key={hackathon.id} className="hackathon-card mb-4 border-hackathon-purple bg-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg text-black">{hackathon.name}</h3>
                              <p className="text-sm text-gray-700 mb-2">{hackathon.description}</p>
                            </div>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                              {hackathon.isOnline ? "Online" : "In Person"}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                            </span>
                          </div>
                          
                          {!hackathon.isOnline && (
                            <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                              <MapPin className="h-4 w-4" />
                              <span>{hackathon.location}</span>
                            </div>
                          )}
                          
                          <div className="flex gap-2 mt-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="bg-white text-black hover:bg-[#655AC4] hover:text-white"
                              onClick={() => handleFindTeammates(hackathon.id)}
                            >
                              Find Teammates
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-[#655AC4] text-white hover:bg-[#655AC4]/90"
                              onClick={() => handleViewDetails(hackathon.id)}
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    
                    {mockHackathons.filter(h => h.status === "interested").length === 0 && (
                      <p className="text-muted-foreground">No interested hackathons found.</p>
                    )}
                  </div>
                  
                  {/* Past Hackathons */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-black">Past Hackathons</h2>
                    {mockHackathons
                      .filter(h => h.status === "past")
                      .map(hackathon => (
                        <div key={hackathon.id} className="hackathon-card mb-4 border-gray-300 bg-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg text-black">{hackathon.name}</h3>
                              <p className="text-sm text-gray-700 mb-2">{hackathon.description}</p>
                            </div>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                              {hackathon.isOnline ? "Online" : "In Person"}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                            </span>
                          </div>
                          
                          {!hackathon.isOnline && (
                            <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                              <MapPin className="h-4 w-4" />
                              <span>{hackathon.location}</span>
                            </div>
                          )}
                          
                          <div className="flex gap-2 mt-4">
                            <Button size="sm">View Project</Button>
                          </div>
                        </div>
                      ))}
                    
                    {mockHackathons.filter(h => h.status === "past").length === 0 && (
                      <p className="text-muted-foreground">No past hackathons found.</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio" className="animate-fade-in text-[#64748b]">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-black">Portfolio</h2>
                    <Button onClick={handleAddProject} className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Add Project
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                      webkitdirectory=""
                      directory=""
                    />
                  </div>
                  
                  {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {projects.map((project, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-black mb-2">{project.name}</h3>
                          <div className="text-sm text-gray-600">
                            {project.files.length} files
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-6">
                        No projects added yet. Click "Add Project" to upload your project files.
                  </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
