import React from "react";

export default function MaxWave({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="max-wave">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <input
        id="max-wav e"
        type="number"
        defaultValue={val}
        min={400}
        max={12500}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}
