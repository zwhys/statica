import React from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material"

const WelcomeDialog: React.FC<DisplayProps> = ({ open, onClose }) => {
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
      <DialogTitle>Welcome</DialogTitle>
      <DialogContent>
        <Typography>Welcome to the Railway! Your account has been successfully created.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WelcomeDialog
