
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex">
        <div className="w-full md:w-1/2 bg-gradient-to-r from-amber-700 to-orange-600 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              SIGN UP WITH FIXFINDER
            </h1>
            <p className="text-white text-center mb-6">
              AND GET EXPERT HANDYMAN SERVICES AT YOUR FINGERTIPS!
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-green-500 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-6">Welcome!</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>
              
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
              
              <div className="mb-4">
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
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="userType">
                  I am a
                </label>
                <select
                  id="userType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="client">Client - Looking for Services</option>
                  <option value="handyman">Handyman - Offering Services</option>
                </select>
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">
                Sign Up
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600 hover:underline">
                  Login
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

export default SignUp;
