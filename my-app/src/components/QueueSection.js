import React, { useState } from 'react'
import CardSet from './Queue_section_helper/CardSet'

const QueueSection = ({
  viewMode,
  setViewMode
}) => {
  const handleOtherClick = mode => {
    setViewMode(mode) // Set the desired view mode (grid or list)
  }

  return (
    <div className='pr-12 pt-6 pb-6'>
      <div className='bg-indigo-900 p-6 rounded-lg shadow-md'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-lg font-bold text-gray-400'>
            Videos to be posted:{' '}
            <span className='text-indigo-400'>
              {viewMode === 'grid' ? 'Grid View' : 'List View'}
            </span>
          </h2>
          <div className='flex items-center space-x-4'>
            <button
              className={`${
                viewMode === 'grid'
                  ? 'bg-black text-white border-white' // Active state
                  : 'border border-black text-white hover:bg-black hover:text-white hover:border-white' // Default state
              } px-4 py-2 rounded transform transition-transform hover:scale-105`}
              onClick={() => handleOtherClick('grid')} // Call handleOtherClick for grid
            >
              <span>Grid</span>
            </button>
            <button
              className={`${
                viewMode === 'list'
                  ? 'bg-black text-white' // Active state
                  : 'border border-black text-white hover:bg-black hover:text-white hover:border-white' // Default state
              } px-4 py-2 rounded transform transition-transform hover:scale-105`}
              onClick={() => handleOtherClick('list')} // Call handleOtherClick for list
            >
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Display CardSet */}
        <CardSet viewMode={viewMode} />
      </div>
    </div>
  )
}

export default QueueSection
