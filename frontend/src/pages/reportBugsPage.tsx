import { Box, Typography, useTheme, Button, Container } from "@mui/material"
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
      <Box
        textAlign="center"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          minHeight: "100vh",
          width: "fit-content",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScA92xHdi9H1FGf4_392WnDyHnTM7BF2cwmnlT9uzgjTPIizQ/viewform?embedded=true"
          width="640"
          height="1050"
          style={{ border: "none" }}
        />
      </Box>
      <Footer />
    </>
  )
}

export default ReportBugsPage
