import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandymanDashboardLayout from "@/components/handyman/HandymanDashboardLayout";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

// Sample client requests data
const clientRequests = [
  {
    id: "cr1",
    title: "Leaky Faucet Repair",
    client: "Olivia Thompson",
    address: "12 Green Lane",
    time: "8:30 AM",
    note: "Urgent, water leaking continuously.",
  },
  {
    id: "cr2",
    title: "Ceiling Light Installation",
    client: "Ethan Clark",
    address: "59 Oak Road",
    time: "10:00 AM",
    note: "Bring step ladder, high ceiling.",
  },
];

const todaysSchedule = [
  {
    id: "1",
    title: "Plumbing Repair",
    client: "Sarah Johnson",
    address: "123 Oak Street",
    time: "9:00 AM - 10:30 AM",
    status: "completed",
  },
  {
    id: "2",
    title: "Electrical Wiring",
    client: "Michael Smith",
    address: "456 Pine Avenue",
    time: "11:30 AM - 1:00 PM",
    status: "in progress",
  },
  {
    id: "3",
    title: "Bathroom Renovation",
    client: "Emily Davis",
    address: "789 Maple Road",
    time: "3:00 PM - 5:00 PM",
    status: "upcoming",
  },
];

const HandymanDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"requests" | "today">("requests");

  useEffect(() => {
    if (!localStorage.getItem("fixfinder_handyman_registered")) {
      navigate("/handyman/registration");
    }
  }, [navigate]);

  return (
    <HandymanDashboardLayout title="Dashboard">
      {/* Stat Cards */}
      <div className="w-full flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Total Earnings</div>
            <div className="text-xl font-bold">$2,458.50</div>
            <div className="text-xs text-gray-400 mt-1">from last month</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Jobs Completed</div>
            <div className="text-xl font-bold">24</div>
            <div className="text-xs text-gray-400 mt-1">from last month</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Average Rating</div>
            <div className="text-xl font-bold">4.8</div>
            <div className="text-xs text-gray-400 mt-1">based on 24 reviews</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">Response Ratio</div>
            <div className="text-xl font-bold">95%</div>
            <div className="text-xs text-gray-400 mt-1">~25 min response time</div>
          </div>
        </div>
      </div>

      {/* TAB SECTION: Client Requests & Today's Schedule */}
      <Tabs value={tab} onValueChange={(val) => setTab(val as typeof tab)} className="mb-8">
        <TabsList className="bg-white border rounded-lg shadow p-0">
          <TabsTrigger value="requests" className="px-6 py-2 font-semibold">Client Requests</TabsTrigger>
          <TabsTrigger value="today" className="px-6 py-2 font-semibold">Today's Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="requests">
          <div className="bg-white rounded-lg shadow mt-4">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Client Requests</h2>
            </div>
            <ul className="divide-y">
              {clientRequests.length === 0 ? (
                <li className="py-6 text-center text-gray-500">No new client requests.</li>
              ) : (
                clientRequests.map((req) => (
                  <li key={req.id} className="flex justify-between items-center p-4">
                    <div>
                      <div className="font-semibold">{req.title}</div>
                      <div className="text-sm text-gray-500">{req.client} &bull; {req.address}</div>
                      <div className="text-xs text-gray-400">{req.time}</div>
                      <div className="text-xs text-green-700">{req.note}</div>
                    </div>
                    <button className="bg-green-50 text-green-700 px-4 py-1 rounded hover:bg-green-100 text-sm">
                      View Details
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="today">
          {/* Copied/Kept existing Today's Schedule section */}
          <div className="bg-white rounded-lg shadow mt-4">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Today's Schedule</h2>
            </div>
            <ul className="divide-y">
              {todaysSchedule.map((job) => (
                <li key={job.id} className="flex justify-between items-center p-4">
                  <div>
                    <div className="font-semibold">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.client} &bull; {job.address}</div>
                  </div>
                  <div className="text-sm text-gray-500">{job.time}</div>
                  <span className={
                    job.status === "completed"
                      ? "bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs ml-2"
                      : job.status === "in progress"
                      ? "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs ml-2"
                      : "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs ml-2"
                  }>
                    {job.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Recent Jobs</h2>
        </div>
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Client</th>
              <th className="py-2 px-3 text-left">Service</th>
              <th className="py-2 px-3">Payment</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3">Apr 14, 2025</td>
              <td className="py-2 px-3">David Wilson</td>
              <td className="py-2 px-3">Plumbing</td>
              <td className="py-2 px-3">$120</td>
              <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
              <td className="py-2 px-3 text-yellow-500">★★★★★</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Apr 12, 2025</td>
              <td className="py-2 px-3">Jennifer Lee</td>
              <td className="py-2 px-3">Electrical</td>
              <td className="py-2 px-3">$250</td>
              <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
              <td className="py-2 px-3 text-yellow-500">★★★★★</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Apr 10, 2025</td>
              <td className="py-2 px-3">Robert Brown</td>
              <td className="py-2 px-3">Plumbing</td>
              <td className="py-2 px-3">$750</td>
              <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
              <td className="py-2 px-3 text-yellow-500">★★★★★</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Apr 8, 2025</td>
              <td className="py-2 px-3">Patricia Miller</td>
              <td className="py-2 px-3">Carpentry</td>
              <td className="py-2 px-3">$180</td>
              <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
              <td className="py-2 px-3 text-yellow-500">★★★★★</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Apr 5, 2025</td>
              <td className="py-2 px-3">Linda Garcia</td>
              <td className="py-2 px-3">Electrical</td>
              <td className="py-2 px-3">$350</td>
              <td className="py-2 px-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">cancelled</span></td>
              <td className="py-2 px-3 text-gray-300">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HandymanDashboardLayout>
  );
};

export default HandymanDashboard;
