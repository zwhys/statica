import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import HeaderHome from "../components/layout/headerHome"
import TabsChrome from "../components/TabsChrome"
import ViewCalendar from "../components/viewCalendar"
import ViewStatistics from "../components/viewStatistics"
import WelcomeDialog from "../components/authentication/signupWelcomeDialog"
import { useLocation, useNavigate } from "react-router-dom"

export function HomePage() {
  const [tabIndex, setTabIndex] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get("dialog") === "open") {
      setIsDialogOpen(true)
      navigate("/home")
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
        <Box>
          <TabsChrome tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </Box>
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "white",
            gap: 2,
            padding: 5,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderTopRightRadius: "32px",
            borderBottomRightRadius: "32px",
            borderBottomLeftRadius: "32px",
          }}
        >
          {tabIndex === 0 && <ViewCalendar />}
          {tabIndex === 1 && <ViewStatistics />}
        </Box>
      </Box>
      <WelcomeDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

export default HomePage
