import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CalendarPage } from "./pages/calendarPage"
import { StatsPage } from "./pages/statsPage"
import NoPage from "./pages/noPage"
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <HomePage/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/statistics" element={<StatsPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App
