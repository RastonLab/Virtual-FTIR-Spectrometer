import React from "react";

export default function PathLength({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="path-length">Path length (cm)</label>
      <input
        id="path-length"
        type="number"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}
