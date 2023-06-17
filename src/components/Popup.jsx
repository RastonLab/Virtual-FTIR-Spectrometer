import React, { useState } from "react";

// mui
import { Dialog } from "@mui/material";

// style
import "../style/components/Popup.css";

// this component is used to display popup overlays for the instrument and certain menu items
export default function Popup({ label, title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="popup-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {label}
      </button>
      <Dialog
        className="popup"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <h1>{title}</h1>
        {text}
      </Dialog>
    </div>
  );
}
