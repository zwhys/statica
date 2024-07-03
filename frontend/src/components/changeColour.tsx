import React, { useState, useCallback } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { Box, Button, Dialog } from "@mui/material"

export const ColorPicker: React.FC<Props> = ({ open, onClose }) => {
  const [color, setColor] = useState<string>("#000000")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleChange = useCallback((color: ColorResult) => {
    setColor(color.hex)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      PaperProps={{
        sx: {
          borderRadius: 8,
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <ChromePicker color={color} onChange={handleChange} disableAlpha={true} />
      </Box>
    </Dialog>
  )
}

export default ColorPicker
