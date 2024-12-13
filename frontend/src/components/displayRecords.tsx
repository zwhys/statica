import React, { useEffect, useRef } from "react"
import { EventInput } from "@fullcalendar/core"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<{
  setEvents: (events: EventInput[]) => void
  exerciseTypes: Exercise_types[]
}> = ({ setEvents, exerciseTypes }) => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const isFetching = useRef(false)

  useEffect(() => {
    const fetchData = async () => {
      if (userId !== null && exerciseTypes.length > 0 && !isFetching.current) {
        isFetching.current = true
        await fetchRecords(userId, setEvents, exerciseTypes)
        isFetching.current = false
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 3000)

    return () => clearInterval(intervalId)
  }, [userId, exerciseTypes, setEvents])

  return null
}

export default DisplayRecords
