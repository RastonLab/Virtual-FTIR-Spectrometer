import React from "react";
import { CustomSwitch } from "./CustomSwitch";

export default function Source({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Source</label>
      <label>Globar</label>
      <CustomSwitch
        color="secondary"
        checked={params === "Tungsten"}
        onClick={() => {
          params === "Globar" ? setParams("Tungsten") : setParams("Globar");
        }}
      />
      <label>Tungsten</label>
    </div>
  );
}
