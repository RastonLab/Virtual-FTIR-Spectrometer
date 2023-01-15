import React from "react";
import { Input } from "@mui/material";

// this input component sets the number of times the spectrum generation function runs
export default function NumOfScans({ params, setParams }) {
  const handleBlur = () => {
    if (params < 1) {
      setParams(1);
    } else if (params > 30000) {
      setParams(30000);
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
          min: 1,
          max: 30000,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </div>
  );
}
