// import { useDisclosure } from "@mantine/hooks";
// import {
//   Modal,
//   Group,
//   Button,
//   TextInput,
//   Title,
//   useMantineTheme,
//   Textarea,
//   Container,
// } from "@mantine/core";
// import { useEffect, useState } from "react";

// function CreateNoteModal({ opened, close, question, onSave }) {
//   const theme = useMantineTheme();
//   const [value, setValue] = useState(question?.notes || "");

//   useEffect(() => {
//     setValue(question?.notes || "");
//   }, [question]);
//   // console.log(question);
//   return (
//     <>
//       <Modal
//         opened={opened}
//         onClose={close}
//         title="Notes"
//         overlayProps={{
//           color:
//             theme.colorScheme === "dark"
//               ? theme.colors.dark[9]
//               : theme.colors.gray[2],
//           opacity: 0.55,
//           blur: 3,
//         }}
//         centered
//       >
//         <Container
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1rem",
//           }}
//         >
//           <Title order={3}>{question?.title}</Title>
//           <Textarea
//             placeholder="Write here.."
//             // label="Notes"
//             autosize
//             value={value}
//             onChange={(event) => setValue(event.currentTarget.value)}
//             minRows={5}
//           />
//           <Group>
//             <Button
//               variant="gradient"
//               onClick={() => {
//                 onSave(value, question?._id);
//                 close();
//               }}
//             >
//               Save
//             </Button>
//             <Button variant="outline" onClick={close}>
//               Cancel
//             </Button>
//           </Group>
//         </Container>
//       </Modal>
//     </>
//   );
// }
// export default CreateNoteModal;

import  { useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";


export default function BasicModalDialog() {

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <Button
       variant="outlined"
        color="neutral"
        // startIcon={<Add />}
        onClick={() => setOpen(true)}
      >              
       </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
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
                <Input
                  autoFocus
                  required
                  style={{
                    width: "300px",
                    height: "160px"
                  }}
                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}