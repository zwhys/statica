import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  DialogTitle,
  TextField
} from "@mui/material"
import React, { useState } from "react"

export function AddExerciseEvent() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box textAlign="center">
      <Button size="large" variant="contained" color="primary" onClick={handleClickOpen}>
        Add Exercise Event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Exercise Event</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                id="exertype"
                label="Type of Exercise"
                variant="outlined"
                placeholder="Eg. Pushups"
                sx={{ width: 150, marginTop: 1 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="setnum"
                label="No. of Sets"
                variant="outlined"
                placeholder="Eg. 3"
                sx={{ width: 150, marginTop: 1 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="repnum"
                label="No. of Reps"
                variant="outlined"
                placeholder="Eg. 10"
                sx={{ width: 150, marginTop: 1 }}
              />
            </Grid>
          </Grid>
          <TextField
            sx={{ width: "100%", marginTop: 2 }}
            label="Remarks"
            multiline
            maxRows={4}
            placeholder="Eg. Feelings, Difficulty, ..."
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ margin: 2 }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" fullWidth sx={{ margin: 2 }}>
              Create
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AddExerciseEvent
