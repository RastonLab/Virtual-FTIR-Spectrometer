import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import { SamplePlotly } from "../components/SamplePlotly";
import Electronics from "../components/Electronics";
import Main from "../components/svgs/InstrumentSVG";

import CloseButton from "../components/CloseButton";

// dictionaries
import { toolTips } from "../dictionaries/svgLibrary";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";
import "../style/components/Button.css";
import Spinner from "../components/Spinner";

import { OPD } from "../components/Fetch";

export default function InstrumentWindow() {
  const { beamsplitter, detector, source, window, resolution, scan } = useSelector(
    (store) => store.parameter
  );
  const { sampleData } = useSelector((store) => store.sampleData);
  const { progress } = useSelector((store) => store.progress);
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
    if (!badID.includes(event.target.parentElement.id)) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  const delay = OPD[resolution] * scan * 1000; // 1000 is to convert to milliseconds

  return (
    <div id="instrument-window">
      <div id="instrument-accessories">
        <div id="readout">
          <Electronics />
        </div>
        <div id="spectrum">
          {!sampleData && !progress &&
            <p>Please generate a sample spectrum and return here</p>   
          }
          {progress ? (
            <>
              <h2>Processing Sample...</h2>
              <Spinner variant="determinate" timer={delay} size={100} />
            </>
            ) : (
            <SamplePlotly />
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
        <Dialog className="popup-tooltip" onClose={handleClick} open={toggled}>
          <CloseButton id="customized-dialog-title" onClose={handleClick}>
            <h2>{toolTips[element].title}</h2>
          </CloseButton>
          <img src={toolTips[element].image} alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}
