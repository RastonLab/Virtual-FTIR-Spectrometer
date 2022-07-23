import React from "react";

export default function MinWave({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="min-wave">
        Wavenumber MIN range (cm<sup>-1</sup>)
      </label>
      <input
        id="min-wave"
        type="number"
        defaultValue={val}
        min={400}
        max={12500}
        onChange={(e) => setter(Number(e.target.value))}
      ></input>
    </div>
  );
}
