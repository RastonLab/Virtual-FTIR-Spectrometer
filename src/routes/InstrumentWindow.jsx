import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import { ReactComponent as Main } from "../components/svgs/ftir-main.svg";
import Electronics from "../components/Electronics";
import { ProcessedPlotly } from "../components/ProcessedPlotly";

// dictionaries
import { toolTips } from "../dictionaries/SVGLibrary";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";
import "../style/components/Electronics.css";

export default function InstrumentWindow() {
  const { spectrumData } = useSelector((store) => store.spectrumData);
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
      <div id="instrument-accessories">
        <div id="readout">
          <Electronics />
        </div>
        <div id="spectrum">
          {spectrumData ? (
            <ProcessedPlotly />
          ) : (
            <p>Please generate a processed spectrum and return here</p>
          )}
        </div>
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
