import { Typography, Grid } from "@mui/material"
import DisplayExerciseStatistics from "../displayExerciseStatistics"

export default function Statistics() {
  return (
    <Grid container spacing={2} direction="column">
      <Typography variant="h2" />
      <Grid item>
        <DisplayExerciseStatistics />
      </Grid>
      <Grid item>
        <DisplayExerciseStatistics />
      </Grid>
    </Grid>
  )
}
