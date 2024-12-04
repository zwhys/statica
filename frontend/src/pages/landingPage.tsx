import React, { useState } from "react"
import HeaderLanding from "../components/layout/headerLanding"
import { Box, Typography } from "@mui/material"
import SignUp from "../components/authentication/signup"

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <>
      <HeaderLanding />
      <Box
        sx={{
          width: "100vw", // Full screen width
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="landing.jpg"
          sx={{
            width: "100%", // Full width of parent
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%", // Overlay the image fully
            background: "linear-gradient(to right, rgba(255, 255, 255, 0) 40%, white 80%)",
            pointerEvents: "none", // Let events pass through
          }}
        />
      </Box>
    </>
  )
}
