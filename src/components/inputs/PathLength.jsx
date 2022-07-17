import React from "react";

function PathLength({ val, setter }) {
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

export default PathLength;
