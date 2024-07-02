import React from "react"
import { CircularProgress, Box, Typography } from "@mui/material"

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FE6B8B" />
            <stop offset="100%" stopColor="#FF8E53" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
    </React.Fragment>
  )
}

export const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <GradientCircularProgress />
      <Typography variant="h6" mt={2}>
        Loading...
      </Typography>
    </Box>
  )
}

export default Loading
