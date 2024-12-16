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
          light: mode === "dark" ? "#E0D9FF" : "#D3CCFE",
          main: mode === "dark" ? "#D3CCFE" : "#B8A9F8",
          dark: mode === "dark" ? "#B8A9F8" : "#9E88F2",
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

