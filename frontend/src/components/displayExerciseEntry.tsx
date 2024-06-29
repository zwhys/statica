import React, { useState } from "react"
import { Box, Button, Dialog, DialogContent, Paper, Typography } from "@mui/material"
import AddExerciseEntry from "./addExerciseEntry"

export const DisplayExerciseEntry: React.FC<Props> = ({ open, onClose }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Box textAlign="center">
      <Dialog open={open} onClose={() => onClose()}>
        <DialogContent>
          <Box
            textAlign="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Paper sx={{ bgcolor: "orange" }}>
              <Typography>hehe</Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: 2
            }}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => setDialogOpen(true)}
            >
              Add Exercise Event
            </Button>
            <AddExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default DisplayExerciseEntry
