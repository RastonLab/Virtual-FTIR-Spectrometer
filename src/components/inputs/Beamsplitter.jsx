import React from "react";

function Beamsplitter({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Beamsplitter">Beamsplitter</label>
      <select
        id="molecule"
        defaultValue={params}
        onClick={(e) => setParams(e.target.value )}
      >
        <option value="ZnSe">AR_ZnSe</option>
        <option value="CaF2">AR_CaF2</option>
      </select>
    </div>
  );
}

export default Beamsplitter;
