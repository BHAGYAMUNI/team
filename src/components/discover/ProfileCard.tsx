import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Profile {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  skills: string[];
  techStack: string[];
  location: string;
  openToCollaborate: boolean;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${profile.id}`);
  };

  const handleConnect = () => {
    navigate(`/connect/${profile.id}`);
  };

  return (
    <div className="profile-card relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/30 shadow-glow"
          />
          <div>
            <h3 className="font-semibold text-lg text-black">{profile.name}</h3>
            <p className="text-sm text-black/70">{profile.location}</p>
            {profile.openToCollaborate && (
              <span className="inline-block text-xs bg-green-900/60 text-green-300 px-2 py-0.5 rounded-full mt-1 border border-green-500/30">
                Available
              </span>
            )}
          </div>
        </div>
        
        <p className="my-4 text-sm text-black/80">{profile.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-xs uppercase text-black/50 font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {profile.skills.map(skill => (
              <span key={skill} className="text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded-full text-black/90">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t border-black/10 pt-4 mt-4 flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white border-black/20 text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            onClick={handleConnect}
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
