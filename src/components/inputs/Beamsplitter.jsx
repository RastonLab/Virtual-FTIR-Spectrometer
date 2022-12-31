import React from "react";
import { CustomSwitch } from "./CustomSwitch";

// this input component sets the beamsplitter to 'AR_ZnSe' or 'AR_CaF2'
export default function Beamsplitter({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Beamsplitter</label>
      <label>AR_ZnSe</label>
      <CustomSwitch
        checked={params === "AR_CaF2"}
        onClick={() => {
          params === "AR_ZnSe" ? setParams("AR_CaF2") : setParams("AR_ZnSe");
        }}
      />
      <label>
        AR_CaF<sub>2</sub>
      </label>
    </div>
  );
}
