import { Typography, Grid } from "@mui/material"
import DisplayExerciseStatistics from "../displayExerciseStatistics"

const Statistics: React.FC = () => {
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

export default Statistics
