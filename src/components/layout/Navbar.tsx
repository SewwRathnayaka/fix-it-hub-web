
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Use the provided logo instead of icon/text branding
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="/lovable-uploads/75ea0d84-7dac-4eab-85ef-964dcb2e1911.png"
                alt="FixFinder logo"
                className="h-10 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600 font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/select-role?action=login">
              <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100 border-gray-300">
                Login
              </Button>
            </Link>
            <Link to="/select-role?action=signup">
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
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
