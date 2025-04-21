
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-green-500 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-white" />
            <Link to="/" className="text-white text-2xl font-bold">
              <span className="text-white">F</span>
              <span className="text-orange-500">ix</span>
              <span className="text-white">FINDER</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-100 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-green-100 font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-white hover:text-green-100 font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-green-100 font-medium">
              Contact Us
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="bg-white text-green-600 hover:bg-green-100">
                Login
              </Button>
            </Link>
            <Link to="/signup">
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
