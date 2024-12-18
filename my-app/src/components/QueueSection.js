import React, { useState } from 'react'
import VideoUploader from './Queue_section_helper/VideoUploader/VideoUploader'
import CardSet from './Queue_section_helper/CardSet'

const QueueSection = ({
  viewMode,
  setViewMode,
  isDraft,
  handleDrop,
  handleDragOver,
  handleFileSelect,
  currentStep,
  setCurrentStep,
  nextStep
}) => {
  const [isClicked, setIsClicked] = useState(false) // State to track if the button is clicked

  const handleQueueClick = () => {
    setIsClicked(true) // Highlight the '+' button
    setViewMode('queue') // Switch to "Upload Video" mode
  }

  const handleOtherClick = mode => {
    setIsClicked(false) // Reset the '+' button state
    setViewMode(mode) // Set the desired view mode (grid or list)
  }

  return (
    <div className='pr-12 pt-6 pb-6'>
      <div className='bg-indigo-300 p-6 rounded-lg shadow-md'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-lg font-bold'>
            Currently Viewing:{' '}
            <span className='text-blue-800'>
              {viewMode === 'queue' ? 'Upload Video' : 'Queue'}
            </span>
          </h2>
          <div className='flex items-center space-x-4'>
            <button
              className={`${
                viewMode === 'grid'
                  ? 'bg-black text-white' // Active state
                  : 'border border-black text-black hover:bg-black hover:text-white' // Default state
              } px-4 py-2 rounded transform transition-transform hover:scale-105`}
              onClick={() => handleOtherClick('grid')} // Call handleOtherClick for grid
            >
              <span> Grid</span>
            </button>
            <button
              className={`${
                viewMode === 'list'
                  ? 'bg-black text-white' // Active state
                  : 'border border-black text-black hover:bg-black hover:text-white' // Default state
              } px-4 py-2 rounded transform transition-transform hover:scale-105`}
              onClick={() => handleOtherClick('list')} // Call handleOtherClick for list
            >
              <span> List</span>
            </button>
            <button
              onClick={handleQueueClick} // Call handleQueueClick for '+'
              className={`px-4 py-2 rounded transform transition-transform hover:scale-105 ${
                isClicked
                  ? 'bg-yellow-300 text-black'
                  : 'border border-blue-800 text-blue-600 hover:bg-yellow-300 hover:text-black'
              }`}
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
            setCurrentStep={setCurrentStep}
            nextStep={nextStep}
          />
        ) : (
          <>
            <p className='text-gray-500 mb-6'>Videos to be posted</p>
            <CardSet viewMode={viewMode} />
          </>
        )}
      </div>
    </div>
  )
}

export default QueueSection
