import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function CellWin ({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Cell Window</label>
      <label>ZnSe</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "ZnSe" ? setParams("CaF2") : setParams("ZnSe")}}
          />
        }
      />
      <label>CaF<sub>2</sub></label>
    </div>
  );
}

export default CellWin;