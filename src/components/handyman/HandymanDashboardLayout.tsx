
import React, { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Bell,
  LogOut,
  User,
} from "lucide-react";

const sidebarNav = [
  { label: "Dashboard", icon: "menu", route: "/handyman/dashboard" },
  { label: "Schedule", icon: "menu", route: "/handyman/schedule" },
  { label: "Jobs", icon: "menu", route: "/handyman/jobs" },
  { label: "Clients", icon: "menu", route: "/handyman/clients" },
  { label: "Settings", icon: "menu", route: "/handyman/settings" },
  { label: "Profile", icon: "menu", route: "/handyman/profile" },
  { label: "Notifications", icon: "menu", route: "/handyman/notifications" },
  { label: "Account", icon: "menu", route: "/handyman/account" },
  { label: "Billing", icon: "menu", route: "/handyman/billing" },
];

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

const HandymanDashboardLayout = ({ children, title, subtitle }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#f5faf7]">
        <Sidebar>
          {showSidebarMenu && (
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {/* Update to use only icons allowed by lucide-react-icons */}
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/dashboard"}
                        onClick={() => {
                          navigate("/handyman/dashboard");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Dashboard</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/schedule"}
                        onClick={() => {
                          navigate("/handyman/schedule");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Schedule</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/jobs"}
                        onClick={() => {
                          navigate("/handyman/jobs");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Jobs</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/clients"}
                        onClick={() => {
                          navigate("/handyman/clients");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Clients</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/settings"}
                        onClick={() => {
                          navigate("/handyman/settings");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Settings</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/profile"}
                        onClick={() => {
                          navigate("/handyman/profile");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Profile</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/notifications"}
                        onClick={() => {
                          navigate("/handyman/notifications");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Notifications</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/account"}
                        onClick={() => {
                          navigate("/handyman/account");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Account</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === "/handyman/billing"}
                        onClick={() => {
                          navigate("/handyman/billing");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <User className="h-5 w-5" />
                          <span>Billing</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        variant="outline"
                        onClick={() => {
                          localStorage.removeItem("fixfinder_user");
                          navigate("/");
                          setShowSidebarMenu(false);
                        }}
                      >
                        <div className="flex items-center gap-2 w-full text-red-500">
                          <LogOut className="h-5 w-5" />
                          <span>Logout</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          )}
        </Sidebar>
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
              {/* Profile button */}
              <button
                className="rounded-full p-1 border-2 border-green-300 hover:border-green-500 transition"
                aria-label="Profile"
                onClick={() => setShowSidebarMenu(show => !show)}
              >
                <img
                  src={user.avatar}
                  alt="Handyman avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </button>
            </div>
          </div>
          <div className="px-10 pt-8 pb-2">
            {title && <h1 className="text-2xl font-bold text-green-900">{title}</h1>}
            {subtitle && <p className="text-gray-700">{subtitle}</p>}
          </div>
          <div className="flex-1 px-10 pb-8">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default HandymanDashboardLayout;
