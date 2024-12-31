import React from "react";
import useDataSet from "../../hooks/useDataSet"; // Import the custom hook

const csvFilePath = "/csv/schedule.csv"; // Path to the CSV file in the public folder

const CalFill = ({ children }) => {
  const { data: rawData, loading } = useDataSet(csvFilePath);

  console.log("Raw Data in CalFill:", rawData); // Debugging log

  // Transform raw data into the format required
  const videoData = rawData.map((row) => ({
    title: row.Title,
    description: row.Description,
    thumbnail: `${process.env.PUBLIC_URL}/thumbnails/${row.Thumbnail}.png`, // Ensure the correct absolute path
    postingDate: row.Posting_date,
  }));

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!videoData || videoData.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  return children(videoData); // Pass videoData to children
};

export default CalFill;
