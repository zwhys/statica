import { useState } from "react"
import HeaderHome from "../components/layout/headerHome"
import Footer from "../components/layout/footer"
import SidebarMenu from "../components/sidebarMenu"
import Statistics from "../components/layout/statistics"

export default function StatisticsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
      <SidebarMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Statistics />
      <Footer />
    </>
  )
}
