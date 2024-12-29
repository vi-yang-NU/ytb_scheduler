import React, { useState, useEffect } from "react";
import CalendarHeader from "./calendar_header";
import CalendarGrid from "./CalendarGrid";
import DragBlocksSection from "./DragBlocksSection";
import videoData from "../calendar/cal_fil"; // Import video data

const Calendar = ({ activeView, setActiveView }) => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [months, setMonths] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [isDraggingFromCalendar, setIsDraggingFromCalendar] = useState(false);
  const [usedBlocks, setUsedBlocks] = useState({});

  useEffect(() => {
    const today = new Date();
    const tempMonths = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const daysInMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      const startDay = date.getDay();
      const days = Array.from({ length: startDay }, () => null);
      for (let day = 1; day <= daysInMonth; day++) {
        days.push([]);
      }
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

    currentMonth.days[dayIndex].push(draggingItem);
    setUsedBlocks({ ...usedBlocks, [draggingItem]: true });
    setMonths(updatedMonths);
    setDraggingItem(null);
    setIsDraggingFromCalendar(false);
  };

  const handleDeleteBlockByClick = (monthIndex, dayIndex, blockIndex) => {
    const updatedMonths = [...months];
    const blockToRemove = updatedMonths[monthIndex].days[dayIndex][blockIndex];

    if (blockToRemove) {
      delete usedBlocks[blockToRemove];
      updatedMonths[monthIndex].days[dayIndex].splice(blockIndex, 1);
      setMonths(updatedMonths);
    }
  };

  const handleDeleteBlock = () => {
    if (draggingItem) {
      const updatedMonths = [...months];
      for (let day of updatedMonths[currentMonthIndex].days) {
        const index = day.indexOf(draggingItem);
        if (index !== -1) {
          day.splice(index, 1);
          break;
        }
      }
      delete usedBlocks[draggingItem];
      setMonths(updatedMonths);
      setDraggingItem(null);
      setIsDraggingFromCalendar(false);
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
    <div className="flex flex-col min-h-screen bg-[#2E2850] text-white p-6 gap-4">
      <CalendarHeader
        currentMonthIndex={currentMonthIndex}
        months={months}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        activeView={activeView} // Pass the active view
        setActiveView={setActiveView} // Pass `setActiveView` to CalendarHeader
      />
      <div className="grid grid-cols-[3fr_1fr] gap-6 w-full mx-auto">
        <CalendarGrid
          currentMonthIndex={currentMonthIndex}
          months={months}
          handleDrop={handleDrop}
          handleDeleteBlockByClick={handleDeleteBlockByClick}
        />
        <DragBlocksSection
          videoData={videoData}
          usedBlocks={usedBlocks}
          handleDragStart={handleDragStart}
          handleDeleteBlock={handleDeleteBlock}
          isDraggingFromCalendar={isDraggingFromCalendar}
        />
      </div>
    </div>
  );
};

export default Calendar;
