import { GlobalStyles, useTheme } from "@mui/material"

const DynamicGlobalStyles = () => {
  const theme = useTheme()

  return (
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          minHeight: "100vh",
          background: theme.palette.background.default,
          backgroundSize: "cover",
          transition: "background 0.3s ease",
        },
        "& .chrome-picker": {
          boxShadow: "none !important",
        },
        "& .fc-toolbar .fc-button": {
          backgroundColor: theme.palette.primary.main,
          border: "none",
          height: "40px",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.text.secondary,
        },
        "& .fc-toolbar .fc-button:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "& .fc-col-header-cell": {
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          height: "40px",
          fontSize: "16px",
          fontWeight: theme.typography.fontWeightMedium,
        },
        "& .fc-col-header-cell.fc-day-sat, & .fc-col-header-cell.fc-day-sun": {
          backgroundColor: theme.palette.background.weekend,
        },
        "& .fc-day-sat, & .fc-day-sun": {
          backgroundColor: theme.palette.background.weekend,
        },
        "& .fc-event": {
          margin: "1px",
        },
        "& .fc-event-title": {
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontWeight: "bold",
        },
        "& .fc-popover": {
          zIndex: "1000 !important",
        },
        "& .fc-popover-title": {
          color: theme.palette.text.primary,
        },
        "& .fc-popover .fc-popover-header": {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.weekend,
        },
        "& .fc-popover-body": {
          backgroundColor: theme.palette.background.default,
        },
        "& .fc .fc-scrollgrid": {
          border: "none !important",
        },
        "& .fc-scrollgrid td:last-of-type": {
          border: "none !important",
        },
        "& .fc .fc-day": {
          border: "none !important",
        },
        "& .fc-header-toolbar": {
          margin: "20px 50px 50px 50px",
        },
        "& th[role='presentation']": {
          border: "none",
        },
        "@media (max-width: 600px)": {
          "& .fc-header-toolbar": {
            flexDirection: "column",
          },
        },
      }}
    />
  )
}

export default DynamicGlobalStyles
