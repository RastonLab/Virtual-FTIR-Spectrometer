import React from "react";

function Tgas({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="tgas">Tgas (K)</label>
      <input
        id="tgas"
        type="number"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}

export default Tgas;
