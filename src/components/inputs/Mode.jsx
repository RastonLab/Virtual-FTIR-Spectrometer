import React from "react";

function Mode({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="mode">Mode</label>
      <select
        id="mode"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      >
        <option value="absorbance">Absorbance</option>
        <option value="transmittance_noslit">Transmittance</option>
      </select>
    </div>
  );
}

export default Mode;
