import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import Step1UploadVideo from './Step1UploadVideo'
import UploadingBar from '../UploadingBar'
import Step2Title from './Step2Title'
import Step3DescriptionAndTime from './Step3DescriptionAndTime'
import Step4Thumbnail from './Step4Thumbnail'

const VideoUploader = ({ nextStep }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [video, setVideo] = useState(null) // Store uploaded video
  const [isUploading, setIsUploading] = useState(false) // Track uploading state
  const [uploadProgress, setUploadProgress] = useState(0) // Track progress
  const [isDragging, setIsDragging] = useState(false) // Track drag state
  const [isStepValid, setIsStepValid] = useState(false) // Validation state
  const [description, setDescription] = useState('') // Store description
  const [postDate, setPostDate] = useState('') // Store posting date
  const [thumbnail, setThumbnail] = useState(null) // Store thumbnail

  const handleFileUpload = event => {
    const file = event.target.files[0]
    if (file) {
      startUploading(file)
    }
  }

  const handleFileDrop = event => {
    event.preventDefault()
    setIsDragging(false)
    const file = event.dataTransfer.files[0]
    if (file) {
      startUploading(file)
    }
  }

  const startUploading = file => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setIsUploading(false)
          setVideo(file) // Set the uploaded video after completion
        }
        return Math.min(prev + 10, 100)
      })
    }, 300)
  }

  return (
    <div className='mt-8 bg-gray-100 p-6 rounded-lg shadow-lg'>
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Spacer */}
      <div className='my-4'></div>

      {/* Steps */}
      {currentStep === 1 && (
        <>
          {!video && (
            <>
              <Step1UploadVideo
                handleFileUpload={handleFileUpload}
                handleFileDrop={handleFileDrop}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
              />
              {isUploading && (
                <div className='pt-4'>
                  <UploadingBar progress={uploadProgress} />
                </div>
              )}
            </>
          )}
          {video && (
            <div className='mx-auto w-1/3 h-40 bg-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden'>
              <video
                className='absolute inset-0 w-full h-full object-cover'
                controls
              >
                <source src={URL.createObjectURL(video)} type='video/mp4' />
              </video>
            </div>
          )}
        </>
      )}
      {currentStep === 2 && (
        <Step2Title
          setTitle={title => console.log('Main Title:', title)}
          setAltTitles={titles => console.log('Alt Titles:', titles)}
          skipStep={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
          setIsStepValid={setIsStepValid} // Pass validation state setter
        />
      )}
      {currentStep === 3 && (
        <Step3DescriptionAndTime
          setDescription={setDescription}
          setPostDate={setPostDate}
          skipStep={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
        />
      )}
      {currentStep === 4 && (
        <Step4Thumbnail
          setThumbnail={setThumbnail}
          finishVideo={nextStep}
          skipStep={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
        />
      )}

      {/* Navigation Buttons */}
      <div className='flex justify-center mt-6 space-x-4'>
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
            className='px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-600 transition-transform transform hover:scale-105'
          >
            Previous
          </button>
        )}
        {currentStep < 4 && (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            disabled={
              (currentStep === 1 && !video) ||
              (currentStep === 2 && !isStepValid) ||
              (currentStep === 3 && (!description || !postDate))
            } // Disable if step requirements are not met
            className={`px-6 py-2 rounded-lg ${
              ((currentStep === 1 && video) ||
                (currentStep === 2 && isStepValid) ||
                (currentStep === 3 && description && postDate)) &&
              currentStep !== 4
                ? 'bg-blue-600 text-white hover:bg-blue-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } transition-transform transform hover:scale-105`}
          >
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button
            onClick={nextStep}
            className='px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-800 transition-transform transform hover:scale-105'
          >
            Queue Video
          </button>
        )}
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
            className={`px-4 py-2 rounded transform transition-transform hover:scale-105 ${
              currentStep === 4
                ? 'bg-black text-white'
                : 'border border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  )
}

export default VideoUploader
