// components/GridCard.js
import React from 'react';

const GridCard = () => {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-sm relative group transform transition-transform hover:scale-105 hover:shadow-[inset_0_0_0_2px_rgba(168,85,247,1)]">
      {/* Thumbnail */}
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <img
          src="https://via.placeholder.com/150"
          alt="Thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Metadata on Hover */}
      <div className="absolute inset-1 p-5 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-md">
        <h3 className="font-bold mb-2">Video Title</h3>
        <p className="mb-2">Date</p>
        <p>Description for video</p>
        <button className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:shadow-[inset_0_0_0_2px_rgba(66,133,244,1)]">
          Edit
        </button>
      </div>
    </div>
  );
};

export default GridCard;
