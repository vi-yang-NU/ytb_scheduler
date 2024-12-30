import React from 'react';

const CalendarGrid = ({
  currentMonthIndex,
  months,
  handleDrop,
  handleDeleteBlockByClick,
}) => {
  return (
    <div className='flex flex-col bg-gray-900 p-6 rounded-md text-white'>
      {/* Weekday Header */}
      <div className='grid grid-cols-7 gap-4 text-center font-bold mb-4'>
        {['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div
        className='grid grid-cols-7 gap-4'
        onDragOver={(e) => e.preventDefault()}
      >
        {months[currentMonthIndex]?.days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className={`h-32 border border-gray-700 rounded-md relative overflow-hidden transform transition-all duration-150 group ${
              day === null ? 'bg-gray-800' : 'bg-gray-900'
            } hover: hover:scale-105 hover:font-bold hover:text-white hover:border-white`}
            onMouseEnter={(e) => e.currentTarget.classList.add('shadow-glow')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('shadow-glow')}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add('shadow-glow');
            }}
            onDragLeave={(e) => e.currentTarget.classList.remove('shadow-glow')}
            onDrop={(e) => {
              if (day !== null) {
                handleDrop(dayIndex);
                e.currentTarget.classList.remove('shadow-glow');
              }
            }}
          >
            {day !== null && (
              <>
                <span className='absolute top-2 left-2 text-sm text-gray-400'>
                  {dayIndex +
                    1 -
                    months[currentMonthIndex].days.findIndex((d) => d !== null)}
                </span>
                <div className='flex flex-wrap items-center justify-center h-full gap-1 p-1'>
                  {day.map((block, blockIndex) => (
                    <div
                      key={blockIndex}
                      className='bg-purple-500 text-white text-xs px-2 py-1 rounded-md relative group w-1/2'
                    >
                      {block}
                      <span
                        className='absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity'
                        onClick={() => {
                          handleDeleteBlockByClick(
                            currentMonthIndex,
                            dayIndex,
                            blockIndex
                          );
                        }}
                      >
                        ×
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
