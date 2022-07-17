import React from "react";

export default function Tgas({ val, setter }) {
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
