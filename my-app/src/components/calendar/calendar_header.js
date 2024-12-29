import React from "react";
import ViewToggle from "../calendar/ViewToggle"; // Import the ViewToggle component

const CalendarHeader = ({
  currentMonthIndex,
  months,
  prevMonth,
  nextMonth,
  activeView,
  setActiveView,
}) => {
  return (
    <div className="flex justify-between items-center gap-4 w-full mx-auto">
      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        {currentMonthIndex > 0 && (
          <button
            onClick={prevMonth}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            ← Previous
          </button>
        )}
        <h2 className="text-2xl font-bold">
          {months[currentMonthIndex]?.name} {months[currentMonthIndex]?.year}
        </h2>
        {currentMonthIndex < months.length - 1 && (
          <button
            onClick={nextMonth}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Next →
          </button>
        )}
      </div>

      {/* View Toggle */}
      <ViewToggle activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};

export default CalendarHeader;
