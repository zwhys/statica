import { Box, Typography, Button } from "@mui/material"
import HeaderHome from "../components/headerHome"
import React from "react"
import Calandar from "../components/calendar"
import AddExerciseEvent from "../components/addExerciseEvent"

export function CalendarPage() {
  return (
    <>
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
          borderRadius: 8
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Typography variant="h3" sx={{ margin: 3 }}>
            Welcome, Username
          </Typography>
          <AddExerciseEvent />
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
    </>
  )
}

export default CalendarPage
