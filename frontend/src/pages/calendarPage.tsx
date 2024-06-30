import React, { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import HeaderHome from "../components/headerHome"
import Calandar from "../components/calendar"
import AddExerciseEntry from "../components/addExerciseEntry"
import { TabsChrome } from "../mui-treasury/tabs-chrome"

export function CalendarPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <AddExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />
      <HeaderHome />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "28px 40px 40px 40px", // top right bottom left
        }}
      >
        <Box>
          <TabsChrome />
        </Box>
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "white",
            gap: 2,
            padding: 5,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderTopRightRadius: "32px",
            borderBottomRightRadius: "32px",
            borderBottomLeftRadius: "32px",
          }}
        >
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
      </Box>
    </>
  )
}

export default CalendarPage
