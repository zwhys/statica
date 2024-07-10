import React, {useState} from "react"
import { Typography, Grid } from "@mui/material"
import DisplayExerciseStatistics from "./displayExerciseStatistics"
import Loading from "./loading"
import ChangeColour from "./changeColour"

export function ViewStatistics() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Grid container spacing={2} direction="column">
      <Loading />
      <Typography variant="h2">Statistics</Typography>
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
