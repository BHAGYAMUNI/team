import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Filter, Users } from "lucide-react";

// Mock teammates data
const mockTeammates = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/300?img=1",
    skills: ["React", "Node.js", "UI/UX"],
    location: "San Francisco, CA",
    lookingFor: ["Backend Developer", "UI Designer"],
    openToCollaborate: true
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    avatar: "https://i.pravatar.cc/300?img=2",
    skills: ["Python", "Machine Learning", "Data Science"],
    location: "New York, NY",
    lookingFor: ["Frontend Developer", "Product Manager"],
    openToCollaborate: true
  },
  {
    id: "3",
    name: "Emily Park",
    avatar: "https://i.pravatar.cc/300?img=3",
    skills: ["UI/UX", "Figma", "Product Design"],
    location: "Seattle, WA",
    lookingFor: ["Full-stack Developer", "Data Scientist"],
    openToCollaborate: true
  }
];

const HackathonTeammates = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleConnect = (teammateId: string) => {
    navigate(`/connect/${teammateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Find Teammates</h1>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="bg-[#655AC4] text-white hover:bg-[#655AC4]/90">
                  Create Team
                </Button>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for teammates..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#655AC4] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTeammates.map(teammate => (
                <div 
                  key={teammate.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={teammate.avatar}
                      alt={teammate.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{teammate.name}</h3>
                      <p className="text-sm text-gray-500">{teammate.location}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {teammate.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Looking For</h4>
                    <div className="flex flex-wrap gap-2">
                      {teammate.lookingFor.map(role => (
                        <span 
                          key={role}
                          className="px-2 py-1 bg-[#655AC4]/10 rounded-full text-xs text-[#655AC4]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="w-full bg-[#655AC4] text-white hover:bg-[#655AC4]/90"
                      onClick={() => handleConnect(teammate.id)}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonTeammates; 