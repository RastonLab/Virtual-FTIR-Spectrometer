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
        defaultValue={params}
        min={1}
        max={1000}
        onChange={(e) =>
          setParams(e.target.value)
        }
      ></input>
    </div>
  );
}

export default NumOfScans;
