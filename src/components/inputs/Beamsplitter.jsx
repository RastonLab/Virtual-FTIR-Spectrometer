import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

function Beamsplitter({ params, setParams }) {
  return (
    <div className="input">
      <label>Beamsplitter</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "AR_ZnSe" ? setParams("AR_CaF2") : setParams("AR_ZnSe")}}
          />
        }
        label={params} 
      />
    </div>
  );
}

export default Beamsplitter;
