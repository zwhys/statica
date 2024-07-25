import { Typography, Grid } from "@mui/material"
import DisplayExerciseStatistics from "../displayExerciseStatistics"
import Loading from "../loading"

export default function Statistics() {
  return (
    <Grid container spacing={2} direction="column">
      <Loading />
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
