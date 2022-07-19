import React from "react";

export default function Electronics() {
  return (
    <div className="electronics">
      <h2>Electronics</h2>

      <div className="electronics-top">
        <div className="grid">
          <label>
            Source
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Beamsplitter
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Gas
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Detector
            <input></input>
          </label>
        </div>
      </div>

      <h3>Readouts</h3>

      <div className="electronics-bottom">
        <div className="grid">
          <label>
            OPD
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Number of Scans
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Range
            <input></input>
          </label>
        </div>

        <div className="grid">
          <label>
            Resolution
            <input></input>
          </label>
        </div>
      </div>
    </div>
  );
}
