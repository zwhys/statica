import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { red, green, lightBlue, pink } from "@mui/material/colors"
import App from "./App"
import store from './redux/store'
import "./App.css"
import "./index.css"


const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
    error: red,
    success: green,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
//TODO: Fix the fallback font