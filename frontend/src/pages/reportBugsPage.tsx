import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import Layout from "../components/layout/layout"

const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => setWidth(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return width
}

export function ReportBugsPage() {
  const windowWidth = useWindowWidth()
  const formWidth =
    windowWidth <= 425 ? windowWidth * 0.8 : windowWidth <= 680 ? windowWidth * 0.9 : 640

  return (
    <Layout>
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
    </Layout>
  )
}

export default ReportBugsPage
