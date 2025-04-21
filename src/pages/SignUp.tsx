import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SignUp = () => {
  const navigate = useNavigate?.() || (() => {});

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
            <div className="flex flex-col gap-3">
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-2"
                onClick={() => navigate("/select-role?action=signup")}
              >
                Continue to Sign Up
              </Button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 text-green-600 hover:underline"
                  onClick={() => navigate("/select-role?action=login")}
                >
                  Login
                </Button>
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
