import React, { useEffect } from "react"
import { EventInput } from "@fullcalendar/core"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<{
  setEvents: (events: EventInput[]) => void
  setisLoading: (isLoading: boolean) => void
  exerciseTypes: Exercise_types[]
}> = ({ setEvents, setisLoading, exerciseTypes }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  useEffect(() => {
    if (userId !== null && exerciseTypes.length > 0) {
      fetchRecords(userId, setEvents, setisLoading, exerciseTypes)
    }
  }, [userId, setEvents, setisLoading, exerciseTypes])

  return null
}

export default DisplayRecords
