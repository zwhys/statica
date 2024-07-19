import { Box, Typography, Link } from "@mui/material"
import React from "react"

export function NotFoundPage() {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundImage: `url(/error404.jpg)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        height: 500,
        padding: 5,
        margin: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 8
      }}
    >
      <Box sx={{ flex: 1 }} />
      <Typography sx={{ color: "black", padding: 50 }} variant="body1" paragraph>
        Oops! The page you are looking for no longer exists, had its name changed, or is temporarily
        unavailable. Please check the URL for any spelling mistakes, or{" "}
        <Link href="/">return to the homepage</Link>.
      </Typography>
    </Box>
  )
}

export default NotFoundPage

//TODO: fix where it is redirected to