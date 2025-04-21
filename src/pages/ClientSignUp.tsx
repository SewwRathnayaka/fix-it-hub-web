
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ClientSignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-green-50 to-orange-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Sign up as Client</h2>
          <p className="mb-4 text-center text-gray-600">
            Get access to qualified handymen for all your needs.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="janedoe@email.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter password"
              />
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-2">Sign up</Button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-200" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
            Sign up with Google
          </Button>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login?role=client" className="text-green-600 hover:underline">
                Log in as client
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ClientSignUp;
