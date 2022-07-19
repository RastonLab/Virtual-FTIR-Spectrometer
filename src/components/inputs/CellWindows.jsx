import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function CellWin ({ params, setParams }) {
  return (
    <div className="input">
      <label>Cell Window</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "ZnSe" ? setParams("CaF2") : setParams("ZnSe")}}
          />
        }
        label={params} 
      />
    </div>
  );
}

export default CellWin;