import React from "react"
import { Avatar, Typography, Box, Toolbar, Link, AppBar } from "@mui/material"

export function ExerTractHeader() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ margin: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Link
            href="/home"
            underline="none"
            sx={{ display: "flex", alignItems: "center", color: "inherit", cursor: "pointer" }}
          >
            <Avatar alt="Logo" variant="rounded" src="favicon.ico" sx={{ marginRight: 2, width: 56, height: 56 }} />
            <Typography color="white" fontSize={32}>
              ExerTract
            </Typography>
          </Link>
          <Box display="flex" alignItems="center">
            <Link
              href="/calendar"
              underline="hover"
              color="inherit"
              variant="h3"
              sx={{ marginLeft: 2, cursor: "pointer" }}
            >
              <Typography color="white" fontSize={24}>
                Calendar
              </Typography>
            </Link>

            <Link
              href="/statistics"
              underline="hover"
              color="inherit"
              variant="h3"
              sx={{ marginLeft: 2, cursor: "pointer" }}
            >
              <Typography color="white" fontSize={24}>
                Statistics
              </Typography>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default ExerTractHeader
