import { MenuItem, Select, InputLabel} from "@mui/material";
import React from "react";

function Resolution({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Resolution">Resolution</label>
      <Select
      value={params}
      onChange={(e) => setParams(e.target.value)}
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="0.5">0.5</MenuItem>
        <MenuItem value="0.25">0.25</MenuItem>
        <MenuItem value="0.125">0.125</MenuItem>
        <MenuItem value="0.0625">0.0625</MenuItem>
      </Select>
    </div>
  );
}

export default Resolution;

{/* <select
id="database"
defaultValue={params}
onChange={(e) => setParams(e.target.value )}
>
<option value="1">1</option>
<option value="0.5">0.5</option>
<option value="0.25">0.25</option>
<option value="0.125">0.125</option>
<option value="0.0625">0.0625</option>
</select> */}