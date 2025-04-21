
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Wrench, ArrowLeft } from "lucide-react";

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

  // Adjust the button text and description based on action
  // User wants "Log in as a client/handyman" regardless of signup or login
  // Also remove the small descriptive text spans from buttons

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative">
        {/* Arrow back on top left corner */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Back"
          className="absolute top-4 left-4 p-1 rounded hover:bg-gray-200 transition"
        >
          <ArrowLeft size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{roleTitles[action]}</h2>
        <p className="mb-6 text-center text-gray-600">{roleDescriptions[action]}</p>
        <div className="flex flex-col gap-4 mb-4">
          <Button
            className={`w-full ${
              action === "signup" ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"
            } text-white flex items-center justify-center gap-3`}
            size="lg"
            onClick={() =>
              navigate(action === "signup" ? "/signup/client" : "/login/client")
            }
          >
            <User />
            {action === "signup" || action === "login"
              ? "Log in as a Client"
              : "Join as a Client"}
          </Button>
          <Button
            className={`w-full ${
              action === "signup" ? "bg-orange-400 hover:bg-orange-500" : "bg-orange-400 hover:bg-orange-500"
            } text-white flex items-center justify-center gap-3`}
            size="lg"
            onClick={() =>
              navigate(action === "signup" ? "/signup/handyman" : "/login/handyman")
            }
          >
            <Wrench />
            {action === "signup" || action === "login"
              ? "Log in as a Handyman"
              : "Join as a Handyman"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SelectRole;
