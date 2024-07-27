import React, { useState } from "react"
import { EventInput } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayRecords from "../displayRecords"
import DisplayExerciseEntry from "../displayExerciseEntry"
import AddExerciseEntry from "../addExerciseEntry"
import { Box } from "@mui/material"

const Calendar: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [events, setEvents] = useState<EventInput[]>([])

  const renderButton = (info: { el: HTMLElement }) => {
    if (info.el.classList.contains("fc-day-today")) {
      const button = document.createElement("button")
      button.innerText = "+"
      button.style.backgroundColor = "#8390FA"
      button.style.color = "white"
      button.style.border = "none"
      button.style.borderRadius = "25%"
      button.style.width = "30px"
      button.style.height = "30px"
      button.style.fontSize = "24px" // Adjusted for better fit
      button.style.cursor = "pointer"
      button.style.position = "fixed" // Make the button fixed relative to the viewport
      button.style.bottom = "5px" // Distance from the bottom edge
      button.style.left = "5px" // Distance from the left edge

      document.body.appendChild(button)

      button.onclick = () => setIsDialogOpen(true)

      info.el.querySelector(".fc-daygrid-day-events")?.appendChild(button)
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <DisplayRecords setEvents={setEvents} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          right: "today prev,next",
        }}
        buttonText={{
          today: "Today",
        }}
        firstDay={1}
        dayCellDidMount={renderButton}
        // selectable={true}
        dayMaxEvents={true}
        events={events}
      />
      <AddExerciseEntry open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </Box>
  )
}

export default Calendar
//TODO: Fix the button
//TODO: Reimplement exercise type table, should contain colour column, let user inset into table and choose colour
