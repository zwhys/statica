import React, { useState } from "react"
import { Avatar, Typography, Box, Toolbar, Link, AppBar } from "@mui/material"
import LogOut from "./authentication/logout"

export function HeaderHome() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ margin: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Link
            href="/home"
            underline="none"
            sx={{ display: "flex", alignItems: "center", color: "inherit", cursor: "pointer" }}
          >
            <Avatar
              alt="Logo"
              variant="rounded"
              src="logo.png"
              sx={{ marginRight: 2, width: 56, height: 56 }}
            />
            <Typography color="white" fontSize={32}>
              Railway
            </Typography>
          </Link>
          <LogOut />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderHome
