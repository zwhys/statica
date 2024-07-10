import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from "@mui/material"
import AddExerciseEntry from "./addExerciseEntry"
import Calendar from "./calendar"


export function ViewCalendar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const userId = useSelector((state: any) => state.user.userId);
  return (
    <>
      <AddExerciseEntry open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />

      <Box sx={{ width: "25%" }}>
        <Typography variant="h3" sx={{ margin: 3 }}>
          Welcome, {userId}
        </Typography>
        <Button
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
          }}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => setIsDialogOpen(true)}
        >
          Add Exercise Entry
        </Button>
      </Box>
      <Box sx={{ width: "75%" }}>
        <Calendar />
      </Box>
    </>
  )
}

export default ViewCalendar