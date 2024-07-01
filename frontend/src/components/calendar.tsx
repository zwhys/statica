import { EventInput, EventContentArg } from "@fullcalendar/core"
import DisplayRecords from "./displayRecords"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState } from "react"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayExerciseEntry from "./displayExerciseEntry"

const Calendar: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [events, setEvents] = useState<EventInput[]>([])

  return (
    <>
      <DisplayRecords setEvents={setEvents} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      //   customButtons={{
      //     myCustomButton: {
      //         text: 'custom!',
      //         click: function() {
      //             alert('clicked the custom button!');
      //         },
      //     },
      // }}
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
        select={() => setDialogOpen(true)}
        eventContent={renderEventContent}
      />

      <DisplayExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  )
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}

export default Calendar
