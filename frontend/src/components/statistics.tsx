import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { RootState } from "../redux/store"
import { Typography, Box, Stack, Grid, Button, useTheme, CircularProgress } from "@mui/material"
import { fetchRecords } from "./api"
import { useSelector } from "react-redux"
import SubmitExerciseEntry from "./submitExerciseEntry"

const Statistics: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({})
  const theme = useTheme()

  const groupRecords = (records: Records[]) => {
    return records.reduce((acc, record) => {
      if (!acc[record.exercise_type]) {
        acc[record.exercise_type] = []
      }
      acc[record.exercise_type].push(record)
      return acc
    }, {} as Record<string, Records[]>)
  }

  const { data: records, isLoading } = useQuery({
    queryKey: ["records", userId],
    queryFn: () => fetchRecords(userId),
    enabled: !!userId,
    refetchInterval: 3000,
    select: (records: Records[]) => {
      if (records && records.length > 0) {
        return records.sort(
          (record1: Records, record2: Records) =>
            new Date(record2.date_of_entry).getTime() - new Date(record1.date_of_entry).getTime()
        )
      }
      return []
    },
  })

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    )
  }

  if (!records) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}>
          No Entries Yet
        </Typography>
        <Typography variant="body1" sx={{ color: "#BDBDBD" }}>
          Start tracking your workouts by adding an entry.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
          }}
          onClick={() => setIsDialogOpen(true)}
        >
          Add Entry
        </Button>
        <SubmitExerciseEntry
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          date_of_entry={undefined}
        />
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container sx={{ padding: { xs: "10px", sm: "50px" } }}>
        {Object.entries(groupRecords(records)).map(([exerciseType, records]) => {
          const isExpanded = expandedExercises[exerciseType] || false
          const displayedRecords = isExpanded ? records : records.slice(0, 3)

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={exerciseType} sx={{ padding: "5px" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                  padding: "10px",
                }}
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
                        backgroundColor: item.exercise_types.colour,
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
