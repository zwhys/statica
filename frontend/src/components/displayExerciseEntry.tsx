import React, { useState } from "react"
import { Box, Button, Dialog, DialogContent, Paper, Typography } from "@mui/material"
import AddExerciseEntry from "./addExerciseEntry"
import DisplayRecords from "./displayRecords"

export const DisplayExerciseEntry: React.FC<DisplayProps> = ({ open, onClose }) => {
  const [isdialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Box textAlign="center">
      <Dialog
        open={open}
        onClose={() => onClose()}
        PaperProps={{
          sx: {
            borderRadius: 8,
          },
        }}
      >
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
            <Paper sx={{ bgcolor: "purple" }}>
              <Typography>Testing</Typography>
              {/* <DisplayRecords/> */}
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: 2,
            }}
          >
            <Button
              size="large"
              sx={{ background: "#B098A4", color: "white" }}
              variant="contained"
              color="primary"
              onClick={() => setIsDialogOpen(true)}
            >
              Add Exercise Entry
            </Button>
            <AddExerciseEntry open={isdialogOpen} onClose={() => setIsDialogOpen(false)} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default DisplayExerciseEntry
