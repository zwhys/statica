import { Box } from "@mui/material"
import Calendar from "../components/calender"
import React from "react"

export function CalendarPage() {
  return (
    <Box
      textAlign="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "80%",
        margin: "0 auto"
      }}
    >
      <Calendar />
    </Box>
  )
}

export default CalendarPage
