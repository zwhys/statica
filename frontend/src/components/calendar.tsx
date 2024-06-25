import React, { useState } from "react";
import { EventApi, DateSelectArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./calendar-utils";
import AddExerciseEvent from "./addExerciseEvent";

export default function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | null>(null);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectInfo(selectInfo);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleCreateEvent = (sets: string, reps: string, exerciseType: string, comments: string) => {
    if (selectInfo) {
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect(); // clear date selection

      calendarApi.addEvent({
        id: createEventId(),
        title: `${sets} sets of ${reps} reps of ${exerciseType}`,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        extendedProps: {
          comments: comments
        }
      });

      handleClose();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

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
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventsSet={handleEvents}
          themeSystem="bootstrap"
        />
      </div>
      <AddExerciseEvent
        open={dialogOpen}
        handleClose={handleClose}
        handleCreateEvent={handleCreateEvent}
      />
    </div>
  );
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <i>{eventContent.event.title}</i>
      <br />
      <small>{eventContent.event.extendedProps.comments}</small>
    </>
  );
}
