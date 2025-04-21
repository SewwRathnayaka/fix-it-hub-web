
import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wrench, User, FileText, CalendarDays, MessageSquare, CreditCard, Settings, LogOut, Search, Bell } from "lucide-react";

interface ClientDashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ClientDashboardLayout = ({ children, title, subtitle }: ClientDashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get user from localStorage
  const userString = localStorage.getItem("fixfinder_user");
  const user = userString ? JSON.parse(userString) : null;
  
  if (!user) {
    // Redirect to login if no user found
    navigate("/login/client");
    return null;
  }
  
  const handleLogout = () => {
    localStorage.removeItem("fixfinder_user");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account"
    });
    navigate("/");
  };
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-green-100 text-green-700" : "hover:bg-gray-100";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="shadow-md" style={{ background: "#14B22D" }}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Empty left spacer */}
            <div className="flex-1 flex items-center justify-start"></div>
            {/* Logo centered */}
            <div className="flex-1 flex items-center justify-center">
              <Link to="/" className="flex items-center h-10">
                <img
                  src="/lovable-uploads/a707e924-f315-4907-a798-16e19d2e7a69.png"
                  alt="FixFinder Logo"
                  className="h-10 object-contain"
                  style={{ maxWidth: 150 }}
                />
              </Link>
            </div>
            {/* Notifications and Profile */}
            <div className="flex-1 flex items-center justify-end space-x-3">
              <div className="relative">
                <Bell className="h-6 w-6 text-white cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </div>
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                <User className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white w-64 border-r shadow-sm">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg">My Profile <span className="text-sm text-gray-500">CLIENT</span></h2>
          </div>
          <nav className="flex flex-col p-2">
            <Link 
              to="/client/profile" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/profile")}`}
            >
              <User className="h-5 w-5" />
              <span>Basic Info</span>
            </Link>
            <Link 
              to="/client/service-history" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/service-history")}`}
            >
              <FileText className="h-5 w-5" />
              <span>Service History</span>
            </Link>
            <Link 
              to="/client/upcoming-bookings" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/upcoming-bookings")}`}
            >
              <CalendarDays className="h-5 w-5" />
              <span>Upcoming Bookings</span>
            </Link>
            <Link 
              to="/client/reviews" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/reviews")}`}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Reviews Given</span>
            </Link>
            <Link 
              to="/client/payment-billing" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/payment-billing")}`}
            >
              <CreditCard className="h-5 w-5" />
              <span>Payment & Billing</span>
            </Link>
            <Link 
              to="/client/account-settings" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive("/client/account-settings")}`}
            >
              <Settings className="h-5 w-5" />
              <span>Account Settings</span>
            </Link>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 px-4 py-6 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 mt-4 justify-start"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </Button>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          {children}
        </main>
      </div>
      
      {/* Footer with logo */}
      <div className="w-full flex justify-center p-4 bg-white border-t">
        <div className="flex items-center">
          {/* Updated logo in footer only */}
          <img
            src="/lovable-uploads/dd421578-d45c-4aa5-ac80-e96f8fe812e5.png"
            alt="FixFinder New Logo"
            className="h-8 object-contain"
            style={{ maxWidth: 120 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardLayout;

