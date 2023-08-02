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
import { tooltips } from "../dictionaries/tooltips";
import { molecules } from "../dictionaries/molecule";

// functions
import {
  animateCornerCube,
  beamsplitterInteractivity,
  cellWindowInteractivity,
  detectorInteractivity,
  displayInteractivity,
  distanceInteractivity,
  lectureValveInteractivity,
  pumpValveInteractivity,
  sourceInteractivity,
  textInteractivity,
} from "../functions/animation";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/InstrumentWindow.css";
import "../style/components/Button.css";

/**
 * Route that contains:
 * - Instrument Window SVG
 * - SVG tooltip popups
 * - MUI Drawer with Experimental Setup
 * - Animation test button (in devmode)
 * - Progress spinner
 */
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
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { sampleData } = useSelector((store) => store.sampleData);

  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const delay = OPD[resolution].value * scan * 1000; // 1000 is to convert to milliseconds

  // find group id when SVG is clicked
  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
    if (!BAD_ID.includes(event.target.parentElement.id)) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  // useEffect - wait for components to render then perform interactivity/animation
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
    displayInteractivity(backgroundData, sampleData);
    distanceInteractivity(progress, OPD[resolution].distance);
  });

  return (
    <div id="instrument-window">
      {/* top-down instrument SVG component */}
      <Main id="instrument" onClick={handleClick} />

      {/* button for settings, progress spinner */}
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
              opd={OPD[resolution].value}
            />
          </>
        )}
      </div>

      {/* MUI drawer that holds experimental setup */}
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

      {/* MUI Dialog popup that holds tooltip information */}
      {element && (
        <Dialog
          onClose={handleClick}
          open={toggled}
          fullScreen={element === "display" ? true : false}
        >
          <CloseButton id="customized-dialog-title" onClose={handleClick}>
            {tooltips[element].text}
          </CloseButton>
        </Dialog>
      )}
    </div>
  );
}
