import React, { useEffect, useState } from "react"
import { Snackbar, Box, Button, Typography, CircularProgress, useTheme } from "@mui/material"

const DeleteUndoSnackbar: React.FC<DisplayProps> = ({ open, onClose, onDelete }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [progress, setProgress] = useState(100)
  const theme = useTheme()

  useEffect(() => {
    let timer: NodeJS.Timeout
    let progressTimer: NodeJS.Timeout

    if (open && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)

      progressTimer = setInterval(() => {
        setProgress(prev => prev - 20)
      }, 1000)
    }

    if (countdown === 0) {
      setIsSnackbarOpen(false)
    }

    return () => {
      clearInterval(timer)
      clearInterval(progressTimer)
    }
  }, [open, countdown])

  const handleOpen = () => {
    setIsSnackbarOpen(true)
    setCountdown(5)
    setProgress(100)
  }

  const handleUndo = () => {
    console.log("Undo action triggered!")
    setIsSnackbarOpen(false)
  }

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      message={
        <Box display="flex" alignItems="center">
          <Box position="relative" display="inline-flex" marginRight={2} width={40} height={40}>
            <CircularProgress variant="determinate" value={progress} color="error" />
            <Box
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                sx={{ color: theme.palette.text.secondary }}
              >
                {countdown}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Event deleted.
          </Typography>
        </Box>
      }
      action={
        <Button color="secondary" size="small" onClick={onClose}>
          UNDO
        </Button>
      }
    />
  )
}

export default DeleteUndoSnackbar
