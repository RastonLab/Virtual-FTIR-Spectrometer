import React from "react";
import { CustomSwitch } from "./CustomSwitch";


function CellWin ({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Cell Window</label>
      <label>ZnSe</label>
        <CustomSwitch 
        color="secondary"
        checked={params === "CaF2"}
        onClick={() => {params === "ZnSe" ? setParams("CaF2") : setParams("ZnSe")}}
        />
      <label>CaF<sub>2</sub></label>
    </div>
  );
}

export default CellWin;