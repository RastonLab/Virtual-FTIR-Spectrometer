import React from "react";

function Source ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Source">Source</label>
      <select
        id="Source"
        defaultValue={params}
        onChange={(e) => setParams(e.target.value )}
      >
        <option value="Tungsten">Tungsten</option>
        <option value="Globar">Globar</option>
      </select>
    </div>
  );
}

export default Source;