import { useState } from "react"
import { Box, Container, Grid, Typography, useTheme } from "@mui/material"
import Register from "../components/authentication/register"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded"
import AssistantIcon from "@mui/icons-material/Assistant"
import Layout from "../components/layout/layout"

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const theme = useTheme()

  return (
    <Layout>
      <>
        <Box
          sx={{
            width: "100vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="landing.jpg"
            sx={{
              width: "100%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <Register
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              sx={{
                display: "inline-block",
                borderRadius: "8px",
                padding: "10px 20px",
                bgcolor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                fontWeight: "bold",
                typography: "h6",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
              text="Get Started"
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "center",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                },
              }}
            >
              Welcome to Statica
            </Typography>
            <Typography component="p" variant="body1">
              Visable Progress, Achievable Goals
            </Typography>
            <Register
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              sx={{
                display: "inline-block",
                borderRadius: "8px",
                padding: "10px 20px",
                bgcolor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                fontWeight: "bold",
                typography: "h6",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
              text="Get Started"
            />
          </Box>
        </Box>
        <Container maxWidth={false} sx={{ marginTop: "15px", marginBottom: "15px" }}>
          <Grid container spacing={2}>
            {[
              {
                icon: <CalendarTodayRoundedIcon sx={{ fontSize: 100 }} />,
                title: "Calendar",
                description:
                  "Make use of an interactive calendar to plan your workouts. Schedule, document, and review sessions, ensuring you stay consistent and on track with your fitness goals.",
              },
              {
                icon: <BarChartOutlinedIcon sx={{ fontSize: 100 }} />,
                title: "Statistics",
                description:
                  "Track your progress with detailed insights on your workouts, including personal best and more (Coming Soon). Monitor trends and see your improvements over time.",
              },
              {
                icon: <AssistantIcon sx={{ fontSize: 100 }} />,
                title: "AI Assistant",
                description:
                  "Your personal fitness guide. The AI Assistant offers tailored workout recommendations, tracks your progress, and provides tips to help you reach your goals faster.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "8px",
                    padding: "20px",
                    color: theme.palette.text.primary,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {item.icon}
                  <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "left", marginTop: "auto" }}>
                    {item.description}
                  </Typography>
                  {["AI Assistant"].includes(item.title) && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "h4.fontSize" }}>
                        Coming Soon
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    </Layout>
  )
}
