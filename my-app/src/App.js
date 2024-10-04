import React, { useState } from 'react';

const ContentScheduler = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h2 className="text-center text-xl font-bold mb-6">Content Creation Scheduler</h2>
      <div className="max-w-[80%] mx-auto"> {/* Centered container with 80% width */}
        {/* Dashboard Section */}
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

            {/* Total monitored videos improvement - Spans 1 columns */}
            <div className="col-span-1 row-span-3 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
              <h3 className="text-lg">Quick Video Monitoring</h3>
            </div>

            {/* Quick Monitoring Card - spans 2 rows */}
            <div className="col-span-2 row-span-2 bg-black text-white p-6 rounded-lg transform transition-transform hover:scale-105">
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
              <button
                className={`${viewMode === 'grid' ? 'bg-gray-300' : 'bg-gray-100'
                  } px-4 py-2 rounded transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
              <button
                className={`${viewMode === 'list' ? 'bg-gray-300' : 'bg-gray-100'
                  } px-4 py-2 rounded transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
              <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded transform transition-transform hover:scale-105 hover:bg-purple-600 hover:text-white">
                +
              </button>
            </div>
          </div>
          <p className="text-gray-500 mb-6">Videos to be posted</p>

          {/* Video Cards */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {/* Example of a card for grid mode */}
            {viewMode === 'grid' ? (
              <div className="border border-gray-300 p-6 rounded-lg shadow-sm relative group transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]">
                {/* Initially, show thumbnail */}
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Show metadata on hover */}
                <div className="absolute inset-1 p-5 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-md">
                  <h3 className="font-bold mb-2">Video Title</h3>
                  <p className="mb-2">Date</p>
                  <p>Description for video</p>
                  <button className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:shadow-[inset_0_0_0_2px_rgba(66,133,244,1)]">
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              // List mode card (compact view)
              <div className="border border-gray-300 p-6 rounded-lg shadow-sm relative group flex items-center justify-between transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)] w-full max-w-4xl mx-auto">
                {/* Metadata is visible */}
                <div className="flex-grow">
                  <h3 className="font-bold mb-1">Video Title</h3>
                  <p className="text-gray-500 text-sm">Date</p>
                  <p className="text-gray-500 text-sm">Description for video</p>
                </div>
                {/* Edit button */}
                <button className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:shadow-[inset_0_0_0_2px_rgba(66,133,244,1)]">
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScheduler;