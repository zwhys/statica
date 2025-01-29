import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { addExerciseEntry, updateExerciseEntry, fetchExerciseTypes } from "./api"
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"

export const SubmitExerciseEntry: React.FC<DisplayProps> = ({
  open,
  onClose,
  eventData,
  date_of_entry,
}) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const userId = useSelector((state: RootState) => state.user.userId)
  const theme = useTheme()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitExerciseEntryFormValues>({
    defaultValues: eventData,
  })

  const onSubmit: SubmitHandler<SubmitExerciseEntryFormValues> = async data => {
    try {
      setIsProcessing(true)
      if (data.id === undefined) {
        await addExerciseEntry(data, userId, date_of_entry as Date)
      } else {
        await updateExerciseEntry(data)
      }
      onClose()
      reset()
      setIsProcessing(false)
    } catch (error) {
      console.error("Error submitting exercise entry:", error)
    }
  }

  const { data: exerciseTypes } = useQuery<ExerciseTypes[] | undefined>({
    queryKey: ["exerciseTypes"],
    queryFn: fetchExerciseTypes,
  })

  useEffect(() => {
    if (eventData) {
      reset(eventData)
    }
  }, [eventData, reset])

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose()
        reset()
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
          {eventData?.id === undefined ? "Add Exercise Entry" : "Edit Exercise Entry"}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <FormControl
              variant="outlined"
              error={!!errors.exercise_type}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.primary,
                },
              }}
            >
              <InputLabel id="exercise-type-label">Type of Exercise</InputLabel>
              <Controller
                name="exercise_type"
                control={control}
                defaultValue={eventData?.exercise_type || ""}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select id="exercise_type" label="Type of Exercise" {...field}>
                    {exerciseTypes?.map(exercise_type => (
                      <MenuItem
                        key={exercise_type.exercise_type}
                        value={exercise_type.exercise_type}
                      >
                        {exercise_type.exercise_type}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.exercise_type?.message}</FormHelperText>
            </FormControl>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                id="sets"
                label="No. of Sets"
                variant="outlined"
                placeholder="Eg. 3"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("sets", {
                  required: "Required",
                  pattern: {
                    value: /^[1-9][0-9]{0,3}$/,
                    message: "Please enter a valid number",
                  },
                })}
                error={!!errors.sets}
                helperText={errors.sets ? errors.sets.message : ""}
              />
              <TextField
                id="reps"
                label="No. of Reps"
                variant="outlined"
                placeholder="Eg. 10"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("reps", {
                  required: "Required",
                  pattern: {
                    value: /^[1-9][0-9]{0,3}$/,
                    message: "Please enter a valid number",
                  },
                })}
                error={!!errors.reps}
                helperText={errors.reps ? errors.reps.message : ""}
              />
            </Stack>

            <TextField
              id="remarks"
              label="Remarks"
              multiline
              maxRows={4}
              variant="outlined"
              placeholder="Eg. Feelings, Difficulty, ..."
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.primary,
                },
              }}
              {...register("remarks", { required: false })}
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  onClose()
                  reset()
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                  minWidth: "85px",
                }}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <CircularProgress size="25px" />
                ) : eventData?.id === undefined ? (
                  "Create"
                ) : (
                  "Update"
                )}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Dialog>
  )
}

export default SubmitExerciseEntry
