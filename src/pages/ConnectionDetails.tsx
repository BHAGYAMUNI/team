import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

// Mock data - in a real app, this would come from an API
const mockProfiles = [
  {
    id: "1",
    name: "John Doe",
    bio: "Full-stack developer with 5 years of experience. Passionate about building scalable web applications and contributing to open source projects.",
    avatar: "https://i.pravatar.cc/150?img=1",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
    techStack: ["MERN Stack", "Docker", "Kubernetes"],
    location: "San Francisco, CA",
    openToCollaborate: true,
    status: "online"
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "Frontend developer specializing in React and TypeScript. Love creating beautiful and accessible user interfaces.",
    avatar: "https://i.pravatar.cc/150?img=2",
    skills: ["React", "TypeScript", "CSS", "UI/UX Design"],
    techStack: ["Next.js", "Tailwind CSS", "Figma"],
    location: "New York, NY",
    openToCollaborate: true,
    status: "offline"
  }
];

// Mock messages
const mockMessages = {
  "1": [
    {
      id: "1",
      senderId: "1",
      content: "Hey there! I saw your profile and I'm interested in collaborating on a project.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "Hi! That sounds great. What kind of project are you thinking about?",
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      isRead: true,
    },
    {
      id: "3",
      senderId: "1",
      content: "I'm working on a hackathon project for next weekend. It's a web app for real-time collaboration.",
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      isRead: true,
    }
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      content: "Hello! I'm interested in your React Native experience.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "Hi Jane! I'd be happy to discuss React Native projects.",
      timestamp: new Date(Date.now() - 1000 * 60 * 55),
      isRead: true,
    }
  ]
};

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