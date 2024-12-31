import React, { useState } from "react";
import ViewToggle from "../calendar/ViewToggle"; // Import ViewToggle
import VideoUploader from "./VideoUploader/VideoUploader"; // Import VideoUploader
import DragBlocksSection from "../calendar/DragBlocksSection"; // Import DragBlocksSection

const UploadVideos = ({ activeView, setActiveView }) => {
  const [usedBlocks, setUsedBlocks] = useState({});
  const [draggingItem, setDraggingItem] = useState(null);
  const [isDraggingFromCalendar, setIsDraggingFromCalendar] = useState(false);

  const handleDragStart = (item) => {
    setDraggingItem(item);
    setIsDraggingFromCalendar(false);
  };

  const handleDeleteBlock = () => {
    if (draggingItem) {
      delete usedBlocks[draggingItem];
      setDraggingItem(null);
      setIsDraggingFromCalendar(false);
    }
  };

  const handleNextStep = () => {
    console.log("Video queued successfully!");
  };

  return (
    <div className="p-6 rounded-md shadow-md min-h-screen">
      {/* View Toggle */}
      <div className="flex justify-end mb-6">
        <ViewToggle activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-[70%_30%] gap-6">
        {/* Left Section (Upload Videos and VideoUploader) */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">Upload Videos</h1>
          <VideoUploader nextStep={handleNextStep} />
        </div>

        {/* Right Section (DragBlocks) */}
        <div>
          <h1 className="text-2xl mb-8 font-bold text-white">View Drafts</h1>
          <DragBlocksSection
            usedBlocks={usedBlocks}
            handleDragStart={handleDragStart}
            handleDeleteBlock={handleDeleteBlock}
            isDraggingFromCalendar={isDraggingFromCalendar}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
