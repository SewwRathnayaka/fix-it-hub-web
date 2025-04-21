
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const HandymanSignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-50 to-orange-50 p-8">
      {/* Removed Navbar */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Sign up as Handyman</h2>
        <p className="mb-4 text-center text-gray-600">
          Join as a skilled handyman and offer your services.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Smith"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="johnsmith@email.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
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
            <Link to="/login?role=handyman" className="text-orange-600 hover:underline">
              Log in as handyman
            </Link>
          </p>
        </div>
      </div>
      {/* Removed Footer */}
    </div>
  );
};
export default HandymanSignUp;
