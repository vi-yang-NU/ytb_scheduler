import React, { useEffect, useState } from 'react';
import CalendarGrid from './CalendarGrid';
import useDataGrid from '../../hooks/useDataGrid';
// console.log('Is this working cheddar')


const PopulateGrid = () => {
    const { data: scheduleData, loading } = useDataGrid(process.env.PUBLIC_URL + '/csv/schedule.csv');
    const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    // console.log("Loading state:", loading);
    // console.log("Schedule data fetched:", scheduleData);

    if (!loading && scheduleData.length > 0) {
      // Initialize calendar data with 12 months and 31 days per month
      const newCalendarData = Array(12)
        .fill(null)
        .map(() => ({
          days: Array(31).fill(null).map(() => []),
        }));

      // console.log("Initialized calendar data structure:", newCalendarData);

      scheduleData.forEach(({ date, title }) => {
        try {
          // Parse date
          // console.log("Parsing date:", date);
          const [month, day, year] = date.split('/').map(Number);
          const fullYear = year < 100 ? year + 2000 : year; // Convert to 4-digit year
          const eventDate = new Date(fullYear, month - 1, day); // month is 0-indexed

          const monthIndex = eventDate.getMonth();
          const dayIndex = eventDate.getDate() - 1;

          // console.log("Processing event:", { date, title, eventDate });

          if (newCalendarData[monthIndex]?.days[dayIndex]) {
            newCalendarData[monthIndex].days[dayIndex].push({ title: title });
            console.log(`Added event "${title}" to month ${monthIndex + 1}, day ${dayIndex + 1}`);
          }
        } catch (error) {
          console.error("Error processing event:", { date, title }, error);
        }
      });

      console.log("Final calendar data structure:", newCalendarData);
      setCalendarData(newCalendarData);
    }
  }, [scheduleData, loading]);

  return (
    <div>
      {!loading ? (
        <CalendarGrid
          currentMonthIndex={new Date().getMonth()}
          months={calendarData} // Pass loaded data
          handleDrop={(dayIndex, droppedData) => {
            console.log("Handling drop event:", { dayIndex, droppedData });

            setCalendarData((prev) => {
              const updatedMonths = [...prev];
              updatedMonths[new Date().getMonth()].days[dayIndex].push(droppedData);
              console.log("Updated calendar data after drop:", updatedMonths);
              return updatedMonths;
            });
          }}
          handleDeleteBlockByClick={(monthIndex, dayIndex, blockIndex) => {
            console.log("Deleting block by click:", { monthIndex, dayIndex, blockIndex });

            setCalendarData((prev) => {
              const updatedMonths = [...prev];
              updatedMonths[monthIndex].days[dayIndex].splice(blockIndex, 1);
              console.log("Updated calendar data after delete:", updatedMonths);
              return updatedMonths;
            });
          }}
        />
      ) : (
        <p>Loading schedule...</p>
      )}
    </div>
  );
};

export default PopulateGrid;

