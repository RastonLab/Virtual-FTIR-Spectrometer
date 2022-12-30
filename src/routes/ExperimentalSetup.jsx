import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

// additional components
import Fetch from "../components/Fetch";
import { ProcessedPlotly } from "../components/ProcessedPlotly";

// inputs
import MinWave from "../components/inputs/MinWave";
import MaxWave from "../components/inputs/MaxWave";
import Pressure from "../components/inputs/Pressure";
import Molecule from "../components/inputs/Molecule";
import Resolution from "../components/inputs/Resolution";
import NumOfScans from "../components/inputs/NumOfScans";
import Beamsplitter from "../components/inputs/Beamsplitter";
import CellWindows from "../components/inputs/CellWindows";
import Detector from "../components/inputs/Detector";
import Source from "../components/inputs/Source";
import ZeroFillling from "../components/inputs/ZeroFilling";

import "../style/routes/ExperimentalSetup.css";

const ExperimentalSetup = (props, ref) => {
  const storedParams = useSelector((state) => state.params);
  const progress = useSelector((state) => state.progress);
  const error = useSelector((state) => state.error);

  // values set by user
  const [minWave, setMinWave] = useState(storedParams.minWave);
  const [maxWave, setMaxWave] = useState(storedParams.maxWave);
  const [molecule, setMolecule] = useState(storedParams.molecule);
  const [pressure, setPressure] = useState(storedParams.pressure);
  const [resolution, setResolution] = useState(storedParams.resolution);
  const [numScan, setNumScan] = useState(storedParams.numScan);
  const [zeroFill, setZeroFill] = useState(storedParams.zeroFill);
  const [source, setSource] = useState(storedParams.source);
  const [beamsplitter, setBeamsplitter] = useState(storedParams.beamsplitter);
  const [cellWindow, setCellWindow] = useState(storedParams.cellWindow);
  const [detector, setDetector] = useState(storedParams.detector);

  return (
    <div ref={ref} id="experimental-setup">
      <div id="form">
        <div className="col">
          <MinWave val={minWave} setter={setMinWave} />

          <MaxWave val={maxWave} setter={setMaxWave} />

          <Pressure val={pressure} setter={setPressure} />

          <NumOfScans params={numScan} setParams={setNumScan} />

          <Molecule val={molecule} setter={setMolecule} />

          <Resolution params={resolution} setParams={setResolution} />

          <ZeroFillling params={zeroFill} setParams={setZeroFill} />
        </div>
        <div className="col">
          <Source className="switch" params={source} setParams={setSource} />

          <Beamsplitter
            className="switch"
            params={beamsplitter}
            setParams={setBeamsplitter}
          />

          <CellWindows
            className="switch"
            params={cellWindow}
            setParams={setCellWindow}
          />

          <Detector
            className="switch"
            params={detector}
            setParams={setDetector}
          />

          <div className="fetch-zone">
            <Fetch
              type="processed"
              params={{
                minWave,
                maxWave,
                molecule,
                pressure,
                resolution,
                numScan,
                zeroFill,
                source,
                beamsplitter,
                cellWindow,
                detector,
              }}
              fetchURL="http://localhost:5000/post_json"
              // fetchURL="http://ec2-44-203-44-133.compute-1.amazonaws.com/post_json"
              buttonText="Generate Spectrum"
            />
            <Fetch
              type="background"
              params={{
                minWave,
                maxWave,
                molecule,
                pressure,
                resolution,
                numScan,
                zeroFill,
                source,
                beamsplitter,
                cellWindow,
                detector,
              }}
              fetchURL={"http://localhost:5000/fetch_background"}
              // fetchURL={"http://ec2-44-203-44-133.compute-1.amazonaws.com/fetch_background"}
              buttonText={"Generate Background Sample"}
            />
          </div>
        </div>
      </div>
      <div id="graph-and-error">
        {progress && <div id="spinner" />}

        {error.active && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{error.text}</p>
          </div>
        )}

        {!progress && !error.active && <ProcessedPlotly />}
      </div>
    </div>
  );
};

export default forwardRef(ExperimentalSetup);
