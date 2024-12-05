import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { PersistGate } from "redux-persist/integration/react"
import { red, green } from "@mui/material/colors"
import { store, persistor } from "./redux/store"
import App from "./App"
import "./App.css"
import "./index.css"
import Loading from "./components/layout/loading"

const theme = createTheme({
  palette: {
    primary: {
      main: "#B098A4", // The base color
      light: "#D1B5C7", // Lighter version of main (more desaturated pink/purple)
      dark: "#7D4F77", // Darker version of main (deeper purple)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#5A67D8",
      light: "#7C89E4",
      dark: "#3A43A3",
      contrastText: "#FFFFFF",
    },
    error: red,
    success: green,
  },
  typography: {
    fontFamily: "Raleway",
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
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
//TODO: Fix the fallback font
