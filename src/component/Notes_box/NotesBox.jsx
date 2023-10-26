import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import FormControl from "@mui/joy/FormControl";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

const textareaStyle = {
  width: "100%",
  minHeight: "160px",
  resize: "vertical",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  padding: "10px",
};

export default function BasicModalDialog({ open, onClose, onSave, initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(notes); // Pass the notes to the parent component
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ maxWidth: 500 }}
      >
        <Typography id="basic-modal-dialog-title" level="h2">
          Create Notes
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <textarea
                autoFocus
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={textareaStyle}
                placeholder="Enter your notes here"
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}

