// components/DashboardSection.js
import React from 'react';

const DashboardSection = () => {
  return (
    <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-10">
      <div className="grid grid-cols-3 grid-rows-3 gap-6">
        {/* CTR Average Card */}
        <div className="col-span-1 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-lg mb-4">Last week CTR average</h3>
          <div className="flex items-center space-x-2">
            <p className="text-5xl font-bold">13%</p>
            <span className="text-green-500 text-3xl">▲</span>
          </div>
        </div>

        {/* 200% Improvement Card */}
        <div className="col-span-1 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-lg mb-4">Recently Post Stats</h3>
          <div className="flex items-center space-x-2">
            <p className="text-5xl font-bold">200%</p>
            <span className="text-green-500 text-3xl">▲</span>
          </div>
        </div>

        {/* Quick Video Monitoring */}
        <div className="col-span-1 row-span-3 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-lg">Quick Video Monitoring</h3>
        </div>

        {/* Total Monitored Videos Improvement */}
        <div className="col-span-2 row-span-2 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
          <h3 className="text-lg">Total monitored videos improvement</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
