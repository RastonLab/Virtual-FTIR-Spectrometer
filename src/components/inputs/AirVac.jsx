import React, { useState } from "react";
import { CustomSwitch } from "./CustomSwitch";

export default function AirVac({ params, setParams, pressure, setPressure }) {

  const [storedPressure, setStoredPressure] = useState(pressure);

  const onClick = (e) => {
    params ? setParams(false) : setParams(true)

    if (params) {
      setStoredPressure(pressure);
      setPressure(1.0325);
    } else {
      setPressure(storedPressure);
    }
  }

  return (
    <div className="input switch">
      {/* <label className="switch-label">Source</label> */}
      <label>Vacuum</label>
      <CustomSwitch
        color="secondary"
        checked={params}
        onClick={onClick} // air is true
      />
      <label>Air</label>
    </div>
  );
}
