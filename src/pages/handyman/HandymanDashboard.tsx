
import HandymanDashboardLayout from "@/components/handyman/HandymanDashboardLayout";

const HandymanDashboard = () => {
  return (
    <HandymanDashboardLayout title="Dashboard">
      {/* You can add the dashboard cards and layout here, matching the UI in your design */}
      <div className="w-full flex flex-col md:flex-row gap-6 mb-8">
        {/* Stat Cards */}
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

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Today's Schedule</h2>
        </div>
        <ul className="divide-y">
          <li className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">Plumbing Repair</div>
              <div className="text-sm text-gray-500">Sarah Johnson &bull; 123 Oak Street</div>
            </div>
            <div className="text-sm text-gray-500">9:00 AM - 10:30 AM</div>
            <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs ml-2">completed</span>
          </li>
          <li className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">Electrical Wiring</div>
              <div className="text-sm text-gray-500">Michael Smith &bull; 456 Pine Avenue</div>
            </div>
            <div className="text-sm text-gray-500">11:30 AM - 1:00 PM</div>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs ml-2">in progress</span>
          </li>
          <li className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">Bathroom Renovation</div>
              <div className="text-sm text-gray-500">Emily Davis &bull; 789 Maple Road</div>
            </div>
            <div className="text-sm text-gray-500">3:00 PM - 5:00 PM</div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs ml-2">upcoming</span>
          </li>
        </ul>
      </div>

      {/* Recent Jobs */}
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
