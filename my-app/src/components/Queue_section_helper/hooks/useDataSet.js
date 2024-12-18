// hooks/useDataSet.js
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useDataSet = (csvPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log('Fetching:', csvPath);
  console.log('State before:', { data, loading });


  useEffect(() => {
    fetch(csvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(), // Trim spaces from headers
          complete: (results) => {
            console.log('Parsed Data:', results.data);
            setData(results.data);
            setLoading(false);
          },
        });
      })
      .catch((error) => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      });
  }, [csvPath]);

  return { data, loading };
};

export default useDataSet;
