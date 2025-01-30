import React, { useState } from "react"
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import { deleteExerciseEntry } from "./api"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import CloseIcon from "@mui/icons-material/Close"
import DeleteUndoSnackbar from "./deleteUndoSnackbar"
import SubmitExerciseEntry from "./submitExerciseEntry"

export const DisplayEntry: React.FC<DisplayProps> = ({ open, onClose, selectedEvent }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
  const theme = useTheme()

  const handleDelete = () => {
    try {
      setIsSnackbarOpen(true)
      deleteExerciseEntry(selectedEvent?.id)
      onClose()
    } catch (error) {
      console.error("marking exercise entry as deleted:", error)
    }
  }

  const handleUpdate = () => {
    try {
      setIsUpdateDialogOpen(true)
    } catch (error) {
      console.error("Error updating exercise entry:", error)
    }
  }

  return (
    <Box textAlign="center">
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            borderRadius: 4,
          },
        }}
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              {selectedEvent?.title || "Event Details"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={handleDelete}
                sx={{ color: theme.palette.error.main, borderRadius: 5 }}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                onClick={handleUpdate}
                sx={{ color: theme.palette.text.primary, borderRadius: 5 }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={onClose}
                sx={{ color: theme.palette.text.primary, borderRadius: 5 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ padding: 3 }}>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary }} paragraph>
            <strong>Day:</strong>{" "}
            {selectedEvent?.start
              ? new Date(selectedEvent.start).toLocaleDateString("en-GB")
              : "No date available..."}
          </Typography>

          <Typography variant="body1" sx={{ color: theme.palette.text.primary }} paragraph>
            <strong>Remarks:</strong> {selectedEvent?.remarks || "No remarks available."}
          </Typography>
        </DialogContent>
      </Dialog>

      <DeleteUndoSnackbar
        open={isSnackbarOpen}
        onClose={() => {
          setIsSnackbarOpen(false)
        }}
        eventData={{
          id: selectedEvent?.id,
        }}
      />

      <SubmitExerciseEntry //This for updating
        open={isUpdateDialogOpen}
        onClose={() => setIsUpdateDialogOpen(false)}
        eventData={{
          id: selectedEvent?.id,
          dateOfEntry: selectedEvent?.start,
          exerciseType: selectedEvent?.exerciseType,
          sets: selectedEvent?.sets,
          reps: selectedEvent?.reps,
          remarks: selectedEvent?.remarks,
        }}
      />
    </Box>
  )
}

export default DisplayEntry
