import React, { useState } from "react";
import { Input } from "@mui/material";

// this input component sets the pressure from 0 to 10 Bar
export default function Pressure({ val, setter }) {

  // const [displayVal, setDisplayVal] = useState(0.001);

  const handleBlur = () => {
    if (val < 0) {
      // setDisplayVal(0);
      setter(0);
    } else if (val > 10) {
      // setDisplayVal(10);
      setter(10);
    }
  };

  const handleChange = (e) => {
    setter(Number(e.target.value));
    // setDisplayVal(Number(e.target.value));
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
        onChange={handleChange}
        onBlur={handleBlur}
        inputProps={{
          step: 0.0001,
          min: 0,
          max: 10,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
}
