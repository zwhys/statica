interface UserState {
  userId: number | null
}

interface ModeState {
  mode: "light" | "dark"
}

interface HeaderHomeProps {
  setIsDrawerOpen: (open: boolean) => void
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
}

type DisplayRecordsProps = {
  setEvents: (events: Records[]) => void
  setisLoading: (isLoading: boolean) => void
}

type SubmitExerciseEntryFormValues = {
  id?: number
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
