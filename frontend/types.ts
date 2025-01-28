interface UserState {
  userId: number | null
}

interface ModeState {
  mode: "light" | "dark"
}

interface HeaderHomeProps {
  setIsDrawerOpen: (open: boolean) => void
  isDrawerOpen: boolean
}

interface DisplayProps {
  open: boolean
  onClose: () => void

  onDelete?: () => void
  text?: string
  icon?: React.ReactNode
  sx?: object
  selectedEvent?: any
  eventData?: any
  date_of_entry?: Date
}

type SubmitExerciseEntryFormValues = {
  id?: number
  exercise_type?: string
  sets?: number
  reps?: number
  remarks?: string
}

type UserInfoFormValues = {
  userId: number
  age?: number
  weight?: number
  additional_info?: string
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

type ExerciseTypes = {
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
  exercise_types: ExerciseTypes
}
