import React from "react"
import { Typography, Grid } from "@mui/material"
import DisplayExerciseStatistics from "./displayExerciseStatistics"

export function ViewStatistics() {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <DisplayExerciseStatistics />
      </Grid>
      <Grid item>
        <DisplayExerciseStatistics />
      </Grid>
    </Grid>
  )
}

export default ViewStatistics
