import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (
  userId: number | null,
  setEvents: (events: EventInput[]) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    setIsLoading(true)
    const response = await fetch(`http://localhost:3001/records?userId=${userId}`, {
      method: "GET",
    })
    const responseRecords = await response.json()
    const calendarRecords: EventInput[] = responseRecords.map((record: any) => ({
      id: String(record.id),
      title: `${record.sets} x ${record.reps} ${record.exercise_type}`,
      start: record.date_of_entry,
      sets: record.sets,
      reps: record.reps,
      remarks: record.remarks,
      allDay: true,
      color: "#8785BD", //TODO: Make this query the db
    }))
    setEvents(calendarRecords)
    setIsLoading(false)
  } catch (error) {
    console.error("Error fetching data:", error)
    setIsLoading(false)
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

export const addExerciseEntry = async (data: AddExerciseEntryFormValues, userId: null | number) => {
  try {
    const response = await fetch("http://localhost:3001/add_exercise_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        user_id: userId,
        date_of_entry: new Date(Date.now()).toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to add exercise entry")
    }
  } catch (error) {
    console.error("Error adding exercise entry:", error)
  }
}

export const deleteExerciseEntry = async (id: number) => {
  try {
    const response = await fetch("http://localhost:3001/delete_exercise_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to mark exercise entry as deleted")
    }
  } catch (error) {
    console.error("Error marking exercise entry as deleted:", error)
  }
}
