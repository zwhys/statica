import React from "react"
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import CloseIcon from "@mui/icons-material/Close"

export const DisplayEntry: React.FC<DisplayProps> = ({ open, onClose, selectedEvent }) => {
  const theme = useTheme()

  return (
    <Box textAlign="center">
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            borderRadius: 4,
            minWidth: 400,
            boxShadow: 24,
          },
        }}
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              {selectedEvent?.title || "Event Details"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="error" sx={{ borderRadius: 5 }}>
                <DeleteIcon />
              </IconButton>
              <IconButton sx={{ color: theme.palette.text.primary, borderRadius: 5 }}>
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
              ? new Date(selectedEvent.start as string).toLocaleDateString("en-GB")
              : "No start time available."}
          </Typography>

          <Typography variant="body1" sx={{ color: theme.palette.text.primary }} paragraph>
            <strong>Reps:</strong> {selectedEvent?.reps}
          </Typography>

          <Typography variant="body1" sx={{ color: theme.palette.text.primary }} paragraph>
            <strong>Sets:</strong> {selectedEvent?.sets}
          </Typography>

          <Typography variant="body1" sx={{ color: theme.palette.text.primary }} paragraph>
            <strong>Remarks:</strong> {selectedEvent?.remarks || "No remarks available."}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default DisplayEntry
