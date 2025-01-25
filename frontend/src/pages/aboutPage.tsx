import { Box, Typography, useTheme, Button, Grid, Container, Paper } from "@mui/material"
import { useSelector } from "react-redux"
import HeaderLanding from "../components/layout/headerLanding"
import HeaderHome from "../components/layout/headerHome"
import Footer from "../components/layout/footer"
import { RootState } from "../redux/store"
import { useState } from "react"

export function AboutPage() {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const theme = useTheme()

  return (
    <>
      {userId ? (
        <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
      ) : (
        <HeaderLanding />
      )}
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="about.jpg"
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "30px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="div">
            About Statica
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center">
        <Container maxWidth={false} sx={{ marginTop: "15px", marginBottom: "15px" }}>
          <Typography variant="body1" paragraph sx={{ maxWidth: "75%", margin: "0 auto" }}>
            Welcome to <strong>Statica</strong>, your personal workout tracking companion! This app
            was built to help you keep track of your fitness journey in a simple and effective way.
            With Statica, you can log your workouts, and see your progress over time—all within a
            sleek, easy-to-use calendar interface.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Features:
          </Typography>
          <Typography variant="body1">
            Track Workouts: Log your workouts by date, including exercises, sets, reps, and remarks.
          </Typography>
          <Typography variant="body1">
            Calendar View: View your workout schedule at a glance in a calendar layout.
          </Typography>
          <Typography variant="body1">
            Progress Over Time: Monitor your progress and see how your workout routine evolves.
          </Typography>
          <Typography variant="body1">
            AI Chatbot: Assists you in planning your workouts and provides helpful tips.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default AboutPage
