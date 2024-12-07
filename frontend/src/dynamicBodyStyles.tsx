import { GlobalStyles, useTheme } from "@mui/material"

const DynamicGlobalStyles = () => {
    const theme = useTheme();
  
    return (
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            minHeight: '100vh',
            background: theme.palette.background.default,
            backgroundSize: 'cover',
            transition: 'background 0.3s ease',
          },
          '.chrome-picker': {
            boxShadow: 'none !important',
          },
          '.fc-toolbar .fc-button': {
            backgroundColor: theme.palette.primary.main,
            border: 'none',
            height: '40px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '14px',
            fontWeight: 'bold',
          },
          '.fc-toolbar .fc-button:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '.fc-col-header-cell': {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            height: '40px',
            fontSize: '16px',
          },
          '.fc-col-header-cell.fc-day-sat, .fc-col-header-cell.fc-day-sun': {
            backgroundColor: theme.palette.text.secondary,
          },
          '.fc-day-today': {
            backgroundColor: theme.palette.primary.light,
            fontWeight: 'bold',
          },
          '.fc-day-sat, .fc-day-sun': {
            backgroundColor: theme.palette.background.default,
          },
          '.fc-event-title': {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
        }}
      />
    );
  };

export default DynamicGlobalStyles

