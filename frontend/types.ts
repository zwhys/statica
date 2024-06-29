interface Props {
  open: boolean
  onClose: () => void
}

type AddExerciseEntryFormValues = {
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}

type UserFormValues = {
  username: string
  password: string
}

type Exercise_types = {
  id: number
  exercise_type: string
}

type Records = {
    id: number
    user_id: number
    date_of_entry: string
    exercise_type: string
    sets: number
    reps: number
    remarks: string
  }