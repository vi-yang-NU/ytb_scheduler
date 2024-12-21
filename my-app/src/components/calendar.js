import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [months, setMonths] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [isDraggingFromCalendar, setIsDraggingFromCalendar] = useState(false);
  const [usedBlocks, setUsedBlocks] = useState({}); // Track blocks that have been placed

  // Initialize months (current and next 2 months)
  useEffect(() => {
    const today = new Date();
    const tempMonths = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const days = Array.from({ length: daysInMonth }, () => null); // Days initialized with null
      tempMonths.push({
        name: date.toLocaleString("default", { month: "long" }),
        year: date.getFullYear(),
        days,
      });
    }
    setMonths(tempMonths);
  }, []);

  const handleDragStart = (item, fromCalendar = false) => {
    setDraggingItem(item);
    setIsDraggingFromCalendar(fromCalendar);
  };

  const handleDrop = (dayIndex) => {
    if (!draggingItem) return;

    const updatedMonths = [...months];
    const currentMonth = updatedMonths[currentMonthIndex];

    // Ensure block can only exist in one day
    if (usedBlocks[draggingItem]) {
      const [prevMonthIndex, prevDayIndex] = usedBlocks[draggingItem];
      updatedMonths[prevMonthIndex].days[prevDayIndex] = null;
    }

    currentMonth.days[dayIndex] = draggingItem;
    setUsedBlocks({ ...usedBlocks, [draggingItem]: [currentMonthIndex, dayIndex] });
    setMonths(updatedMonths);
    setDraggingItem(null);
    setIsDraggingFromCalendar(false);
  };

  const handleDeleteBlock = () => {
    if (draggingItem && usedBlocks[draggingItem]) {
      const [monthIndex, dayIndex] = usedBlocks[draggingItem];
      const updatedMonths = [...months];
      updatedMonths[monthIndex].days[dayIndex] = null;

      delete usedBlocks[draggingItem];
      setMonths(updatedMonths);
      setDraggingItem(null);
      setIsDraggingFromCalendar(false);
    }
  };

  const handleDeleteBlockByClick = (monthIndex, dayIndex) => {
    const updatedMonths = [...months];
    const blockToRemove = updatedMonths[monthIndex].days[dayIndex];

    if (blockToRemove) {
      delete usedBlocks[blockToRemove];
      updatedMonths[monthIndex].days[dayIndex] = null;
      setMonths(updatedMonths);
    }
  };

  const nextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#2E2850] text-white">
      {/* Calendar Section */}
      <div className="flex flex-col items-center flex-grow">
        {/* Calendar Header */}
        <div className="flex items-center justify-between w-full max-w-4xl p-4">
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

        {/* Calendar Grid */}
        <div
          className="grid grid-cols-7 gap-4 w-full max-w-4xl bg-white p-6 rounded-md text-black"
          onDragOver={(e) => e.preventDefault()}
        >
          {months[currentMonthIndex]?.days.map((day, index) => (
            <div
              key={index}
              className="h-20 border border-gray-300 rounded-md flex items-center justify-center relative"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
            >
              <span className="absolute top-2 left-2 text-sm text-gray-500">
                {index + 1}
              </span>
              {day && (
                <div
                  className="bg-purple-500 text-white px-2 py-1 rounded-md cursor-pointer relative group"
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(day, true);
                    e.dataTransfer.setDragImage(e.target, 0, 0);
                  }}
                >
                  {day}
                  <span
                    className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDeleteBlockByClick(currentMonthIndex, index)}
                  >
                    ×
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/4 p-6 bg-[#463D7C] flex flex-col justify-between rounded-md h-[50%]">
        {/* Drag Blocks */}
        <div className="flex flex-col w-full">
          <h3 className="text-lg font-bold text-white mb-4">Drag Blocks</h3>
          {["Block A", "Block B"].map((block) => (
            <div
              key={block}
              className={`px-4 py-2 rounded-md mb-4 cursor-pointer ${
                usedBlocks[block] ? "bg-gray-500 text-gray-300" : "bg-purple-500 text-white"
              }`}
              draggable={!usedBlocks[block]}
              onDragStart={(e) => {
                if (!usedBlocks[block]) {
                  handleDragStart(block, false);
                  e.dataTransfer.setDragImage(e.target, 0, 0);
                }
              }}
            >
              {block}
            </div>
          ))}
        </div>

        {/* Trash Can */}
        <div
          className={`bg-red-600 text-white font-bold text-sm w-10 h-10 flex items-center justify-center rounded-full mt-4 ${
            isDraggingFromCalendar ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onDrop={handleDeleteBlock}
          onDragOver={(e) => e.preventDefault()}
        >
          🗑
        </div>
      </div>
    </div>
  );
};

export default Calendar;
