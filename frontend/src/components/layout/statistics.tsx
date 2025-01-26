import { Typography, Box, Stack, Grid, useTheme } from "@mui/material"

const Statistics: React.FC = () => {
  const theme = useTheme()

  const data = [
    {
      id: 1,
      label: "Push Ups",
      color: "#42BFDD",
      details: [
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 2, label: "SETS REPS DATES 2" },
      ],
    },
    {
      id: 2,
      label: "Reverse Fly",
      color: "#706C61",
      details: [
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 2, label: "SETS REPS DATES 2" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
        { id: 3, label: "SETS REPS DATES 3" },
      ],
    },
    {
      id: 3,
      label: "Bicep Curl",
      color: "#DAA49A",
      details: [
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
        { id: 1, label: "SETS REPS DATES 1" },
      ],
    },
  ]

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container sx={{ padding: { xs: "10px", sm: "50px" } }}>
        {data.map(item => (
          <Grid
            item
            xs={12}
            sm={6}
            key={item.id}
            sx={{
              padding: "5px",
            }}
          >
            <Box
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "8px", padding: "10px" }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#F8F1EB",
                }}
              >
                {item.label}
              </Typography>

              <Stack
                spacing={1}
                sx={{
                  marginTop: 2,
                  padding: 1,
                  borderRadius: "8px",
                }}
              >
                {item.details.map(detail => (
                  <Box
                    key={detail.id}
                    sx={{
                      padding: 1,
                      backgroundColor: item.color,
                      borderRadius: "4px",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#ffffff" }}>
                      {detail.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Statistics
