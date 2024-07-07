import React, { useState } from "react"
import { Box } from "@mui/material"
import HeaderHome from "../components/headerHome"
import TabsChrome from "../components/TabsChrome"
import ViewCalendar from "../components/viewCalendar"
import ViewStatistics from "../components/viewStatistics"
import WelcomeDialog from "../components/authentication/signupWelcomeDialog"

export function HomePage() {
  const [tabIndex, setTabIndex] = useState(0)
  const [isWelcomeDialogOpen, setIsWelcomeDialogOpen] = useState(false)
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
      <WelcomeDialog open={isWelcomeDialogOpen} onClose={() => setIsWelcomeDialogOpen(false)} />
    </>
  )
}

export default HomePage
