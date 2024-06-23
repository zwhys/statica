import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createTheme, ThemeProvider } from "@mui/material"
import { red, green, teal, deepPurple } from "@mui/material/colors"
import App from './App';
import ExerTractHeader from './components/header';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
    error: red,
    success: green
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExerTractHeader/>
        <App/>
    </ThemeProvider>
  </React.StrictMode>
);

