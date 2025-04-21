
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Updated Navbar with the new logo and green background color matching the new logo green (#14B22D)
const Navbar = () => {
  return (
    <nav className="bg-[#14B22D] shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="/lovable-uploads/aeb9264e-099a-4d6c-bdf9-30a558026d38.png"
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
              <Button variant="outline" className="bg-white text-[#14B22D] hover:bg-[#a3d7a3] border-gray-300">
                Login
              </Button>
            </Link>
            <Link to="/select-role?action=signup">
              <Button className="bg-[#FF8000] text-white hover:bg-[#e67300]">
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
