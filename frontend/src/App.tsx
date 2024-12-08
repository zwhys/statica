import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage"
import NotFoundPage from "./pages/notFoundPage"
import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material"
import { grey, red, green } from "@mui/material/colors"
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

const App = () => {
  const mode = useSelector((state: RootState) => state.mode.mode)
  const theme = (mode: "light" | "dark") =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === "dark" ? "#D6D5FF" : "#B8B6FE", // Base color
          light: mode === "dark" ? "#9694CC" : "#D6D5FF", // Light version of base
          dark: mode === "dark" ? "#8785BD" : "#9694CC", // Darker version of base
        },
        background: {
          default: mode === "dark" ? "#3C3C4A" : "#F8F1EB",
        },
        text: {
          primary: mode === "dark" ? "#F8F1EB" : "#3C3C4A", // Main text
          secondary: mode === "dark" ? "#3C3C4A" : "#F8F1EB", // Main text
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

//TODO: Implement loading screen for other than calendar
//TODO: Allow for proper display of data in calendar
//TODO: Allow for proper display of data in calendar dialog
//TODO: Add types to everything
//TODO: remove fullname and prefername functionality
//TODO: set up delete and updatefunction
//TODO: Pick a nice colour palette for light mode
//TODO: Make calendar work in light mode
