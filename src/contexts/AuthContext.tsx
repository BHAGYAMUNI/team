import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  skills: string[];
  techStack: string[];
  location: string;
  website?: string;
  github?: string;
  openToCollaborate: boolean;
  connections: number;
  hackathonsCompleted: number;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updatedUser: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user data on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll use mock data
      const mockUser: User = {
        id: "1",
        name: "Alex Johnson",
        email: email,
        bio: "Full-stack developer with 3 years of experience. Passionate about building innovative web applications and solving complex problems.",
        avatar: "https://i.pravatar.cc/300?img=1",
        skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "GraphQL", "Jest"],
        techStack: ["MERN Stack", "Next.js", "Firebase", "AWS"],
        location: "San Francisco, CA",
        website: "https://alexjohnson.dev",
        github: "alexjohnson",
        openToCollaborate: true,
        connections: 26,
        hackathonsCompleted: 7,
        createdAt: new Date("2023-01-15"),
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll create a new user with default values
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        bio: "Tell us about yourself...",
        avatar: "https://i.pravatar.cc/300",
        skills: [],
        techStack: [],
        location: "",
        openToCollaborate: true,
        connections: 0,
        hackathonsCompleted: 0,
        createdAt: new Date(),
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      navigate('/profile');
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  const updateProfile = (updatedUser: Partial<User>) => {
    if (user) {
      const newUser = { ...user, ...updatedUser };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 