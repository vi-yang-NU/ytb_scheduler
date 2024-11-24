import React from 'react';
import GridCard from './GridCard';
import ListCard from './ListCard';
import VideoUploader from './VideoUploader';

const QueueSection = ({
  viewMode,
  setViewMode,
  isDraft,
  handleDrop,
  handleDragOver,
  handleFileSelect,
  currentStep,
  setCurrentStep, // Accept setCurrentStep
  nextStep,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">
          Currently Viewing: <span className="text-blue-500">Queue</span>
        </h2>
        <div className="flex items-center space-x-4">
          <button
            className={`${
              viewMode === 'grid' ? 'bg-gray-300' : 'bg-gray-100'
            } px-4 py-2 rounded transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`${
              viewMode === 'list' ? 'bg-gray-300' : 'bg-gray-100'
            } px-4 py-2 rounded transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
          <button
            onClick={() => setViewMode('queue')}
            className="border border-purple-600 text-purple-600 px-4 py-2 rounded transform transition-transform hover:scale-105 hover:bg-purple-600 hover:text-white"
          >
            +
          </button>
        </div>
      </div>

      {viewMode === 'queue' ? (
        <VideoUploader
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleFileSelect={handleFileSelect}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep} // Pass setCurrentStep
          nextStep={nextStep}
        />
      ) : (
        <>
          <p className="text-gray-500 mb-6">Videos to be posted</p>
          <div
            className={`grid ${
              viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'
            } gap-6`}
          >
            {viewMode === 'grid' ? <GridCard /> : <ListCard isDraft={isDraft} />}
          </div>
        </>
      )}
    </div>
  );
};

export default QueueSection;
