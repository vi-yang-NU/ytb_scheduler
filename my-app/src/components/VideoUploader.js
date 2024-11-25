import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import fileImage from './images/file.jpg';
import UploadingBar from './UploadingBar'; // New uploading animation bar
const VideoUploader = ({
  handleDrop, // No longer needed externally
  handleDragOver,
  currentStep,
  setCurrentStep,
  nextStep,
}) => {
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const [uploadedFile, setUploadedFile] = useState(null); // State to store uploaded file
  const [isUploading, setIsUploading] = useState(false); // State to track uploading

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      startUploading(file);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault(); // Prevent default browser behavior
    setIsDragging(false); // Reset dragging state
    const file = event.dataTransfer.files[0];
    if (file) {
      startUploading(file);
    }
  };

  const startUploading = (file) => {
    setIsUploading(true); // Simulate uploading
    setTimeout(() => {
      setUploadedFile(file);
      setIsUploading(false);
    }, 2000); // Simulated upload time
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="mt-8">
      {!uploadedFile && !isUploading ? (
        <div
          className="relative mx-auto w-1/3 transition-transform duration-300 hover:scale-105"
          onDrop={handleFileDrop} // Handle file drop
          onDragOver={(event) => {
            handleDragOver(event);
            setIsDragging(true);
          }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          {/* Drag-and-Drop Box */}
          <div className="bg-gray-300 h-40 rounded-lg flex items-center justify-center relative">
            {/* Left Side of the Box */}
            <div
              className={`absolute left-0 w-1/2 h-full flex flex-col items-center justify-center bg-gray-200 group`}
            >
              {/* File Upload Button */}
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept="video/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFileUpload} // Handle file upload
                />
                <div className="w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(128,0,128,0.6)]">
                  <img
                    src={fileImage}
                    alt="Upload Icon"
                    className="w-8 h-8 object-contain transition-transform"
                  />
                </div>
                {/* Caption */}
                <p className="text-black text-sm mt-2">Or click to upload</p>
              </label>
            </div>

            {/* Right Side of the Box */}
            <div
              className={`absolute right-0 w-1/2 h-full transition-all duration-300 ${
                isDragging
                  ? 'bg-white scale-105 outline outline-4 outline-purple-600'
                  : 'bg-gray-200'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-black text-lg font-bold">Drop file here</p>
              </div>
            </div>
          </div>
        </div>
      ) : isUploading ? (
        <UploadingBar /> // Show uploading bar during upload
      ) : (
        <div className="mx-auto w-1/3 h-40 bg-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
          >
            <source src={URL.createObjectURL(uploadedFile)} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <div className="flex justify-center mt-6 space-x-4">
        {/* Previous Step Button */}
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Previous Step
          </button>
        )}

        {/* Next Step Button */}
        <button
          onClick={nextStep}
          className={`px-6 py-2 rounded-lg ${
            uploadedFile
              ? 'bg-purple-600 text-white hover:bg-purple-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!uploadedFile}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default VideoUploader;
