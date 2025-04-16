import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <p className="text-gray-600">support@teamup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-black">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="mt-1 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-black">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="mt-1 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-black">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full mt-1 px-3 py-2 border rounded-md bg-white"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 