import React from "react";

function MinWave({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="min-wave">
        Wavenumber MIN range (cm<sup>-1</sup>)
      </label>
      <input
        id="min-wave"
        type="number"
        defaultValue={val}
        min={500}
        max={10000}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}

export default MinWave;
