import React from 'react';

const UploadingBar = ({ progress }) => {
  return (
    <div className="w-1/3 mx-auto h-10 bg-gray-200 rounded-lg relative overflow-hidden">
      {/* Progress Bar */}
      <div
        className="absolute inset-0 bg-purple-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
      {/* Percentage Display */}
      <p className="text-center text-sm text-gray-500 mt-2">
        {progress}% Uploaded
      </p>
    </div>
  );
};

export default UploadingBar;
