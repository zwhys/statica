import React from "react"
import SignUp from "../components/signup"
import HeaderLanding from "../components/headerLanding"
import { Box, Container, Typography } from "@mui/material"

export function LandingPage() {
  return (
    <>
      <HeaderLanding />
      <Box
        display="flex"
        alignItems="center"
        height="100vh"
        sx={{
          flexDirection: "column",
          gap: 2,
          width: "50%",
          bgcolor: "white",
          margin: 10,
          backgroundColor: "white",
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
        textAlign="center"
        justifyContent="center"
      >
        <Typography variant="h2">Track workout progress, without thinking</Typography>
        <SignUp />
      </Box>
    </>
  )
}

export default LandingPage
