import React from "react";
import ViewToggle from "../calendar/ViewToggle"; // Import ViewToggle
import VideoUploader from "./VideoUploader/VideoUploader"; // Import VideoUploader

const UploadVideos = ({ activeView, setActiveView }) => {
  const handleNextStep = () => {
    console.log("Video queued successfully!"); // Handle final step completion
  };

  return (
    <div className="p-6 rounded-md shadow-md min-h-screen">
      {/* View Toggle */}
      <div className="flex justify-end mb-6">
        <ViewToggle activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Upload Section */}
      <h1 className="text-2xl font-bold mb-4 text-white">Upload Videos</h1>

      {/* VideoUploader */}
      <VideoUploader nextStep={handleNextStep} />
    </div>
  );
};

export default UploadVideos;
