import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Calendar from "../components/calendar/calendar";
import UploadVideos from "../components/upload_videos/uploadVideos";

const Scheduler = () => {
  const [activeView, setActiveView] = useState("calendar"); // Set default to "calendar"

  return (
    <div className="min-h-screen bg-[#2E2850]">
      <div className="grid grid-cols-10 gap-4 max-w-full mx-auto h-full">
        {/* Navigation */}
        <div className="col-span-1 h-full">
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="col-span-9 p-6">
          {activeView === "calendar" ? (
            <Calendar activeView={activeView} setActiveView={setActiveView} />
          ) : (
            <UploadVideos activeView={activeView} setActiveView={setActiveView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
