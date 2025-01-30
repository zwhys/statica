import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_URL

export const fetchRecords = async (userId: number | null) => {
  try {
    const response = await axios.get(`${API_URL}/records`, { params: { userId } })
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchExerciseTypes = async () => {
  try {
    const response = await axios.get(`${API_URL}/exercise-types`)
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchUserInfo = async (userId: number | null) => {
  try {
    const response = await axios.get(`${API_URL}/user-info`, { params: { userId } })
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const getUserId = async (data: UserFormValues) => {
  try {
    const response = await axios.post(`${API_URL}/authentication`, data)
    return response.data
  } catch (error) {
    console.error("Error checking authentication:", error)
    return false
  }
}

export const addUser = async (data: UserFormValues) => {
  try {
    const response = await axios.post(`${API_URL}/add-user`, data)
    return response.data
  } catch (error) {
    console.error("Error adding user:", error)
    return false
  }
}

export const checkUsernameAvailable = async (username: string) => {
  try {
    const response = await axios.post(`${API_URL}/check-username`, { username })
    return response.data
  } catch (error) {
    console.error("Error checking username uniqueness:", error)
    return false
  }
}

export const fetchUsername = async (userId: number | null) => {
  try {
    const response = await axios.post(`${API_URL}/username`, { userId })
    return response.data.username
  } catch (error) {
    console.error("Error fetching username:", error)
  }
}

export const addExerciseEntry = async (
  data: SubmitExerciseEntryFormValues,
  userId: number | null,
  dateOfEntry: Date
) => {
  try {
    await axios.post(`${API_URL}/add-exercise-entry`, {
      ...data,
      userId: userId,
      dateOfEntry,
    })
  } catch (error) {
    console.error("Error adding exercise entry:", error)
  }
}

export const updateExerciseEntry = async (data: SubmitExerciseEntryFormValues) => {
  try {
    await axios.post(`${API_URL}/update-exercise-entry`, data)
  } catch (error) {
    console.error("Error updating exercise entry:", error)
  }
}

export const deleteExerciseEntry = async (id: number) => {
  try {
    await axios.post(`${API_URL}/delete-exercise-entry`, { id })
  } catch (error) {
    console.error("Error deleting exercise entry:", error)
  }
}

export const undoDeleteExerciseEntry = async (id: number) => {
  try {
    await axios.post(`${API_URL}/undo-delete-exercise-entry`, { id })
  } catch (error) {
    console.error("Error undoing deleteExerciseEntry:", error)
  }
}

export const updateUserInfo = async (data: UserInfoFormValues, userId: number | null) => {
  try {
    await axios.post(`${API_URL}/update-user-info`, {
      ...data,
      userId: userId,
    })
  } catch (error) {
    console.error("Error updating user info:", error)
  }
}
