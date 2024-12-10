import React, { useState } from "react"
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material"

const DeleteConfirmationDialog: React.FC<DisplayProps> = ({ open, onClose, onDelete }) => {
  const handleDelete = () => {
    console.log("Event deleted!")
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>Are you sure you want to delete this item?</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteConfirmationDialog
