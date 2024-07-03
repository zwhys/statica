import React, {useState} from "react"
import { Avatar, Typography, Box, Toolbar, Link, AppBar, Button } from "@mui/material"
import LogOut from "./authentication/logout"
import ChangeColour from "./changeColour"

export function HeaderHome() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
          <Button
        size="large"
        variant="contained"
        color="secondary"
        sx={{
          margin: 1,
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
        }}
        onClick={() => setIsDialogOpen(true)}
      >
        MOGOJOHN
      </Button>
          <ChangeColour open={isDialogOpen} onClose={() => setIsDialogOpen(false)}/>
          <LogOut />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderHome
