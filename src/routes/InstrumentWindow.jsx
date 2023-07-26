import React, { useState, useEffect } from "react";

// components
import { Dialog, Drawer } from "@mui/material";
import CloseButton from "../components/CloseButton";
import ExperimentalSetup from "../routes/ExperimentalSetup";
import Main from "../images/InstrumentSVG";
import Spinner from "../components/Spinner";

// constants
import { BAD_ID, OPD, PARAMETER_VALUE } from "../dictionaries/constants";

// dictionaries
import { toolTips } from "../dictionaries/tooltips";

// functions
import { animateCornerCube } from "../functions/animation";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";
import "../style/components/Button.css";

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

  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
    if (!BAD_ID.includes(event.target.parentElement.id)) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const delay = OPD[resolution] * scan * 1000; // 1000 is to convert to milliseconds

  // useEffect - wait for components to render then perform interactivity
  useEffect(() => {
    // ternary used to show/hide beamsplitter in the Main SVG
    beamsplitter === PARAMETER_VALUE.beamsplitterCaF2
      ? (document.getElementById("beamsplitter-caf2").style.display = "inline")
      : (document.getElementById("beamsplitter-caf2").style.display = "none");
    beamsplitter === PARAMETER_VALUE.beamsplitterZnSe
      ? (document.getElementById("beamsplitter-znse").style.display = "inline")
      : (document.getElementById("beamsplitter-znse").style.display = "none");

    // ternary used to show/hide detector laser and mirror in the Main SVG
    detector === PARAMETER_VALUE.detectorInSb
      ? (document.getElementById("flat-rotatable-mirror-insb").style.display =
          "inline")
      : (document.getElementById("flat-rotatable-mirror-insb").style.display =
          "none");
    detector === PARAMETER_VALUE.detectorInSb
      ? (document.getElementById("beam-insb").style.display = "inline")
      : (document.getElementById("beam-insb").style.display = "none");
    detector === PARAMETER_VALUE.detectorMCT
      ? (document.getElementById("flat-rotatable-mirror-mct").style.display =
          "inline")
      : (document.getElementById("flat-rotatable-mirror-mct").style.display =
          "none");
    detector === PARAMETER_VALUE.detectorMCT
      ? (document.getElementById("beam-mct").style.display = "inline")
      : (document.getElementById("beam-mct").style.display = "none");

    // ternary used to show/hide source laser and mirror in the Main SVG
    source === PARAMETER_VALUE.sourceGlobar
      ? (document.getElementById("flat-rotatable-mirror-globar").style.display =
          "inline")
      : (document.getElementById("flat-rotatable-mirror-globar").style.display =
          "none");
    source === PARAMETER_VALUE.sourceGlobar
      ? (document.getElementById("beam-globar").style.display = "inline")
      : (document.getElementById("beam-globar").style.display = "none");
    source === PARAMETER_VALUE.sourceTungsten
      ? (document.getElementById(
          "flat-rotatable-mirror-tungsten"
        ).style.display = "inline")
      : (document.getElementById(
          "flat-rotatable-mirror-tungsten"
        ).style.display = "none");
    source === PARAMETER_VALUE.sourceTungsten
      ? (document.getElementById("beam-tungsten").style.display = "inline")
      : (document.getElementById("beam-tungsten").style.display = "none");

    // ternary used to show/hide cell window in the Main SVG
    window === PARAMETER_VALUE.cellWindowCaF2
      ? (document.getElementById("sample-cell-caf2").style.display = "inline")
      : (document.getElementById("sample-cell-caf2").style.display = "none");
    window === PARAMETER_VALUE.cellWindowZnSe
      ? (document.getElementById("sample-cell-znse").style.display = "inline")
      : (document.getElementById("sample-cell-znse").style.display = "none");

    // readout panel
    document.getElementById("opd-value").textContent = OPD[resolution] * scan;
    document.getElementById("scan-value").textContent = scan;
    document.getElementById(
      "range-value"
    ).textContent = `${waveMin} - ${waveMax}`;
    document.getElementById("resolution-value").textContent = resolution;

    // lecture bottle
    document.getElementById("molecule-value").textContent = molecule;
  });

  return (
    <div id="instrument-window">
      <Main id="instrument" onClick={handleClick} />

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        <button className="button" onClick={toggleDrawer}>
          Experiment Settings
        </button>
        <button className="button" onClick={animateCornerCube}>
          Animate!
        </button>
        {spinner && <Spinner variant="indeterminate" size={100} />}
        {progress && !spinner && !devMode && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner variant="determinate" timer={delay} size={100} />
          </>
        )}
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        className="settings"
      >
        <CloseButton onClose={toggleDrawer}>
          <ExperimentalSetup />
        </CloseButton>
      </Drawer>

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
    </div>
  );
}
