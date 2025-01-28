import { Typography, Box, Stack, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import DisplayStatisticsRecords from "../displayStatisticsRecords"
import { fetchStatisticsRecords } from "../api"
import { fetchExercise_types } from "../api"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const Statistics: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [exerciseTypes, setExerciseTypes] = useState<Exercise_types[]>([])
  const [data, setData] = useState<Records[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchExercise_types(setExerciseTypes)

        const records = await fetchStatisticsRecords(userId, exerciseTypes)
        setData(records)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <Typography variant="h6" sx={{ color: "#F8F1EB", textAlign: "center" }}>
        Loading...
      </Typography>
    )
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <DisplayStatisticsRecords setData={setData} exerciseTypes={exerciseTypes} />
      <Grid container sx={{ padding: { xs: "10px", sm: "50px" } }}>
        {data &&
          data.map(item => (
            <Grid
              item
              xs={12}
              sm={6}
              key={item.id}
              sx={{
                padding: "5px",
              }}
            >
              <Box sx={{ backgroundColor: item.color, borderRadius: "8px", padding: "10px" }}>
                <Stack
                  spacing={1}
                  sx={{
                    marginTop: 2,
                    padding: 1,
                    borderRadius: "8px",
                  }}
                >
                  <Stack direction="row" flex={1} justifyContent="space-between">
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#2C2C39",
                      }}
                    >
                      {item.sets} x {item.reps}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#2C2C39",
                      }}
                    >
                      {new Date(item.date_of_entry as string).toLocaleDateString("en-GB")}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default Statistics
