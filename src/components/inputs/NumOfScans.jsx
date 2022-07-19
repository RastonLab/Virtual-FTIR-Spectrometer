import React from "react";

function NumOfScans({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Range">
        Number Of Scans
      </label>
      <input
        id="NumOfScans"
        type="number"
        defaultValue={1}
        min={1}
        max={1000}
        onChange={(e) =>
          setParams({ ...params, min_wavelength_range: e.target.value })
        }
      ></input>
    </div>
  );
}

export default NumOfScans;
