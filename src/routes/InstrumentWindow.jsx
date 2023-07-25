import React, { useState } from "react";

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
import { molecule_labels } from "../dictionaries/molecule";

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

  return (
    <div id="instrument-window">
      <Main
        id="instrument"
        onClick={handleClick}
        // ternary used to show/hide beamsplitter in the Main SVG
        beamsplitter={{
          caf2:
            beamsplitter === PARAMETER_VALUE.beamsplitterCaF2
              ? "inline"
              : "none",
          znse:
            beamsplitter === PARAMETER_VALUE.beamsplitterZnSe
              ? "inline"
              : "none",
        }}
        // ternary used to show/hide detector laser and mirror in the Main SVG
        detector={{
          insb: detector === PARAMETER_VALUE.detectorInSb ? "inline" : "none",
          mct: detector === PARAMETER_VALUE.detectorMCT ? "inline" : "none",
        }}
        // ternary used to show/hide source laser and mirror in the Main SVG
        source={{
          globar: source === PARAMETER_VALUE.sourceGlobar ? "inline" : "none",
          tungsten:
            source === PARAMETER_VALUE.sourceTungsten ? "inline" : "none",
        }}
        // ternary used to show/hide cell window in the Main SVG
        window={{
          caf2: window === PARAMETER_VALUE.cellWindowCaF2 ? "inline" : "none",
          znse: window === PARAMETER_VALUE.cellWindowZnSe ? "inline" : "none",
        }}
        opd={OPD[resolution] * scan}
        scan={scan}
        range={`${waveMin} - ${waveMax}`}
        resolution={resolution}
        molecule={lectureBottleInUse ? molecule_labels[molecule] : ""}
      />

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
