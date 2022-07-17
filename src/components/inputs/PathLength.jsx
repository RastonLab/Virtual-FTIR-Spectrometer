import React from "react";

function PathLength({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="path-length">Path length (cm)</label>
      <input
        id="path-length"
        type="number"
        defaultValue={params.path_length}
        onChange={(e) => setParams({ ...params, path_length: e.target.value })}
      ></input>
    </div>
  );
}

export default PathLength;
