
import React, { ReactNode } from "react";
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
  LayoutDashboard,
  Calendar,
  Briefcase,
  Users,
  Settings,
  User,
  Bell,
  Cog,
  CreditCard,
  LogOut,
} from "lucide-react";

const sidebarNav = [
  { label: "Dashboard", icon: LayoutDashboard, route: "/handyman/dashboard" },
  { label: "Schedule", icon: Calendar, route: "/handyman/schedule" },
  { label: "Jobs", icon: Briefcase, route: "/handyman/jobs" },
  { label: "Clients", icon: Users, route: "/handyman/clients" },
  { label: "Settings", icon: Settings, route: "/handyman/settings" },
  { label: "Profile", icon: User, route: "/handyman/profile" },
  { label: "Notifications", icon: Bell, route: "/handyman/notifications" },
  { label: "Account", icon: Cog, route: "/handyman/account" },
  { label: "Billing", icon: CreditCard, route: "/handyman/billing" },
];

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const HandymanDashboardLayout = ({ children, title, subtitle }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dummy user info, can be replaced with real data
  const user = {
    name: "John Doe",
    specialty: "Plumbing Specialist",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#f5faf7]">
        <Sidebar>
          <SidebarContent>
            <div className="px-6 pt-8 pb-10 flex flex-col items-center gap-2">
              <img src={user.avatar} alt="Handyman avatar" className="w-16 h-16 rounded-full object-cover border border-green-200" />
              <span className="font-bold text-lg">{user.name}</span>
              <span className="text-sm text-gray-600">{user.specialty}</span>
            </div>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarNav.map(item => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === item.route}
                        onClick={() => navigate(item.route)}
                      >
                        <div className="flex items-center gap-2 cursor-pointer w-full">
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      variant="outline"
                      onClick={() => {
                        localStorage.removeItem("fixfinder_user");
                        navigate("/");
                      }}
                    >
                      <div className="flex items-center gap-2 cursor-pointer w-full text-red-500">
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        {/* Main Section */}
        <main className="flex-1 flex flex-col min-h-screen bg-[#f5faf7]">
          {/* Header */}
          <div className="w-full px-10 py-6 flex items-center justify-between border-b bg-white shadow-sm">
            <span className="text-3xl font-black tracking-tight flex items-center gap-2">
              <img src="/lovable-uploads/f4918fca-02ef-492f-bc14-65286bdd2046.png" alt="logo" className="h-9" />
              <span className="text-green-700">Fixfinder</span>
            </span>
            {/* Optionally, notification and profile icons */}
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
    </SidebarProvider>
  );
};

export default HandymanDashboardLayout;
