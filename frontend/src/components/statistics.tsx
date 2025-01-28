import { Typography, Box, Stack, Grid, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchRecords, fetchExercise_types } from "./api"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import DisplayRecords from "./displayRecords"

const Statistics: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [exerciseTypes, setExerciseTypes] = useState<Exercise_types[]>([])
  const [data, setData] = useState<Records[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({})

  const groupRecords = (records: Records[]) => {
    return records.reduce((acc, record) => {
      if (!acc[record.exercise_type]) {
        acc[record.exercise_type] = []
      }
      acc[record.exercise_type].push(record)
      return acc
    }, {} as Record<string, Records[]>)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchExercise_types(setExerciseTypes)

        const records = await fetchRecords(userId, exerciseTypes)
        const sortedRecords = records.sort(
          (a: Records, b: Records) =>
            new Date(b.date_of_entry).getTime() - new Date(a.date_of_entry).getTime()
        )
        setData(sortedRecords)
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
      <DisplayRecords setData={setData} exerciseTypes={exerciseTypes} />

      <Grid container sx={{ padding: { xs: "10px", sm: "50px" } }}>
        {Object.entries(groupRecords(data)).map(([exerciseType, records]) => {
          const isExpanded = expandedExercises[exerciseType] || false
          const displayedRecords = isExpanded ? records : records.slice(0, 3)

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={exerciseType} sx={{ padding: "5px" }}>
              <Box
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "8px", padding: "10px" }}
              >
                <Typography variant="h5" sx={{ color: "#F8F1EB", fontWeight: "bold" }}>
                  {exerciseType}
                </Typography>

                <Stack spacing={1} sx={{ marginTop: 2, padding: 1, borderRadius: "8px" }}>
                  {displayedRecords.map(item => (
                    <Stack
                      key={item.id}
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        backgroundColor: item.color,
                        padding: "5px",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="body1" sx={{ color: "#2C2C39" }}>
                        {item.sets} x {item.reps}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#2C2C39" }}>
                        {new Date(item.date_of_entry).toLocaleDateString("en-GB")}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {records.length > 3 && (
                  <Button
                    onClick={() =>
                      setExpandedExercises(prev => ({
                        ...prev,
                        [exerciseType]: !prev[exerciseType],
                      }))
                    }
                    sx={{ color: "#F8F1EB", textTransform: "none" }}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </Button>
                )}
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Statistics
