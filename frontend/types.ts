interface State {
  userId: number | null
}

interface Props {
  open: boolean
  onClose: () => void
}

type DisplayRecordsProps = {
  setEvents: (events: Records[]) => void
}

type AddExerciseEntryFormValues = {
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}
type User = {
  id: number
  username: string
  password: string
}

type UserFormValues = {
  username: string
  password: string
  confirmPassword: string
}

type Exercise_types = {
  id: number
  exercise_type: string
  colour: string
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
