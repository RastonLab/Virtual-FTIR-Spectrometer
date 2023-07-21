import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import { OPD } from "../components/Fetch";
import CloseButton from "../components/CloseButton";
import Main from "../components/svgs/InstrumentSVG";
import Spinner from "../components/Spinner";

// dictionaries
import { toolTips } from "../dictionaries/svgLibrary";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";
import "../style/components/Button.css";

import { animateCornerCube } from "../functions/animation";

export default function InstrumentWindow() {
  const {
    beamsplitter,
    detector,
    molecule,
    resolution,
    scan,
    source,
    waveMax,
    waveMin,
    window,
  } = useSelector((store) => store.parameter);
  const { progress } = useSelector((store) => store.progress);
  const { spinner } = useSelector((store) => store.spinner);
  const { devMode } = useSelector((store) => store.devMode);
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
    "opd-value",
    "molecule-value",
    "range-value",
    "rays",
    "readout",
    "resolution-value",
    "scan-value",
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
          globar: source === 1200 ? "inline" : "none",
          tungsten: source === 3400 ? "inline" : "none",
        }}
        // ternary used to show/hide cell window in the Main SVG
        window={{
          caf2: window === "CaF2" ? "inline" : "none",
          znse: window === "ZnSe" ? "inline" : "none",
        }}
        opd={OPD[resolution] * scan}
        scan={scan}
        range={`${waveMin} - ${waveMax}`}
        resolution={resolution}
        molecule={molecule}
      />

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        {spinner && <Spinner variant="indeterminate" size={100} />}
        {progress && !spinner && !devMode && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner variant="determinate" timer={delay} size={100} />
          </>
        )}
      </div>
      {element && (
        <Dialog
          onClose={handleClick}
          open={toggled}
          fullScreen={element === "display" ? true : false}
        >
          <CloseButton id="customized-dialog-title" onClose={handleClick}>
            {toolTips[element].text}
          </CloseButton>
        </Dialog>
      )}

      <button onClick={() => animateCornerCube()}>Hello!</button>
    </div>
  );
}
