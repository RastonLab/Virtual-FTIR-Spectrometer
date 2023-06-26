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
  const { beamsplitter, detector, source, window } = useSelector(
    (store) => store.parameter
  );
  const { spectrumData } = useSelector((store) => store.spectrumData);
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const badID = [
    "beam-globar",
    "beam-insb",
    "beam-mct",
    "beam-tungsten",
    "beams",
    "ftir",
    "globar-laser",
    "hose-1",
    "hose-2",
    "insb-laser",
    "instrument-window",
    "instrument",
    "mct-laser",
    "rays",
    "tungsten-laser",
  ];

  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
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
        // ternary used to show/hide beamsplitter in the Main SVG
        beamsplitter={{
          caf2: beamsplitter === "AR_CaF2" ? "inline" : "none",
          znse: beamsplitter === "AR_ZnSe" ? "inline" : "none",
        }}
        // ternary used to show/hide detector laser and mirror in the Main SVG
        detector={{
          insb: detector === "InSb" ? "inline" : "none",
          mct: detector === "MCT" ? "inline" : "none",
        }}
        // ternary used to show/hide source laser and mirror in the Main SVG
        source={{
          globar: source === 1700 ? "inline" : "none",
          tungsten: source === 3100 ? "inline" : "none",
        }}
        window={{
          caf2: window === "CaF2" ? "inline" : "none",
          znse: window === "ZnSe" ? "inline" : "none",
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
