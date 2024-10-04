import React, { useState } from 'react';

const ContentScheduler = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isDraft, setIsDraft] = useState(true);  // Initialize isDraft to true for now
  const [showUploader, setShowUploader] = useState(false); // Controls when the uploader shows
  const [currentStep, setCurrentStep] = useState(1);  // Controls the current progress step

  // Handle drag and drop or file selection
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log("Dropped files:", files);
    // Process the files here (video upload)
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    console.log("Selected files:", files);
    // Process the files here (video upload)
  };

  const handleDragOver = (event) => {
    event.preventDefault();  // Prevent default behavior to allow drop
  };

  // Proceed to next step in progress bar
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

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
              <button
                onClick={() => setShowUploader(!showUploader)}  // Correct toggle behavior
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded transform transition-transform hover:scale-105 hover:bg-purple-600 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
          <p className="text-gray-500 mb-6">Videos to be posted</p>

          {/* Grid/List View Rendering */}
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

                {/* Date Posting */}
                <div className="text-center flex-1">
                  <p className="mb-2">Date Posting</p>
                </div>

                {/* Title */}
                <div className="text-center flex-1">
                  <p className="mb-2">Title</p>
                </div>

                {/* Draft Status */}
                <div className="flex-1 text-center">
                  {isDraft ? (
                    <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden"> {/* 16:9 aspect ratio */}
                      <img
                        src="https://via.placeholder.com/320x180"  // Placeholder for thumbnail (16:9 ratio)
                        alt="Thumbnail Preview"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div></div> // No content if not draft
                  )}
                </div>

                {/* Platform */}
                <div className="text-center flex-1">
                  <p className="mb-2">Platform</p>
                </div>

                {/* Edit button */}
                <button className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:shadow-[inset_0_0_0_2px_rgba(66,133,244,1)]">
                  Edit
                </button>
              </div>
            )}
          </div>
          {/* Video Uploader Section */}
          {showUploader && (
            <div className="mt-8">
              {/* Drag-and-Drop Box */}
              <div
                className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {/* Drag-and-Drop Text */}
                <div className="absolute left-0 right-0 flex justify-between px-10">
                  <span className="text-black text-lg">Drag and drop</span>
                  <span className="text-black text-lg">Upload from files</span>
                </div>

                {/* Vertical Divider */}
                <div className="absolute w-[2px] h-full bg-black"></div>

                {/* File Upload Button */}
                <label className="absolute right-10 w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center cursor-pointer">
                  <input
                    type="file"
                    accept="video/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileSelect}
                  />
                  {/* Placeholder for the library icon */}
                  <span className="text-black text-lg">📚</span>  {/* Library icon can be replaced */}
                </label>
              </div>

              {/* Progress Bar */}
              <div className="flex justify-between items-center mt-10">
                {Array.from({ length: 4 }).map((_, index) => (
                  <React.Fragment key={index}>
                    {/* Circle */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep > index ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                    >
                      {currentStep > index ? '✓' : <span>Step {index + 1}</span>}
                    </div>

                    {/* Dotted line (except for the last circle) */}
                    {index < 3 && (
                      <div
                        className={`flex-grow h-[2px] ${currentStep > index + 1
                          ? 'bg-purple-500'
                          : 'bg-gray-300'
                          }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Button to simulate progress */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={nextStep}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-800"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentScheduler;