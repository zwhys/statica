import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (setEvents: (events: any) => void) => { //TODO: Fix the type
  try {
    const response = await fetch("http://localhost:3001/records", {
      method: "get",
      headers: { 
        "Content-Type": "application/json",
       }, 
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

    return await response.json()
  } catch (error) {
    console.error("Error checking authentication:", error)
    return false
  }
}

export const checkIsUniqueUsername = async (username: string) => {
  try {
    const response = await fetch("http://localhost:3001/check_username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })

    return await response.json()
  } catch (error) {
    console.error("Error checking username uniqueness:", error)
    return false
  }
}

export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
       }, 
    })
    const responseUsers: User[] = await response.json()
      } catch (error) {
    console.error("Error fetching data:", error)
  }
} 

export const fetchExercise_types = async (setExercise_types: (types: Exercise_types[]) => void) => {
  try {
    const response = await fetch("http://localhost:3001/exercise_types", {
      method: "GET",
    })
    const responseExercise_types: Exercise_types[] = await response.json()
    setExercise_types(responseExercise_types)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}
