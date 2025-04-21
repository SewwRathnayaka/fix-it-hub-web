
import React, { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Calendar, Briefcase, Users, Gear, LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: "dashboard", path: "/handyman/dashboard" },
  { label: "Schedule", icon: "calendar", path: "/handyman/schedule" },
  { label: "Jobs", icon: "briefcase", path: "/handyman/jobs" },
  { label: "Clients", icon: "users", path: "/handyman/clients" },
  { label: "Settings", icon: "gear", path: "/handyman/settings" }
];

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <User className="h-5 w-5" />,
  calendar: <Calendar className="h-5 w-5" />,
  briefcase: <Briefcase className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  gear: <Gear className="h-5 w-5" />,
};

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}
const HandymanDashboardLayout = ({ children, title, subtitle }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Dummy data for profile (replace with real data as needed)
  const user = {
    name: "John Doe",
    specialty: "Plumbing Specialist",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/34.jpg"
  };

  const isActive = (path: string) => location.pathname === path;
  const handleLogout = () => {
    localStorage.removeItem("fixfinder_user");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-[#f5faf7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#f4f9f1] border-r flex-shrink-0 flex flex-col pt-10 pb-4 px-5">
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover border border-green-200 mb-2"
          />
          <span className="font-bold text-lg">{user.name}</span>
          <span className="text-sm text-gray-600">{user.specialty}</span>
          <span className="text-xs text-amber-500 flex items-center gap-1 mt-1">
            {user.rating} <svg className="inline h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z"/></svg>
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                ${isActive(item.path) ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-green-50 hover:text-green-600"}
              `}
            >
              {iconMap[item.icon]}
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-red-500 hover:bg-red-50 hover:text-red-600 transition"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </nav>
      </aside>
      {/* Main Section */}
      <main className="flex-1 flex flex-col bg-[#f5faf7]">
        {/* Header */}
        <div className="w-full px-10 py-6 flex items-center justify-between border-b bg-white shadow-sm">
          <span className="text-3xl font-black tracking-tight flex items-center gap-2">
            <img src="/lovable-uploads/f4918fca-02ef-492f-bc14-65286bdd2046.png" alt="logo" className="h-9" />
            <span className="text-green-700">Fixfinder</span>
          </span>
          <div>
            {/* notification icon, profile icon can go here */}
          </div>
        </div>
        {/* Page Title */}
        <div className="px-10 pt-8 pb-2">
          {title && <h1 className="text-2xl font-bold text-green-900">{title}</h1>}
          {subtitle && <p className="text-gray-700">{subtitle}</p>}
        </div>
        {/* Content */}
        <div className="flex-1 px-10 pb-8">{children}</div>
      </main>
    </div>
  );
};
export default HandymanDashboardLayout;
