import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Link as LinkIcon } from "lucide-react";

// Mock hackathon data
const mockHackathon = {
  id: "1",
  name: "Tech4Good Hackathon",
  description: "Build solutions to address environmental challenges",
  startDate: new Date("2025-05-15"),
  endDate: new Date("2025-05-17"),
  location: "San Francisco, CA",
  isOnline: false,
  website: "https://tech4goodhackathon.com",
  participants: 150,
  status: "upcoming",
  prizes: [
    { name: "First Place", amount: "$10,000" },
    { name: "Second Place", amount: "$5,000" },
    { name: "Third Place", amount: "$2,500" }
  ],
  themes: ["Sustainability", "Climate Change", "Renewable Energy"],
  requirements: [
    "Open to all developers, designers, and innovators",
    "Teams of 2-4 people",
    "Original work only"
  ]
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const HackathonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRegister = () => {
    // Here you can add logic to handle registration
    // For now, we'll just show an alert and navigate to the hackathon board
    alert(`Registering for hackathon: ${mockHackathon.name}`);
    navigate("/hackathons");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{mockHackathon.name}</h1>
                <p className="text-gray-600 mt-2">{mockHackathon.description}</p>
              </div>
              <Button 
                className="bg-[#655AC4] text-white hover:bg-[#655AC4]/90"
                onClick={handleRegister}
              >
                Register Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {formatDate(mockHackathon.startDate)} - {formatDate(mockHackathon.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{mockHackathon.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{mockHackathon.participants} participants</span>
                  </div>
                  {mockHackathon.website && (
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-gray-500" />
                      <a 
                        href={mockHackathon.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#655AC4] hover:underline"
                      >
                        Official Website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Themes</h2>
                <div className="flex flex-wrap gap-2">
                  {mockHackathon.themes.map(theme => (
                    <span 
                      key={theme}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Prizes</h2>
                <div className="space-y-2">
                  {mockHackathon.prizes.map(prize => (
                    <div 
                      key={prize.name}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{prize.name}</span>
                      <span className="font-semibold text-gray-900">{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Requirements</h2>
                <ul className="space-y-2">
                  {mockHackathon.requirements.map((req, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-[#655AC4]">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails; 