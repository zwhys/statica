import React, { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import HeaderHome from "../components/headerHome"
import Calandar from "../components/calendar"
import AddExerciseEntry from "../components/addExerciseEntry"

export function CalendarPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <AddExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />
      <HeaderHome />
      <Box
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "white",
          gap: 2,
          padding: 5,
          margin: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Typography variant="h3" sx={{ margin: 3 }}>
            Welcome, Username
          </Typography>
          <Button
            sx={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color:"white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => setDialogOpen(true)}
          >
            Add Exercise Event
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
          <Calandar />
        </Box>
      </Box>
      {/* Pass dialog state and close function to dialog */}
    </>
  )
}

export default CalendarPage
