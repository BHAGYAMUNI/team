import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useToast } from "@/hooks/use-toast";
import FilterPanel from "@/components/discover/FilterPanel";
import SearchBar from "@/components/discover/SearchBar";
import AppliedFilters from "@/components/discover/AppliedFilters";
import ProfileCard from "@/components/discover/ProfileCard";

// Example mock data for profiles
const MOCK_PROFILES = [
  {
    id: "1",
    name: "Alex Johnson",
    bio: "Full-stack developer with 3 years of experience. Love building innovative solutions at hackathons.",
    avatar: "https://i.pravatar.cc/150?img=1",
    skills: ["React", "Node.js", "MongoDB"],
    techStack: ["MERN", "Firebase"],
    location: "San Francisco, CA",
    openToCollaborate: true,
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    email: "alex.johnson@example.com"
  },
  {
    id: "2",
    name: "Samantha Lee",
    bio: "UX/UI designer passionate about creating beautiful and functional interfaces.",
    avatar: "https://i.pravatar.cc/150?img=5",
    skills: ["UI Design", "Figma", "User Research"],
    techStack: ["Adobe XD", "Sketch"],
    location: "New York, NY",
    openToCollaborate: true,
    github: "https://github.com/samanthalee",
    linkedin: "https://linkedin.com/in/samanthalee",
    email: "samantha.lee@example.com"
  },
  {
    id: "3",
    name: "David Chen",
    bio: "Backend developer specialized in scalable APIs and database optimization.",
    avatar: "https://i.pravatar.cc/150?img=3",
    skills: ["Python", "Django", "PostgreSQL"],
    techStack: ["AWS", "Docker"],
    location: "Austin, TX",
    openToCollaborate: true,
    github: "https://github.com/davidchen",
    linkedin: "https://linkedin.com/in/davidchen",
    email: "david.chen@example.com"
  },
  {
    id: "4",
    name: "Emma Wilson",
    bio: "Data scientist with a background in machine learning and AI applications.",
    avatar: "https://i.pravatar.cc/150?img=9",
    skills: ["Python", "TensorFlow", "Data Analysis"],
    techStack: ["Jupyter", "Scikit-learn"],
    location: "Seattle, WA",
    openToCollaborate: false,
    github: "https://github.com/emmawilson",
    linkedin: "https://linkedin.com/in/emmawilson",
    email: "emma.wilson@example.com"
  },
  {
    id: "5",
    name: "Michael Brown",
    bio: "Mobile app developer with expertise in React Native and Flutter.",
    avatar: "https://i.pravatar.cc/150?img=11",
    skills: ["React Native", "Flutter", "Mobile UI"],
    techStack: ["Firebase", "Redux"],
    location: "Chicago, IL",
    openToCollaborate: true,
    github: "https://github.com/michaelbrown",
    linkedin: "https://linkedin.com/in/michaelbrown",
    email: "michael.brown@example.com"
  },
  {
    id: "6",
    name: "Sarah Martinez",
    bio: "DevOps engineer focused on cloud infrastructure and CI/CD pipelines.",
    avatar: "https://i.pravatar.cc/150?img=12",
    skills: ["AWS", "Docker", "Kubernetes"],
    techStack: ["Terraform", "Jenkins"],
    location: "Boston, MA",
    openToCollaborate: true,
  },
  {
    id: "7",
    name: "James Wilson",
    bio: "Blockchain developer with experience in smart contracts and DApps.",
    avatar: "https://i.pravatar.cc/150?img=13",
    skills: ["Solidity", "Web3.js", "Ethereum"],
    techStack: ["Truffle", "Ganache"],
    location: "Denver, CO",
    openToCollaborate: true,
  },
  {
    id: "8",
    name: "Lisa Chen",
    bio: "AI/ML engineer specializing in natural language processing.",
    avatar: "https://i.pravatar.cc/150?img=14",
    skills: ["Python", "TensorFlow", "NLP"],
    techStack: ["PyTorch", "Hugging Face"],
    location: "Los Angeles, CA",
    openToCollaborate: true,
  },
  {
    id: "9",
    name: "Robert Garcia",
    bio: "Game developer with experience in Unity and Unreal Engine.",
    avatar: "https://i.pravatar.cc/150?img=15",
    skills: ["Unity", "C#", "Game Design"],
    techStack: ["Unreal Engine", "Blender"],
    location: "Austin, TX",
    openToCollaborate: true,
  },
  {
    id: "10",
    name: "Olivia Thompson",
    bio: "Cybersecurity specialist with expertise in penetration testing.",
    avatar: "https://i.pravatar.cc/150?img=16",
    skills: ["Security", "Ethical Hacking", "Network Security"],
    techStack: ["Kali Linux", "Wireshark"],
    location: "Washington, DC",
    openToCollaborate: true,
  },
  {
    id: "11",
    name: "Daniel Kim",
    bio: "Cloud architect specializing in AWS and Azure solutions.",
    avatar: "https://i.pravatar.cc/150?img=17",
    skills: ["AWS", "Azure", "Cloud Architecture"],
    techStack: ["Terraform", "Kubernetes"],
    location: "Seattle, WA",
    openToCollaborate: true,
  },
  {
    id: "12",
    name: "Sophia Rodriguez",
    bio: "Data engineer focused on big data processing and analytics.",
    avatar: "https://i.pravatar.cc/150?img=18",
    skills: ["Python", "Spark", "Data Engineering"],
    techStack: ["Hadoop", "Airflow"],
    location: "New York, NY",
    openToCollaborate: true,
  },
  {
    id: "13",
    name: "William Chen",
    bio: "Full-stack developer with expertise in modern web technologies.",
    avatar: "https://i.pravatar.cc/150?img=19",
    skills: ["React", "Node.js", "TypeScript"],
    techStack: ["Next.js", "GraphQL"],
    location: "San Francisco, CA",
    openToCollaborate: true,
  },
  {
    id: "14",
    name: "Ava Patel",
    bio: "Mobile developer specializing in iOS and Android applications.",
    avatar: "https://i.pravatar.cc/150?img=20",
    skills: ["Swift", "Kotlin", "Mobile Development"],
    techStack: ["Xcode", "Android Studio"],
    location: "Chicago, IL",
    openToCollaborate: true,
  },
  {
    id: "15",
    name: "Ethan Wilson",
    bio: "DevOps engineer with focus on automation and infrastructure.",
    avatar: "https://i.pravatar.cc/150?img=21",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    techStack: ["Jenkins", "Ansible"],
    location: "Austin, TX",
    openToCollaborate: true,
  },
  {
    id: "16",
    name: "Mia Anderson",
    bio: "Frontend developer passionate about creating responsive web applications.",
    avatar: "https://i.pravatar.cc/150?img=22",
    skills: ["React", "TypeScript", "CSS"],
    techStack: ["Next.js", "Tailwind CSS"],
    location: "Los Angeles, CA",
    openToCollaborate: true,
  },
  {
    id: "17",
    name: "Noah Taylor",
    bio: "Backend developer specializing in microservices architecture.",
    avatar: "https://i.pravatar.cc/150?img=23",
    skills: ["Java", "Spring Boot", "Microservices"],
    techStack: ["Docker", "Kafka"],
    location: "Boston, MA",
    openToCollaborate: true,
  },
  {
    id: "18",
    name: "Isabella Martinez",
    bio: "Data scientist with expertise in machine learning and analytics.",
    avatar: "https://i.pravatar.cc/150?img=24",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    techStack: ["TensorFlow", "Pandas"],
    location: "Seattle, WA",
    openToCollaborate: true,
  },
  {
    id: "19",
    name: "Lucas Brown",
    bio: "Blockchain developer with experience in DeFi applications.",
    avatar: "https://i.pravatar.cc/150?img=25",
    skills: ["Solidity", "Web3", "DeFi"],
    techStack: ["Ethereum", "Hardhat"],
    location: "New York, NY",
    openToCollaborate: true,
  },
  {
    id: "20",
    name: "Charlotte Lee",
    bio: "UI/UX designer with a focus on accessibility and user experience.",
    avatar: "https://i.pravatar.cc/150?img=26",
    skills: ["Figma", "UI Design", "Accessibility"],
    techStack: ["Adobe XD", "Sketch"],
    location: "San Francisco, CA",
    openToCollaborate: true,
  },
  {
    id: "21",
    name: "Benjamin Garcia",
    bio: "Full-stack developer with expertise in modern web technologies.",
    avatar: "https://i.pravatar.cc/150?img=27",
    skills: ["React", "Node.js", "TypeScript"],
    techStack: ["Next.js", "GraphQL"],
    location: "Chicago, IL",
    openToCollaborate: true,
  },
  {
    id: "22",
    name: "Amelia Wilson",
    bio: "Mobile developer specializing in cross-platform applications.",
    avatar: "https://i.pravatar.cc/150?img=28",
    skills: ["React Native", "Flutter", "Mobile UI"],
    techStack: ["Firebase", "Redux"],
    location: "Austin, TX",
    openToCollaborate: true,
  },
  {
    id: "23",
    name: "Henry Chen",
    bio: "DevOps engineer with focus on cloud infrastructure.",
    avatar: "https://i.pravatar.cc/150?img=29",
    skills: ["AWS", "Docker", "Kubernetes"],
    techStack: ["Terraform", "Jenkins"],
    location: "Seattle, WA",
    openToCollaborate: true,
  },
  {
    id: "24",
    name: "Evelyn Rodriguez",
    bio: "Frontend developer passionate about creating beautiful interfaces.",
    avatar: "https://i.pravatar.cc/150?img=30",
    skills: ["React", "TypeScript", "CSS"],
    techStack: ["Next.js", "Tailwind CSS"],
    location: "Los Angeles, CA",
    openToCollaborate: true,
  },
  {
    id: "25",
    name: "Alexander Kim",
    bio: "Backend developer specializing in scalable applications.",
    avatar: "https://i.pravatar.cc/150?img=31",
    skills: ["Python", "Django", "PostgreSQL"],
    techStack: ["AWS", "Docker"],
    location: "New York, NY",
    openToCollaborate: true,
  },
  {
    id: "26",
    name: "Victoria Thompson",
    bio: "Data scientist with expertise in predictive analytics.",
    avatar: "https://i.pravatar.cc/150?img=32",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    techStack: ["TensorFlow", "Pandas"],
    location: "San Francisco, CA",
    openToCollaborate: true,
  },
  {
    id: "27",
    name: "Jackson Martinez",
    bio: "Blockchain developer with experience in smart contracts.",
    avatar: "https://i.pravatar.cc/150?img=33",
    skills: ["Solidity", "Web3", "Ethereum"],
    techStack: ["Truffle", "Ganache"],
    location: "Chicago, IL",
    openToCollaborate: true,
  },
  {
    id: "28",
    name: "Scarlett Anderson",
    bio: "UI/UX designer with a focus on user experience.",
    avatar: "https://i.pravatar.cc/150?img=34",
    skills: ["Figma", "UI Design", "User Research"],
    techStack: ["Adobe XD", "Sketch"],
    location: "Austin, TX",
    openToCollaborate: true,
  },
  {
    id: "29",
    name: "Daniel Wilson",
    bio: "Full-stack developer with expertise in modern web technologies.",
    avatar: "https://i.pravatar.cc/150?img=35",
    skills: ["React", "Node.js", "TypeScript"],
    techStack: ["Next.js", "GraphQL"],
    location: "Seattle, WA",
    openToCollaborate: true,
  },
  {
    id: "30",
    name: "Luna Garcia",
    bio: "Mobile developer specializing in iOS applications.",
    avatar: "https://i.pravatar.cc/150?img=36",
    skills: ["Swift", "iOS Development", "Mobile UI"],
    techStack: ["Xcode", "Firebase"],
    location: "Los Angeles, CA",
    openToCollaborate: true,
  }
];

// Available filters with improved structure
const SKILLS = [
  "React", "Node.js", "MongoDB", "UI Design", "Figma", "User Research",
  "Python", "Django", "PostgreSQL", "TensorFlow", "Data Analysis",
  "React Native", "JavaScript", "Mobile UI", "HTML/CSS", "Vue.js"
].sort();

const LOCATIONS = [
  "San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", 
  "Chicago, IL", "Miami, FL", "Remote"
].sort();

const Discover = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 3;

  // Enhanced filter function with proper type checking
  const filteredProfiles = MOCK_PROFILES.filter(profile => {
    const searchMatch = 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const skillsMatch = 
      selectedSkills.length === 0 || 
      selectedSkills.every(skill => profile.skills.includes(skill));
    
    const locationMatch = 
      selectedLocations.length === 0 || 
      selectedLocations.includes(profile.location);
    
    const availabilityMatch = 
      !availableOnly || profile.openToCollaborate;
    
    return searchMatch && skillsMatch && locationMatch && availabilityMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
    toast({
      title: selectedSkills.includes(skill) ? "Skill removed" : "Skill added",
      description: skill,
      duration: 1500,
    });
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location) 
        : [...prev, location]
    );
    toast({
      title: selectedLocations.includes(location) ? "Location removed" : "Location added",
      description: location,
      duration: 1500,
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
    setSelectedLocations([]);
    setAvailableOnly(false);
    toast({
      title: "Filters cleared",
      duration: 1500,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-black">Discover Teammates</h1>
            <p className="text-muted-foreground">
              Find the perfect people to collaborate with on your next hackathon
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 flex items-center bg-white text-black"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {(selectedSkills.length > 0 || selectedLocations.length > 0 || availableOnly) && (
              <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                {selectedSkills.length + selectedLocations.length + (availableOnly ? 1 : 0)}
              </span>
            )}
          </Button>
        </div>

        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {showFilters && (
          <FilterPanel
            skills={SKILLS}
            locations={LOCATIONS}
            selectedSkills={selectedSkills}
            selectedLocations={selectedLocations}
            availableOnly={availableOnly}
            onToggleSkill={toggleSkill}
            onToggleLocation={toggleLocation}
            onToggleAvailability={() => setAvailableOnly(!availableOnly)}
            onClearFilters={clearFilters}
          />
        )}

        <AppliedFilters
          selectedSkills={selectedSkills}
          selectedLocations={selectedLocations}
          availableOnly={availableOnly}
          onToggleSkill={toggleSkill}
          onToggleLocation={toggleLocation}
          onToggleAvailability={() => setAvailableOnly(!availableOnly)}
          onClearFilters={clearFilters}
        />

        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredProfiles.length} {filteredProfiles.length === 1 ? 'result' : 'results'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-semibold">No results found</p>
            <p className="text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              disabled={currentPage === 1} 
              className="text-black"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index + 1}
                variant="ghost"
                size="sm"
                className={`${currentPage === index + 1 ? 'bg-gray-100' : ''} text-black`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              disabled={currentPage === totalPages} 
              className="text-black"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
