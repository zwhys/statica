import React, { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import AddExerciseEntry from "./addExerciseEntry"
import Calendar from "./calendar"

export function ViewCalendar() {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <>
      <AddExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />

      <Box sx={{ width: "25%" }}>
        <Typography variant="h3" sx={{ margin: 3 }}>
          Welcome, Username
        </Typography>
        <Button
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
          }}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => setDialogOpen(true)}
        >
          Add Exercise Entry
        </Button>
        <Typography fontSize={33} sx={{ margin: 3 }}>
          Frequently Used
        </Typography>
        <Button size="large" variant="contained" color="primary" sx={{ margin: 1 }}>
          Frequently Used 1
        </Button>
        <Button size="large" variant="contained" color="primary" sx={{ margin: 1 }}>
          Frequently Used 2
        </Button>
        <Button size="large" variant="contained" color="primary" sx={{ margin: 1 }}>
          Frequently Used 3
        </Button>
      </Box>
      <Box sx={{ width: "75%" }}>
        <Calendar />
      </Box>
    </>
  )
}

export default ViewCalendar