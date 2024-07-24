import React, { useState } from "react"
import { Box, IconButton, Avatar, Menu } from "@mui/material"
import SignUp from "./signup"
import LogIn from "./login"

export default function LandingMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const open = Boolean(anchorEl)

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget)
          }}
        >
          <Avatar sx={{ bgcolor: "#8390FA" }} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <LogIn open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        <SignUp open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      </Menu>
    </>
  )
}
