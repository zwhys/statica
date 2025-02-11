import React, { useState } from "react"
import { Snackbar, Button, Typography, useTheme, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { undoDeleteExerciseEntry } from "./api"
import ConfirmUndoSnackbar from "./comfirmUndoSnackbar"

const DeleteUndoSnackbar: React.FC<DisplayProps> = ({ open, onClose, eventData }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const theme = useTheme()

  const handleUndo = () => {
    undoDeleteExerciseEntry(eventData.id)
    setIsSnackbarOpen(true)
  }

  return (
    <>
      <Snackbar
        open={open}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={5000}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.secondary,
          },
        }}
        message={
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            Event deleted.
          </Typography>
        }
        action={
          <>
            <Button sx={{ color: theme.palette.primary.main }} onClick={handleUndo}>
              UNDO
            </Button>
            <IconButton sx={{ p: 0.5, color: theme.palette.text.secondary }} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </>
        }
      />
      <ConfirmUndoSnackbar
        open={isSnackbarOpen}
        onClose={() => {
          setIsSnackbarOpen(false)
        }}
      />
    </>
  )
}

export default DeleteUndoSnackbar
