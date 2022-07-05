import React from "react";

function Tgas({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="tgas">Tgas (K)</label>
      <input
        id="tgas"
        type="number"
        defaultValue={params.tgas}
        onChange={(e) => setParams({ ...params, tgas: e.target.value })}
      ></input>
    </div>
  );
}

export default Tgas;
