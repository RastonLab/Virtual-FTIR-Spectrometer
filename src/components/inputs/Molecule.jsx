import React from "react";

function Molecule({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="molecule">HITRAN 2020 Molecule</label>
      <select
        id="molecule"
        defaultValue={params.molecule}
        onClick={(e) => setParams({ ...params, molecule: e.target.value })}
      >
        <option value="CO">CO</option>
      </select>
    </div>
  );
}

export default Molecule;
