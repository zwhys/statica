import React, { useEffect } from "react"
import { EventInput } from "@fullcalendar/core"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { fetchRecords } from "./api"

const DisplayRecords: React.FC<{
  setEvents: (events: EventInput[]) => void
  setisLoading: (isLoading: boolean) => void
}> = ({ setEvents, setisLoading }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  useEffect(() => {
    fetchRecords(userId, setEvents, setisLoading)
  }, [userId, setEvents, setisLoading])

  return null
}

export default DisplayRecords
