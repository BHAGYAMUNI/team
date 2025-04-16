import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Filter, Users, Plus } from "lucide-react";

// Mock teams data
const mockTeams = [
  {
    id: "1",
    name: "Tech Titans",
    description: "A team of experienced developers looking to build innovative solutions",
    members: [
      { id: "1", name: "Sarah Chen", avatar: "https://i.pravatar.cc/300?img=1" },
      { id: "2", name: "Michael Rodriguez", avatar: "https://i.pravatar.cc/300?img=2" },
      { id: "3", name: "Emily Park", avatar: "https://i.pravatar.cc/300?img=3" }
    ],
    skills: ["React", "Node.js", "UI/UX", "Python"],
    lookingFor: ["Backend Developer", "UI Designer"],
    openToJoin: true
  },
  {
    id: "2",
    name: "Data Warriors",
    description: "Passionate about data science and machine learning",
    members: [
      { id: "4", name: "Alex Johnson", avatar: "https://i.pravatar.cc/300?img=4" },
      { id: "5", name: "Lisa Wong", avatar: "https://i.pravatar.cc/300?img=5" }
    ],
    skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    lookingFor: ["Frontend Developer", "Data Engineer"],
    openToJoin: true
  }
];

const HackathonTeams = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="bg-[#655AC4] text-white hover:bg-[#655AC4]/90 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create Team
                </Button>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for teams..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#655AC4] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockTeams.map(team => (
                <div 
                  key={team.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{team.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{team.description}</p>
                    </div>
                    {team.openToJoin && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Open to Join
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Team Members</h4>
                    <div className="flex -space-x-2">
                      {team.members.map(member => (
                        <img
                          key={member.id}
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          title={member.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Looking For</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.lookingFor.map(role => (
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
                      onClick={() => {/* Handle join team */}}
                    >
                      Join Team
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

export default HackathonTeams; 