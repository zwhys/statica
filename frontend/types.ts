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
  dateOfEntry?: Date
}

type SubmitExerciseEntryFormValues = {
  id?: number
  exerciseType?: string
  sets?: number
  reps?: number
  remarks?: string
}

type UserInfoFormValues = {
  userId: number
  age?: number
  weight?: number
  additionalInfo?: string
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
  exerciseType: string
  color: string
}

type Records = {
  id: number
  userId: number
  dateOfEntry: string
  exerciseType: string
  sets: number
  reps: number
  remarks: string
  exercise_types: ExerciseTypes
}
