import { Box, Typography, Link } from "@mui/material"
import React from "react"

export function NotFoundPage() {
  //TODO: Improve UI for NoPage
  return (
    <Box
      textAlign="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        gap: 2,
        padding: 5,
        margin: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
      }}
    >
      <Typography sx={{ color: "black" }} variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography sx={{ color: "black" }} variant="body1" paragraph>
        Oops! The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable. Please check the URL for any spelling mistakes, or{" "}
        <Link href="/home">return to the homepage</Link>.
      </Typography>
    </Box>
  )
}

export default NotFoundPage
