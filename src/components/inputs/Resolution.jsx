import React from "react";

function Database({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Resolution">Resolution</label>
      <select
        id="database"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="1">1</option>
        <option value="0.5">0.5</option>
        <option value="0.25">0.25</option>
        <option value="0.125">0.125</option>
        <option value="0.0625">0.0625</option>
      </select>
    </div>
  );
}

export default Database;
