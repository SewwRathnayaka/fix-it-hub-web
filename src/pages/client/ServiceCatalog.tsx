
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ClientDashboardLayout from "@/components/client/ClientDashboardLayout";

const ALL_SERVICES = [
  { name: "Appliance Repair", icon: "🧯" },
  { name: "Carpentry", icon: "🪚" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Electrical", icon: "⚡" },
  { name: "Gardening", icon: "🪴" },
  { name: "Home Repair", icon: "🏠" },
  { name: "Painting", icon: "🖌️" },
  { name: "Pest Control", icon: "🐜" },
  { name: "Plumbing", icon: "🔧" },
  { name: "Roofing", icon: "🏘️" },
  { name: "Window Cleaning", icon: "🪟" }
  // Add more services if needed
];

const ServiceCatalog = () => {
  const [search, setSearch] = useState("");

  // Alphabetical sort and filter based on search
  const filteredServices = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();
    return ALL_SERVICES
      .filter((service) =>
        service.name.toLowerCase().includes(lowerSearch)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <ClientDashboardLayout title="Service Catalog" subtitle="Browse and book your desired service">
      <div className="max-w-2xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search Services"
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {/* Service List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center gap-2 bg-white rounded-lg shadow p-5 hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-3xl">{service.icon}</span>
              <span className="font-semibold text-gray-800 text-center">{service.name}</span>
            </div>
          ))}
          {filteredServices.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-8">
              No services found.
            </div>
          )}
        </div>
      </div>
    </ClientDashboardLayout>
  );
};

export default ServiceCatalog;
