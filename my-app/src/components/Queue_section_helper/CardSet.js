import React from 'react';
import useDataSet from './hooks/useDataSet';
import GridCard from './GridCard';
import ListCard from './ListCard';
import CalendarView from './CalendarView'; // Import your calendar view component

const CardSet = ({ viewMode = 'grid' }) => {
  const { data, loading } = useDataSet('/csv/Schedule.csv'); // Destructure data and loading

  console.log('Data in CardSet:', data); // Debugging parsed data

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  // Define views using the tuple method
  const views = {
    grid: () => (
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <GridCard
            key={index}
            platform={item.Platform}
            title={item.Title}
            description={item.Description}
            postingDate={item.Posting_date}
            thumbnail={`/thumbnails/${item.Thumbnail}.png`} // Correct thumbnail path
          />
        ))}
      </div>
    ),
    list: () => (
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <ListCard
            key={index}
            platform={item.Platform}
            title={item.Title}
            description={item.Description}
            postingDate={item.Posting_date}
            thumbnail={`/thumbnails/${item.Thumbnail}.png`}
          />
        ))}
      </div>
    ),
    calendar: () => (
      <CalendarView data={data} /> // Pass data to the CalendarView component
    ),
  };

  // Render based on the selected view mode
  return (
    <div className="p-4">
      {views[viewMode] ? views[viewMode]() : <p>Invalid view mode</p>}
    </div>
  );
};

export default CardSet;
