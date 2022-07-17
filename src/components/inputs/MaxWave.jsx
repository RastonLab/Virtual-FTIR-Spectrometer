import React from "react";

function MaxWave({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="max-wave">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <input
        id="max-wave"
        type="number"
        defaultValue={params.max_wavenumber_range}
        min={500}
        max={10000}
        onChange={(e) =>
          setParams({ ...params, max_wavenumber_range: e.target.value })
        }
      ></input>
    </div>
  );
}

export default MaxWave;
