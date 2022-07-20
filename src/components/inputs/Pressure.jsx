import { Input, Slider } from "@mui/material";
import React from "react";

export default function Pressure({ val, setter }) {
  
  const handleBlur = () => {
    if (val < 0) {
      setter(0)
    } else if (val > 10) {
      setter(10)
    }
  }
  
  return (
    <div className="input">
      <label htmlFor="pressure">Pressure (Bar)</label>
      {/* <Slider
        id="pressure"
        type="number"
        defaultValue={val}
        step={0.0001}
        min={0}
        max={10}
        onChange={(e) => setter(e.target.value)}
      /> */}
      <Input
        value={val}
        size="small"
        onChange={(e) => setter(e.target.value)}
        inputProps={{
          step: 0.0001,
          min: 0,
          max: 10,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
    </div>
  );
}
