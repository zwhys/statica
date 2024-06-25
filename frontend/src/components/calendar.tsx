import React, { useState } from "react"
import { EventApi, DateSelectArg, EventContentArg } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { INITIAL_EVENTS, createEventId } from "./calendar-utils"
import AddExerciseEvent from "./addExerciseEvent"

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | null>(null)

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectInfo(selectInfo)
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

  const handleCreateEvent = (
    sets: string,
    reps: string,
    exerciseType: string,
    comments: string
  ) => {
    if (selectInfo) {
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      calendarApi.addEvent({
        id: createEventId(),
        title: `${sets}x${reps} ${exerciseType}`,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        extendedProps: {
          comments: comments
        }
      })

      handleClose()
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events)
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today"
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventsSet={handleEvents}
        themeSystem="bootstrap"
      />
      <AddExerciseEvent
        open={dialogOpen}
        handleClose={handleClose}
        handleCreateEvent={handleCreateEvent}
      />
    </>
  )
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <i>{eventContent.event.title}</i>
      <br />
      <small>{eventContent.event.extendedProps.comments}</small>
    </>
  )
}
