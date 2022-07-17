import React from "react";

function Mode({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="mode">Mode</label>
      <select
        id="mode"
        defaultValue={params.mode}
        onChange={(e) => setParams({ ...params, mode: e.target.value })}
      >
        <option value="absorbance">Absorbance</option>
        <option value="radiance">Radiance</option>
        <option value="transmittance_noslit">Transmittance</option>
      </select>
    </div>
  );
}

export default Mode;
