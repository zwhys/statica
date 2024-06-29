import React, { useState } from "react"
import { Link, Typography, TextField, Button, Dialog, DialogContent } from "@mui/material"

export function LogIn() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={() => setIsDialogOpen(true)}>
        Log In
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Log in to your account
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

export default LogIn
