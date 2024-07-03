import { EventInput, EventContentArg } from "@fullcalendar/core"
import DisplayRecords from "./displayRecords"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState } from "react"
import timeGridPlugin from "@fullcalendar/timegrid"
import DisplayExerciseEntry from "./displayExerciseEntry"
import { Box } from "@mui/material"

const exerciseList = [
  'Ab Roller', 'Arm Circles', 'Back Extension', 'Back Squat', 'Bear Crawl', 'Bench Dip', 'Bench Press',
  'Bent Over Row', 'Bicep Curl', 'Bird Dog', 'Bodyweight Squat', 'Box Jump', 'Bulgarian Split Squat', 
  'Burpee', 'Calf Raise', 'Chest Fly', 'Chest Press', 'Chin-Up', 'Clean and Jerk', 'Close-Grip Bench Press',
  'Clapping Push-Up', 'Curl-Up', 'Deadlift', 'Decline Push-Up', 'Diamond Push-Up', 'Dips', 'Dumbbell Curl',
  'Dumbbell Fly', 'Dumbbell Lunge', 'Dumbbell Press', 'Dumbbell Row', 'Dumbbell Shrug', 'Dumbbell Squat',
  'Dumbbell Step-Up', 'Face Pull', 'Front Squat', 'Glute Bridge', 'Good Morning', 'Hanging Leg Raise',
  'Handstand Push-Up', 'High Knees', 'Hip Thrust', 'Hollow Body Hold', 'Inchworm', 'Incline Bench Press',
  'Incline Push-Up', 'Jump Rope', 'Jump Squat', 'Kettlebell Swing', 'Kneeling Push-Up', 'Lat Pulldown',
  'Leg Curl', 'Leg Extension', 'Leg Press', 'Lunge', 'Mountain Climber', 'Muscle-Up', 'One-Arm Push-Up',
  'Overhead Press', 'Pistol Squat', 'Plank', 'Power Clean', 'Pull-Up', 'Push Press', 'Push-Up', 'Rear Delt Fly',
  'Renegade Row', 'Reverse Crunch', 'Russian Twist', 'Scissor Kick', 'Shoulder Press', 'Side Plank',
  'Single-Leg Deadlift', 'Sit-Up', 'Skipping', 'Sled Push', 'Sled Pull', 'Split Squat', 'Squat', 'Squat Jump',
  'Standing Calf Raise', 'Standing Press', 'Step-Up', 'Straight-Leg Deadlift', 'Superman', 'T-Bar Row',
  'Thruster', 'Toes to Bar', 'Tricep Dip', 'Tricep Extension', 'Tricep Pushdown', 'Tuck Jump',
  'Turkish Get-Up', 'Upright Row', 'V-Up', 'Wall Sit', 'Walking Lunge', 'Wide-Grip Bench Press',
  'Wide-Grip Pull-Up', 'Windshield Wipers'
];

const colors = [
  "#FF7043", "#64B5F6", "#66BB6A", "#BA68C8", "#FFD54F", "#4DB6AC", "#FF8A65", "#42A5F5", "#81C784", "#9575CD",
  "#FFB74D", "#4DD0E1", "#FFAB91", "#7986CB", "#AED581", "#FFB74D", "#4DB6AC", "#FF7043", "#64B5F6", "#66BB6A",
  "#BA68C8", "#FFD54F", "#4DB6AC", "#FF8A65", "#42A5F5", "#81C784", "#9575CD", "#FFB74D", "#4DD0E1", "#FFAB91",
  "#7986CB", "#AED581", "#FFB74D", "#4DB6AC", "#FF7043", "#64B5F6", "#66BB6A", "#BA68C8", "#FFD54F", "#4DB6AC",
  "#FF8A65", "#42A5F5", "#81C784", "#9575CD", "#FFB74D", "#4DD0E1", "#FFAB91", "#7986CB", "#AED581"
];

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
        eventContent={renderEventContent}
      />

      <DisplayExerciseEntry open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

function renderEventContent(eventContent: EventContentArg) {
  const exerciseIndex = exerciseList.indexOf(eventContent.event.title);
  const backgroundColor = colors[exerciseIndex % colors.length];

  return (
    <Box sx={{ bgcolor: backgroundColor, borderRadius: 1 }}>
      {eventContent.event.title}
    </Box>
  );
}

export default Calendar
//TODO: Make better buttons
//TODO: Reimplement exercise type table, should contain colour column, let user inset into table and choose colour