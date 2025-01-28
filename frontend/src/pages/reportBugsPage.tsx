import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import HeaderLanding from "../components/layout/headerLanding"
import HeaderHome from "../components/layout/headerHome"
import Footer from "../components/layout/footer"
import { RootState } from "../redux/store"
import { useEffect, useState } from "react"
import SidebarMenu from "../components/sidebarMenu"

export function ReportBugsPage() {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [formWidth, setFormWidth] = useState<string | number>()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth <= 425) {
      setFormWidth(windowWidth * 0.8)
    } else if (windowWidth <= 680) {
      setFormWidth(windowWidth * 0.9)
    } else {
      setFormWidth("640")
    }
  }, [windowWidth])

  return (
    <>
      {userId ? (
        <HeaderHome setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
      ) : (
        <HeaderLanding />
      )}
      <SidebarMenu open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
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
          title="google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScA92xHdi9H1FGf4_392WnDyHnTM7BF2cwmnlT9uzgjTPIizQ/viewform?embedded=true"
          width={formWidth}
          height="1050"
          style={{ border: "none" }}
        />
      </Box>
      <Footer />
    </>
  )
}

export default ReportBugsPage
