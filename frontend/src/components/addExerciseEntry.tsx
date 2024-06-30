import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
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
        body: JSON.stringify({ ...data, user_id: 1, date_of_entry: new Date(Date.now()).toISOString() }),
      })

      if (!response.ok) {
        throw new Error("Failed to add exercise entry")
      }
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
        const responseExercise_types = await response.json()
        setExercise_types(responseExercise_types)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchExercise_types()
  }, [])


  return (
    <Box textAlign="center">
      <Dialog open={open} onClose={() => onClose()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Exercise Event</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <FormControl
                  variant="outlined"
                  error={!!errors.exercise_type}
                  sx={{ width: 200, marginTop: 1 }}
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
              <Grid item>
                <TextField
                  id="sets"
                  label="No. of Sets"
                  variant="outlined"
                  placeholder="Eg. 3"
                  sx={{ width: 150, marginTop: 1 }}
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
              <Grid item>
                <TextField
                  id="reps"
                  label="No. of Reps"
                  variant="outlined"
                  placeholder="Eg. 10"
                  sx={{ width: 150, marginTop: 1 }}
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
            </Grid>
            <TextField
              sx={{ width: "100%", marginTop: 2 }}
              label="Remarks"
              multiline
              maxRows={4}
              placeholder="Eg. Feelings, Difficulty, ..."
              {...register("remarks", { required: false })}
            />
          </DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ margin: 2, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
              >
                Create
              </Button>
            </Box>
        </form>
      </Dialog>
    </Box>
  )
}

export default AddExerciseEntry
