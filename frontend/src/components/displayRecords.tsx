import React, { useEffect } from "react"
import { EventInput } from "@fullcalendar/core"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<{ setEvents: (events: EventInput[]) => void }> = ({ setEvents }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  useEffect(() => {
    fetchRecords(userId, setEvents)
  }, [userId, setEvents])

  return null
}

export default DisplayRecords
