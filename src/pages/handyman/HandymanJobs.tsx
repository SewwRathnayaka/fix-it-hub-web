
import HandymanDashboardLayout from "@/components/handyman/HandymanDashboardLayout";

const HandymanJobs = () => (
  <HandymanDashboardLayout title="Jobs">
    {/* Placeholder Jobs Table - add filters, actions as needed */}
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-4 flex gap-4">
        <button className="rounded-full px-4 py-1 bg-green-100 text-green-700 font-semibold text-sm">All Jobs</button>
        <button className="rounded-full px-4 py-1 bg-gray-100 text-gray-600 font-medium text-sm hover:bg-green-100 hover:text-green-700">Pending</button>
        <button className="rounded-full px-4 py-1 bg-gray-100 text-gray-600 font-medium text-sm hover:bg-green-100 hover:text-green-700">In Progress</button>
        <button className="rounded-full px-4 py-1 bg-gray-100 text-gray-600 font-medium text-sm hover:bg-green-100 hover:text-green-700">Completed</button>
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="py-2 px-3 text-left">Job ID</th>
            <th className="py-2 px-3 text-left">Client</th>
            <th className="py-2 px-3 text-left">Service</th>
            <th className="py-2 px-3 text-left">Date</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Payment</th>
            <th className="py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2 px-3">JOB-1001</td>
            <td className="py-2 px-3">Sarah Johnson</td>
            <td className="py-2 px-3">Plumbing Repair</td>
            <td className="py-2 px-3">Apr 18, 2025</td>
            <td className="py-2 px-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Pending</span></td>
            <td className="py-2 px-3">$120 pending</td>
            <td className="py-2 px-3 flex gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded font-semibold">View</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded font-semibold">Start Job</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">JOB-1002</td>
            <td className="py-2 px-3">Michael Smith</td>
            <td className="py-2 px-3">Electrical Wiring</td>
            <td className="py-2 px-3">Apr 20, 2025</td>
            <td className="py-2 px-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">In Progress</span></td>
            <td className="py-2 px-3">$250 pending</td>
            <td className="py-2 px-3 flex gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded font-semibold">View</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded font-semibold">Complete Job</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">JOB-1003</td>
            <td className="py-2 px-3">Emily Davis</td>
            <td className="py-2 px-3">Bathroom Renovation</td>
            <td className="py-2 px-3">Apr 15, 2025</td>
            <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">Completed</span></td>
            <td className="py-2 px-3">$750 paid</td>
            <td className="py-2 px-3 flex gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded font-semibold">View</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">JOB-1004</td>
            <td className="py-2 px-3">Robert Brown</td>
            <td className="py-2 px-3">Carpentry</td>
            <td className="py-2 px-3">Apr 10, 2025</td>
            <td className="py-2 px-3"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">Completed</span></td>
            <td className="py-2 px-3">$180 paid</td>
            <td className="py-2 px-3 flex gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded font-semibold">View</button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">JOB-1005</td>
            <td className="py-2 px-3">Jennifer Lee</td>
            <td className="py-2 px-3">Painting</td>
            <td className="py-2 px-3">Apr 5, 2025</td>
            <td className="py-2 px-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">Cancelled</span></td>
            <td className="py-2 px-3">$350 overdue</td>
            <td className="py-2 px-3 flex gap-2">
              <button className="bg-gray-200 px-3 py-1 rounded font-semibold">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </HandymanDashboardLayout>
);

export default HandymanJobs;
