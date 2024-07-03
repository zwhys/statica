import React, { useState, useCallback } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { Box, Button, Dialog, Grid, IconButton, Typography } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"

export const ColorPicker: React.FC<Props> = ({ open, onClose }) => {
  const [color, setColor] = useState<string>("#000000")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
          <ChromePicker color={color} onChange={handleChange} disableAlpha={true} />
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
                  color="primary"
                  sx={{
                    backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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

//TODO: Create a way to preview the colour