import { Input } from "@mui/material";
import React from "react";

function NumOfScans({ params, setParams }) {
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
      <Input
        value={params}
        onChange={(e) => setParams(e.target.value)}
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

export default NumOfScans;
