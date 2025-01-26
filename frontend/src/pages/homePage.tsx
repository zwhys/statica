import { useState } from "react"
import { Box } from "@mui/material"
import HeaderHome from "../components/layout/headerHome"
import Calendar from "../components/layout/calendar"
import Footer from "../components/layout/footer"
import SidebarMenu from "../components/sidebarMenu"

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState<React.ReactNode>(<Calendar />)

  return (
    <>
      <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "20px 50px 50px 50px",
        }}
      >
        <SidebarMenu
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab}
      </Box>
      <Footer />
    </>
  )
}
