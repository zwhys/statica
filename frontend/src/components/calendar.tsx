import React from "react";
import {
  EventApi,
  DateSelectArg,
  EventContentArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./calendar-utils";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box
} from "@mui/material";

interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
  open: boolean;
  exerciseType: string;
  setNumber: string;
  repNumber: string;
  comments: string;
}

export default class Calendar extends React.Component<{}, DemoAppState> {
  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: [],
    open: false,
    exerciseType: "",
    setNumber: "",
    repNumber: "",
    comments: ""
  };

  render() {
    const { open } = this.state;

    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventsSet={this.handleEvents}
          />
        </div>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add Exercise Event</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <TextField
                  id="exertype"
                  label="Type of Exercise"
                  variant="outlined"
                  placeholder="Eg. Pushups"
                  sx={{ width: 150 }}
                  value={this.state.exerciseType}
                  onChange={(e) => this.setState({ exerciseType: e.target.value })}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="setnum"
                  label="No. of Sets"
                  variant="outlined"
                  placeholder="Eg. 3"
                  sx={{ width: 150 }}
                  value={this.state.setNumber}
                  onChange={(e) => this.setState({ setNumber: e.target.value })}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="repnum"
                  label="No. of Reps"
                  variant="outlined"
                  placeholder="Eg. 10"
                  sx={{ width: 150 }}
                  value={this.state.repNumber}
                  onChange={(e) => this.setState({ repNumber: e.target.value })}
                />
              </Grid>
            </Grid>
            <TextField
              sx={{ width: "100%", marginTop: 2 }}
              label="Comments"
              multiline
              maxRows={4}
              placeholder="Eg. Feelings, Difficulty, ..."
              value={this.state.comments}
              onChange={(e) => this.setState({ comments: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
                onClick={this.handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
                onClick={this.handleCreateEvent}
              >
                Create
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      exerciseType: "",
      setNumber: "",
      repNumber: "",
      comments: ""
    });
  };

  handleCreateEvent = () => {
    const { exerciseType, setNumber, repNumber, comments } = this.state;
    const title = `${exerciseType} - ${setNumber} sets, ${repNumber} reps`;

    const calendarApi = this.calendarRef?.getApi();
    if (calendarApi) {
      calendarApi.addEvent({
        id: createEventId(),
        title: title,
        start: new Date(),
        allDay: true,
        extendedProps: {
          comments: comments
        }
      });
    }

    this.handleClose();
  };

  handleEvents = (events: EventApi[]) => {
    this.setState({ currentEvents: events });
  };
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}
