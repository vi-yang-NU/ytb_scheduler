import React, { useState } from 'react';

const Step4Thumbnail = ({ setThumbnail }) => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [isDragging, setIsDragging] = useState(false);

  const handleThumbnailUpload = (file) => {
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleThumbnailUpload(file);
    }
  };

  return (
    <div className="mx-auto w-2/3 text-center">
      <h2 className="text-xl text-white font-bold mb-4">Upload a Thumbnail</h2>
      <div
        className={`border-dashed border-4 rounded-md p-8 ${
          isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-500 bg-indigo-900'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-full max-w-sm mx-auto mb-4"
          />
        ) : (
          <p className="text-white">
            Drag and drop an image here to upload
          </p>
        )}
      </div>
      {/* Display File Name */}
      <p className="mt-4 text-white">{fileName}</p>
    </div>
  );
};

export default Step4Thumbnail;
