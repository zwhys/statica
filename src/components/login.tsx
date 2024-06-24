import React, { useState } from "react"
import {
  Link,
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogContent
} from "@mui/material"

export function LogIn() {
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
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in to your account
          </Typography>
          <TextField label="Username" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <Link href="/home">
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </Link>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Link
              href="/statistics"
              underline="always"
              color="inherit"
              variant="body1"
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="body1">Forgot Password?</Typography>
            </Link>
            <Link
              href="/statistics"
              underline="always"
              color="inherit"
              variant="body1"
              sx={{ marginLeft: 1, cursor: "pointer" }}
            >
              <Typography variant="body1">Forgot Username?</Typography>
            </Link>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LogIn
