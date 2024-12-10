import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import HeaderHome from "../components/layout/headerHome"
import Calendar from "../components/layout/calendar"
import WelcomeDialog from "../components/authentication/registerWelcomeDialog"
import Footer from "../components/layout/footer"
import SidebarMenu from "../components/sidebarMenu"

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get("dialog") === "open") {
      setIsDialogOpen(true)
      navigate("/")
    }
  }, [location, navigate])

  return (
    <>
      <HeaderHome setIsDrawerOpen={setIsDrawerOpen} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "30px 50px 50px 50px", // top right bottom left
        }}
      >
        <SidebarMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <Calendar />
      </Box>
      <Footer />
      <WelcomeDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

//TODO: Fix This
