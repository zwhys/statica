import { useState} from "react"
import { Avatar, Typography, Box, Toolbar, Link, Container } from "@mui/material"
import LogIn from "../authentication/login"
import SignUp from "../authentication/signup"

export function HeaderLanding() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  return (
    <Container>
      <Toolbar sx={{ margin: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Link
            href="/landing"
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
          <Box display="flex" alignItems="center">
            <LogIn open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
            <SignUp open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  )
}

export default HeaderLanding
