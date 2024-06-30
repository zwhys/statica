import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, TabsProps } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  opacity: 1,
  // overflow: "initial",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  color: "primary",
  backgroundColor: "pink",
  transition: "0.2s",
  // zIndex: 2,
  marginTop: 4,
  textTransform: "initial",
  [theme.breakpoints.up("md")]: {
    minWidth: 160,
  },
  "&:before": {
    transition: "0.2s",
  },
  "&:not(:first-of-type)": {
    "&:before": {
      content: '" "',
      position: "absolute",
      left: 0,
      display: "block",
      height: 20,
      width: "1px",
      zIndex: 1,
      marginTop: theme.spacing(0.5),
      backgroundColor: (theme || theme).palette.grey[500],
    },
  },
  [`& + .${tabClasses.selected}::before`]: {
    opacity: 0,
  },
  "&:hover": {
    [`&:not(.${tabClasses.selected})`]: {
      backgroundColor: "pink",
    },
    "&::before": {
      opacity: 0,
    },
    [`& + .${tabClasses.root}::before`]: {
      opacity: 0,
    },
  },
  [`&.${tabClasses.selected}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}`]: {
    zIndex: 1,
  },
  [`&.${tabClasses.selected} + .${tabClasses.root}::before`]: {
    opacity: 0,
  },
}));

export function TabsChrome({ sx }: TabsProps) {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      sx={{
        [`& .${tabsClasses.indicator}`]: {
          display: "none",
        },
      }}
    >
      <TabItem label={"Calendar"} />
      <TabItem label={"Statistics"} />

    </Tabs>
  );
}
