import React, { useState } from "react"
import { Link, Typography, TextField, Button, Dialog, DialogContent } from "@mui/material"

export function LogOut() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }} onClick={handleClickOpen}>
        Log Out
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Are you sure?
          </Typography>
          <Link href="/landing">
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Confirm
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LogOut
