import React from "react";
import { CustomSwitch } from "./CustomSwitch";

// this input component sets the source temperature to globar (1700 K) or tungsten (3100 K)
export default function AirVac({ params, setParams, pressure, setPressure }) {

    const [oldPressure, setOldPressure] = useState();

    const changePressure = () => {
        params === false ? setParams(true) : setParams(false); // air is true
        console.log(pressure);
        if (airVac) {
            setOldPressure(pressure);
            setPressure(1.01325 - pressure);
        } else {
            setPressure(oldPressure);
        }
        console.log(pressure);
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
