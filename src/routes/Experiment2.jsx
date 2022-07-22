import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// additional components
import Fetch from "../components/Fetch";
import Plotly from "../components/Plotly";

// inputs
// import Database from "../components/inputs/Database";
// import Mode from "../components/inputs/Mode";
// import MaxWave from "../components/inputs/MaxWave";
// import MinWave from "../components/inputs/MinWave";
import Wavenumber from "../components/inputs/Wavenumber";
// import Tgas from "../components/inputs/Tgas";
import Pressure from "../components/inputs/Pressure";
// import PathLength from "../components/inputs/PathLength";
import Molecule from "../components/inputs/Molecule";
// import MoleFraction from "../components/inputs/MoleFraction";
import Resolution from "../components/inputs/Resolution";
import NumOfScans from "../components/inputs/NumOfScans";
import Beamsplitter from "../components/inputs/Beamsplitter";
import CellWindows from "../components/inputs/CellWindows";
import Detector from "../components/inputs/Detector";
import Source from "../components/inputs/Source";
import ZeroFillling from "../components/inputs/ZeroFilling";

import "../style/ExperimentalSetup.css";

export default function ExperimentalSetup() {
  const storedParams = useSelector((state) => state.params);
  const progress = useSelector((state) => state.isProgressing);
  const error = useSelector((state) => state.isError);

  // values set by user
//   const [database, setDatabase] = useState(storedParams.database);
  const database = "HITRAN";
//   const [mode, setMode] = useState(storedParams.mode);
  const mode = "transmittance_noslit";
  const [min_wavenumber_range, setMin_wavenumber_range] = useState(
    storedParams.min_wavenumber_range
  );
  const [max_wavenumber_range, setMax_wavenumber_range] = useState(
    storedParams.max_wavenumber_range
  );
//   const [wavenumbers, setWavenumbers] = useState([400, 12500]);
  const [tgas, setTgas] = useState(storedParams.tgas);
  const [pressure, setPressure] = useState(storedParams.pressure);
  const [path_length, setPath_length] = useState(storedParams.path_length);
  const [species, setSpecies] = useState([
    {
      molecule: storedParams.species[0].molecule,
      mole_fraction: storedParams.species[0].mole_fraction,
    },
  ]);
  const [resolution, setResolution] = useState(storedParams.resolution);
  const [scanNum, setScanNum] = useState(storedParams.scan_num);
  const [beamspiltter, setBeamsplitter] = useState(storedParams.beamsplitter);
  const [cellWindow, setCellWindow] = useState(storedParams.cell_window);
  const [detector, setDetector] = useState(storedParams.detector);
  const [source, setSource] = useState(storedParams.source);
  const [zeroFilling, setZeroFilling] = useState(storedParams.zero_filling);

  // values not set by user, but needed for Radis App
  const [tvib] = useState(storedParams.tvib);
  const [trot] = useState(storedParams.trot);
  const [simulate_slit] = useState(storedParams.simulate_slit);

  return (
    <div id="experimental-setup">
      <div id="form">
        <div className="col">
            <Wavenumber min={min_wavenumber_range} max={max_wavenumber_range} setMin={setMin_wavenumber_range} setMax={setMax_wavenumber_range} />

            <NumOfScans params={scanNum} setParams={setScanNum} />

            <Pressure val={pressure} setter={setPressure} />

            <Molecule val={species[0].molecule} setter={setSpecies.molecule} />

            <Resolution params={resolution} setParams={setResolution} />

            <ZeroFillling params={zeroFilling} setParams={setZeroFilling} />
        </div>
        <div className="col">
            <Beamsplitter className="switch" params={beamspiltter} setParams={setBeamsplitter} />

            <CellWindows className="switch" params={cellWindow} setParams={setCellWindow} />

            <Detector className="switch" params={detector} setParams={setDetector} />

            <Source className="switch" params={source} setParams={setSource} />
            
            <div className="fetch-zone">
                <Fetch
                    params={{
                    database,
                    max_wavenumber_range,
                    min_wavenumber_range,
                    mode,
                    path_length,
                    pressure,
                    simulate_slit,
                    species,
                    tgas,
                    trot,
                    tvib,
                    }}
                />
            </div>
        </div>
      </div>

    
      {progress && <div id="spinner" />}

      {error && (
        <div id="error">
          <p style={{ fontSize: 30 }}>⚠ Error reaching out to Radis App ⚠</p>
        </div>
      )}

      {!progress && <Plotly />}
      <Outlet />
    </div>
  );
}
