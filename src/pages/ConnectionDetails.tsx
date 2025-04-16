import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

// Mock data - in a real app, this would come from an API
const mockProfiles = [
  {
    id: "1",
    name: "Alex Johnson",
    bio: "Full-stack developer with 3 years of experience. Love building innovative solutions at hackathons.",
    avatar: "https://i.pravatar.cc/150?img=1",
    skills: ["React", "Node.js", "MongoDB"],
    techStack: ["MERN", "Firebase"],
    location: "San Francisco, CA",
    openToCollaborate: true,
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
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
    status: "online"
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
    status: "offline"
  },
  {
    id: "23",
    name: "Henry Chen",
    bio: "Security engineer focused on application security.",
    avatar: "https://i.pravatar.cc/150?img=29",
    skills: ["Security", "Penetration Testing", "DevSecOps"],
    techStack: ["OWASP", "Burp Suite"],
    location: "Boston, MA",
    openToCollaborate: true,
    status: "online"
  },
  {
    id: "24",
    name: "Victoria Kim",
    bio: "Data engineer specializing in real-time data processing.",
    avatar: "https://i.pravatar.cc/150?img=30",
    skills: ["Apache Kafka", "Spark", "Python"],
    techStack: ["Airflow", "Databricks"],
    location: "Seattle, WA",
    openToCollaborate: true,
    status: "offline"
  },
  {
    id: "25",
    name: "Jack Thompson",
    bio: "AR/VR developer creating immersive experiences.",
    avatar: "https://i.pravatar.cc/150?img=31",
    skills: ["Unity", "AR Kit", "VR Development"],
    techStack: ["Oculus SDK", "Vuforia"],
    location: "Los Angeles, CA",
    openToCollaborate: true,
    status: "online"
  },
  {
    id: "26",
    name: "Sophie Anderson",
    bio: "Machine learning engineer focused on computer vision.",
    avatar: "https://i.pravatar.cc/150?img=32",
    skills: ["Python", "TensorFlow", "OpenCV"],
    techStack: ["PyTorch", "CUDA"],
    location: "San Francisco, CA",
    openToCollaborate: true,
    status: "offline"
  },
  {
    id: "27",
    name: "Oliver Martinez",
    bio: "IoT developer working on smart home solutions.",
    avatar: "https://i.pravatar.cc/150?img=33",
    skills: ["Embedded Systems", "C++", "IoT"],
    techStack: ["Arduino", "Raspberry Pi"],
    location: "Austin, TX",
    openToCollaborate: true,
    status: "online"
  },
  {
    id: "28",
    name: "Emma Davis",
    bio: "Cloud security architect with focus on AWS.",
    avatar: "https://i.pravatar.cc/150?img=34",
    skills: ["AWS Security", "IAM", "Cloud Security"],
    techStack: ["AWS WAF", "CloudWatch"],
    location: "Washington, DC",
    openToCollaborate: true,
    status: "offline"
  },
  {
    id: "29",
    name: "Liam Wilson",
    bio: "Quantum computing researcher and developer.",
    avatar: "https://i.pravatar.cc/150?img=35",
    skills: ["Quantum Computing", "Python", "Physics"],
    techStack: ["Qiskit", "Q#"],
    location: "Boston, MA",
    openToCollaborate: true,
    status: "online"
  },
  {
    id: "30",
    name: "Zoe Taylor",
    bio: "Robotics engineer specializing in autonomous systems.",
    avatar: "https://i.pravatar.cc/150?img=36",
    skills: ["ROS", "Computer Vision", "Control Systems"],
    techStack: ["Python", "C++"],
    location: "Seattle, WA",
    openToCollaborate: true,
    status: "offline"
  }
];

// Mock messages with initial messages for each profile
const mockMessages = Object.fromEntries(
  mockProfiles.map(profile => [
    profile.id,
    [{
      id: "1",
      senderId: profile.id,
      content: `Hi! I'm ${profile.name}. Would love to collaborate on projects related to ${profile.skills[0]}.`,
      timestamp: new Date(Date.now() - 1000 * 60 * (30 * parseInt(profile.id))),
      isRead: true,
    }]
  ])
);

const ConnectionDetails = () => {
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Record<string, any[]>>(mockMessages);
  const profile = mockProfiles.find(p => p.id === id);
  const currentMessages = messages[id as keyof typeof mockMessages] || [];

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Connection Not Found</h1>
          <p className="text-black/70">The connection you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: Date.now().toString(),
        senderId: "currentUser",
        content: newMessage.trim(),
        timestamp: new Date(),
        isRead: true,
      };

      // Update the messages state
      setMessages(prev => ({
        ...prev,
        [id as string]: [...(prev[id as string] || []), newMessageObj]
      }));

      // Clear the input
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 text-black hover:text-white hover:bg-primary transition-colors duration-200"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Discover
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/30 shadow-glow"
            />
            <div>
              <h1 className="text-xl font-bold text-black">{profile.name}</h1>
              <p className="text-sm text-black/70">{profile.location}</p>
              <span className={`text-xs ${profile.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
                {profile.status}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-black/70 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded-full text-black/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black/70 mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {profile.techStack.map(tech => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded-full text-black/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="h-5 w-5 text-black/70" />
            <h2 className="text-lg font-semibold text-black">Chat with {profile.name}</h2>
          </div>

          {/* Messages */}
          <div className="space-y-4 mb-6 h-[400px] overflow-y-auto">
            {currentMessages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.senderId === 'currentUser' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.senderId === 'currentUser'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500 text-black"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetails; 