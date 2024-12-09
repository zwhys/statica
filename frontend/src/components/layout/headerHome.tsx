import {
  Avatar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import HomeMenu from "../authentication/homeMenu"
import MenuIcon from "@mui/icons-material/Menu"
import ThemeSwitch from "../themeSwitch"

export default function HeaderHome({ setIsDrawerOpen }: HeaderHomeProps) {
  const theme = useTheme()

  return (
    <Container maxWidth={false}>
      <Toolbar sx={{ margin: 1, display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Menu Icon, only visible on the homepage */}
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true)
            }}
            sx={{ display: { xs: "block", sm: "none" } }} // Only show the menu icon on small screens (mobile)
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              cursor: "pointer",
              ml: 2,
            }}
          >
            <Avatar
              alt="Logo"
              variant="rounded"
              src="logo.png"
              sx={{ marginRight: 2, width: 56, height: 56 }}
            />
            <Typography color={theme.palette.text.primary} fontSize={32}>
              Railway
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
          <ThemeSwitch />
          <HomeMenu />
        </Box>
      </Toolbar>
    </Container>
  )
}
