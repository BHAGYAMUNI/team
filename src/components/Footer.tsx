import { Link, useLocation } from "react-router-dom";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart 
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would typically send this to your backend API
    console.log("Subscribing email:", email);
    
    // For now, we'll just show a success message
    setIsSubscribed(true);
    setEmail("");
    setError("");
  };

  return (
    <footer className={`bg-white border-t border-gray-100 py-12 ${!isHomePage ? 'hidden md:block' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold">TF</span>
              </div>
              <span className="text-xl font-bold gradient-text">TeamUp</span>
            </Link>
            <p className="text-gray-600">
              Find your perfect hackathon teammate and build amazing projects together.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links and Resources side by side */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 md:col-span-2">
            {/* Quick links */}
            <div>
              <h3 className="font-bold text-black mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/discover" className="text-gray-600 hover:text-black transition-colors">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="/connect" className="text-gray-600 hover:text-black transition-colors">
                    Connect
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-black mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-black transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-600 hover:text-black transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-black transition-colors">
                    Terms & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-black mb-4">Stay Updated</h3>
            {isSubscribed ? (
              <div className="text-center py-4">
                <p className="text-green-600">Thank you for subscribing!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  You'll receive updates about new hackathons and team opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for the latest hackathons and updates.
                  </p>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="pl-10 bg-white"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                  )}
                </div>
                <Button type="submit" className="w-full gradient-bg">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} TeamUp. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for hackathon enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
