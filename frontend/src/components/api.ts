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
    const response = await axios.get(`${API_URL}/exercise_types`)
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export const fetchUserInfo = async (userId: number | null) => {
  try {
    const response = await axios.get(`${API_URL}/user_info`, { params: { userId } })
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
    const response = await axios.post(`${API_URL}/add_user`, data)
    return response.data
  } catch (error) {
    console.error("Error adding user:", error)
    return false
  }
}

export const checkUsernameAvailable = async (username: string) => {
  try {
    const response = await axios.post(`${API_URL}/check_username`, { username })
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
  date_of_entry: Date
) => {
  try {
    await axios.post(`${API_URL}/add_exercise_entry`, {
      ...data,
      user_id: userId,
      date_of_entry,
    })
  } catch (error) {
    console.error("Error adding exercise entry:", error)
  }
}

export const updateExerciseEntry = async (data: SubmitExerciseEntryFormValues) => {
  try {
    await axios.post(`${API_URL}/update_exercise_entry`, data)
  } catch (error) {
    console.error("Error updating exercise entry:", error)
  }
}

export const deleteExerciseEntry = async (id: number) => {
  try {
    await axios.post(`${API_URL}/delete_exercise_entry`, { id })
  } catch (error) {
    console.error("Error deleting exercise entry:", error)
  }
}

export const undoDeleteExerciseEntry = async (id: number) => {
  try {
    await axios.post(`${API_URL}/undo_delete_exercise_entry`, { id })
  } catch (error) {
    console.error("Error undoing deleteExerciseEntry:", error)
  }
}

export const updateUserInfo = async (data: UserInfoFormValues, userId: number | null) => {
  try {
    await axios.post(`${API_URL}/update_user_info`, {
      ...data,
      user_id: userId,
    })
  } catch (error) {
    console.error("Error updating user info:", error)
  }
}
