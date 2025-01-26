import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { EventInput } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayRecords from "../displayRecords"
import SubmitExerciseEntry from "../submitExerciseEntry"
import DisplayEntry from "../displayEntry"
import { fetchExercise_types } from "../api"

const Calendar: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEntryOpen, setIsEntryOpen] = useState(false)
  const [events, setEvents] = useState<EventInput[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [exerciseTypes, setExerciseTypes] = useState<Exercise_types[]>([])

  useEffect(() => {
    fetchExercise_types(setExerciseTypes)
  }, [])

  const handleDateSelect = (info: any) => {
    setSelectedDate(info.start)
    setIsDialogOpen(true)
  }

  const handleEventClick = (eventInfo: any) => {
    const clickedEvent = events.find(event => event.id === eventInfo.event.id)
    setSelectedEvent(clickedEvent || null)
    setIsEntryOpen(true)
  }

  const handleAddButtonClick = () => {
    setIsDialogOpen(true)
    setSelectedDate(undefined)
  }

  return (
    <Box>
      <DisplayRecords setEvents={setEvents} exerciseTypes={exerciseTypes} />

      <FullCalendar
        timeZone="UTC"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          right: "add today prev,next",
        }}
        customButtons={{
          add: {
            text: "Add",
            click: handleAddButtonClick,
          },
        }}
        buttonText={{
          today: "Today",
        }}
        firstDay={1}
        dayMaxEvents={true}
        events={events}
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventTextColor="#2C2C39"
        height={"1100px"}
      />

      <DisplayEntry
        open={isEntryOpen}
        onClose={() => setIsEntryOpen(false)}
        selectedEvent={selectedEvent}
      />

      <SubmitExerciseEntry //This for adding
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        date_of_entry={selectedDate}
      />
    </Box>
  )
}

export default Calendar
