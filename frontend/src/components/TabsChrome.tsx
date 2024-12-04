import React from "react"
import { styled } from "@mui/material/styles"
import Tab, { tabClasses } from "@mui/material/Tab"
import Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded"

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  color: "black",
  backgroundColor: "grey",
  transition: "0.2s",
  marginTop: 4,
  textTransform: "initial",
  [theme.breakpoints.up("md")]: {
    minWidth: 160,
  },
  "&:hover": {
    backgroundColor: "lightgrey",
  },
  [`&.${tabClasses.selected}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
    zIndex: 1,
    color: "black",
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
    opacity: 0,
  },
}))

interface TabsChromeProps extends TabsProps {
  tabIndex: number
  setTabIndex: React.Dispatch<React.SetStateAction<number>>
}

export function TabsChrome({ tabIndex, setTabIndex, sx }: TabsChromeProps) {
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
        sx={{
          [`& .${tabsClasses.indicator}`]: {
            display: "none",
          },
          ...sx,
        }}
      >
        <TabItem
          label={"Calendar"}
          icon={<CalendarTodayRoundedIcon />}
          iconPosition="start"
          sx={{
            minHeight: "48px",
          }}
        />
        <TabItem
          label={"Statistics"}
          icon={<BarChartOutlinedIcon />}
          iconPosition="start"
          sx={{
            minHeight: "48px",
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsChrome
