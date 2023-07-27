import React, { useState, useEffect } from "react";

// components
import { Dialog, Drawer } from "@mui/material";
import CloseButton from "../components/CloseButton";
import ExperimentalSetup from "../routes/ExperimentalSetup";
import Main from "../images/InstrumentSVG";
import Spinner from "../components/Spinner";

// constants
import { BAD_ID, OPD } from "../dictionaries/constants";

// dictionaries
import { toolTips } from "../dictionaries/tooltips";
import { molecules } from "../dictionaries/molecule";

// functions
import {
  beamsplitterInteractivity,
  cellWindowInteractivity,
  detectorInteractivity,
  sourceInteractivity,
  textInteractivity,
  pumpValveInteractivity,
  lectureValveInteractivity,
} from "../functions/animation";

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
    medium,
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
  const { lectureBottleInUse } = useSelector((store) => store.lectureBottle);
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
    beamsplitterInteractivity(beamsplitter);

    detectorInteractivity(detector);

    sourceInteractivity(source);

    cellWindowInteractivity(window);

    textInteractivity(
      lectureBottleInUse ? molecules[molecule] : "",
      OPD,
      resolution,
      scan,
      waveMax,
      waveMin
    );

    pumpValveInteractivity(medium);

    lectureValveInteractivity(lectureBottleInUse);
  });

  return (
    <div id="instrument-window">
      <Main id="instrument" onClick={handleClick} />

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        <button className="button" onClick={toggleDrawer}>
          Experiment Settings
        </button>
        {devMode && (
          <button className="button" onClick={() => animateCornerCube(4)}>
            Animate MCC
          </button>
        )}
        {spinner && <Spinner variant="indeterminate" size={100} />}
        {progress && !spinner && !devMode && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner
              variant="determinate"
              timer={delay}
              scans={scan}
              size={100}
              opd={OPD[resolution]}
            />
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
