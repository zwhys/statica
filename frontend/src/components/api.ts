import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (userId: number | null, setEvents: (events: EventInput[]) => void) => {
  try {
    const response = await fetch(`http://localhost:3001/records?userId=${userId}`, {
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

export const getUserId = async (data: UserFormValues) => {
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

export const addUser = async (data: UserFormValues) => {
  try {
    const response = await fetch("http://localhost:3001/add_user", {
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

export const checkUsernameAvailable = async (username: string) => {
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
