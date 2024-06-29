import React, { useState, useEffect } from "react"
import FullCalendar from "@fullcalendar/react";
import { EventInput } from '@fullcalendar/core'
import dayGridPlugin from "@fullcalendar/daygrid";




type DisplayRecordsProps = {
  setEvents: (events: EventInput[]) => void;
};

const DisplayRecords: React.FC<DisplayRecordsProps> = ({ setEvents }) => {
  const [records, setRecords] = useState<Records[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("http://localhost:3001/records", {
          method: "get",
        })
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const responseRecords = await response.json()
        setRecords(responseRecords)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchRecords()
  }, [])

  useEffect(() => {
    const calendarRecords: EventInput[] = records.map((record) => ({
      id: String(record.id),
      title: record.exercise_type,
      start: record.date_of_entry,
    }));
    setEvents(calendarRecords);
  }, [records, setEvents]);

  return null;
}

export default DisplayRecords
