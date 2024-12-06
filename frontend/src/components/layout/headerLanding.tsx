import { Avatar, Typography, Box, Toolbar, Link, Container, Switch } from "@mui/material"
import LandingMenu from "../authentication/landingMenu"
import ChangeThemeSwitch from "../changeThemeSwitch"
import { useState } from "react"

export default function HeaderLanding() {
  const [mode, setMode] = useState<"light" | "dark">("light")

  return (
    <Container maxWidth={false}>
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
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
            <ChangeThemeSwitch
              checked={mode === "dark"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMode((checked: string) => checked === 'dark' ? 'dark' : 'light')
              }}
            />
            <LandingMenu />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  )
}

