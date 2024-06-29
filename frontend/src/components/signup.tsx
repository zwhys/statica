//TODO: Do the same as AddExerciseEntry

import React, { useState, useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Typography,
  Link,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"

export function SignUp() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Create an account
          </Typography>
          <TextField label="Username" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <Link href="/calendar">
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SignUp
