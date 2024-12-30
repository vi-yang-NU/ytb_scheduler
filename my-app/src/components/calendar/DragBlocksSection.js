import React, { useRef } from "react";
import CalCard from "../calendar/cal_card";
import CalFill from "../calendar/cal_fil"; // Import CalFill for videoData

const DragBlocksSection = ({
  usedBlocks,
  handleDragStart,
  handleDeleteBlock,
  isDraggingFromCalendar,
}) => {
  const dragPreviewRef = useRef(null);

  const createDragPreview = (title, clientX, clientY) => {
    if (dragPreviewRef.current) {
      document.body.removeChild(dragPreviewRef.current);
      dragPreviewRef.current = null;
    }

    const dragPreview = document.createElement("div");
    dragPreview.textContent = title;
    dragPreview.style.position = "absolute";
    dragPreview.style.top = `${clientY}px`;
    dragPreview.style.left = `${clientX}px`;
    dragPreview.style.padding = "8px 12px";
    dragPreview.style.fontSize = "14px";
    dragPreview.style.color = "white";
    dragPreview.style.backgroundColor = "rgba(72, 61, 139, 0.9)";
    dragPreview.style.borderRadius = "4px";
    dragPreview.style.pointerEvents = "none";
    dragPreview.style.zIndex = "1000";

    document.body.appendChild(dragPreview);
    dragPreviewRef.current = dragPreview;

    return dragPreview;
  };

  const cleanupDragPreview = () => {
    if (dragPreviewRef.current) {
      if (document.body.contains(dragPreviewRef.current)) {
        document.body.removeChild(dragPreviewRef.current);
      }
      dragPreviewRef.current = null;
    }
  };

  return (
    <CalFill>
      {(videoData) => (
        <div className="flex flex-col bg-[#463D7C] rounded-md p-4 gap-4 items-start justify-start">
          <h3 className="text-lg font-bold text-white">Drag Blocks</h3>
          <div className="flex flex-wrap gap-5">
            {videoData.map((video, index) => (
              <div
                key={index}
                className={`rounded-md cursor-pointer ${
                  usedBlocks[video.title]
                    ? "opacity-50 pointer-events-none"
                    : "opacity-100"
                }`}
                style={{
                  width: "250px",
                  height: "185px",
                }}
                draggable={!usedBlocks[video.title]}
                onDragStart={(e) => {
                  if (!usedBlocks[video.title]) {
                    handleDragStart(video, false);
                    e.dataTransfer.setData("videoData", JSON.stringify(video));

                    createDragPreview(video.title, e.clientX, e.clientY);
                    e.dataTransfer.setDragImage(dragPreviewRef.current, 0, 0);

                    e.target.addEventListener("dragend", cleanupDragPreview, {
                      once: true,
                    });
                  }
                }}
              >
                <CalCard video={video} />
              </div>
            ))}
          </div>
          <div
            className={`bg-red-600 text-white font-bold text-sm w-10 h-10 flex items-center justify-center rounded-full ${
              isDraggingFromCalendar ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onDrop={handleDeleteBlock}
            onDragOver={(e) => e.preventDefault()}
          >
            🗑
          </div>
        </div>
      )}
    </CalFill>
  );
};

export default DragBlocksSection;
