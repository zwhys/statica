import React from "react"
import { Box, Typography } from "@mui/material"

export const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="70vh"
      sx={{
        backgroundImage: `url(/loading.gif)`,
        backgroundSize: "contain",
        padding: 5,
        margin: 10,
        borderRadius: 8,
      }}
    >
      <Typography variant="h2" mt={2}>
        Loading...
      </Typography>
    </Box>
  )
}

export default Loading
