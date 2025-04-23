
import React from "react";

const RecentJobs = () => {
  return (
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
            <th className="py-2 px-3 text-center">Payment</th>
            <th className="py-2 px-3 text-center">Status</th>
            <th className="py-2 px-3 text-center">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2 px-3">Apr 14, 2025</td>
            <td className="py-2 px-3">David Wilson</td>
            <td className="py-2 px-3">Plumbing</td>
            <td className="py-2 px-3 text-center">$120</td>
            <td className="py-2 px-3 text-center"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
            <td className="py-2 px-3 text-center text-yellow-500">★★★★★</td>
          </tr>
          <tr>
            <td className="py-2 px-3">Apr 12, 2025</td>
            <td className="py-2 px-3">Jennifer Lee</td>
            <td className="py-2 px-3">Electrical</td>
            <td className="py-2 px-3 text-center">$250</td>
            <td className="py-2 px-3 text-center"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
            <td className="py-2 px-3 text-center text-yellow-500">★★★★★</td>
          </tr>
          <tr>
            <td className="py-2 px-3">Apr 10, 2025</td>
            <td className="py-2 px-3">Robert Brown</td>
            <td className="py-2 px-3">Plumbing</td>
            <td className="py-2 px-3 text-center">$750</td>
            <td className="py-2 px-3 text-center"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
            <td className="py-2 px-3 text-center text-yellow-500">★★★★★</td>
          </tr>
          <tr>
            <td className="py-2 px-3">Apr 8, 2025</td>
            <td className="py-2 px-3">Patricia Miller</td>
            <td className="py-2 px-3">Carpentry</td>
            <td className="py-2 px-3 text-center">$180</td>
            <td className="py-2 px-3 text-center"><span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span></td>
            <td className="py-2 px-3 text-center text-yellow-500">★★★★★</td>
          </tr>
          <tr>
            <td className="py-2 px-3">Apr 5, 2025</td>
            <td className="py-2 px-3">Linda Garcia</td>
            <td className="py-2 px-3">Electrical</td>
            <td className="py-2 px-3 text-center">$350</td>
            <td className="py-2 px-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">cancelled</span></td>
            <td className="py-2 px-3 text-center text-gray-300">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobs;

