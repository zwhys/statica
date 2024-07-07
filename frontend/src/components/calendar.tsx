import { EventInput, EventContentArg } from "@fullcalendar/core"
import DisplayRecords from "./displayRecords"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState } from "react"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayExerciseEntry from "./displayExerciseEntry"
import { Box } from "@mui/material"



const Calendar: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [events, setEvents] = useState<EventInput[]>([])

  return (
    <>
      <DisplayRecords setEvents={setEvents} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        select={() => setIsDialogOpen(true)}
        // eventContent={renderEventContent}
      />

      <DisplayExerciseEntry open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

// function renderEventContent(eventContent: EventContentArg) {
//   const exerciseIndex = exerciseList.indexOf(eventContent.event.title);
//   const backgroundColor = colors[exerciseIndex % colors.length];

//   return (
//     <Box sx={{ bgcolor: backgroundColor, borderRadius: 1 }}>
//       {eventContent.event.title}
//     </Box>
//   );
// }

export default Calendar
//TODO: Make better buttons
//TODO: Reimplement exercise type table, should contain colour column, let user inset into table and choose colour