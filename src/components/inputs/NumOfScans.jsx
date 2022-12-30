import React from "react";
import { Input } from "@mui/material";

// this input component sets the number of times the spectrum generation function runs
export default function NumOfScans({ params, setParams }) {
  const handleBlur = () => {
    if (params < 0) {
      setParams(0);
    } else if (params > 1024) {
      setParams(1024);
    }
  };

  return (
    <div className="input">
      <label htmlFor="Range">Number Of Scans</label>
      {/* <Slider
        id="NumOfScans"
        type="number"
        defaultValue={params}
        min={1}
        max={1024}
        step={1}
        onChange={(e) =>
          setParams(e.target.value)
        }
      /> */}
      <Input
        value={params}
        onChange={(e) => setParams(Number(e.target.value))}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 1024,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
}
