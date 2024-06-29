interface Props {
  open: boolean
  onClose: () => void
}

type FormValues = {
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}

type Exercise_types = {
  id: number
  exercise_type: string
}

type Records = {
    id: number
    userid: number
    date_of_entry: string
    exercise_type: string
    sets: number
    reps: number
    remarks: string
  }