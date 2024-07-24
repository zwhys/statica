import React, { useState, useCallback } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, Button, Dialog, Grid, IconButton, Typography } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"

export const ColorPicker: React.FC<DisplayProps> = ({ open, onClose }) => {
  const [color, setColor] = useState<string>("#000000")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddExerciseEntryFormValues>()

  const onSubmit: SubmitHandler<AddExerciseEntryFormValues> = async data => {
    try {
      const response = await fetch("http://localhost:3001/change_colour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data, //TODO: Fix this
        }),
      })

      onClose()
    } catch (error) {
      console.error("Error adding exercise entry:", error)
    }
  }

  const handleChange = useCallback((color: ColorResult) => {
    setColor(color.hex)
  }, [])

  return (
    <>
      <IconButton onClick={() => setIsDialogOpen(true)}>
        <SettingsIcon />
      </IconButton>
      <Dialog
        open={isDialogOpen}
        onClose={() => onClose()}
        PaperProps={{
          sx: {
            borderRadius: 8,
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
                <Button variant="outlined" color="primary" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundImage: "#8390FA",
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
    </>
  )
}

export default ColorPicker
