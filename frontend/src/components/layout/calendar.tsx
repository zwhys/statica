import React, { useState } from "react"
import { EventInput } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayRecords from "../displayRecords"
import SubmitExerciseEntry from "../submitExerciseEntry"
import { Box, Button, useTheme } from "@mui/material"
import Loading from "./loading"
import DisplayEntry from "../displayEntry"

const Calendar: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEntryOpen, setIsEntryOpen] = useState(false)
  const [events, setEvents] = useState<EventInput[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null)
  const [selectedEntryData, setSelectedEntryData] = useState<SubmitExerciseEntryFormValues>()
  const [isLoading, setisLoading] = useState(true)
  const theme = useTheme()

  const handleEventClick = (eventInfo: any) => {
    const clickedEvent = events.find(event => event.id === eventInfo.event.id)
    console.log(clickedEvent)
    setSelectedEvent(clickedEvent || null)
    setIsEntryOpen(true)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        onClick={() => setIsDialogOpen(true)}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.secondary,
          width: 40,
          height: 40,
          minWidth: 40,
          borderRadius: "8px",
          fontSize: 50,
          "&:hover": {
            bgcolor: theme.palette.primary.dark,
          },
        }}
      >
        +
      </Button>

      <DisplayRecords setEvents={setEvents} setisLoading={setisLoading} />

      {isLoading ? (
        <Loading />
      ) : (
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
          dayMaxEvents={true}
          events={events}
          selectable={true}
          select={info => {
            const selectedDate = new Date(info.start)
            const entryData: SubmitExerciseEntryFormValues = {
              date_of_entry: selectedDate,
            }
            setSelectedEntryData(entryData)
            setIsDialogOpen(true)
          }}
          eventClick={handleEventClick}
        />
      )}
      <DisplayEntry
        open={isEntryOpen}
        onClose={() => setIsEntryOpen(false)}
        selectedEvent={selectedEvent}
      />

      <SubmitExerciseEntry
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        eventData={selectedEntryData}
      />
    </Box>
  )
}

export default Calendar
