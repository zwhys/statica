import React from "react"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material"

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
          <Typography variant="h6" fontWeight="bold">
            {selectedEvent?.title || "Event Details"}
          </Typography>
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

        <DialogActions sx={{ paddingX: 3, paddingBottom: 2 }}>
          <Button
            onClick={onClose}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 6,
              paddingY: 1,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default DisplayEntry
