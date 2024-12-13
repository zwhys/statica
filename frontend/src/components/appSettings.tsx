import React, { useState, useCallback } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, Button, Dialog, Grid, Typography, useTheme } from "@mui/material"

export const AppSettings: React.FC<DisplayProps> = ({ open, onClose }) => {
  const [color, setColor] = useState<string>("#000000")
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
                  backgroundColor: useTheme().palette.primary.main,
                  color: "white",
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default AppSettings
