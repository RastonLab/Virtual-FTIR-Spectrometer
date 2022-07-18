import React from "react";

export default function MoleFraction({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="mole-fraction">Mole Fraction</label>
      <input
        id="mole-fraction"
        type="number"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      ></input>
    </div>
  );
}
