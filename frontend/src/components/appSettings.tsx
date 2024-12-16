import React, { useState, useCallback, useEffect } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material"
import { fetchExercise_types } from "./api"

export const AppSettings: React.FC<DisplayProps> = ({ open, onClose }) => {
  const [exercise_types, setExercise_types] = useState<Exercise_types[]>([])
  const [color, setColor] = useState<string>("#000000")
  const theme = useTheme()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitExerciseEntryFormValues>()

  const onSubmit: SubmitHandler<SubmitExerciseEntryFormValues> = async data => {
    try {
      const response = await fetch("http://localhost:3001/change_colour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data, //TODO: Continue implementation
        }),
      })

      // onClose()
    } catch (error) {
      console.error("Error adding exercise entry:", error)
    }
  }

  useEffect(() => {
    fetchExercise_types(setExercise_types)
  }, [])

  const handleChange = useCallback((color: ColorResult) => {
    setColor(color.hex)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
          Update Colour
        </Typography>

        <FormControl
          variant="outlined"
          error={!!errors.exercise_type}
          fullWidth
          sx={{
            "& .MuiInputLabel-root": {
              color: theme.palette.text.primary,
            },
            gap: 2,
          }}
        >
          <InputLabel id="exercise-type-label">Type of Exercise</InputLabel>
          <Controller
            name="exercise_type"
            control={control}
            rules={{ required: "Required" }}
            render={({ field }) => (
              <Select id="exercise_type" label="Type of Exercise" {...field}>
                {exercise_types.map(exercise_type => (
                  <MenuItem key={exercise_type.exercise_type} value={exercise_type.exercise_type}>
                    {exercise_type.exercise_type}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.exercise_type?.message}</FormHelperText>
        </FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item>
              <ChromePicker color={color} onChange={handleChange} disableAlpha={true} />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  margin: 2,
                  padding: 1,
                  bgcolor: color,
                  borderRadius: 2,
                  height: 150,
                  width: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Preview: {color}</Typography>
              </Box>
            </Grid>
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
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Dialog>
  )
}

export default AppSettings
