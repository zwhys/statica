import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createTheme, ThemeProvider } from "@mui/material"
import { red, green, lightBlue, pink } from "@mui/material/colors"
import App from "./App"
import './App.css';

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
