import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function Molecule({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="molecule">HITRAN 2020 Molecule</label>
      <Select
        id="molecule"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      >
        <MenuItem value="CO2">CO<sub>2</sub></MenuItem>
      </Select>
    </div>
  );
}
