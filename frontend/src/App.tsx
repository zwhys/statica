import React from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage"
import NotFoundPage from "./pages/notFoundPage"

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const userId = useSelector((state: RootState) => state.userId)

  return userId ? children : <Navigate to="/landing" />
}

const routes = [
  {
    path: "/landing",
    element: <LandingPage />,
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
  return <RouterProvider router={router} />
}

export default App

//TODO: Create loading screen
//TODO: Allow for proper display of data in calendar
//TODO: Allow for proper display of data in calendar dialog
//TODO: Add types to everything
//TODO: add fullname and prefername functionality
//!: FIX THE ROUTES AND PERSISTING STORE
//!: CHANGE THE UI AND THEME
//!: 
