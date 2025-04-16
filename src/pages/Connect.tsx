import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Search, 
  User, 
  UserPlus, 
  Users, 
  Send, 
  Clock,
  ArrowLeft
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for connections
const MOCK_CONNECTIONS = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "online",
    lastMessage: "Hey, are you interested in joining the hackathon this weekend?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    unread: 2,
  },
  {
    id: "2",
    name: "Samantha Lee",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "offline",
    lastMessage: "I've sent you the design files for our project.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unread: 0,
  },
  {
    id: "3",
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "online",
    lastMessage: "Let's discuss the backend architecture tomorrow.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unread: 0,
  },
  {
    id: "4",
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "offline",
    lastMessage: "Thanks for the feedback on my portfolio!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    unread: 0,
  },
  {
    id: "5",
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "online",
    lastMessage: "I've completed the frontend tasks. How's the backend coming along?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: 1,
  },
  {
    id: "6",
    name: "Olivia Garcia",
    avatar: "https://i.pravatar.cc/150?img=10",
    status: "offline",
    lastMessage: "Let's schedule a meeting to discuss the project timeline.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    unread: 0,
  },
];

// Mock data for requests
const MOCK_REQUESTS = [
  {
    id: "1",
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "online",
    message: "Let's connect! I'm interested in your work on React Native.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: "2",
    name: "Olivia Garcia",
    avatar: "https://i.pravatar.cc/150?img=10",
    status: "offline",
    message: "Hi! Saw your profile and would love to collaborate on future hackathons.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
];

// Mock messages for different conversations
const MOCK_MESSAGES = {
  "1": [
  {
    id: "1",
    senderId: "1",
    content: "Hey there! How's it going?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    isRead: true,
  },
  {
    id: "2",
    senderId: "currentUser",
    content: "Hi Alex! I'm doing great, just wrapping up some work on our project.",
    timestamp: new Date(Date.now() - 1000 * 60 * 55),
    isRead: true,
  },
  {
    id: "3",
    senderId: "1",
    content: "Awesome! I was wondering if you're interested in joining the hackathon this weekend?",
    timestamp: new Date(Date.now() - 1000 * 60 * 50),
    isRead: true,
  },
  {
    id: "4",
    senderId: "1",
    content: "It's a 48-hour virtual event focused on AI and machine learning solutions. Could be fun!",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    isRead: true,
  },
  {
    id: "5",
    senderId: "currentUser",
    content: "That sounds really interesting! What platform are they using for it?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    isRead: true,
  },
  {
    id: "6",
    senderId: "1",
    content: "They're using Discord for team communication and submitting through Devpost. I've already registered and can add you to my team if you're interested!",
    timestamp: new Date(Date.now() - 1000 * 60 * 25),
    isRead: true,
  },
  {
    id: "7",
    senderId: "1",
    content: "Hey, are you interested in joining the hackathon this weekend?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    isRead: false,
  },
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      content: "Hi! I've been working on the UI designs for our project.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "Great! Can you share the design files with me?",
      timestamp: new Date(Date.now() - 1000 * 60 * 55),
      isRead: true,
    },
    {
      id: "3",
      senderId: "2",
      content: "Sure! I've sent you the design files for our project.",
      timestamp: new Date(Date.now() - 1000 * 60 * 50),
      isRead: true,
    },
  ],
  "3": [
    {
      id: "1",
      senderId: "3",
      content: "Hey, I've been reviewing the backend architecture.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "What are your thoughts on it?",
      timestamp: new Date(Date.now() - 1000 * 60 * 55),
      isRead: true,
    },
    {
      id: "3",
      senderId: "3",
      content: "Let's discuss the backend architecture tomorrow. I have some suggestions for optimization.",
      timestamp: new Date(Date.now() - 1000 * 60 * 50),
      isRead: true,
    },
  ],
  "4": [
    {
      id: "1",
      senderId: "4",
      content: "Hi! I've updated my portfolio based on your feedback.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "I'll take a look at it. Thanks for the update!",
      timestamp: new Date(Date.now() - 1000 * 60 * 55),
      isRead: true,
    },
    {
      id: "3",
      senderId: "4",
      content: "Thanks for the feedback on my portfolio!",
      timestamp: new Date(Date.now() - 1000 * 60 * 50),
      isRead: true,
    },
  ],
  "5": [
    {
      id: "1",
      senderId: "5",
      content: "Hey, I've completed the frontend tasks for our project.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "That's great! How's the backend coming along?",
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      isRead: true,
    },
    {
      id: "3",
      senderId: "5",
      content: "I've completed the frontend tasks. How's the backend coming along?",
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      isRead: false,
    },
  ],
  "6": [
    {
      id: "1",
      senderId: "6",
      content: "Hi! I've been reviewing our project timeline.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
      isRead: true,
    },
    {
      id: "2",
      senderId: "currentUser",
      content: "What do you think about it?",
      timestamp: new Date(Date.now() - 1000 * 60 * 55),
      isRead: true,
    },
    {
      id: "3",
      senderId: "6",
      content: "Let's schedule a meeting to discuss the project timeline.",
      timestamp: new Date(Date.now() - 1000 * 60 * 50),
      isRead: true,
    },
  ],
};

const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true
  }).format(date);
};

const formatDate = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) {
    return formatTime(date);
  } else if (days === 1) {
    return "Yesterday";
  } else if (days < 7) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  } else {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  }
};

const Connect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Record<string, any[]>>(MOCK_MESSAGES);
  const [showChat, setShowChat] = useState(false);

  // Filter connections based on search
  const filteredConnections = MOCK_CONNECTIONS.filter(connection =>
    connection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get selected connection details
  const activeConnection = MOCK_CONNECTIONS.find(c => c.id === selectedChat);

  // Get messages for the selected chat
  const activeMessages = messages[selectedChat] || [];

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    setShowChat(true);
  };

  const handleBackToContacts = () => {
    setShowChat(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const newMessageObj = {
        id: Date.now().toString(),
        senderId: "currentUser",
        content: newMessage.trim(),
        timestamp: new Date(),
        isRead: true,
      };

      setMessages(prev => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), newMessageObj]
      }));

      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Sidebar - Always visible on desktop, visible on mobile when chat is not shown */}
          <div className={`w-full md:w-1/3 xl:w-1/4 border-r border-gray-100 ${showChat ? 'hidden md:block' : 'block'}`}>
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4 text-black">Connect</h1>
              
              <Tabs defaultValue="messages" onValueChange={setActiveTab} className="bg-white">
                <TabsList className="grid grid-cols-2 mb-4 bg-[#f1f5f9]">
                  <TabsTrigger value="messages" className="flex items-center gap-2 bg-white">
                    <MessageSquare className="h-4 w-4" />
                    <span>Messages</span>
                    {MOCK_CONNECTIONS.reduce((acc, conn) => acc + conn.unread, 0) > 0 && (
                      <span className="ml-auto bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                        {MOCK_CONNECTIONS.reduce((acc, conn) => acc + conn.unread, 0)}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="requests" className="flex items-center gap-2 bg-white">
                    <UserPlus className="h-4 w-4" />
                    <span>Requests</span>
                    {MOCK_REQUESTS.length > 0 && (
                      <span className="ml-auto bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                        {MOCK_REQUESTS.length}
                      </span>
                    )}
                  </TabsTrigger>
                </TabsList>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search connections"
                    className="pl-9 input-field bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <TabsContent value="messages" className="m-0 bg-white">
                  <ScrollArea className="h-[calc(100vh-250px)]">
                    <div className="space-y-1">
                      {filteredConnections.length > 0 ? (
                        filteredConnections.map(connection => (
                          <button
                            key={connection.id}
                            className={`w-full p-3 text-left flex items-start gap-3 rounded-lg transition-colors ${
                              selectedChat === connection.id
                                ? "bg-gray-100"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() => handleChatSelect(connection.id)}
                          >
                            <div className="relative">
                              <img
                                src={connection.avatar}
                                alt={connection.name}
                                className="w-12 h-12 rounded-full object-cover border border-gray-200"
                              />
                              <span
                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                  connection.status === "online"
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <p className="font-medium truncate text-black">{connection.name}</p>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(connection.timestamp)}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">
                                {connection.lastMessage}
                              </p>
                            </div>
                            {connection.unread > 0 && (
                              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                                {connection.unread}
                              </span>
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="text-center py-6 text-muted-foreground">
                          No conversations found
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="requests" className="m-0 bg-white">
                  <ScrollArea className="h-[calc(100vh-250px)]">
                    <div className="space-y-4">
                      {MOCK_REQUESTS.length > 0 ? (
                        MOCK_REQUESTS.map(request => (
                          <div key={request.id} className="p-4 border border-gray-100 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="relative">
                                <img
                                  src={request.avatar}
                                  alt={request.name}
                                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                                />
                                <span
                                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                    request.status === "online"
                                      ? "bg-green-500"
                                      : "bg-gray-300"
                                  }`}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                  <p className="font-medium text-black">{request.name}</p>
                                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {formatDate(request.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {request.message}
                                </p>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">Ignore</Button>
                                  <Button size="sm">Accept</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6 text-muted-foreground">
                          No connection requests
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Chat Area - Hidden on mobile by default, shown when chat is selected */}
          <div className={`flex-1 flex flex-col ${!showChat ? 'hidden md:flex' : 'flex'}`}>
            {selectedChat && activeConnection && activeTab === "messages" ? (
              <>
                {/* Chat header with back button on mobile */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden mr-2"
                      onClick={handleBackToContacts}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="relative">
                      <img
                        src={activeConnection.avatar}
                        alt={activeConnection.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
                          activeConnection.status === "online"
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-black">{activeConnection.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {activeConnection.status === "online" ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Chat messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {activeMessages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.senderId === "currentUser" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2 rounded-lg ${
                            message.senderId === "currentUser"
                              ? "bg-primary text-white rounded-br-none"
                              : "bg-gray-100 text-gray-800 rounded-bl-none"
                          }`}
                        >
                          <p>{message.content}</p>
                          <p
                            className={`text-xs mt-1 text-right ${
                              message.senderId === "currentUser"
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                {/* Message input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Type a message..."
                      className="input-field bg-white text-gray-700"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button 
                      className="gradient-bg"
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                {activeTab === "messages" ? (
                  <>
                    <MessageSquare className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Your Messages</h2>
                    <p className="text-muted-foreground max-w-md mb-6">
                      Connect with other hackers and start collaborating on your next project.
                    </p>
                    <Button onClick={() => setActiveTab("requests")}>
                      <Users className="mr-2 h-4 w-4" />
                      Find Teammates
                    </Button>
                  </>
                ) : (
                  <>
                    <UserPlus className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Connection Requests</h2>
                    <p className="text-muted-foreground max-w-md mb-6">
                      Accept or ignore connection requests from other developers.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
