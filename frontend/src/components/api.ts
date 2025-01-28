export const fetchRecords = async (userId: number | null) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/records?userId=${userId}`, {
      method: "GET",
    })
    return await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchExerciseTypes = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/exercise_types`, {
      method: "GET",
    })
    return await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchUserInfo = async (userId: null | number) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user_info?userId=${userId}`,
      {
        method: "GET",
      }
    )
    return await response.json()
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

export const fetchUsername = async (userId: null | number) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch username")
    }

    const data = await response.json()
    return data.username
  } catch (error) {
    console.error("Error fetching username:", error)
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
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/undo_delete_exercise_entry`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    )

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
