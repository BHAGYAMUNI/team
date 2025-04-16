
export interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  skills: string[];
  techStack: string[];
  hackathonsInterest: string[];
  location: string;
  openToCollaborate: boolean;
  createdAt: Date;
}

export interface Hackathon {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  isOnline: boolean;
  website: string;
  registrationDeadline: Date;
  imageUrl: string;
  participants: string[];
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Connection {
  id: string;
  senderId: string;
  recipientId: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
