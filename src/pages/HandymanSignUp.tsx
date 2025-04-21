
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const HandymanSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-green-50 to-orange-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
          <button
            onClick={() => navigate(-1)}
            aria-label="Back"
            className="absolute top-4 left-4 p-1 rounded hover:bg-gray-200 transition"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-center mb-2">Sign up as Handyman</h2>
          <p className="mb-2 text-center text-gray-600">
            Share your expertise and start receiving job requests!
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
                placeholder="John Doe"
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
                placeholder="johndoe@email.com"
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
            <div className="mb-4">
              <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">
                Working Field
              </label>
              <input
                id="field"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g. Plumbing, Carpentry, Electrical"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Experience (years)
              </label>
              <input
                id="experience"
                type="number"
                min={0}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g. 5"
              />
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-2">Sign up</Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login?role=handyman" className="text-orange-600 hover:underline">
                Log in as handyman
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HandymanSignUp;
