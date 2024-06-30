import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CalendarPage from "./pages/calendarPage"
import StatisticsPage from "./pages/statisticsPage"
import NotFoundPage from "./pages/notFoundPage"
import LandingPage from "./pages/landingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//TODO: Create loading screen
//TODO: Allow for proper display of data in calendar
//TODO: Allow for proper display of data in calendar dialog