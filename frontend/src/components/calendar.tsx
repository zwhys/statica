import { EventApi, EventContentArg } from "@fullcalendar/core"
import { INITIAL_EVENTS } from "./calendar-utils"
import { useForm, SubmitHandler } from "react-hook-form"
import AddExerciseEntry from "./addExerciseEntry"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState } from "react"
import timeGridPlugin from "@fullcalendar/timegrid"

type FormValues = {
  open: boolean
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}

const Calendar: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false) 

  return (
    <>
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
        initialEvents={INITIAL_EVENTS}
        select={() => setDialogOpen(true)}
        eventContent={renderEventContent}
      />

      <AddExerciseEntry open={dialogOpen} onClose={() => setDialogOpen(false)} />
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
