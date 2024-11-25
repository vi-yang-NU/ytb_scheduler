import React from 'react';
import fileImage from '../../images/file.jpg';

const Step1UploadVideo = ({
  handleFileUpload,
  handleFileDrop,
  isDragging,
  setIsDragging,
}) => {
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <div
      className={`relative mx-auto w-1/3 transition-transform duration-300 hover:scale-105 ${
        isDragging ? 'border border-blue-500 bg-blue-100' : 'border border-gray-300'
      }`}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="h-40 flex">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-200 flex flex-col items-center justify-center group">
          <label className="flex flex-col items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="video/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileUpload}
            />
            <div className="w-12 h-12 bg-white rounded shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(66,133,244,0.6)]">
              <img
                src={fileImage}
                alt="Upload Icon"
                className="w-8 h-8 object-contain transition-transform"
              />
            </div>
            <p className="text-black text-sm mt-2">Or click to upload</p>
          </label>
        </div>

        {/* Right Side */}
        <div
          className={`w-1/2 bg-gray-200 flex items-center justify-center transition-all ${
            isDragging
              ? 'outline outline-4 outline-blue-500'
              : 'group-hover:outline group-hover:outline-2 group-hover:outline-gray-400'
          }`}
        >
          <p className="text-black text-lg font-bold">Drop file here</p>
        </div>
      </div>
    </div>
  );
};

export default Step1UploadVideo;
