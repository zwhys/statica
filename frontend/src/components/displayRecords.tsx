import React, { useEffect } from "react"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<DisplayRecordsProps> = ({ setEvents }) => {
  useEffect(() => {
    fetchRecords(setEvents)
  }, [setEvents])

  return null
}

export default DisplayRecords
