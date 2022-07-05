import React from "react";

function Pressure({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="pressure">Pressure (Bar)</label>
      <input
        id="pressure"
        type="number"
        defaultValue={params.pressure}
        onChange={(e) => setParams({ ...params, pressure: e.target.value })}
      ></input>
    </div>
  );
}

export default Pressure;
