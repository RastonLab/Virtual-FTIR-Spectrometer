import React from "react";
import { CustomSwitch } from "./CustomSwitch";

export default function AirVac({ params, setParams}) {

  return (
    <div className="input switch">
      {/* <label className="switch-label">Source</label> */}
      <label>Vacuum</label>
      <CustomSwitch
        color="secondary"
        checked={params}
        onClick={params ? setParams(false) : setParams(true)} // air is true
      />
      <label>Air</label>
    </div>
  );
}
