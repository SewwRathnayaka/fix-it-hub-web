
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ClientLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app, this would validate against a backend
    setTimeout(() => {
      setIsLoading(false);
      
      // Store user info in localStorage to simulate authentication
      localStorage.setItem("fixfinder_user", JSON.stringify({
        name: "Sarah Johnson",
        email: email,
        role: "client",
        phone: "(512) 123-4567",
        addresses: [
          {
            type: "Home",
            street: "123 Main Street",
            city: "Austin",
            state: "TX",
            zip: "78701",
          },
          {
            type: "Work",
            street: "456 Business Ave",
            city: "Austin",
            state: "TX",
            zip: "78702",
          }
        ]
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome back to FixFinder!",
      });
      
      navigate("/client/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-green-50 to-orange-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Log in as Client</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="Enter password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
              Continue with Google
            </Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup/client" className="text-green-600 hover:underline">
                Sign up as client
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientLogin;
