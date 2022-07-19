import React from "react";

function CellWin ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="CellWindow">CellWindow</label>
      <select
        id="CellWindow"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="KBr">KBr</option>
        <option value="Caf2">CaF2</option>
      </select>
    </div>
  );
}

export default CellWin;