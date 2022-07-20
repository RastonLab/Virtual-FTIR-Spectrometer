import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function Source ({ params, setParams }) {
  return (
    <div className="input switch">
      <label className="switch-label">Source</label>
      <label>Globar</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "Globar" ? setParams("Tungsten") : setParams("Globar")}}
          />
        }
      />
      <label>Tungsten</label>
    </div>
  );
}

export default Source;