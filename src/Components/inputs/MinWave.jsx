import React from "react";

function MinWave({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="min-wave">
        Wavenumber MIN range (cm<sup>-1</sup>)
      </label>
      <input
        id="min-wave"
        type="number"
        defaultValue={params.min_wavenumber_range}
        min={500}
        max={10000}
        onChange={(e) =>
          setParams({ ...params, min_wavenumber_range: e.target.value })
        }
      ></input>
    </div>
  );
}

export default MinWave;
