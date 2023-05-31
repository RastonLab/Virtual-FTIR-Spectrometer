import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import { ReactComponent as Main } from "../components/svgs/ftir-main.svg";
import Electronics from "../components/Electronics";
import { ProcessedPlotly } from "../components/ProcessedPlotly";

// dictionaries
import { toolTips } from "../dictionaries/SVGLibrary";

// functions
// import updateSVG from "../functions/updateSVG";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";

export default function InstrumentWindow() {
  // const { detector, source } = useSelector((store) => store.parameter);
  const { spectrumData } = useSelector((store) => store.spectrumData);
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const badID = [
    "instrument-window",
    "instrument",
    "ftir",
    "globar-laser",
    "tungsten-laser",
    "mct-laser",
    "insb-laser",
  ];

  const handleClick = (event) => {
    if (!badID.includes(event.target.parentElement.id)) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  // console.log(document.querySelectorAll("*[id]"));
  // updateSVG(detector, source);

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
      {(document.getElementById("tungsten-laser").style.display = "none")}
      {(document.getElementById("insb-laser").style.display = "none")}

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
