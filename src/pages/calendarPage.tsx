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
          gap: 2,
          width: "80%",
          margin: "0 auto"
        }}
      >
        <Calendar />
      </Box>
    </>
  )
}

export default CalendarPage
