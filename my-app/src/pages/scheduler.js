import React from "react";
import Navigation from "../components/Navigation.js";
import Calendar from "../components/calendar.js";

const Scheduler = () => {
  return (
    <div className="min-h-screen bg-[#2E2850]">
      <div className="grid grid-cols-10 gap-4 max-w-full mx-auto h-full">
        {/* Navigation */}
        <div className="col-span-1 h-full">
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="col-span-9 p-6">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
