import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Connect from "./pages/Connect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HackathonBoard from "./pages/HackathonBoard";
import HackathonDetails from "./pages/HackathonDetails";
import HackathonTeams from "./pages/HackathonTeams";
import HackathonTeammates from "./pages/HackathonTeammates";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import ProfileDetails from "./pages/ProfileDetails";
import ConnectionDetails from "./pages/ConnectionDetails";
import AddHackathon from "./pages/AddHackathon";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<ProfileDetails />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/connect/:id" element={<ConnectionDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hackathons" element={<HackathonBoard />} />
                <Route path="/hackathons/:id" element={<HackathonDetails />} />
                <Route path="/hackathons/:id/teams" element={<HackathonTeams />} />
                <Route path="/hackathons/:id/teammates" element={<HackathonTeammates />} />
                <Route path="/hackathons/add" element={<AddHackathon />} />
                <Route path="/support" element={<Support />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
