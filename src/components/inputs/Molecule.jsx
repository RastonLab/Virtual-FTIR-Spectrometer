import React from "react";

function Molecule({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="molecule">HITRAN 2020 Molecule</label>
      <select
        id="molecule"
        defaultValue={val}
        onChange={(e) => setter(e.target.value)}
      >
        <option value="CO">CO</option>
      </select>
    </div>
  );
}

export default Molecule;
