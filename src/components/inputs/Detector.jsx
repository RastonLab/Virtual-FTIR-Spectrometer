import React from "react";
import { CustomSwitch } from "./CustomSwitch";

export default function Detector({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Detector</label>
      <label>MCT</label>
      <CustomSwitch
        color="secondary"
        checked={params === "InSb"}
        onClick={() => {
          params === "MCT" ? setParams("InSb") : setParams("MCT");
        }}
      />
      <label>InSb</label>
    </div>
  );
}
