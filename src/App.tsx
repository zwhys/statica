import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Calendar } from "./pages/calendar"
import { Statistics } from "./pages/statistics"
import NoPage from "./pages/noPage"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App
