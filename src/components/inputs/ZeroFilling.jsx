import { MenuItem, Select } from "@mui/material";
import React from "react";

function ZeroFilling ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="ZeroFilling">Zero Filling</label>
      <Select
        id="Zero Filling"
        value={params}
        onChange={(e) => setParams(e.target.value)}
      >        
        <MenuItem value="0">0</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
      </Select>
    </div>
  );
}

export default ZeroFilling;