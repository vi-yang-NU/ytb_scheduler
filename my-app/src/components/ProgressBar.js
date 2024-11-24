// components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep > index ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          >
          </div>

          {/* Line (except after the last circle) */}
          {index < 3 && (
            <div
              className={`flex-grow h-[2px] ${
                currentStep > index + 1 ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
