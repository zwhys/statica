import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { addExerciseEntry, fetchExercise_types } from "./api"
import {
  Box,
  Button,
  Dialog,
  Typography,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material"

export const AddExerciseEntry: React.FC<DisplayProps> = ({ open, onClose }) => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const theme = useTheme()
  const [exercise_types, setExercise_types] = useState<Exercise_types[]>([])
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddExerciseEntryFormValues>()

  const onSubmit: SubmitHandler<AddExerciseEntryFormValues> = async data => {
    try {
      addExerciseEntry(data, userId)
      onClose()
      reset()
    } catch (error) {
      console.error("Error adding exercise entry:", error)
    }
  }

  useEffect(() => {
    fetchExercise_types(setExercise_types)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 8,
        },
      }}
    >
      <Box sx={{ padding: 2, minWidth: 400 }}>
        <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
          Add Exercise Entry
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                error={!!errors.exercise_type}
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary, // Label color
                  },
                }}
              >
                <InputLabel id="exercise-type-label">Type of Exercise</InputLabel>
                <Controller
                  name="exercise_type"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Required" }}
                  render={({ field }) => (
                    <Select id="exercise_type" label="Type of Exercise" {...field}>
                      {exercise_types.map(exercise_type => (
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="sets"
                label="No. of Sets"
                variant="outlined"
                placeholder="Eg. 3"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary, // Label color
                  },
                }}
                {...register("sets", {
                  required: "Required",
                  pattern: {
                    value: /^[1-9]\d*$/,
                    message: "Positive integers only",
                  },
                })}
                error={!!errors.sets}
                helperText={errors.sets ? errors.sets.message : ""}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="reps"
                label="No. of Reps"
                variant="outlined"
                placeholder="Eg. 10"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary, // Label color
                  },
                }}
                {...register("reps", {
                  required: "Required",
                  pattern: {
                    value: /^[1-9]\d*$/,
                    message: "Positive integers only",
                  },
                })}
                error={!!errors.reps}
                helperText={errors.reps ? errors.reps.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
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
                    color: theme.palette.text.primary, // Label color
                  },
                }}
                {...register("remarks", { required: false })}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button variant="outlined" onClick={onClose}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Dialog>
  )
}

export default AddExerciseEntry
