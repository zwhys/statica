import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (setEvents: (events: EventInput[]) => void) => {
    try {
      const response = await fetch("http://localhost:3001/records", {
        method: "get",
      })
      const responseRecords: Records[] = await response.json()
      const calendarRecords: EventInput[] = responseRecords.map((record: Records) => ({
        id: String(record.id),
        title: record.exercise_type,
        start: record.date_of_entry,
      }))
      setEvents(calendarRecords)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  export const checkIsAuthenticated = async (data: UserFormValues) => {
    try {
      const response = await fetch("http://localhost:3001/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log(result)
      return result.isAuthenticated // bool
    } catch (error) {
      console.error("Error checking authentication:", error)
      return false
    }
  }