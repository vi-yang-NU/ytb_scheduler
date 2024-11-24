import React from 'react'
import ProgressBar from './ProgressBar'

const VideoUploader = ({
  handleDrop,
  handleDragOver,
  handleFileSelect,
  currentStep,
  setCurrentStep, // Use setCurrentStep here
  nextStep
}) => {
  return (
    <div className='mt-8'>
      {/* Drag-and-Drop Box */}
      <div
        className='bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center relative'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Drag-and-Drop Text */}
        <div className='absolute left-0 right-0 flex flex-col justify-between px-10'>
          <span className='text-black text-lg font-bold'>
            Upload a new video here!
          </span>
          <span className='text-black text-lg'>
            Drag file onto box on right or click file icon
          </span>

          <span className='text-black text-lg'>Upload from files</span>
        </div>

        {/* Vertical Divider */}
        <div className='absolute w-[2px] h-full bg-black'></div>

        {/* File Upload Button */}
        <label className='absolute right-10 w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center cursor-pointer'>
          <input
            type='file'
            accept='video/*'
            className='absolute inset-0 opacity-0 cursor-pointer'
            onChange={handleFileSelect}
          />
          <label className='absolute right-10 w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center cursor-pointer'>
            <input
              type='file'
              accept='video/*'
              className='absolute inset-0 opacity-0 cursor-pointer'
              onChange={handleFileSelect}
            />
            {/* Image icon */}
            <img
              src='../s'
              alt='Upload Icon'
              className='w-8 h-8 object-contain'
            />
          </label>
        </label>
      </div>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <div className='flex justify-center mt-6 space-x-4'>
        {/* Previous Step Button */}
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className='bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-600'
          >
            Previous Step
          </button>
        )}

        {/* Next Step Button */}
        <button
          onClick={nextStep}
          className='bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-800'
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

export default VideoUploader
