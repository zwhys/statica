import { Box, Typography } from "@mui/material"
import React from "react"
import DisplayExerciseStatistics from "../components/displayExerciseStatistics"
import HeaderHome from "../components/headerHome"

export function StatisticsPage() {
  return (
    <>
      <HeaderHome />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: "column",
          gap: 2,
          height: 500,
          bgcolor: "white",
          margin: 10,
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 8
        }}
        textAlign="center"
        justifyContent="center"
      >
        <Typography align="center" variant="h2" sx={{ padding: 2 }}>
          Exercise Statistics
        </Typography>
        <DisplayExerciseStatistics />
      </Box>
    </>
  )
}

export default StatisticsPage
