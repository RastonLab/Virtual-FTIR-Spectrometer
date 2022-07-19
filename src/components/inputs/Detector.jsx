import React from "react";

function Detector ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Detector">Detector</label>
      <select
        id="Detector"
        defaultValue={params}
        onChange={(e) => setParams(e.target.value )}
      >
        <option value="MCT">MCT</option>
        <option value="InSb">InSb</option>
      </select>
    </div>
  );
}

export default Detector;