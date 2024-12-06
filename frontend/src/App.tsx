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
          main: "#B098A4", // Base color
          light: "#D1B5C7", // Light version of base
          dark: "#7D4F77", // Darker version of base
          contrastText: "#FFFFFF", // Ensures contrast for text
        },
        background: {
          default: mode === "dark" ? "#121212" : "#FFFFFF", // Dark or light background
          paper: mode === "dark" ? "#1E1E1E" : "#F8F9FA", // Paper background for cards
        },
        text: {
          primary: mode === "dark" ? "#E0E0E0" : grey[900], // Light text on dark, dark text on light
          secondary: mode === "dark" ? grey[500] : grey[700], // Secondary text color
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
