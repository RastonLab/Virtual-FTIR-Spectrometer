import React from "react";
import { CustomSwitch } from "./CustomSwitch";

export default function Source({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Source</label>
      <label>Globar</label>
      <CustomSwitch
        color="secondary"
        checked={params === 3100}
        onClick={() => {
          params === 1700 ? setParams(3100) : setParams(1700);
        }}
      />
      <label>Tungsten</label>
    </div>
  );
}
