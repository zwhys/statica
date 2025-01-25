import { Box, Typography, useTheme, Button, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import HeaderLanding from "../components/layout/headerLanding"
import HeaderHome from "../components/layout/headerHome"
import Footer from "../components/layout/footer"
import { RootState } from "../redux/store"
import { useState } from "react"

export function NotFoundPage() {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const theme = useTheme()

  return (
    <Box minHeight={`100vh`} display={`flex`} flexDirection={`column`}>
      {userId ? (
        <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
      ) : (
        <HeaderLanding />
      )}
      <Box textAlign="center" flex={1} alignContent={`center`} paddingBottom={`10px`}>
        <img src="/404.svg" alt="error" style={{ maxWidth: "50%" }} />
        <Typography sx={{ color: theme.palette.text.primary }} variant="body1" paragraph>
          The page you are looking for does not exists, was renamed, or is temporarily unavailable.
        </Typography>

        <Button
          variant="contained"
          href="/"
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
      <Footer />
    </Box>
  )
}

export default NotFoundPage
