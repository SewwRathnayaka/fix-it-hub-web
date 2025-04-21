
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ClientLogin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-green-50 to-orange-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Log in as Client</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
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
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">Log In</Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
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
