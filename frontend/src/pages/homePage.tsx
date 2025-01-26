import { useState } from "react"
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
      <SidebarMenu
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab}
      <Footer />
    </>
  )
}
