import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  DialogTitle,
  TextField,
} from "@mui/material"
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}

export const AddExerciseEvent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Form submitted with data:", data) // Add this console log
    handleClose() // Close the dialog after submission
    reset() // Optional: Reset the form fields
  }

  return (
    <Box textAlign="center">
      <Button size="large" variant="contained" color="primary" onClick={handleClickOpen}>
        Add Exercise Event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Exercise Event</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <TextField
                  id="exercise_type"
                  label="Type of Exercise"
                  variant="outlined"
                  placeholder="Eg. Pushups"
                  sx={{ width: 150, marginTop: 1 }}
                  {...register("exercise_type", { required: true })}
                  error={!!errors.exercise_type}
                  helperText={errors.exercise_type ? "Required" : ""}
                />
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
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
              >
                Create
              </Button>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  )
}

export default AddExerciseEvent
