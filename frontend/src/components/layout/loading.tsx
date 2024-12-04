import React from "react"
import { Box, Typography } from "@mui/material"

export const Loading: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography variant="h4" sx={{ marginRight: 2 }}>
        Loading
      </Typography>
      <Box component="img" src="loading.gif" sx={{ width: "40px", height: "40px" }} />
    </Box>
  )
}

export default Loading
