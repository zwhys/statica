import React, { useState } from "react";
import { EventApi, DateSelectArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./calendar-utils";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormValues = {
  open: boolean;
  exercise_type: string;
  sets: number;
  reps: number;
  remarks: string;
};

const Calendar: React.FC = () => {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const response = await fetch("/add_exercise_entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userId: 1,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add exercise entry")
      }

      console.log("Exercise entry added successfully")
      handleClose()
      reset()
    } catch (error) {
      console.error("Error adding exercise entry:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setOpen(true);
  };

  const handleEvents = (events: EventApi[]) => {
    console.log("Current Events:", events);
  };

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
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventsSet={handleEvents}
      />

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Exercise Event</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <FormControl
                  variant="outlined"
                  error={!!errors.exercise_type}
                  sx={{ width: 200, marginTop: 1 }}
                >
                  <InputLabel id="exercise-type-label">Type of Exercise</InputLabel>
                  <Controller
                    name="exercise_type"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Required" }}
                    render={({ field }) => (
                      <Select
                        id="exercise_type"
                        label="Type of Exercise"
                        {...field}
                      >
                        <MenuItem value="Pushups">Pushups</MenuItem>

                      </Select>
                    )}
                  />
                  <FormHelperText>{errors.exercise_type?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField
                  id="sets"
                  label="No. of Sets"
                  variant="outlined"
                  placeholder="Eg. 3"
                  sx={{ width: 150, marginTop: 1 }}
                  {...register("sets", {
                    required: "Required",
                    pattern: {
                      value: /^[1-9]\d*$/,
                      message: "Positive integers only",
                    },
                  })}
                  error={!!errors.sets}
                  helperText={errors.sets ? errors.sets.message : ""}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="reps"
                  label="No. of Reps"
                  variant="outlined"
                  placeholder="Eg. 10"
                  sx={{ width: 150, marginTop: 1 }}
                  {...register("reps", {
                    required: "Required",
                    pattern: {
                      value: /^[1-9]\d*$/,
                      message: "Positive integers only",
                    },
                  })}
                  error={!!errors.reps}
                  helperText={errors.reps ? errors.reps.message : ""}
                />
              </Grid>
            </Grid>
            <TextField
              sx={{ width: "100%", marginTop: 2 }}
              label="Remarks"
              multiline
              maxRows={4}
              placeholder="Eg. Feelings, Difficulty, ..."
              {...register("remarks", { required: false })}
            />
          </DialogContent>
          <DialogActions>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ margin: 2 }}
              >
                Create
              </Button>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

export default Calendar;
