import React from "react"
import { EventApi, DateSelectArg, EventContentArg } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { INITIAL_EVENTS, createEventId } from "./calendar-utils"

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}

export default class Calandar extends React.Component<{}, DemoAppState> {
  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-main">
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
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventsSet={this.handleEvents}
            themeSystem="bootstrap" // Set the theme system here
          />
        </div>
      </div>
    )
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Please enter a new title for your event")
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }
  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <i>{eventContent.event.title}</i>
    </>
  )
}
