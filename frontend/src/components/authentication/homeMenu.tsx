import React, { useState } from "react"
import { Settings } from "@mui/icons-material"
import Logout from "@mui/icons-material/Logout"
import { Box, IconButton, Avatar, Menu, MenuItem, ListItemIcon } from "@mui/material"
import { useDispatch } from "react-redux"
import { setUserId } from "../../redux/reducer"
import { useNavigate } from "react-router-dom"
import { AppSettings } from "../appSettings"

export default function HomeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const open = Boolean(anchorEl)

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget)
          }}
        >
          <Avatar sx={{ bgcolor: "#8390FA", fontWeight: "bold" }}>U</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={() => setAnchorEl(null)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <AppSettings open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        <MenuItem
          onClick={() => {
            dispatch(setUserId(null))
            navigate("/landing")
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
