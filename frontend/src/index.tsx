import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { PersistGate } from "redux-persist/integration/react"
import { red, green, lightBlue, pink } from "@mui/material/colors"
import { store, persistor } from "./redux/store"
import App from "./App"
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
      <PersistGate loading={null} persistor={persistor}>

      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
//TODO: Fix the fallback font