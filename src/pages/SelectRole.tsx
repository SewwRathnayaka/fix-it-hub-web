
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Wrench } from "lucide-react";

const roleTitles = {
  signup: "Sign up to FixFinder",
  login: "Log in to FixFinder",
};

const roleDescriptions = {
  signup: "Select how you want to use our platform",
  login: "Select your role to log in",
};

const SelectRole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Determine context (signup/login) from location, expects ?action=signup or ?action=login
  const queryParams = new URLSearchParams(location.search);
  const action = queryParams.get("action") || "signup";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold mb-2 text-center">{roleTitles[action]}</h2>
        <p className="mb-6 text-center text-gray-600">{roleDescriptions[action]}</p>
        <div className="flex flex-col gap-4 mb-4">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-start gap-3"
            size="lg"
            onClick={() => navigate(
              action === "signup" ? "/signup/client" : "/login/client"
            )}
          >
            <User />
            Join as a Client
            <span className="ml-auto text-xs text-white">Find and hire skilled handymen</span>
          </Button>
          <Button
            className="w-full bg-orange-400 hover:bg-orange-500 text-white flex items-center justify-start gap-3"
            size="lg"
            onClick={() => navigate(
              action === "signup" ? "/signup/handyman" : "/login/handyman"
            )}
          >
            <Wrench />
            Join as a Handyman
            <span className="ml-auto text-xs text-white">Offer services and connect with clients</span>
          </Button>
        </div>
        <Button variant="ghost" className="w-full mt-2" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
};
export default SelectRole;
