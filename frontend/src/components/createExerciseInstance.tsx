import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Grid,
  DialogTitle,
  TextField
} from "@mui/material"
import React, { useState } from "react"

export function CreateExerciseInstance() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create New Workout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{}}>Create New Workout</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                id="setnum"
                label="No. of Sets"
                variant="outlined"
                placeholder="Eg. 3"
                sx={{ width: 150 }}
              />
            </Grid>
            <Grid item>
              <Typography>X</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="repnum"
                label="No. of Reps"
                variant="outlined"
                placeholder="Eg. 10"
                sx={{ width: 150 }}
              />
            </Grid>
            <Grid item>
              <Typography>of</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="exertype"
                label="Type of Exercise"
                variant="outlined"
                placeholder="Eg. Pushups"
                sx={{ width: 150 }}
              />
            </Grid>
          </Grid>
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

export default CreateExerciseInstance
