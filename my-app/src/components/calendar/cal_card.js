import React from "react";

const cal_card = ({ video }) => {
  const { title, description, postingDate, thumbnail } = video;

  return (
    <div className="relative border border-indigo-600 rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:border-white bg-indigo-700 group overflow-hidden">
      {/* Thumbnail */}
      <div className="relative w-full h-48">
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Sliding Background */}
      <div className="absolute top-0 right-[-100%] group-hover:right-0 transition-all duration-100 bg-indigo-800 h-full w-full"></div>

      {/* Static Text (Independent from Sliding Background) */}
      <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-bold text-lg text-white truncate">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{postingDate}</p>
        <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default cal_card;
