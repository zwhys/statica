import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import SidebarMenu from "../sidebarMenu"
import Footer from "./footer"
import HeaderHome from "./headerHome"
import HeaderLanding from "./headerLanding"

const Layout = ({ children }: { children: JSX.Element }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const userId = useSelector((state: RootState) => state.user.userId)

  if (userId) {
    return (
      <>
        <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        <SidebarMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        {children}
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <HeaderLanding />
        {children}
        <Footer />
      </>
    )
  }
}

export default Layout
