import { Link } from "react-router-dom";
import { ArrowRight, Users, Filter, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundAnimation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Find your perfect <span className="gradient-text">hackathon teammate.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Connect with like-minded developers, designers, and innovators to build amazing projects together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register">
                <Button size="lg" className="button-primary w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/discover">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-gradient-to-r from-blue-500 to-purple-500">
                  Browse Profiles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-hackathon-purple/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-hackathon-blue/20 rounded-full animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                alt="Hackathon Team" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px] border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Why TeamUp?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our platform makes it easy to find the perfect teammates for your next hackathon project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-slide-in animate-delay-100">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Filter className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Filter by skills & interests</h3>
              <p className="text-gray-700">
                Find teammates with the exact skills and interests that complement yours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-slide-in animate-delay-200">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Users className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Connect with like-minded hackers</h3>
              <p className="text-gray-700">
                Build relationships with passionate developers who share your vision.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-slide-in animate-delay-300">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Code className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Never hack alone again!</h3>
              <p className="text-gray-700">
                Form dream teams that combine diverse skills to build winning projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4 relative z-10">
        <div className="bg-[#6366F1] rounded-xl p-8 md:p-12 text-white text-center border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Ready to find your dream team?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of developers, designers and innovators who are connecting through TeamUp.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-[#6366F1] hover:bg-white/90">
              Create Your Profile
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
