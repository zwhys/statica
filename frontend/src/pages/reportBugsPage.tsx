import { Box, Typography, useTheme, Button } from "@mui/material"
import { useSelector } from "react-redux"
import HeaderLanding from "../components/layout/headerLanding"
import HeaderHome from "../components/layout/headerHome"
import Footer from "../components/layout/footer"
import { RootState } from "../redux/store"
import { useState } from "react"

export function ReportBugsPage() {
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
      <Box textAlign="center">
        <Typography
          sx={{ color: theme.palette.text.primary}}
          variant="body1"
          paragraph
        >
          REPORT BUGS HERE
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default ReportBugsPage
