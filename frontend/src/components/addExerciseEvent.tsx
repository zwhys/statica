import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  DialogTitle,
  TextField
} from "@mui/material";
import React, { useState } from "react";

interface AddExerciseEventProps {
  open: boolean;
  handleClose: () => void;
  handleCreateEvent: (sets: string, reps: string, exerciseType: string, comments: string) => void;
}

const AddExerciseEvent: React.FC<AddExerciseEventProps> = ({ open, handleClose, handleCreateEvent }) => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [comments, setComments] = useState("");

  const handleCreate = () => {
    handleCreateEvent(sets, reps, exerciseType, comments);
    setSets("");
    setReps("");
    setExerciseType("");
    setComments("");
    handleClose();
  };

  return (
    <Box textAlign="center">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{}}>Add Exercise Event</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                id="setnum"
                label="No. of Sets"
                variant="outlined"
                placeholder="Eg. 3"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                sx={{ width: 150 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="repnum"
                label="No. of Reps"
                variant="outlined"
                placeholder="Eg. 10"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                sx={{ width: 150 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="exertype"
                label="Type of Exercise"
                variant="outlined"
                placeholder="Eg. Pushups"
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
                sx={{ width: 150 }}
              />
            </Grid>
          </Grid>
          <TextField
            sx={{ width: "100%", marginTop: 2 }}
            label="Comments"
            multiline
            maxRows={4}
            placeholder="Eg. Feelings, Difficulty, ..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
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
            <Button variant="contained" color="primary" fullWidth sx={{ margin: 2 }} onClick={handleCreate}>
              Create
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddExerciseEvent;
