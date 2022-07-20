import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

function Beamsplitter({ params, setParams }) {
  return (
    <div className="input switch">
      <label>Beamsplitter</label>
      <label className="switch-labels">AR_ZnSe</label>
      <FormControlLabel className="switch-labels"
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "AR_ZnSe" ? setParams("AR_CaF2") : setParams("AR_ZnSe")}}
          />
        }
      />
      <label className="switch-labels">AR_CaF2</label>
    </div>
  );
}

export default Beamsplitter;
