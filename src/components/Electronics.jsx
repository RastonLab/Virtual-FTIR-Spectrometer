import React from "react";
import { useSelector } from "react-redux";

export default function Electronics() {

  const storedParams = useSelector((state) => state.params2);


  return (
    <div className="electronics">
      <h2>Electronics</h2>

      <div className="electronics-top">
        <div className="grid">
          <label>
            Source
            <input value={storedParams.source} />
          </label>
        </div>

        <div className="grid">
          <label>
            Beamsplitter
            <input value={storedParams.beamsplitter} />
          </label>
        </div>

        <div className="grid">
          <label>
            Gas
            <input value="294.15" />
          </label>
        </div>

        <div className="grid">
          <label>
            Detector
            <input value={storedParams.detector} />
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
            <input value={storedParams.numScan} />
          </label>
        </div>

        <div className="grid">
          <label>
            Range
            <input value={`${storedParams.minWave} - ${storedParams.maxWave} cm`} />
          </label>
        </div>

        <div className="grid">
          <label>
            Resolution
            <input value={`${storedParams.resolution} cm`} />
          </label>
        </div>
      </div>
    </div>
  );
}
