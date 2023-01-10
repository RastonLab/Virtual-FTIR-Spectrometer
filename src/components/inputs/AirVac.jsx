import React from "react";
import { CustomSwitch } from "./CustomSwitch";

// this input component sets the source temperature to globar (1700 K) or tungsten (3100 K)
export default function AirVac({ params, setParams }) {

  return (
    <div className="input switch">
      {/* <label className="switch-label">Source</label> */}
      <label>Vacuum</label>
      <CustomSwitch
        color="secondary"
        checked={params}
        // onClick={() => {
        //   params === false ? setParams(true) : setParams(false); // air is true
        // }}
      />
      <label>Air</label>
    </div>
  );
}
