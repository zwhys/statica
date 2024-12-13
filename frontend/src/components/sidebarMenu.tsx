import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material"
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import Calendar from "./layout/calendar"
import Statistics from "./layout/statistics"

const drawerWidth = 240

export default function SidebarMenu({ open, onClose, setSelectedTab }: DisplayProps) {
  const theme = useTheme()

  const Items = [
    {
      icon: <CalendarTodayRoundedIcon />,
      text: "Calendar",
      tab: <Calendar />,
    },
    {
      icon: <BarChartOutlinedIcon />,
      text: "Statistics",
      tab: <Statistics />,
    },
  ]

  return (
    <Box>
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: theme.zIndex.drawer - 1,
          }}
          onClick={onClose}
        />
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        open={open}
        onClose={onClose}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            height: "64px",
          }}
        ></Box>

        <Divider />

        <List>
          {Items.map(item => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => setSelectedTab?.(item.tab)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}
