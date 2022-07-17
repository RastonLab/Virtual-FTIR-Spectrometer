import React from "react";

function MaxWave({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="max-wave">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <input
        id="max-wave"
        type="number"
        defaultValue={val}
        min={500}
        max={10000}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}

export default MaxWave;
