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
          width: "100vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="landing.jpg"
          sx={{
            width: "100%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust for perfect centering
            color: "white", // Text color
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            padding: "30px", // Padding for text box
            borderRadius: "8px", // Rounded corners
            textAlign: "center", // Center text
          }}
        >
          <Typography variant="h4" component="div">
            Welcome to My Website
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
            This is a beautiful landing page.
          </Typography>
          <SignUp
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            sx={{
              display: "inline-block", // Size adjusts to content
              borderRadius: "8px", // Rounded corners
              padding: "10px 20px", // Adjust padding for text readability
              bgcolor: "white", // White background
              color: "#212227", // Text color
            }}
            text="Get Started"
          />
        </Box>
      </Box>
    </>
  )
}
