import React from "react";

function Database({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="database">Database</label>
      <select
        id="database"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="hitran">HITRAN</option>
        <option value="geisa">GEISA</option>
      </select>
    </div>
  );
}

export default Database;
