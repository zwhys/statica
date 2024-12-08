import React, { useState } from "react"
import { Box, IconButton, Avatar, Menu, ListItemIcon, useTheme } from "@mui/material"
import Register from "./register"
import LogIn from "./login"
import { PersonAdd } from "@mui/icons-material"

export default function LandingMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const open = Boolean(anchorEl)
  const theme = useTheme()

  return (
    <>
      <Box>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget)
          }}
        >
          <Avatar sx={{ bgcolor: theme.palette.primary.main }} />
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
        <Register
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          icon={
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
          }
          text="Register"
        />
      </Menu>
    </>
  )
}
