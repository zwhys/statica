import React from "react"
import { Snackbar, Typography, useTheme, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const ConfirmUndoSnackbar: React.FC<DisplayProps> = ({ open, onClose }) => {
  const theme = useTheme()

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={3000}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.secondary,
        },
      }}
      message={
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          Undone
        </Typography>
      }
      action={
        <IconButton sx={{ p: 0.5, color: theme.palette.text.secondary }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      }
    />
  )
}

export default ConfirmUndoSnackbar
