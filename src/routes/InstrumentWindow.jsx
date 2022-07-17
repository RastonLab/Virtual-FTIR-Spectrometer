import React from "react";
import SVGComponent from "../components/SVGComponents";

import "../style/InstrumentWindow.css";

function InstrumentWindow() {
  return (
    <div className="instrument-window">
      <SVGComponent part="laserbeams" click={() => {}} />
      <SVGComponent part="sourcebox" click={() => {}} />
      <SVGComponent part="aperturewheel" />
      <SVGComponent part="flatrotatablemirror" />
      <SVGComponent part="globar" />
      <SVGComponent part="parabolicmirror" />
      <SVGComponent part="tungsten" />
      <SVGComponent part="detectionchamber" click={() => {}} />
      <SVGComponent part="cdflatrotatablemirror" />
      <SVGComponent part="samplecompartment" />
      <SVGComponent part="mct" />
      <SVGComponent part="lnsb" />
      <SVGComponent part="cdflatrotatablemirror2" />
      <SVGComponent part="fixedcornercube" />
      <SVGComponent part="fixedmirror" />
      <SVGComponent part="laser" />
      <SVGComponent part="movablecornercube" />
      <SVGComponent part="parabolicmirrorhole" />
      <SVGComponent part="parabolicmirrorhole2" />
    </div>
  );
}

export default InstrumentWindow;
