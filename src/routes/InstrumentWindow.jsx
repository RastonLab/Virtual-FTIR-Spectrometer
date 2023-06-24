import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import { ProcessedPlotly } from "../components/ProcessedPlotly";
import Electronics from "../components/Electronics";
import Main from "../components/svgs/InstrumentSVG";

// dictionaries
import { toolTips } from "../dictionaries/svgLibrary";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";

export default function InstrumentWindow() {
  const { beamsplitter, detector, source } = useSelector(
    (store) => store.parameter
  );
  const { spectrumData } = useSelector((store) => store.spectrumData);
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const badID = [
    "beams",
    "ftir",
    "globar-beam",
    "globar-laser",
    "hose-1",
    "hose-2",
    "insb-beam",
    "insb-laser",
    "instrument-window",
    "instrument",
    "mct-beam",
    "mct-laser",
    "rays",
    "tungsten-beam",
    "tungsten-laser",
  ];

  const handleClick = (event) => {
    if (!badID.includes(event.target.parentElement.id)) {
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

      <Main
        id="instrument"
        onClick={handleClick}
        // ternary used to show/hide detector laser and mirror in the Main SVG
        detector={{
          insb: detector === "InSb" ? "inline" : "none",
          insbMirror: detector === "InSb" ? "inline" : "none",
          mct: detector === "MCT" ? "inline" : "none",
          mctMirror: detector === "MCT" ? "inline" : "none",
        }}
        // ternary used to show/hide source laser and mirror in the Main SVG
        source={{
          globar: source === 1700 ? "inline" : "none",
          globarMirror: source === 1700 ? "inline" : "none",
          tungsten: source === 3100 ? "inline" : "none",
          tungstenMirror: source === 3100 ? "inline" : "none",
        }}
        // ternary used to show/hide beamsplitter in the Main SVG
        beamsplitter={{
          caf2: beamsplitter === "AR_CaF2" ? "inline" : "none",
          znse: beamsplitter === "AR_ZnSe" ? "inline" : "none",
        }}
      />

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
