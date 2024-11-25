import React from 'react';

const GridCard = ({ platform, title, description, postingDate, thumbnail }) => {
  return (
    <div className='border border-blue-900 p-6 rounded-lg shadow-sm relative group transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)] hover:border-blue-900 bg-black'>
      {/* Thumbnail */}
      <div className='relative w-full h-0 pb-[56.25%] z-0 group'>
        <img
          src={thumbnail}
          alt='Thumbnail'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      {/* Metadata - Appears on hover */}
      <div className='absolute inset-1 p-5 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-md'>
        <h3 className='font-bold mb-2 truncate max-w-[90%] whitespace-normal break-words'>
          {title}
        </h3>
        <p className='mb-2'>{postingDate}</p>
        <p>{description}</p>
      </div>

      {/* Edit Button */}
      <div className='absolute top-2 right-2 z-20'>
        <div className='relative opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <button className='px-2 py-1 rounded transition-all duration-200 border border-blue-900 text-blue-900 bg-transparent hover:bg-blue-900 hover:text-white'>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
