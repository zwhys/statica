import React from "react"
import { Box, CircularProgress, Typography, useTheme } from "@mui/material"

export const Loading: React.FC = () => {
  const theme = useTheme()

  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress sx={{ color: theme.palette.text.primary }} />
    </Box>
  )
}

export default Loading
