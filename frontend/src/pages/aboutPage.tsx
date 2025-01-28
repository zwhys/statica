import { Box, Typography, Grid, Container } from "@mui/material"
import Layout from "../components/layout/layout"

export function AboutPage() {
  return (
    <Layout>
      <>
        <Typography variant="h3" component="div" sx={{ textAlign: "center", padding: "20px" }}>
          About
        </Typography>
        <Box
          sx={{
            width: "100vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth={false}>
            <Grid container>
              <Grid item xs={12} md={6} sx={{ padding: "30px" }}>
                <Typography variant="h6" paragraph paddingTop={`40px`}>
                  Welcome to <strong>Statica</strong>, your personal workout tracking companion!
                  This app was built to help you keep track of your fitness journey in a simple and
                  effective way. With Statica, you can log your workouts, and see your progress over
                  time—all within a sleek, easy-to-use calendar interface.
                </Typography>

                <Typography variant="h4" textAlign={"center"} padding={`30px`}>
                  Features
                </Typography>

                <Typography variant="h6">
                  Calendar View: View your workouts at a glance in a calendar layout.
                </Typography>
                <Typography variant="h6">
                  Progress Over Time: View your progress and see how you improve.
                </Typography>
                <Typography variant="h6">
                  AI Chatbot: Assists you in planning your workouts and provides tips.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  order: { xs: -1, md: 1 },
                }}
              >
                <Box
                  component="img"
                  src="about.png"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </Layout>
  )
}

export default AboutPage
