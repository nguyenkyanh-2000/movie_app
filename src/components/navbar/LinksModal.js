import React, { useState } from "react";
import { Stack, IconButton, Divider, Modal, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const stackStyling = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  height: "600px",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.5)",
  padding: "64px 16px",
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(40px)",
};

function LinksModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon color="white" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Stack
          direction="column"
          spacing={"auto"}
          divider={<Divider orientation="horizontal" flexItem />}
          sx={stackStyling}
        >
          <Button onClick={() => navigate("/")}> Home </Button>
          <Button> Movies</Button>
          <Button> About</Button>
          <Button onClick={() => navigate("/login")}> Login</Button>
        </Stack>
      </Modal>
    </>
  );
}

export default LinksModal;
