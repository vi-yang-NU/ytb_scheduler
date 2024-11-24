// components/ListCard.js
import React from 'react';

const ListCard = ({ isDraft }) => {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-sm relative group flex items-center justify-between transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)] w-full max-w-4xl mx-auto">
      {/* Date Posting */}
      <div className="text-center flex-1">
        <p className="mb-2">Date Posting</p>
      </div>

      {/* Title */}
      <div className="text-center flex-1">
        <p className="mb-2">Title</p>
      </div>

      {/* Draft Status */}
      <div className="flex-1 text-center">
        {isDraft ? (
          <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/320x180"
              alt="Thumbnail Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Platform */}
      <div className="text-center flex-1">
        <p className="mb-2">Platform</p>
      </div>

      {/* Edit Button */}
      <button className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:shadow-[inset_0_0_0_2px_rgba(66,133,244,1)]">
        Edit
      </button>
    </div>
  );
};

export default ListCard;
