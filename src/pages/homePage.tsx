import React from "react"
import { Typography, Box } from "@mui/material"
import HeaderHome from "../components/headerHome"

export function HomePage() {
  return (
    <>
      <HeaderHome />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: "column",
          gap: 2,
          height: 500,
          bgcolor: "white",
          margin: 10,
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 8
        }}
        textAlign="center"
        justifyContent="center"
      >
        <Typography variant="h1">Tutorial goes here</Typography>
      </Box>
    </>
  )
}

export default HomePage
