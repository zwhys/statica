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

        ".fc": {
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
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
        "& .fc-day-today": {
          backgroundColor: theme.palette.primary.light,
          fontWeight: theme.typography.fontWeightBold,
        },
        "& .fc-day-sat, & .fc-day-sun": {
          backgroundColor: theme.palette.background.weekend,
        },
        "& .fc-event-title": {
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
      }}
    />
  )
}

export default DynamicGlobalStyles
