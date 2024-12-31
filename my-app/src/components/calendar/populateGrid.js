import React, { useEffect, useState } from 'react'
import CalendarGrid from './CalendarGrid'
import useDataSet from './hooks/useDataSet'

const populateGrid = () => {
  const { data: scheduleData, loading } = useDataSet('/path/to/Schedule.csv') // Update the path as necessary
  const [calendarData, setCalendarData] = useState([])

  useEffect(() => {
    if (!loading && scheduleData.length > 0) {
      // Initialize calendar data with 12 months and 31 days per month
      const newCalendarData = Array(12)
        .fill(null)
        .map((_, monthIndex) => ({
          days: Array(31)
            .fill(null)
            .map(() => [])
        }))

      scheduleData.forEach(({ date, title }) => {
        const eventDate = new Date(date) // Parse date string to Date object
        const monthIndex = eventDate.getMonth()
        const dayIndex = eventDate.getDate() - 1

        if (newCalendarData[monthIndex]?.days[dayIndex]) {
          newCalendarData[monthIndex].days[dayIndex].push({ title })
        }
      })

      setCalendarData(newCalendarData)
    }
  }, [scheduleData, loading])

  return (
    <div>
      {!loading ? (
        <CalendarGrid
          currentMonthIndex={new Date().getMonth()}
          months={calendarData} // Pass loaded data
          handleDrop={(dayIndex, droppedData) => {
            setCalendarData(prev => {
              const updatedMonths = [...prev]
              updatedMonths[new Date().getMonth()].days[dayIndex].push(
                droppedData
              )
              return updatedMonths
            })
          }}
          handleDeleteBlockByClick={(monthIndex, dayIndex, blockIndex) => {
            setCalendarData(prev => {
              const updatedMonths = [...prev]
              updatedMonths[monthIndex].days[dayIndex].splice(blockIndex, 1)
              return updatedMonths
            })
          }}
        />
      ) : (
        <p>Loading schedule...</p>
      )}
    </div>
  )
}

export default populateGrid
