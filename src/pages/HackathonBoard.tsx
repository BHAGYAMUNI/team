import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Search, MapPin, Globe, Users, ChevronRight, Filter, Plus, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock hackathons data
const MOCK_HACKATHONS = [
  {
    id: "1",
    name: "Tech4Good Hackathon",
    description: "Build solutions that address environmental and social challenges.",
    startDate: new Date("2025-05-15"),
    endDate: new Date("2025-05-17"),
    registrationDeadline: new Date("2025-05-10"),
    location: "San Francisco, CA",
    isOnline: false,
    imageUrl: "https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://devpost.com/hackathons",
    participants: ["1", "2", "5"],
    prizes: ["$10,000 Grand Prize", "Cloud Credits", "Developer Devices"],
    categories: ["Environmental", "Social Impact", "Education"],
  },
  {
    id: "2",
    name: "Global Healthcare Hack",
    description: "Creating innovative healthcare solutions to improve patient outcomes.",
    startDate: new Date("2025-06-10"),
    endDate: new Date("2025-06-12"),
    registrationDeadline: new Date("2025-06-01"),
    location: "Online",
    isOnline: true,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://mlh.io",
    participants: ["3", "4"],
    prizes: ["$5,000 Grand Prize", "Incubator Access", "Mentorship"],
    categories: ["Healthcare", "AI", "Mobile"],
  },
  {
    id: "3",
    name: "Web3 Innovation Challenge",
    description: "Explore blockchain and decentralized solutions for the future.",
    startDate: new Date("2025-07-22"),
    endDate: new Date("2025-07-24"),
    registrationDeadline: new Date("2025-07-15"),
    location: "New York, NY",
    isOnline: false,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    website: "https://hackathons.hackclub.com",
    participants: ["1", "6"],
    prizes: ["$15,000 in Crypto", "Accelerator Program", "Investor Meetings"],
    categories: ["Blockchain", "DeFi", "Web3"],
  },
  {
    id: "4",
    name: "AI for Accessibility Hackathon",
    description: "Leveraging AI to create more accessible technology for everyone.",
    startDate: new Date("2025-08-05"),
    endDate: new Date("2025-08-07"),
    registrationDeadline: new Date("2025-07-30"),
    location: "Online",
    isOnline: true,
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80",
    website: "https://www.hackerearth.com/challenges/hackathon/",
    participants: ["2", "3", "5"],
    prizes: ["$8,000 Grand Prize", "Product Launches", "Corporate Partnerships"],
    categories: ["AI", "Accessibility", "Inclusivity"],
  },
  {
    id: "5",
    name: "Startup Weekend: FinTech Edition",
    description: "Launch a fintech startup in just 54 hours with industry mentors.",
    startDate: new Date("2025-09-12"),
    endDate: new Date("2025-09-14"),
    registrationDeadline: new Date("2025-09-05"),
    location: "Austin, TX",
    isOnline: false,
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://startupweekend.org",
    participants: ["1", "4", "6"],
    prizes: ["Seed Funding", "Co-working Space", "Legal Services"],
    categories: ["FinTech", "Startup", "Innovation"],
  },
  {
    id: "6",
    name: "Climate Tech Challenge",
    description: "Develop innovative solutions to combat climate change and promote sustainability.",
    startDate: new Date("2025-10-20"),
    endDate: new Date("2025-10-22"),
    registrationDeadline: new Date("2025-10-10"),
    location: "Boston, MA",
    isOnline: false,
    imageUrl: "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://www.hackathon.com/events",
    participants: ["2", "3", "4", "5"],
    prizes: ["$12,000 Grand Prize", "Green Tech Incubator Access", "Sustainability Grants"],
    categories: ["Climate", "Sustainability", "Clean Energy"],
  },
];

// Mock user data for participants
const MOCK_USERS = [
  { id: "1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", name: "Samantha Lee", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: "3", name: "David Chen", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: "4", name: "Emma Wilson", avatar: "https://i.pravatar.cc/150?img=9" },
  { id: "5", name: "Michael Brown", avatar: "https://i.pravatar.cc/150?img=11" },
  { id: "6", name: "Olivia Garcia", avatar: "https://i.pravatar.cc/150?img=10" },
];

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const isUpcoming = (date: Date) => {
  return date > new Date();
};

const HackathonBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState<"all" | "online" | "in-person">("all");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // All unique categories from hackathons
  const allCategories = Array.from(
    new Set(MOCK_HACKATHONS.flatMap(hackathon => hackathon.categories))
  );

  // Filter hackathons based on search term and filters
  const filteredHackathons = MOCK_HACKATHONS.filter(hackathon => {
    // Filter by search term
    const searchMatch = 
      hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.categories.some(category => 
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    // Filter by selected categories
    const categoryMatch = 
      selectedCategories.length === 0 || 
      selectedCategories.some(category => 
        hackathon.categories.includes(category)
      );
    
    // Filter by location type
    const locationMatch = 
      locationFilter === "all" || 
      (locationFilter === "online" && hackathon.isOnline) ||
      (locationFilter === "in-person" && !hackathon.isOnline);
    
    return searchMatch && categoryMatch && locationMatch;
  });

  // Divide hackathons into upcoming and past
  const upcomingHackathons = filteredHackathons.filter(hackathon => 
    isUpcoming(hackathon.startDate)
  );
  
  const pastHackathons = filteredHackathons.filter(hackathon => 
    !isUpcoming(hackathon.startDate)
  );

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setLocationFilter("all");
  };

  const handleWebsiteClick = (websiteUrl: string) => {
    window.open(websiteUrl, '_blank', 'noopener,noreferrer');
  };

  const handleJoinHackathon = (hackathonId: string) => {
    // Here you can add logic to handle joining a hackathon
    // For now, we'll just show an alert
    alert(`Joining hackathon with ID: ${hackathonId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-black">Hackathon Board</h1>
            <p className="text-muted-foreground">
              Discover upcoming hackathons and find teammates
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {(selectedCategories.length > 0 || locationFilter !== "all") && (
                <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedCategories.length + (locationFilter !== "all" ? 1 : 0)}
                </span>
              )}
            </Button>
            <Button 
              className="gradient-bg flex items-center"
              onClick={() => navigate("/hackathons/add")}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Hackathon
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, description, location, or category"
            className="pl-10 input-field bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="mb-6 bg-white text-black p-4 rounded-lg shadow-sm animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                disabled={selectedCategories.length === 0 && locationFilter === "all"}
              >
                Clear all
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categories filter */}
              <div>
                <Label className="mb-2 block">Categories</Label>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(category => (
                    <button
                      key={category}
                      className={`text-sm px-3 py-1 rounded-full transition-colors ${
                        selectedCategories.includes(category)
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location type filter */}
              <div>
                <Label className="mb-2 block">Location Type</Label>
                <div className="flex gap-2">
                  <button
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      locationFilter === "all"
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setLocationFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      locationFilter === "online"
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setLocationFilter("online")}
                  >
                    Online Only
                  </button>
                  <button
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      locationFilter === "in-person"
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setLocationFilter("in-person")}
                  >
                    In-Person Only
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hackathon listings */}
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6 bg-[#f1f5f9]">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingHackathons.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastHackathons.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingHackathons.length > 0 ? (
                upcomingHackathons.map(hackathon => (
                  <div key={hackathon.id} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={hackathon.imageUrl}
                        alt={hackathon.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 w-full text-white">
                        <div className="flex justify-between items-end">
                          <h2 className="text-xl font-bold">{hackathon.name}</h2>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            hackathon.isOnline
                              ? "bg-blue-500/90"
                              : "bg-green-500/90"
                          }`}>
                            {hackathon.isOnline ? (
                              <span className="flex items-center">
                                <Globe className="h-3 w-3 mr-1" />
                                Online
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                In Person
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-muted-foreground mb-4 text-black">{hackathon.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label className="text-xs text-muted-foreground text-black">Event Dates</Label>
                          <div className="flex items-center gap-2 text-sm text-black">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-xs text-muted-foreground text-black">Registration Deadline</Label>
                          <div className="flex items-center gap-2 text-sm text-black">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDate(hackathon.registrationDeadline)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <Label className="text-xs text-muted-foreground text-black">Location</Label>
                        <div className="flex items-center gap-2 text-sm text-black">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{hackathon.isOnline ? "Online" : hackathon.location}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <Label className="text-xs text-muted-foreground mb-1 block text-black">Categories</Label>
                        <div className="flex flex-wrap gap-1">
                          {hackathon.categories.map(category => (
                            <span key={category} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-black">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {hackathon.participants.length > 0 && (
                        <div className="mb-4">
                          <Label className="text-xs text-muted-foreground mb-1 block">
                            Participants ({hackathon.participants.length})
                          </Label>
                          <div className="flex -space-x-2">
                            {hackathon.participants.slice(0, 5).map(participantId => {
                              const participant = MOCK_USERS.find(user => user.id === participantId);
                              return participant ? (
                                <img
                                  key={participant.id}
                                  src={participant.avatar}
                                  alt={participant.name}
                                  className="w-8 h-8 rounded-full border-2 border-white"
                                  title={participant.name}
                                />
                              ) : null;
                            })}
                            {hackathon.participants.length > 5 && (
                              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                                +{hackathon.participants.length - 5}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex gap-2 mt-auto">
                        <Button
                          variant="outline"
                          className="flex-1 flex items-center justify-center"
                          onClick={() => handleWebsiteClick(hackathon.website)}
                        >
                          Website
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={() => handleJoinHackathon(hackathon.id)}
                        >
                          Join Hackathon
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm">
                  <p className="text-lg font-semibold">No upcoming hackathons found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or check back later
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastHackathons.length > 0 ? (
                pastHackathons.map(hackathon => (
                  <div key={hackathon.id} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gray-900/30 z-10"></div>
                      <img
                        src={hackathon.imageUrl}
                        alt={hackathon.name}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute top-0 left-0 p-4 z-20">
                        <span className="px-2 py-1 bg-gray-700/80 text-white text-xs rounded-full">
                          Past Event
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 p-4 w-full text-white z-20">
                        <h2 className="text-xl font-bold">{hackathon.name}</h2>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                        </span>
                        
                        {!hackathon.isOnline && (
                          <>
                            <span className="mx-1">•</span>
                            <MapPin className="h-4 w-4" />
                            <span>{hackathon.location}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <Label className="text-xs text-muted-foreground mb-1 block">Categories</Label>
                        <div className="flex flex-wrap gap-1">
                          {hackathon.categories.map(category => (
                            <span key={category} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center mt-2"
                      >
                        View Results <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm">
                  <p className="text-lg font-semibold">No past hackathons found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or check back later
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HackathonBoard;
