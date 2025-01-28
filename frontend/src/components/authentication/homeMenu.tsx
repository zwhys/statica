import React, { useEffect, useState } from "react"
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

export default function HomeMenu() {
  const userId = useSelector((state: RootState) => state.user.userId)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const theme = useTheme()

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/username`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        })

        if (!response.ok) {
          throw new Error("Failed to fetch username")
        }

        const data = await response.json()
        setUsername(data.username)
      } catch (error) {
        console.error("Error fetching username:", error)
      }
    }

    fetchUsername()
  }, [userId])

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
