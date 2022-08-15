import React from "react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { ReactComponent as Main } from "../components/svgs/ftir-main.svg";
import { toolTips } from "../dictionaries/SVGLibrary";

import "../style/routes/InstrumentWindow.css";
import Electronics from "../components/Electronics";
import { Plotly } from "../components/Plotly";

export default function InstrumentWindow() {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const handleClick = (event) => {
    if (
      event.target.parentElement.id !== "instrument-window" &&
      event.target.parentElement.id !== "instrument" &&
      event.target.parentElement.id !== "ftir"
    ) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  return (
    <div id="instrument-window">
      <div id="readout">
        <Electronics />
        <Plotly />
      </div>
      <Main id="instrument" onClick={handleClick} />

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={toolTips[element].image} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}
