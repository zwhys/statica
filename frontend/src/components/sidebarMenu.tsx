import { styled } from "@mui/material/styles"
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

const drawerWidth = 200

// const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })<{
//   open?: boolean
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }))

export default function SidebarMenu({ open, onClose }: DisplayProps) {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
            height: "calc(100vh - 64px)",
          },
        }}
        variant="persistent"
        open={open}
        onClose={onClose}
      >
        <Divider />
        <List>
          {[
            { icon: <CalendarTodayRoundedIcon />, text: "Calendar" },
            { icon: <BarChartOutlinedIcon />, text: "Statistics" },
          ].map(item => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      {/* <Main open={open}></Main> */}
    </Box>
  )
}
