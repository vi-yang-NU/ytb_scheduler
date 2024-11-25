import React from 'react'

const ListCard = ({ platform, title, description, postingDate, thumbnail }) => {
  return (
    <div className='border border-gray-300 p-6 rounded-lg shadow-sm relative group flex items-center justify-between transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)] w-full max-w-4xl mx-auto'>
      {/* Date Posting */}
      <div className='text-center flex-1'>
        <p className='mb-2'>{postingDate}</p>
      </div>

      {/* Title */}
      <div className='text-center flex-1'>
        <p className='mb-2 max-w-[80%] mx-auto break-words whitespace-normal'>
          {title}
        </p>
      </div>

      {/* Thumbnail */}
      <div className='flex-1 text-center'>
        <div className='relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden'>
          <img
            src={thumbnail}
            alt='Thumbnail Preview'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Platform */}
      <div className='text-center flex-1'>
        <p className='mb-2'>{platform}</p>
      </div>

      {/* Edit Button */}
      <div className='absolute top-2 right-2 z-20'>
        <div className='relative opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <button className='px-2 py-1 rounded transition-all duration-200 border border-purple-600 text-purple-600 bg-transparent hover:bg-purple-600 hover:text-white'>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListCard
