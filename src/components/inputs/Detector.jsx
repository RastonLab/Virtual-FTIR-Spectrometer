import React from "react";

function Detector ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Detector">Detector</label>
      <select
        id="Detector"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="MCT">MCT</option>
        <option value="InSb">InSb</option>
      </select>
    </div>
  );
}

export default Detector;