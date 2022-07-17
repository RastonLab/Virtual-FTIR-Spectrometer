import React from "react";

function Pressure({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="pressure">Pressure (Bar)</label>
      <input
        id="pressure"
        type="number"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}

export default Pressure;
