
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex">
        <div className="w-full md:w-1/2 bg-gradient-to-r from-amber-700 to-orange-600 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              LOGIN TO FIXFINDER
            </h1>
            <p className="text-white text-center mb-6">
              AND GET EXPERT HANDYMAN SERVICES AT YOUR FINGERTIPS!
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-green-500 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-6">Welcome back</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">
                Login
              </Button>
              
              <div className="text-center">
                <Link to="/forgot-password" className="text-green-600 hover:underline text-sm">
                  Forgot password?
                </Link>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-green-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
