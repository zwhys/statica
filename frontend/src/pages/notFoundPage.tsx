import { Box, Typography, useTheme, Button } from "@mui/material"
import Footer from "../components/layout/footer"

export function NotFoundPage() {
  const theme = useTheme()

  return (
    <>
      <Box textAlign="center">
        <img src="/404.png" alt="error" style={{ height: "100vh" }} />
        <Typography
          sx={{ color: theme.palette.text.primary, marginTop: "-375px" }}
          variant="body1"
          paragraph
        >
          The page you are looking for does not exists, was renamed, or is temporarily unavailable.
        </Typography>

        <Button
          variant="contained"
          href="/"
          sx={{
            borderRadius: "8px",
            padding: "10px 20px", // Adjust padding for text readability
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
            fontWeight: "bold",
            typography: "h6",
            marginBottom: "125px",
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
            },
          }}
        >
          GO BACK HOME
        </Button>
      </Box>
      <Footer />
    </>
  )
}

export default NotFoundPage
