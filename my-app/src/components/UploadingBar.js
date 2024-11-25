import React from 'react';

const UploadingBar = () => {
  return (
    <div className="w-1/3 mx-auto h-10 bg-gray-200 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-600 animate-pulse"></div>
      <p className="text-center text-sm text-gray-500 mt-2">Uploading...</p>
    </div>
  );
};

export default UploadingBar;
