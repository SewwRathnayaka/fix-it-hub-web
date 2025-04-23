
import React, { ReactNode, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Bell,
  LogOut,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

// Dummy user info, for profile modal/content only
const user = {
  name: "John Doe",
  specialty: "Plumbing Specialist",
  avatar: "https://randomuser.me/api/portraits/men/34.jpg",
};

const menuItems = [
  { label: "Dashboard", route: "/handyman/dashboard" },
  { label: "Schedule", route: "/handyman/schedule" },
  { label: "Jobs", route: "/handyman/jobs" },
  { label: "Clients", route: "/handyman/clients" },
  { label: "Settings", route: "/handyman/settings" },
  { label: "Profile", route: "/handyman/profile" },
  { label: "Notifications", route: "/handyman/notifications" },
  { label: "Account", route: "/handyman/account" },
  { label: "Billing", route: "/handyman/billing" },
];

const HandymanDashboardLayout = ({ children, title, subtitle }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen flex w-full bg-[#f5faf7]">
      {/* Sidebar removed entirely */}
      <main className="flex-1 flex flex-col min-h-screen bg-[#f5faf7]">
        <div className="w-full px-10 py-6 flex items-center justify-between border-b bg-white shadow-sm">
          <span className="text-3xl font-black tracking-tight flex items-center gap-2 mx-auto">
            <img
              src="/lovable-uploads/f8b0003c-8de6-4035-b677-59817d3a83cf.png"
              alt="FixFinder Logo"
              className="h-9 object-contain"
              style={{ maxWidth: 140 }}
            />
          </span>
          <div className="flex items-center gap-4">
            {/* Notification button */}
            <button
              className="rounded-full p-2 hover:bg-green-100 transition"
              aria-label="Notifications"
              onClick={() => navigate("/handyman/notifications")}
            >
              <Bell className="h-6 w-6 text-green-700" />
            </button>
            {/* Profile Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="rounded-full p-1 border-2 border-green-300 hover:border-green-500 transition"
                  aria-label="Profile"
                >
                  <img
                    src={user.avatar}
                    alt="Handyman avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                {menuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => navigate(item.route)}
                    className={location.pathname === item.route ? "bg-green-50 text-green-700" : ""}
                  >
                    <User className="h-4 w-4 mr-2" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem("fixfinder_user");
                    navigate("/");
                  }}
                  className="text-red-500"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="px-10 pt-8 pb-2">
          {title && <h1 className="text-2xl font-bold text-green-900">{title}</h1>}
          {subtitle && <p className="text-gray-700">{subtitle}</p>}
        </div>
        <div className="flex-1 px-10 pb-8">{children}</div>
      </main>
    </div>
  );
};

export default HandymanDashboardLayout;
