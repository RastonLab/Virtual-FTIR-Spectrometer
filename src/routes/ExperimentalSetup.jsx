import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// additional components
import Fetch from "../components/Fetch";
import Plotly from "../components/Plotly";

// inputs
import Database from "../components/inputs/Database";
import Mode from "../components/inputs/Mode";
import MaxWave from "../components/inputs/MaxWave";
import MinWave from "../components/inputs/MinWave";
import Tgas from "../components/inputs/Tgas";
import Pressure from "../components/inputs/Pressure";
import PathLength from "../components/inputs/PathLength";
import Molecule from "../components/inputs/Molecule";
import MoleFraction from "../components/inputs/MoleFraction";

import "../style/ExperimentalSetup.css";

export default function ExperimentalSetup() {
  const storedParams = useSelector((state) => state.params);
  const progress = useSelector((state) => state.isProgressing);
  const error = useSelector((state) => state.isError);

  // values set by user
  const [database, setDatabase] = useState(storedParams.database);
  const [mode, setMode] = useState(storedParams.mode);
  const [min_wavenumber_range, setMin_wavenumber_range] = useState(
    storedParams.min_wavenumber_range
  );
  const [max_wavenumber_range, setMax_wavenumber_range] = useState(
    storedParams.max_wavenumber_range
  );
  const [tgas, setTgas] = useState(storedParams.tgas);
  const [pressure, setPressure] = useState(storedParams.pressure);
  const [path_length, setPath_length] = useState(storedParams.path_length);
  const [species, setSpecies] = useState([
    {
      molecule: storedParams.species[0].molecule,
      mole_fraction: storedParams.species[0].mole_fraction,
    },
  ]);

  // values not set by user, but needed for Radis App
  const [tvib] = useState(storedParams.tvib);
  const [trot] = useState(storedParams.trot);
  const [simulate_slit] = useState(storedParams.simulate_slit);

  return (
    <div id="experimental-setup">
      <div id="form">
        <Database val={database} setter={setDatabase} />

        <Mode val={mode} setter={setMode} />

        <MinWave val={min_wavenumber_range} setter={setMin_wavenumber_range} />

        <MaxWave val={max_wavenumber_range} setter={setMax_wavenumber_range} />

        <Tgas val={tgas} setter={setTgas} />

        <Pressure val={pressure} setter={setPressure} />

        <PathLength val={path_length} setter={setPath_length} />

        <Molecule val={species[0].molecule} setter={setSpecies.molecule} />

        <MoleFraction
          val={species[0].mole_fraction}
          setter={setSpecies.mole_fraction}
        />
      </div>

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
