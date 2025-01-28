import { Box, Typography, useTheme, Button } from "@mui/material"
import Layout from "../components/layout/layout"

export function NotFoundPage() {
  const theme = useTheme()

  return (
    <Layout>
      <>
        <Box textAlign="center" flex={1} alignContent={`center`} paddingBottom={`10px`}>
          <img src="/404.svg" alt="error" style={{ maxWidth: "50%" }} />
          <Typography sx={{ color: theme.palette.text.primary }} variant="body1" paragraph>
            The page you are looking for does not exists, was renamed, or is temporarily
            unavailable.
          </Typography>

          <Button
            variant="contained"
            href="/calendar"
            sx={{
              borderRadius: "8px",
              bgcolor: theme.palette.primary.main,
              color: theme.palette.text.secondary,
              fontWeight: "bold",
              typography: "h6",
              "&:hover": {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            GO BACK HOME
          </Button>
        </Box>
      </>
    </Layout>
  )
}

export default NotFoundPage
