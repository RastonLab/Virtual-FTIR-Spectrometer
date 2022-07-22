import { CustomSwitch } from "./CustomSwitch";
import React from "react";

function Beamsplitter({ params, setParams }) {
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
      <label>AR_CaF2</label>
    </div>
  );
}

export default Beamsplitter;
