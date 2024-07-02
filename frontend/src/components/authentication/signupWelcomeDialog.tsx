import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const WelcomeDialog: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 8,
        },
      }}
    >
      <DialogTitle>Welcome</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to the Railway! Your account has been successfully created.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeDialog;
