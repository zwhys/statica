import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
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
} from "@mui/material"

export const AddExerciseEntry: React.FC<Props> = ({ open, onClose }) => {
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
      const response = await fetch("http://localhost:3001/add_exercise_entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          user_id: 1,
          date_of_entry: new Date(Date.now()).toISOString(),
        }),
      })

      onClose()
      reset()
    } catch (error) {
      console.error("Error adding exercise entry:", error)
    }
  }

  useEffect(() => {
    const fetchExercise_types = async () => {
      try {
        const response = await fetch("http://localhost:3001/exercise_types", {
          method: "GET",
        })
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const responseExercise_types: Exercise_types[] = await response.json()
        console.log(responseExercise_types)
        setExercise_types(responseExercise_types)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchExercise_types()
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
              <FormControl variant="outlined" error={!!errors.exercise_type} fullWidth>
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
                {...register("remarks", { required: false })}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={onClose}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
