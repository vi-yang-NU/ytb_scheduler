// components/ProgressBar.js
import React from 'react'

const ProgressBar = ({ currentStep }) => {
  return (
    <div className='flex justify-between items-center mt-2 mb-10 w-[60%] mx-auto'>
      {Array.from({ length: 4 }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Circle */}
          <div className='relative w-8 h-8 flex items-center justify-center'>
            {/* Static gray circle */}
            <div className='absolute w-full h-full rounded-full bg-gray-300'></div>
            
            {/* Animated blue circle */}
            {currentStep > index && (
              <div
                className='absolute w-full h-full rounded-full bg-blue-500 animate-circle-fill'
                style={{
                  clipPath: 'inset(0 100% 0 0)', // Initially fully clipped
                  animation:
                    currentStep > index
                      ? 'circle-fill 1s ease-in-out forwards'
                      : ''
                }}
              ></div>
            )}
          </div>

          {/* Line (except after the last circle) */}
          {index < 3 && (
            <div
              className={`flex-grow h-[2px] transition-all duration-500 ${
                currentStep > index + 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              style={{
                transformOrigin: 'left', // Ensures animation originates from the left
                transform: currentStep > index + 1 ? 'scaleX(1)' : 'scaleX(0)'
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressBar
