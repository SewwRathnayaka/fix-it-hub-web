
import React from "react";

const RecentJobs = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Recent Jobs</h2>
      </div>
      <div className="grid gap-4 p-4">
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Apr 14, 2025</p>
              <p className="text-sm text-gray-600">David Wilson • Plumbing</p>
              <p className="text-xs text-gray-400">2.5 miles away</p>
            </div>
            <div className="text-center">
              <p className="font-medium">$120</p>
              <span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Apr 12, 2025</p>
              <p className="text-sm text-gray-600">Jennifer Lee • Electrical</p>
              <p className="text-xs text-gray-400">1.8 miles away</p>
            </div>
            <div className="text-center">
              <p className="font-medium">$250</p>
              <span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Apr 10, 2025</p>
              <p className="text-sm text-gray-600">Robert Brown • Plumbing</p>
              <p className="text-xs text-gray-400">3.2 miles away</p>
            </div>
            <div className="text-center">
              <p className="font-medium">$750</p>
              <span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Apr 8, 2025</p>
              <p className="text-sm text-gray-600">Patricia Miller • Carpentry</p>
              <p className="text-xs text-gray-400">0.5 miles away</p>
            </div>
            <div className="text-center">
              <p className="font-medium">$180</p>
              <span className="bg-green-200 text-green-700 px-2 py-0.5 rounded text-xs">completed</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Apr 5, 2025</p>
              <p className="text-sm text-gray-600">Linda Garcia • Electrical</p>
              <p className="text-xs text-gray-400">4.1 miles away</p>
            </div>
            <div className="text-center">
              <p className="font-medium">$350</p>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
