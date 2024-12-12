import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage"
import NotFoundPage from "./pages/notFoundPage"
import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material"
import { red, green } from "@mui/material/colors"
import DynamicGlobalStyles from "./dynamicBodyStyles"

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  return userId ? children : <Navigate to="/landing" />
}

const PublicRoutes = ({ children }: { children: JSX.Element }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  return !userId ? children : <Navigate to="/" />
}

const routes = [
  {
    path: "/landing",
    element: (
      <PublicRoutes>
        <LandingPage />
      </PublicRoutes>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]

const router = createBrowserRouter(routes)

declare module "@mui/material/styles" {
  interface TypeBackground {
    weekend?: string
  }
}

const App = () => {
  const mode = useSelector((state: RootState) => state.mode.mode)
  const theme = (mode: "light" | "dark") =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === "dark" ? "#D6D5FF" : "#B8B6FE",
          light: mode === "dark" ? "#9694CC" : "#D6D5FF",
          dark: mode === "dark" ? "#8785BD" : "#9694CC",
        },
        background: {
          default: mode === "dark" ? "#3C3C4A" : "#F8F1EB",
          weekend: mode === "dark" ? "#2C2C39" : "#D6C9BD",
        },
        text: {
          primary: mode === "dark" ? "#F8F1EB" : "#3C3C4A",
          secondary: mode === "dark" ? "#3C3C4A" : "#F8F1EB",
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

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <DynamicGlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

//TODO: Implement loading screen for other components other than calendar
//TODO: Add types to everything
//! TODO: set up undo function
//! TODO: All users see the same entries
//! TODO: Fix the dragging problem
//! TODO: Fix the timezone difference problem
//! TODO: Fix edit and add exercise entry
//! TODO: Fix Polling
