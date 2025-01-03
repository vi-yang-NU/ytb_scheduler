import { useState, useEffect } from 'react'
import Papa from 'papaparse'
console.log('Is this working chat')

const useDataGrid = (
  csvPath,
  columnMappings = {
    date: 'Posting_date',
    title: 'Title'
  }
) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data from CSV path:', csvPath)
      try {
        const response = await fetch(csvPath)
        console.log('Fetch response status:', response.status)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const csvText = await response.text()
        console.log('CSV Text fetched successfully. Beginning to parse...')

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: header => header.trim(), // Trim spaces from headers
          complete: results => {
            console.log('CSV Parsing complete. Raw Results:', results)

            if (results.errors.length) {
              console.error('Parsing errors:', results.errors)
              setError(results.errors)
              setLoading(false)
              return
            }

            const parsedData = results.data.map(row => ({
              date: row[columnMappings.date], // Map "date" field dynamically
              title: row[columnMappings.title] // Map "title" field dynamically
            }))
            // console.log('Mapped Data:', parsedData)

            // console.log('Parsed data after mapping:', parsedData)
            setData(parsedData)
            setLoading(false)
          },
          error: err => {
            console.error('Error during CSV parsing:', err)
            setError(err)
            setLoading(false)
          }
        })
      } catch (err) {
        console.error('Error fetching or processing CSV:', err)
        setError(err)
        setLoading(false)
      }
    }

    fetchData()
  }, [csvPath, columnMappings])

//   console.log(
//     'Inside useDataGrid - Loading:',
//     loading,
//     'Data:',
//     data,
//     'Error:',
//     error
//   )

  return { data, loading, error }
}

export default useDataGrid

