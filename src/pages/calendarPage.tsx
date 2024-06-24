import { Box } from "@mui/material"
import HeaderHome from "../components/headerHome"
import Calendar from "../components/calender"
import React from "react"

export function CalendarPage() {
  return (
    <>
      <HeaderHome />
      <Box
        textAlign="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          gap: 2,
          padding: 5,
          margin: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Calendar />
      </Box>
    </>
  )
}

export default CalendarPage
