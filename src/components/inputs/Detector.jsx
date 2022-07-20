import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function Detector ({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Detector</label>
      <label>MCT</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          checked={params === "InSb"}
          onClick={() => {params === "MCT" ? setParams("InSb") : setParams("MCT")}}
          />
        }
      />
      <label>InSb</label>
    </div>
  );
}

export default Detector;