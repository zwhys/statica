import { Box, Typography } from "@mui/material"
import React from "react"
import DisplayExerciseStatistics from "../components/displayExerciseStatistics"
import HeaderHome from "../components/headerHome"

export function StatsPage() {
  return (
    <>
      <HeaderHome />
      <Box>
        <Typography align="center" variant="h2" sx={{ padding: 2 }}>
          Exercise Statistics
        </Typography>
        <DisplayExerciseStatistics />
      </Box>
    </>
  )
}

export default StatsPage
