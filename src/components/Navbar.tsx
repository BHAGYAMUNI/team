import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search, Home, MessageSquare, LogIn, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Discover", path: "/discover", icon: Search },
    { name: "Hackathons", path: "/hackathons", icon: Trophy },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Connect", path: "/connect", icon: MessageSquare },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold">TF</span>
            </div>
            <span className="text-xl font-bold gradient-text">TeamUp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "nav-link flex items-center gap-2 text-black",
                  isActive(link.path) && "nav-link-active text-white"
                )}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90"
                  onClick={() => navigate('/profile')}
                >
                  {user?.name ? getInitials(user.name) : <User className="w-5 h-5" />}
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white text-black"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="flex items-center gap-2 bg-white text-black">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="gradient-bg">Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-black">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-white">
            <div className="flex flex-col space-y-2">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "nav-link flex items-center gap-2 px-4 py-3 text-black",
                    isActive(link.path) && "nav-link-active bg-primary text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="border-t border-gray-100 my-2 pt-2 space-y-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 mx-auto"
                    onClick={() => {
                      navigate('/profile');
                      setIsOpen(false);
                    }}
                  >
                    {user?.name ? getInitials(user.name) : <User className="w-5 h-5" />}
                  </Button>
                  <Button
                    className="w-full gradient-bg text-white"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="border-t border-gray-100 my-2 pt-2 space-y-2">
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-center border border-gray-200 rounded-md text-black hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-3 text-center gradient-bg text-white rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
