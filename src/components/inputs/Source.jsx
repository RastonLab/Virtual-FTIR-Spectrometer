import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function Source ({ params, setParams }) {
  return (
    <div className="input">
      <label>Source</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "Globar" ? setParams("Tungsten") : setParams("Globar")}}
          />
        }
        label={params} 
      />
    </div>
  );
}

export default Source;