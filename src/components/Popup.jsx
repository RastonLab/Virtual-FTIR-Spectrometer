import React, { useState } from "react";

// mui
import { Dialog } from "@mui/material";

// style
import "../style/components/Popup.css";

import CloseButton from "./CloseButton.jsx";

// this component is used to display popup overlays for the instrument and certain menu items
export default function Popup({ label, title, text }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="popup-button"
        onClick={handleClickOpen}
      >
        {label}
      </button>
      <Dialog
        className="popup"
        onClose={handleClose}
        open={open}
      >
        <CloseButton id="customized-dialog-title" onClose={handleClose}>
          <h2>{title}</h2>
        </CloseButton>
        {text}
      </Dialog>
    </div>
  );
}
