import React from 'react';

const Step3DescriptionAndTime = ({ setDescription, setPostDate, skipStep }) => {
  return (
    <div className="mx-auto w-2/3 text-center">
      <h2 className="text-xl font-bold mb-4">Write a description</h2>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      ></textarea>
      <h3 className="text-lg mb-4">Set Posting Date</h3>
      <input
        type="date"
        className="w-full p-2 border rounded mb-4"
        onChange={(e) => setPostDate(e.target.value)}
      />
    </div>
  );
};

export default Step3DescriptionAndTime;
