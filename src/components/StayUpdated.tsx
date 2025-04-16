import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

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
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black">Stay Updated</h3>
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
            <Label htmlFor="email" className="text-black">Email address</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
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
  );
};

export default StayUpdated; 