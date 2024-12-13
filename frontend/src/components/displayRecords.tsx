import React, { useEffect } from "react"
import { EventInput } from "@fullcalendar/core"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<{
  setEvents: (events: EventInput[]) => void
  exerciseTypes: Exercise_types[]
}> = ({ setEvents, exerciseTypes }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  useEffect(() => {
    if (userId !== null && exerciseTypes.length > 0) {
      fetchRecords(userId, setEvents, exerciseTypes)
    }
  }, [userId, setEvents, exerciseTypes])

  setInterval(() => {
    if (userId !== null && exerciseTypes.length > 0) {
      ;(async () => {
        await fetchRecords(userId, setEvents, exerciseTypes)
      })()
    }
  }, 5000)

  return null
}

export default DisplayRecords
