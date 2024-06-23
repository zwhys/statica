import { Box, Typography } from "@mui/material"
import React from "react"
import DisplayExerciseStatistics from "../components/displayExerciseStatistics"

export function Statistics() {
  return (
    <Box>
      <Typography align="center" variant="h2" sx={{padding:2}}>
        Exercise Statistics
      </Typography>
      <DisplayExerciseStatistics />
    </Box>
  )
}

export default Statistics
