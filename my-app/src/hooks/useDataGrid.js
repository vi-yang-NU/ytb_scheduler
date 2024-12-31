import { useState, useEffect } from "react";
import Papa from "papaparse";

const useDataGrid = (csvPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
            const parsedData = results.data.map((row) => ({
              date: row.Date, // Assuming your CSV has a "Date" column
              title: row.Title, // Assuming your CSV has a "Title" column
            }));
            setData(parsedData);
            setLoading(false);
          },
        });
      })
      .catch((error) => {
        console.error("Error loading CSV:", error);
        setLoading(false);
      });
  }, [csvPath]);

  return { data, loading };
};

export default useDataGrid;
