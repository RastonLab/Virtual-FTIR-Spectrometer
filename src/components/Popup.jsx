import React, { useState } from "react";

// components
import CloseButton from "./CloseButton.jsx";

// mui
import { Dialog } from "@mui/material";

// style
import "../style/components/Popup.css";

// this component is used to display popup overlays for the instrument and certain menu items
/**
 * A component that contains a MUI Dialog (popup) to display information in the File and Help menus
 *
 * @param {string} label - The text that appears in the MenuBar.
 * @param {string} title - The text that appears at the top of the popup.
 * @param {object} text - The text that appears that the bottom of the popup.
 */
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
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        {label}
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose}>
          <h2>{title}</h2>
        </CloseButton>
        {text}
      </Dialog>
    </div>
  );
}
