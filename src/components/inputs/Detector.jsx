import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


function Detector ({ params, setParams }) {
  return (
    <div className="input">
      <label>Detector</label>
      <FormControlLabel
        control={
          <Switch 
          color="secondary"
          onClick={() => {params === "MCT" ? setParams("InSb") : setParams("MCT")}}
          />
        }
        label={params} 
      />
    </div>
  );
}

export default Detector;

{/* <label htmlFor="Detector">Detector</label>
<select
  id="Detector"
  defaultValue={params}
  onChange={(e) => setParams(e.target.value )}
>
  <option value="MCT">MCT</option>
  <option value="InSb">InSb</option>
</select> */}