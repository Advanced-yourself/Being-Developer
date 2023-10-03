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

// import React, { useState } from "react";
// import Button from "@mui/joy/Button";
// import Modal from "@mui/joy/Modal";
// import ModalDialog from "@mui/joy/ModalDialog";
// import FormControl from "@mui/joy/FormControl";
// import Input from "@mui/joy/Input";
// import Stack from "@mui/joy/Stack";
// import Typography from "@mui/joy/Typography";

// const textareaStyle = {
//   width: "100%",
//   minHeight: "160px",
//   resize: "vertical",
//   fontFamily: "Arial, sans-serif", // Set the desired font-family here
//   fontSize: "16px", // Set the desired font size here
//   padding: "10px", // Set the desired padding here
// };

// export default function BasicModalDialog() {
//   const [open, setOpen] = useState(false);
//   const [notes, setNotes] = useState(""); // State to store the notes

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle the submission of notes here (e.g., send to the server or store in state)
//     console.log("Submitted notes:", notes);
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button
//         variant="outlined"
//         color="neutral"
//         onClick={() => setOpen(true)}
//       >
//         New project
//       </Button>
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <ModalDialog
//           aria-labelledby="basic-modal-dialog-title"
//           aria-describedby="basic-modal-dialog-description"
//           sx={{ maxWidth: 500 }}
//         >
//           <Typography id="basic-modal-dialog-title" level="h2">
//             Create Notes
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <Stack spacing={2}>
//               <FormControl>
//                 <textarea
//                   autoFocus
//                   required
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   style={textareaStyle}
//                   placeholder="Enter your notes here"
//                 />
//               </FormControl>
//               <Button type="submit">Submit</Button>
//             </Stack>
//           </form>
//         </ModalDialog>
//       </Modal>
//     </>
//   );
// }
