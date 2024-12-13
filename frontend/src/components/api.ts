import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (
  userId: number | null,
  setEvents: (events: EventInput[]) => void,
  exerciseTypes: Exercise_types[]
) => {
  try {
    const response = await fetch(`http://localhost:3001/records?userId=${userId}`, {
      method: "GET",
    })

    const getColor = (exerciseType: string): string => {
      const foundType = exerciseTypes.find(dbrow => dbrow.exercise_type === exerciseType)
      return foundType ? foundType.colour : "#8785BD"
    }

    const responseRecords = await response.json()
    const calendarRecords: EventInput[] = responseRecords.map((record: any) => ({
      id: String(record.id),
      title: `${record.sets} x ${record.reps} ${record.exercise_type}`,
      start: record.date_of_entry,
      exercise_type: record.exercise_type,
      sets: record.sets,
      reps: record.reps,
      remarks: record.remarks,
      allDay: true,
      color: getColor(record.exercise_type),
    }))
    setEvents(calendarRecords)
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

export const addExerciseEntry = async (
  data: SubmitExerciseEntryFormValues,
  userId: null | number,
  date_of_entry: Date
) => {
  try {
    const response = await fetch("http://localhost:3001/add_exercise_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        user_id: userId,
        data_of_entry: date_of_entry,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to add exercise entry")
    }
  } catch (error) {
    console.error("Error adding exercise entry:", error)
  }
}

export const updateExerciseEntry = async (data: SubmitExerciseEntryFormValues) => {
  try {
    const response = await fetch("http://localhost:3001/update_exercise_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
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
      body: JSON.stringify({ id }),
    })

    if (!response.ok) {
      throw new Error("Failed to delete exercise entry")
    }
  } catch (error) {
    console.error("Error deleting exercise entry:", error)
  }
}

export const undoDeleteExerciseEntry = async (id: number) => {
  try {
    const response = await fetch("http://localhost:3001/undo_delete_exercise_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })

    if (!response.ok) {
      throw new Error("Failed to delete exercise entry")
    }
  } catch (error) {
    console.error("Error undoing deleteExerciseEntry:", error)
  }
}
