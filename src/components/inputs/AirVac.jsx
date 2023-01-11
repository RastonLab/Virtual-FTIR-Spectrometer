import React from "react";
import { CustomSwitch } from "./CustomSwitch";
import { useState } from "react";

// this input component sets the source temperature to globar (1700 K) or tungsten (3100 K)
export default function AirVac({ params, setParams, pressure, setPressure }) {

    const [oldPressure, setOldPressure] = useState(pressure);

    const changePressure = () => {
        console.log(params);
        params ? setParams(false) : setParams(true); // air is true

        // To store a copy of user changed pressure values
        if (oldPressure !== pressure && pressure !== (1.01325 - oldPressure)) {
            if (!params) {
                console.log("here");
                setOldPressure(1.0325 - oldPressure);
            } else {
                setOldPressure(pressure);
            }
        }

        console.log(params);
        console.log(pressure);
        if (!params) { // Not sure why there has to be a not here, but otherwise it gets vacuum and air backwards
            setOldPressure(pressure);
            setPressure(1.01325 - pressure);
        } else {
            setPressure(oldPressure);
        }
        console.log(pressure);
        console.log(oldPressure);
    }

  return (
    <div className="input switch">
      {/* <label className="switch-label">Source</label> */}
      <label>Vacuum</label>
      <CustomSwitch
        color="secondary"
        checked={params}
        onClick={changePressure}
      />
      <label>Air</label>
    </div>
  );
}
