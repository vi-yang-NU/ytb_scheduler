import React from "react";

const ViewToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="flex items-center">
      <button
        className={`px-4 py-2 rounded-l-lg ${
          activeView === "calendar"
            ? "bg-black text-white"
            : "bg-transparent border border-black text-white"
        }`}
        onClick={() => setActiveView("calendar")}
      >
        Calendar
      </button>
      <button
        className={`px-4 py-2 rounded-r-lg ${
          activeView === "uploadVideos"
            ? "bg-black text-white"
            : "bg-transparent border border-black text-white"
        }`}
        onClick={() => setActiveView("uploadVideos")}
      >
        Manage Videos
      </button>
    </div>
  );
};

export default ViewToggle;
