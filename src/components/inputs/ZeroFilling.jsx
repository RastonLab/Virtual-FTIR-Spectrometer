import React from "react";

function ZeroFilling ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="ZeroFilling">Zero Filling</label>
      <select
        id="Zero Filling"
        defaultValue={params}
        onChange={(e) => setParams(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}

export default ZeroFilling;