import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  useTheme,
} from "@mui/material"
import { AccountCircle, Logout } from "@mui/icons-material"
import { setUserId } from "../../redux/reducer"
import { RootState } from "../../redux/store"
import UserProfileDialog from "../userProfileDialog"
import { fetchUsername } from "../api"
import { useQuery } from "@tanstack/react-query"

export default function HomeMenu() {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const theme = useTheme()

  const { data: username } = useQuery({
    queryKey: ["username", userId],
    queryFn: () => fetchUsername(userId),
    enabled: !!userId,
  })

  return (
    <>
      <Box>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget)
          }}
        >
          <Avatar sx={{ bgcolor: theme.palette.primary.main, fontWeight: "bold" }}>U</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => setIsDialogOpen(true)}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          {username !== null ? username : "Loading..."}
        </MenuItem>
        <UserProfileDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        ></UserProfileDialog>
        <Divider />
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
