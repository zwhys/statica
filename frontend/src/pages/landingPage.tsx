import React, { useState } from "react"
import HeaderLanding from "../components/layout/headerLanding"
import { Box, Typography } from "@mui/material"

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <>
      <HeaderLanding />
      {/* <Box
        display="flex"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        sx={{
          height: 500,
          bgcolor: "white",
          margin: 10,
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">Text Here</Typography>
          <SignUp open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </Box>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h2">Image Here</Typography>
        </Box>
      </Box> */}
    </>
  )
}