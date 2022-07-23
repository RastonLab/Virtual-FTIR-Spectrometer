import React from "react";
import { ReactComponent as Main } from "../components/svgs/ftir-main.svg";
import { Dialog } from "@mui/material";
import { imgSource, toolTips } from "../dictionaries/SVGLibrary";
import { useState } from "react";

import "../style/InstrumentWindow.css";

function InstrumentWindow() {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState(null);

  const handleClick = (event) => {
    setToggled(!toggled);

    if (event.target.parentElement.id === "instrument-window") {
      setElement(null);
    } else {
      setElement(event.target.parentElement.id);
    }
  };

  return (
    <div id="instrument-window">
      <Main id="main" onClick={handleClick} />

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={imgSource[element]} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}

export default InstrumentWindow;
