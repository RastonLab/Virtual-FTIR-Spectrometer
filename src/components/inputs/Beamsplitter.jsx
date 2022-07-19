import React from "react";

function Beamsplitter({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Beamsplitter">Beamsplitter</label>
      <select
        id="molecule"
        defaultValue={params.molecule}
        onClick={(e) => setParams({ ...params, molecule: e.target.value })}
      >
        <option value="ZnSe">ZnSe</option>
        <option value="CaF2">CaF2</option>
      </select>
    </div>
  );
}

export default Beamsplitter;
