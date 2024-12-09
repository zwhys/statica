import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import HeaderHome from "../components/layout/headerHome"
import Calendar from "../components/layout/calendar"
import Statistics from "../components/layout/statistics"
import WelcomeDialog from "../components/authentication/registerWelcomeDialog"
import { useTheme } from "@mui/material"
import Footer from "../components/layout/footer"

export function HomePage() {
  const [tabIndex, setTabIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get("dialog") === "open") {
      setIsDialogOpen(true)
      navigate("/")
    }
  }, [location, navigate])

  return (
    <>
      <HeaderHome />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "28px 40px 40px 40px", // top right bottom left
        }}
      >
        {tabIndex === 0 && <Calendar />}
        {tabIndex === 1 && <Statistics />}
      </Box>
      <Footer />
      <WelcomeDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

export default HomePage
