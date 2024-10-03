import React from 'react';

const ContentScheduler = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h2 className="text-center text-xl font-bold mb-6">Content Creation Scheduler</h2>
      <div className="max-w-[80%] mx-auto"> {/* Centered container with 70% width */}
        {/* Dashboard Section */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-3 gap-6">
            {/* CTR Average Card */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-lg mb-4">Last week CTR average</h3>
              <div className="flex items-center space-x-2">
                <p className="text-5xl font-bold">13%</p>
                <span className="text-green-500 text-3xl">▲</span>
              </div>
            </div>

            {/* 200% Improvement Card */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-lg mb-4">Total Increase</h3>
              <div className="flex items-center space-x-2">
                <p className="text-5xl font-bold">200%</p>
                <span className="text-green-500 text-3xl">▲</span>
              </div>
            </div>

            {/* Quick Monitoring Card */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-lg">Video quick monitoring</h3>
            </div>

            {/* Monitored Videos Card */}
            <div className="col-span-3 bg-black text-white p-6 rounded-lg">
              <h3 className="text-lg">Total monitored videos improvement</h3>
            </div>
          </div>
        </div>

        {/* Queue Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              Currently Viewing: <span className="text-blue-500">Queue</span>
            </h2>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-300 px-4 py-2 rounded">Grid</button>
              <button className="bg-gray-100 px-4 py-2 rounded">List</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">+</button>
            </div>
          </div>
          <p className="text-gray-500 mb-6">Videos to be posted</p>

          {/* Video Cards */}
          <div className="grid grid-cols-3 gap-6">
            {/* Example of a card */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm relative">
              <h3 className="font-bold mb-2">Video Title</h3>
              <p className="mb-2">Date</p>
              <p>Description for video</p>
              <button className="absolute top-4 right-4 bg-gray-200 px-2 py-1 rounded">Edit</button>
            </div>

            {/* Placeholder cards */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Title</h3>
              <p className="mb-2">Date</p>
              <p>Body text for whatever you'd like to say...</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Title</h3>
              <p className="mb-2">Date</p>
              <p>Body text for whatever you'd like to say...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScheduler;
