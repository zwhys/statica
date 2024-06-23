import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Box, createTheme, ThemeProvider } from "@mui/material"
import { red, green, teal, deepPurple } from "@mui/material/colors"
import App from "./App"
import ExerTractHeader from "./components/header"
// import './App.css';

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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExerTractHeader />
      {/* <Box
        sx={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Adjust as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white" // Text color on top of the background
        }}
      >
        <App /> 
      </Box> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
