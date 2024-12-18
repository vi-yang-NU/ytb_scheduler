// components/CardSet.js
import React from 'react';
import useDataSet from './hooks/useDataSet';
import GridCard from './GridCard';
import ListCard from './ListCard';

const CardSet = ({ viewMode = 'grid' }) => {
  const { data, loading } = useDataSet('/csv/Schedule.csv'); // Destructure data and loading

  console.log('Data in CardSet:', data); // Debugging parsed data

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  return (
    <div
      className={`p-4 ${
        viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col gap-4'
      }`}
    >
      {data.map((item, index) => {
        console.log(`Rendering card #${index + 1}`);
        console.log('GridCard item data:', {
          Platform: item.Platform,
          Title: item.Title,
          Description: item.Description,
          Posting_date: item.Posting_date,
          Thumbnail: item.Thumbnail,
        });

        return viewMode === 'grid' ? (
          <GridCard
            key={index}
            platform={item.Platform}
            title={item.Title}
            description={item.Description}
            postingDate={item.Posting_date}
            thumbnail={`/thumbnails/${item.Thumbnail}.png`} // Correct thumbnail path
            />
        ) : (
          <ListCard
            key={index}
            platform={item.Platform}
            title={item.Title}
            description={item.Description}
            postingDate={item.Posting_date}
            thumbnail={`/thumbnails/${item.Thumbnail}.png`}
          />
        );
      })}
    </div>
  );
};

export default CardSet;
