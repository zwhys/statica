import { Avatar, Typography, Box, Toolbar, Link, Container, useTheme } from "@mui/material"
import LandingMenu from "../authentication/landingMenu"
import ThemeSwitch from "../themeSwitch"

export default function HeaderLanding() {
  const theme = useTheme()

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
            <Typography color={theme.palette.text.primary} fontSize={32}>
              Statica
            </Typography>
          </Link>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
            <ThemeSwitch />
            <LandingMenu />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  )
}
