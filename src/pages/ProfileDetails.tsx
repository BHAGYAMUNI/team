import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
    github: "https://github.com/sarahmartinez",
    linkedin: "https://linkedin.com/in/sarahmartinez",
    email: "sarah.martinez@example.com"
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
    github: "https://github.com/jameswilson",
    linkedin: "https://linkedin.com/in/jameswilson",
    email: "james.wilson@example.com"
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
    github: "https://github.com/lisachen",
    linkedin: "https://linkedin.com/in/lisachen",
    email: "lisa.chen@example.com"
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
    github: "https://github.com/robertgarcia",
    linkedin: "https://linkedin.com/in/robertgarcia",
    email: "robert.garcia@example.com"
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
    github: "https://github.com/oliviathompson",
    linkedin: "https://linkedin.com/in/oliviathompson",
    email: "olivia.thompson@example.com"
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
    github: "https://github.com/danielkim",
    linkedin: "https://linkedin.com/in/danielkim",
    email: "daniel.kim@example.com"
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
    github: "https://github.com/sophiarodriguez",
    linkedin: "https://linkedin.com/in/sophiarodriguez",
    email: "sophia.rodriguez@example.com"
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
    github: "https://github.com/williamchen",
    linkedin: "https://linkedin.com/in/williamchen",
    email: "william.chen@example.com"
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
    github: "https://github.com/avapatel",
    linkedin: "https://linkedin.com/in/avapatel",
    email: "ava.patel@example.com"
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
    github: "https://github.com/ethanwilson",
    linkedin: "https://linkedin.com/in/ethanwilson",
    email: "ethan.wilson@example.com"
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
    github: "https://github.com/miaanderson",
    linkedin: "https://linkedin.com/in/miaanderson",
    email: "mia.anderson@example.com"
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
    github: "https://github.com/noahtaylor",
    linkedin: "https://linkedin.com/in/noahtaylor",
    email: "noah.taylor@example.com"
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
    github: "https://github.com/isabellamartinez",
    linkedin: "https://linkedin.com/in/isabellamartinez",
    email: "isabella.martinez@example.com"
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
    github: "https://github.com/lucasbrown",
    linkedin: "https://linkedin.com/in/lucasbrown",
    email: "lucas.brown@example.com"
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
    github: "https://github.com/charlottelee",
    linkedin: "https://linkedin.com/in/charlottelee",
    email: "charlotte.lee@example.com"
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
    github: "https://github.com/benjamingarcia",
    linkedin: "https://linkedin.com/in/benjamingarcia",
    email: "benjamin.garcia@example.com"
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
    github: "https://github.com/ameliawilson",
    linkedin: "https://linkedin.com/in/ameliawilson",
    email: "amelia.wilson@example.com"
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
    github: "https://github.com/henrychen",
    linkedin: "https://linkedin.com/in/henrychen",
    email: "henry.chen@example.com"
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
    github: "https://github.com/evelynrodriguez",
    linkedin: "https://linkedin.com/in/evelynrodriguez",
    email: "evelyn.rodriguez@example.com"
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
    github: "https://github.com/alexanderkim",
    linkedin: "https://linkedin.com/in/alexanderkim",
    email: "alexander.kim@example.com"
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
    github: "https://github.com/victoriathompson",
    linkedin: "https://linkedin.com/in/victoriathompson",
    email: "victoria.thompson@example.com"
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
    github: "https://github.com/jacksonmartinez",
    linkedin: "https://linkedin.com/in/jacksonmartinez",
    email: "jackson.martinez@example.com"
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
    github: "https://github.com/scarlettanderson",
    linkedin: "https://linkedin.com/in/scarlettanderson",
    email: "scarlett.anderson@example.com"
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
    github: "https://github.com/danielwilson",
    linkedin: "https://linkedin.com/in/danielwilson",
    email: "daniel.wilson@example.com"
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
    github: "https://github.com/lunagarcia",
    linkedin: "https://linkedin.com/in/lunagarcia",
    email: "luna.garcia@example.com"
  }
];

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = mockProfiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Profile Not Found</h1>
          <p className="text-black/70">The profile you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

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

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start gap-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover border-2 border-white/30 shadow-glow"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-black mb-2">{profile.name}</h1>
            <p className="text-black/70 mb-4">{profile.location}</p>
            {profile.openToCollaborate && (
              <span className="inline-block text-sm bg-green-900/60 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
                Available for Collaboration
              </span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">About</h2>
          <p className="text-black/80 mb-8">{profile.bio}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-black/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {profile.techStack.map(tech => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-black/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <div className="flex flex-wrap gap-4">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black"
                >
                  GitHub
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black"
                >
                  LinkedIn
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-black/70 hover:text-black"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails; 