import MenuBar from "../MenuBar";
import "../../style/ExperimentalSetup.css";

import { useState } from "react";
import Fetch from "../Fetch";
import Form from "../Form";
import Spinner from "../Spinner";
import Error from "../Error";

import Plotly from "../Plotly";

export default function ExperimentalSetup() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * Default Radis App Values
   *   species: [{ molecule: "CO", mole_fraction: 0.1 }]
   *   min_wavenumber_range: 1900
   *   max_wavenumber_range: 2300
   *   tgas: 300
   *   tvib: null
   *   trot: null
   *   pressure: 1.01325
   *   path_length: 1
   *   simulate_slit: false
   *   mode: "absorbance"
   *   database: "hitran"
   */
  const [params, setParams] = useState({
    species: [{ molecule: "CO", mole_fraction: 1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 294.15,
    tvib: null,
    trot: null,
    pressure: 0.0001,
    path_length: 10,
    simulate_slit: false,
    mode: "transmittance_noslit",
    database: "hitran",
  });

  return (
    <div className="App">
      <MenuBar />
      <div className="experiment-setup">
        <Form params={params} setParams={setParams} />
        <Fetch
          params={params}
          setData={setData}
          setLoading={setLoading}
          setError={setError}
        />
        {loading && <Spinner />}
        {error && <Error />}

        {!loading && <Plotly data={data} params={params} />}
      </div>
    </div>
  );
}
