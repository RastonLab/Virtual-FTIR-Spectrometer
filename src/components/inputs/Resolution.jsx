import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function Resolution({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Resolution">Resolution</label>
      <Select value={params} onChange={(e) => setParams(Number(e.target.value))}>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="0.5">0.5</MenuItem>
        <MenuItem value="0.25">0.25</MenuItem>
        <MenuItem value="0.125">0.125</MenuItem>
        <MenuItem value="0.0625">0.0625</MenuItem>
      </Select>
    </div>
  );
}
