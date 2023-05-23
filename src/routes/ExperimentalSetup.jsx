import React from "react";

// components
// import Fetch from "../components/Fetch";
// import { ProcessedPlotly } from "../components/ProcessedPlotly";
// import BackgroundPlotly from "../components/BackgroundPlotly";

// inputs
import Wavenumber from "../components/inputs/Wavenumber";
import Pressure from "../components/inputs/Pressure";
import Molecule from "../components/inputs/Molecule";
import Resolution from "../components/inputs/Resolution";
import Scan from "../components/inputs/Scan";
import Beamsplitter from "../components/inputs/Beamsplitter";
import Window from "../components/inputs/Window";
import Detector from "../components/inputs/Detector";
import Source from "../components/inputs/Source";
import ZeroFill from "../components/inputs/ZeroFill";
import Medium from "../components/inputs/Medium";

import { useSelector } from "react-redux";

// style
import "../style/routes/ExperimentalSetup.css";

export default function ExperimentalSetup() {
  // values set by user
  // const {
  //   beamsplitter,
  //   detector,
  //   medium,
  //   molecule,
  //   pressure,
  //   resolution,
  //   scan,
  //   source,
  //   waveMin,
  //   waveMax,
  //   window,
  //   zeroFill,
  // } = useSelector((store) => store.parameter);

  const { progress } = useSelector((store) => store.progress);
  // const { error } = useSelector((store) => store.error);

  return (
    <div id="experimental-setup">
      <div id="form">
        <div className="col">
          <div className="parameter">
            <Wavenumber />
          </div>

          <div className="parameter">
            <Pressure />
          </div>

          <div className="parameter">
            <Scan />
          </div>

          <div className="parameter">
            <Molecule />
          </div>

          <div className="parameter">
            <Resolution />
          </div>

          <div className="parameter">
            <ZeroFill />
          </div>
        </div>
        <div className="col">
          <div className="parameter">
            <Source />
          </div>

          <div className="parameter">
            <Beamsplitter />
          </div>

          <div className="parameter">
            <Window />
          </div>

          <div className="parameter">
            <Detector />
          </div>

          <div className="parameter">
            <Medium />
          </div>

          {/* <div className="fetch-zone">
            <Fetch
              type="spectrum"
              params={{
                waveMin,
                waveMax,
                molecule,
                pressure,
                resolution,
                scan,
                zeroFill,
                source,
                beamsplitter,
                window,
                detector,
              }}
              // fetchURL={"http://localhost:5000/spectrum"}
              fetchURL={"https://api.ftir.rastonlab.org/spectrum"}
              buttonText="Generate Processed Spectrum"
              isAir={medium}
            />
            <Fetch
              type="background"
              params={{
                waveMin,
                waveMax,
                molecule,
                pressure,
                resolution,
                scan,
                zeroFill,
                source,
                beamsplitter,
                window,
                detector,
              }}
              // fetchURL={"http://localhost:5000/background"}
              fetchURL={"https://api.ftir.rastonlab.org/background"}
              buttonText={"Generate Background Sample"}
              isAir={medium}
            />
          </div> */}
        </div>
      </div>
      <div id="graph-and-error" className="col">
        {progress && <div id="spinner" />}

        {/* {error.a && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{error.text}</p>
          </div>
        )} */}

        {/* {!progress && !error.active && <ProcessedPlotly />}

        {!progress && !error.active && <BackgroundPlotly />} */}
      </div>
    </div>
  );
}

// export default forwardRef(ExperimentalSetup);
