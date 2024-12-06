import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage"
import NotFoundPage from "./pages/notFoundPage"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import { grey, red, green } from "@mui/material/colors"

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
          main: mode === "dark" ? "#B098A4" : "#E3D1DA", // Base color
          light: mode === "dark" ? "#D1B5C7" : "#F6EAF0", // Light version of base
          dark: mode === "dark" ? "#7D4F77" : "#C3A5B1", // Darker version of base
          contrastText: mode === "dark" ? "#FFFFFF" : "#212227", // Text contrast
        },
        background: {
          default: mode === "dark" ? "#FFFFFF" : "#212227", // Background color
          paper: mode === "dark" ? "#1E1E1E" : "#F8F9FA", // Paper/cards
        },
        text: {
          primary: mode === "dark" ? "#E0E0E0" : grey[900], // Main text
          secondary: mode === "dark" ? grey[500] : grey[700], // Secondary text
        },
        error: red, // Error color
        success: green, // Success color
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
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

//TODO: Implement loading screen for other than calendar
//TODO: Allow for proper display of data in calendar
//TODO: Allow for proper display of data in calendar dialog
//TODO: Add types to everything
//TODO: add fullname and prefername functionality
//TODO: set up delete function and prisma while im at it
