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

export default function HeaderHome({ setIsDrawerOpen, isDrawerOpen }: HeaderHomeProps) {
  const theme = useTheme()

  return (
    <Container maxWidth={false}>
      <Toolbar sx={{ margin: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Link
            href="/"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              cursor: "pointer",
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
          <IconButton
            onClick={() => {
              setIsDrawerOpen(!isDrawerOpen)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
            <ThemeSwitch />
            <HomeMenu />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  )
}
