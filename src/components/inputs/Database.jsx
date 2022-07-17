import React from "react";

export default function Database({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="database">Database</label>
      <select
        id="database"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      >
        <option value="hitran">HITRAN</option>
        <option value="geisa">GEISA</option>
      </select>
    </div>
  );
}
