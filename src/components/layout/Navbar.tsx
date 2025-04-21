
// Updated logo and background color as requested
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Use the provided logo and green background color #14B22D for Navbar
const Navbar = () => {
  return (
    <nav className="shadow-md border-b border-gray-200" style={{ backgroundColor: "#14B22D" }}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="/lovable-uploads/4c4c4d22-87b4-441b-bdde-bd9a89fb8510.png"
                alt="FixFinder logo"
                className="h-10 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-white hover:text-gray-200 font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/select-role?action=login">
              <Button variant="outline" className="bg-white text-green-700 hover:bg-green-100 border-gray-300">
                Login
              </Button>
            </Link>
            <Link to="/select-role?action=signup">
              <Button className="bg-white text-green-700 hover:bg-green-100">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
