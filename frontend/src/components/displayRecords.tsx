// import React, { useEffect } from "react"
// import { fetchRecords } from "./api"

// const DisplayRecords: React.FC<DisplayRecordsProps> = ({ setEvents }) => {
//   useEffect(() => {
//     fetchRecords(setEvents)
//   }, [setEvents])

//   return null
// }

// export default DisplayRecords

import React, { useState, useEffect } from "react"
import { EventInput } from "@fullcalendar/core"

type DisplayRecordsProps = {
  setEvents: (events: EventInput[]) => void
}

const DisplayRecords: React.FC<DisplayRecordsProps> = ({ setEvents }) => {
  const [records, setRecords] = useState<Records[]>([])

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("http://localhost:3001/records", {
          method: "get",
        })
        const responseRecords = await response.json()
        const calendarRecords: EventInput[] = responseRecords.map((record: any) => ({
          id: String(record.id),
          title: record.exercise_type,
          start: record.date_of_entry,
        }))
        setEvents(calendarRecords)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchRecords()
  }, [setEvents])


  return null
}

export default DisplayRecords
