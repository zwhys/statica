import { EventInput } from "@fullcalendar/core"

export const fetchRecords = async (
  userId: number | null,
  setEvents: (events: EventInput[]) => void,
  exerciseTypes: Exercise_types[]
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/records?userId=${userId}`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/exercise_types`, {
      method: "GET",
    })
    const responseExercise_types: Exercise_types[] = await response.json()
    setExercise_types(responseExercise_types)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchUserInfo = async (
  setUserInfo: (data: UserInfoFormValues) => void,
  userId: null | number,
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user_info?userId=${userId}`, {
      method: "GET",
    })
    const responseUser_Info = await response.json()
    setUserInfo(responseUser_Info)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const getUserId = async (data: UserFormValues) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/authentication`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add_user`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/check_username`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add_exercise_entry`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update_exercise_entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to update exercise entry")
    }
  } catch (error) {
    console.error("Error updating exercise entry:", error)
  }
}

export const deleteExerciseEntry = async (id: number) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/delete_exercise_entry`, {
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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/undo_delete_exercise_entry`, {
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

export const updateUserInfo = async (data: UserInfoFormValues, userId: null | number) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update_user_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        user_id: userId,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to update user info")
    }
  } catch (error) {
    console.error("Error updating user info:", error)
  }
}
